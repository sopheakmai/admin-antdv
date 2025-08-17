<script setup lang="ts">
import RepositoryForm from "./repository-form.vue";
import TaskForm from "./task-form.vue";

defineOptions({
  name: "AdvancedForm",
});

const repositoryFormRef = ref();
const taskFormRef = ref();
async function handleSubmit() {
  try {
    await taskFormRef.value?.handleSubmit();
    await repositoryFormRef.value?.handleSubmit();
  }
  catch (errorInfo) {
    console.log("Failed:", errorInfo);
  }
}

const state = reactive({
  columns: [
    {
      title: "Member Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      scopedSlots: { customRender: "name" },
    },
    {
      title: "Employee ID",
      dataIndex: "workId",
      key: "workId",
      width: "20%",
      scopedSlots: { customRender: "workId" },
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      width: "40%",
      scopedSlots: { customRender: "department" },
    },
    {
      title: "Actions",
      key: "action",
      scopedSlots: { customRender: "operation" },
    },
  ],
  data: [
    {
      key: "1",
      name: "Employee 1",
      workId: "001",
      editable: false,
      department: "Administration",
    },
    {
      key: "2",
      name: "Employee 2",
      workId: "002",
      editable: false,
      department: "IT Department",
    },
    {
      key: "3",
      name: "Employee 3",
      workId: "003",
      editable: false,
      department: "Finance Department",
    },
  ],
});
function handleAdd() {
  const key = state.data.length === 0 ? "1" : (Number.parseInt(state.data[state.data.length - 1].key) + 1).toString();
  const newData = {
    key,
    name: `Employee ${key}`,
    // If less than 10, pad with 00 (e.g., 001); if less than 100 but greater than 10, pad with 0 (e.g., 010)
    workId: Number.parseInt(key) < 10 ? `00${key}` : Number.parseInt(key) < 100 ? `0${key}` : key,
    editable: true,
    department: ["Administration", "IT Department", "Finance Department"][Math.floor(Math.random() * 3)],
  };
  state.data.push(newData);
}
function remove(key: string) {
  state.data = state.data.filter(item => item.key !== key);
}
</script>

<template>
  <page-container>
    <template #content>
      Advanced forms are commonly used in scenarios where large amounts of data need to be input and submitted at once.
    </template>
    <a-space size="large" direction="vertical" :style="{ width: '100%' }">
      <a-card class="card" title="Repository Management" :bordered="false">
        <RepositoryForm ref="repositoryFormRef" :show-submit="false" />
      </a-card>
      <a-card class="card" title="Task Management" :bordered="false">
        <TaskForm ref="taskFormRef" :show-submit="false" />
      </a-card>
      <a-card>
        <a-table
          :columns="state.columns"
          :data-source="state.data"
          :pagination="false"
        >
          <template #bodyCell="scope">
            <template v-if="scope?.column?.key === 'action'">
              <a-popconfirm
                v-if="state.data.length"
                title="Sure to delete?"
                @confirm="remove(scope?.record?.key)"
              >
                <a>Delete</a>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
        <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" @click="handleAdd">
          Add Member
        </a-button>
      </a-card>
    </a-space>
    <FooterToolBar>
      <template #left>
        Test
      </template>
      <template #right>
        <a-button type="primary" @click="handleSubmit">
          Submit
        </a-button>
      </template>
    </FooterToolBar>
  </page-container>
</template>
