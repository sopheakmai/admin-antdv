import type { PaginationProps } from "ant-design-vue";
import type { TableRowSelection } from "ant-design-vue/es/table/interface";

function assign<T extends Record<string, any>>(...sources: Partial<T>[]): T {
  return Object.assign({}, ...sources) as T;
}

/**
 * Table pagination extension type
 */
export type TablePaginationProps = {
  /**
   * Sort field
   */
  column: string;
  /**
   * Sort order
   */
  order: string;
} & PaginationProps;

/**
 * Table selection box extension type
 */
export type TableRowSelectionsProps = {
  /**
   * Select row
   */
  selectedRows: any[];
  /**
   * Select rowkey
   */
  selectedRowKeys: any[];
} & TableRowSelection;

type TableQueryResult<D = any> = {
  records: D[];
  total: number;
  [key: string]: any;
};

/**
 * Table query configuration
 */
export type TableQueryOptions<D = any> = {
  /**
   *Query interface
   */
  queryApi: (params?: any) => Promise<any>;
  /**
   * Is loading
   */
  loading: boolean;
  /**
   * Data source
   */
  dataSource: D[];
  /**
   * Query parameters
   */
  queryParams: Record<string, any>;
  /**
   * Selection configuration
   */
  rowSelections: TableRowSelectionsProps;
  /**
   * Query when mounted
   */
  queryOnMounted: boolean;
  /**
   *  Pagination configuration
   */
  pagination: TablePaginationProps;
  /**
   * Is expanded
   */
  expand: boolean;
  /**
   * Expansion change
   */
  expandChange: () => void;
  /**
   * Callback before query
   */
  beforeQuery: () => void | Promise<void>;
  /**
   * Callback after query
   */
  afterQuery: <R extends TableQueryResult<D> = any>(data: R) => R | Promise<R>;
};

/**
 * Table query method
 */
export function useTableQuery(_options: Partial<TableQueryOptions>) {
  const state = reactive<TableQueryOptions>(assign({
    queryApi: () => Promise.resolve(),
    loading: false,
    queryParams: {},
    dataSource: [],
    rowSelections: {
      selectedRowKeys: [],
      selectedRows: [],
      onChange(selectedRowKeys: any[], selectedRows: any[]) {
        state.rowSelections.selectedRowKeys = selectedRowKeys;
        state.rowSelections.selectedRows = selectedRows;
      },
    },
    queryOnMounted: true,
    pagination:
      assign({
        pageSize: 10,
        pageSizeOptions: ["10", "20", "30", "40"],
        current: 1,
        total: 0,
        order: "desc",
        column: "createTime",
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: total => `Total data position：${total}`,
        onChange(current, pageSize) {
          state.pagination!.pageSize = pageSize;
          state.pagination!.current = current;
          query();
        },
      } as TablePaginationProps, _options.pagination || {}),
    expand: false,
    expandChange() {
      state.expand = !state.expand;
    },
    beforeQuery() {
    },
    afterQuery<R extends TableQueryResult<any> = any>(data: R): R {
      return data;
    },
  }, _options));

  // Query method
  async function query() {
    if (state.loading)
      return;
    state.loading = true;

    try {
      await state.beforeQuery();
      const { data } = await state.queryApi({
        current: state.pagination.current,
        pageSize: state.pagination.pageSize,
        column: state.pagination.column,
        order: state.pagination.order,
        ...state.queryParams,
      });
      if (data) {
        const _data = await state.afterQuery(data);
        state.dataSource = _data.records ?? [];
        state.pagination.total = _data.total ?? 0;
      }
    }
    catch (e) {
      throw new Error(`Query Failed: ${e}`);
    }
    finally {
      state.loading = false;
    }
  }

  // Reset method
  function resetQuery() {
    state.pagination.current = 1;
    state.queryParams = {};
    query();
  }

  // Initialize query
  function initQuery() {
    state.pagination.current = 1;
    query();
  }

  onMounted(() => {
    if (!state.queryOnMounted)
      return;
    query();
  });

  return {
    query,
    resetQuery,
    initQuery,
    state,
  };
}
