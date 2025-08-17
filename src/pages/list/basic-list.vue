<script setup lang="ts">
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { Modal } from "ant-design-vue";
import dayjs from "dayjs";
import { createVNode } from "vue";

import VirtualList from "@/components/virtual-list/index.vue";
import { getListApi } from "~@/api/list/basic-list";

// import VirtualListItem from '@/components/virtual-list-item/index.vue'

const workData = ref([
  {
    title: "My To-Do",
    content: "8 tasks",
  },
  {
    title: "Average Task Processing Time This Week",
    content: "32 minutes",
  },
  {
    title: "Tasks Completed This Week",
    content: "24 tasks",
  },
]);

const radioValue = ref("a");

const searchValue = ref();

function onSearch(value: string) {
  console.log("use value", value);
}

const dataSource = ref<any[]>([]);

const pagination = ref({
  pageSize: 5,
  pageSizeOptions: ["10", "20", "30", "40", "50"],
  showQuickJumper: true,
  total: 0,
});

/*
  Get data
*/
async function getList() {
  const data = await getListApi();
  dataSource.value = data.data ?? [];
  pagination.value.total = data.data?.length ?? 0;
  console.log(dataSource.value);
}

/*
  Handle delete dialog
*/
function showConfirm(index: number) {
  Modal.confirm({
    title: "Delete Task",
    icon: createVNode(ExclamationCircleOutlined),
    content: createVNode("div", { }, "Are you sure you want to delete this task?"),
    cancelText: "Cancel",
    okText: "Confirm",
    onOk() {
      dataSource.value.splice(index, 1);
    },
    class: "test",
  });
}

/*
  Handle edit modal
*/
type FormState = {
  title: string;
  start: any;
  owner: string;
  description: string;
  index?: number;
};

const formState = reactive<FormState>({
  title: "",
  start: "",
  owner: "Qingfeng Buwen Yanyu",
  description: "",
  index: 0,
});

const openModalValue = ref(false);

const isAdd = ref<boolean>(false);

// Open dialog
function openModal(item: any, charge?: boolean) {
  if (charge) {
    isAdd.value = true;
    openModalValue.value = true;
  }
  else {
    isAdd.value = false;
    openModalValue.value = true;
    formState.title = item.title;
    formState.description = item.content;
    formState.start = dayjs(item.start);
    formState.index = dataSource.value.indexOf(item);
  }
}

// Operations after successful action
function countDown() {
  let secondsToGo = 2;
  const modal = Modal.success({
    title: "Operation Successful",
    content: `This window will close automatically in ${secondsToGo} seconds`,
  });
  const interval = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This window will close automatically in ${secondsToGo} seconds`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    modal.destroy();
  }, secondsToGo * 1000);
}

// Confirm - handle edit or add
function handleOk() {
  for (const item in formState) {
    if (item !== "index") {
      if ((!(formState as any)[item]))
        return;
    }
  }

  const currentIndex = formState.index as number;

  if (isAdd.value) {
    const newItem = {
      title: formState.title,
      content: formState.description,
      start: formState.start.format("YYYY-MM-DD HH:mm"),
    };
    dataSource.value.splice(0, 0, newItem);
  }
  else {
    for (const item in formState) {
      if (item === "start")
        dataSource.value[currentIndex][item] = formState.start.format("YYYY-MM-DD HH:mm");
      else
        dataSource.value[currentIndex][item] = (formState as any)[item];
    }
  }

  openModalValue.value = false;

  cancelModal();

  countDown();
}

// Operations after closing dialog
function cancelModal() {
  console.log("cancel");
  formState.description = "";
  formState.owner = "Quick question";
  formState.start = "";
  formState.title = "";
}

onMounted(() => {
  getList();
});
</script>

<template>
  <page-container>
    <!-- Header -->
    <a-card>
      <a-row :gutter="16">
        <a-col v-for="(item, index) in workData" :key="index" :xs="24" :sm="8">
          <div class="flex flex-col items-center justify-center">
            <div class="text-zinc-400">
              {{ item.title }}
            </div>
            <div style="font-size: 24px;">
              {{ item.content }}
            </div>
          </div>
        </a-col>
      </a-row>
    </a-card>

    <!-- List -->
    <a-card class="mt-5">
      <template #title>
        <a-card :bordered="false">
          <a-row style="font-weight: normal;">
            <a-col :span="14">
              <span>Basic List</span>
            </a-col>
            <a-col :span="10" class="flex">
              <div>
                <a-radio-group v-model:value="radioValue">
                  <a-radio-button value="a">
                    All
                  </a-radio-button>
                  <a-radio-button value="b">
                    In Progress
                  </a-radio-button>
                  <a-radio-button value="c">
                    Waiting
                  </a-radio-button>
                </a-radio-group>
              </div>
              <div class="ml-5">
                <a-input-search
                  v-model:value="searchValue"
                  placeholder="Please enter"
                  style="width: 270px"
                  @search="onSearch"
                />
              </div>
            </a-col>
          </a-row>
        </a-card>
      </template>
      <!-- List body -->
      <VirtualList v-if="dataSource.length !== 0" :data-source="dataSource">
        <template #renderItem="{ item }">
          <a-list-item>
            <a-list-item-meta
              :description="item.content"
            >
              <template #title>
                <a href="https://www.antdv.com/">{{ item.title }}</a>
              </template>
              <template #avatar>
                <a-avatar :src="item.link" />
              </template>
            </a-list-item-meta>
            <template #actions>
              <div class="flex text-gray-400">
                <div class="flex flex-col items-center">
                  <div>Owner</div>
                  <div>Qingfeng Buwen Yanyu</div>
                </div>
                <div class="px-10">
                  <div>Start Time</div>
                  <div>{{ item.start }}</div>
                </div>
                <div class="w-45 flex items-center">
                  <a-progress :percent="item.percent" :status="item.status" />
                </div>
              </div>
            </template>
            <template #extra>
              <div class="a-extra">
                <a key="list-loadmore-edit" class="m-4" @click="openModal(item)">
                  Edit
                </a>
                <a-dropdown>
                  <a class="ant-dropdown-link" @click.prevent>
                    More
                  </a>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item>
                        <a @click="openModal">Edit</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a @click="showConfirm(item.index)">Delete</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
            </template>
          </a-list-item>
        </template>
      </VirtualList>
    </a-card>

    <!-- Bottom add button -->
    <a-button type="dashed" @click="openModal(null, true)">
      + Add
    </a-button>

    <!-- Modal -->
    <a-modal v-model:open="openModalValue" title="Task Edit" @ok="handleOk" @cancel="cancelModal">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
      >
        <a-form-item
          label="Task Name"
          name="title"
          :rules="[{ required: true, message: 'Please enter task name' }]"
        >
          <a-input v-model:value="formState.title" />
        </a-form-item>
        <a-form-item
          label="Start Time"
          name="start"
          :rules="[{ required: true, message: 'Please select start time' }]"
        >
          <a-date-picker v-model:value="formState.start" class="w-1/1" show-time />
        </a-form-item>
        <a-form-item
          label="Task Owner"
          name="owner"
          :rules="[{ required: true, message: 'Please enter task owner' }]"
        >
          <a-select v-model:value="formState.owner" placeholder="please select your zone">
            <a-select-option value="owner">
              Qingfeng Buwen Yanyu
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="Product Description"
          name="description"
          :rules="[{ required: true, message: 'Please enter product description' }]"
        >
          <a-textarea v-model:value="formState.description" placeholder="Basic usage" :rows="3" />
        </a-form-item>
      </a-form>
    </a-modal>
  </page-container>
</template>

<style>
.a-extra {
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
