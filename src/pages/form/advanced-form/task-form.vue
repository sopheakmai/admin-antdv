<script setup lang="ts">
import type { FormInstance } from "ant-design-vue";

defineProps({
  showSubmit: {
    type: Boolean,
    default: false,
  },
});
const formRef = ref<FormInstance>();
async function handleSubmit() {
  try {
    return await formRef.value?.validateFields();
  }
  catch (errorInfo) {
    console.log("Failed:", errorInfo);
  }
}
const formState = reactive<Record<string, any>>({
  name2: null,
  url2: null,
  owner2: null,
  approver2: null,
  dateRange2: null,
  type2: null,
});
defineExpose({
  handleSubmit,
});
</script>

<template>
  <a-form ref="formRef" :model="formState" @submit="handleSubmit">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          name="name2"
          :rules="[{ required: true, message: 'Please enter task name' }]"
          label="Task name"
        >
          <a-input v-model:value="formState.name2" placeholder="Please enter task name" />
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 7, offset: 1 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
        <a-form-item
          name="url2"
          :rules="[{ required: true, message: 'Please enter task description' }]"
          label="Task description"
        >
          <a-input v-model:value="formState.url2" placeholder="Please enter task description" />
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 9, offset: 1 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
        <a-form-item
          name="owner2"
          :rules="[{ required: true, message: 'Please select executor' }]"
          label="Executor"
        >
          <a-select
            v-model:value="formState.owner2"
            placeholder="Please select executor"
          >
            <a-select-option value="KirkLin">
              Kirk Lin
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          name="approver2"
          :rules="[{ required: true, message: 'Please select person in charge' }]"
          label="Person in charge"
        >
          <a-select
            v-model:value="formState.approver2"
            placeholder="Please select person in charge"
          >
            <a-select-option value="Aibayanyu">
              Aibayanyu
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 7, offset: 1 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
        <a-form-item
          name="dateRange2"
          :rules="[{ required: true, message: 'Please select reminder time' }]"
          label="Reminder time"
        >
          <a-time-picker
            v-model:value="formState.dateRange2"
            style="width: 100%"
          />
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 9, offset: 1 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
        <a-form-item
          name="type2"
          :rules="[{ required: true, message: 'Please select task type' }]"
          label="Task type"
        >
          <a-select
            v-model:value="formState.type2"
            placeholder="Please select task type"
          >
            <a-select-option value="Scheduled execution">
              Scheduled execution
            </a-select-option>
            <a-select-option value="Periodic execution">
              Periodic execution
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>
