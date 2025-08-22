type CrudTableModel = {
  id?: number;
  /**
   * Name
   */
  name: string;
  /**
   * Value
   */
  value: string;
  /**
   * Description
   */
  remark?: string;
};

type CrudTableParams = Partial<Omit<CrudTableModel, "id">>;

export async function getListApi(params?: CrudTableParams) {
  return usePost<CrudTableModel[]>("/list/crud-table", params);
}

export async function deleteApi(id: string | number) {
  return useDelete(`/list/${id}`);
}

export type {
  CrudTableParams,
  CrudTableModel,
};
