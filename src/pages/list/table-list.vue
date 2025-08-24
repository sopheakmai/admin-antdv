<script setup lang="ts">
import { Modal } from "ant-design-vue";
import { ColumnHeightOutlined, DownOutlined, PlusOutlined, ReloadOutlined, SettingOutlined, UpOutlined } from "@ant-design/icons-vue";
import type { MenuProps, PaginationProps, TableProps } from "ant-design-vue";
import type { ConsultTableModel, ConsultTableParams } from "~@/api/list/table-list";
import { deleteApi, getListApi } from "~@/api/list/table-list";

const statusMap = {
  0: "Closed",
  1: "Running",
  2: "Online",
  3: "Error",
};
const message = useMessage();
const columns = shallowRef([
  {
    title: "#",
    dataIndex: "id",
  },
  // {
  //   title: "Rule name",
  //   dataIndex: "name",
  // },
  // {
  //   title: "Description",
  //   dataIndex: "desc",
  // },
  {
    title: "Service call count",
    dataIndex: "callNo",
  },
  {
    title: "Status",
    dataIndex: "status",
    width: 100,
  },
  {
    title: "Last scheduled time",
    dataIndex: "updatedAt",
    width: 200,
  },
  {
    title: "Action",
    dataIndex: "action",
    width: 200,
  },
]);
const loading = shallowRef(false);
const pagination = reactive<PaginationProps>({
  pageSize: 10,
  pageSizeOptions: ["10", "20", "30", "40"],
  current: 1,
  total: 100,
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: total => `Total data position：${total}`,
  onChange(current, pageSize) {
    pagination.pageSize = pageSize;
    pagination.current = current;
    init();
  },
});
const dataSource = shallowRef<ConsultTableModel[]>([]);
const formModel = reactive<ConsultTableParams>({
  name: undefined,
  callNo: undefined,
  desc: undefined,
  status: undefined,
  updatedAt: undefined,
});

const tableSize = ref<string[]>(["large"]);
const sizeItems = ref<MenuProps["items"]>([
  {
    key: "large",
    label: "Default",
    title: "Default",
  },
  {
    key: "middle",
    label: "Medium",
    title: "Medium",
  },
  {
    key: "small",
    label: "Compact",
    title: "Compact",
  },
]);
const open = ref(false);
const options = computed(() => {
  return columns.value.map((item) => {
    if (item.dataIndex === "action") {
      return {
        label: item.title,
        value: item.dataIndex,
        disabled: true,
      };
    }
    return {
      label: item.title,
      value: item.dataIndex,
    };
  });
});
const dropdownVisible = ref(false);
const getCheckList = computed(() => columns.value.map(item => item.dataIndex));
const state = reactive({
  indeterminate: false,
  checkAll: true,
  checkList: getCheckList.value,
});

async function init() {
  if (loading.value)
    return;
  loading.value = true;
  try {
    const { data } = await getListApi({
      ...formModel,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
    dataSource.value = data ?? [];
  }
  catch (e) {
    console.log(e);
  }
  finally {
    loading.value = false;
  }
}

async function onSearch() {
  pagination.current = 1;
  await init();
}

async function onReset() {
  // Clear all parameters and request again
  formModel.name = undefined;
  formModel.desc = undefined;
  await init();
}

/**
 * Delete function
 *  @param record
 *
 */
async function handleDelete(record: ConsultTableModel) {
  const close = message.loading("Deleting......");
  try {
    const res = await deleteApi(record!.id);
    if (res.code === 200)
      await init();
    message.success("Successfully deleted");
  }
  catch (e) {
    console.log(e);
  }
  finally {
    close();
  }
}

/**
 * Add event
 *
 */
function handleOk() {
  open.value = false;
  Modal.destroyAll();
  onSearch();
}

/**
 * Density switch
 *
 */
const handleSizeChange: MenuProps["onClick"] = (e) => {
  tableSize.value[0] = e.key as string;
};

/**
 * Filter
 *
 */
function filterAction(value: string[]) {
  return columns.value.filter((item) => {
    if (value.includes(item.dataIndex)) {
      // istruewhen，The value of the loop will be exposed
      return true;
    }
    return false;
  });
}

// Backupcolumns
const filterColumns = ref(filterAction(getCheckList.value));

/**
 * Select all/Deselect event
 *
 */

function handleCheckAllChange(e: any) {
  Object.assign(state, {
    checkList: e.target.checked ? getCheckList.value : [],
    indeterminate: true,
  });
  filterColumns.value = e.target.checked ? filterAction(getCheckList.value) : filterColumns.value.filter(item => item.dataIndex === "action");
}

watch(
  () => state.checkList,
  (val) => {
    state.indeterminate = !!val.length && val.length < getCheckList.value.length;
    state.checkAll = val.length === getCheckList.value.length;
  },
);

/**
 * Reset event
 *
 */
function handleResetChange() {
  state.checkList = getCheckList.value;
  filterColumns.value = filterAction(getCheckList.value);
}

/**
 * checkboxClick event
 *
 */
function handleCheckChange(value: any) {
  const filterValue = filterAction(value);
  filterColumns.value = filterValue;
}

onMounted(() => {
  init();
});

const expand = ref(false);
</script>

<template>
  <page-container>
    <a-card mb-4>
      <a-form :label-col="{ span: 7 }" :model="formModel">
        <a-row :gutter="[15, 0]">
          <a-col :span="8">
            <a-form-item name="name" label="Rule name">
              <a-input v-model:value="formModel.name" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item name="desc" label="Description">
              <a-input v-model:value="formModel.desc" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item name="updatedAt" label="Last call time">
              <a-date-picker v-model:value="formModel.updatedAt" style="width: 100%" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row v-if="expand" :gutter="[15, 0]">
          <a-col :span="8">
            <a-form-item name="status" label="Status">
              <a-select
                v-model:value="formModel.status"
              >
                <a-select-option value="0">
                  Close
                </a-select-option>
                <a-select-option value="1">
                  Running
                </a-select-option>
                <a-select-option value="2">
                  Online
                </a-select-option>
                <a-select-option value="3">
                  Error
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item name="callNo" label="Service call count">
              <a-input-number v-model:value="formModel.callNo" style="width: 100%" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :span="24" style="text-align: right">
          <a-col :span="24">
            <a-space w-full flex justify-end>
              <a-button :loading="loading" type="primary" @click="onSearch">
                Query
              </a-button>
              <a-button :loading="loading" @click="onReset">
                Reset
              </a-button>
              <a-button type="link" @click="expand = !expand">
                {{ expand ? 'Collapse' : 'Expand' }}
                <UpOutlined v-if="expand" />
                <DownOutlined v-else />
              </a-button>
            </a-space>
          </a-col>
        </a-row>
      </a-form>
    </a-card>

    <a-card title="Query table">
      <template #extra>
        <a-space size="middle">
          <a-button type="primary" @click="() => open = true">
            <template #icon>
              <PlusOutlined />
            </template>
            Add
          </a-button>
          <a-tooltip title="Refresh">
            <ReloadOutlined @click="onSearch" />
          </a-tooltip>
          <a-tooltip title="Density">
            <a-dropdown trigger="click">
              <ColumnHeightOutlined />
              <template #overlay>
                <a-menu v-model:selected-keys="tableSize" :items="sizeItems" @click="handleSizeChange" />
              </template>
            </a-dropdown>
          </a-tooltip>
          <a-tooltip title="Column settings">
            <a-dropdown v-model:open="dropdownVisible" trigger="click">
              <SettingOutlined />
              <template #overlay>
                <a-card>
                  <template #title>
                    <a-checkbox v-model:checked="state.checkAll" :indeterminate="state.indeterminate" @change="handleCheckAllChange">
                      Column selection
                    </a-checkbox>
                  </template>
                  <template #extra>
                    <a-button type="link" @click="handleResetChange">
                      Reset
                    </a-button>
                  </template>
                  <a-checkbox-group v-model:value="state.checkList" :options="options" style="display: flex; flex-direction: column;" @change="handleCheckChange" />
                </a-card>
              </template>
            </a-dropdown>
          </a-tooltip>
        </a-space>
      </template>
      <a-table :loading="loading" :columns="filterColumns" :data-source="dataSource" :pagination="pagination" :size="tableSize[0] as TableProps['size']">
        <template #bodyCell="scope">
          <template v-if="scope?.column?.dataIndex === 'action'">
            <div flex gap-2>
              <a c-error @click="handleDelete(scope?.record as ConsultTableModel)">
                Delete
              </a>
            </div>
          </template>
          <template v-if="scope?.column?.dataIndex === 'status'">
            <div gap-2>
              {{ statusMap[scope?.record?.status as keyof typeof statusMap] as string }}
            </div>
          </template>
        </template>
      </a-table>
    </a-card>

    <a-modal v-model:open="open" title="New rule" width="400px" @ok="handleOk">
      <a-space direction="vertical" size="large" class="w-full">
        <a-input placeholder="Please enter" />
        <a-textarea placeholder="Please enter" />
      </a-space>
    </a-modal>
  </page-container>
</template>
