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
    const values = await formRef.value?.validateFields();
    return values;
  }
  catch (errorInfo) {
    console.log("Failed:", errorInfo);
  }
}
const formState = reactive<Record<string, any>>({
  name: null,
  url: null,
  owner: null,
  approver: null,
  dateRange: null,
  type: null,
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
          name="name"
          :rules="[{ required: true, message: 'Please enter warehouse name' }]"
          label="Warehouse name"
        >
          <a-input v-model:value="formState.name" placeholder="Please enter warehouse name" />
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 7, offset: 1 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
        <a-form-item
          name="url"
          :rules="[{ required: true, message: 'Please enter warehouse address' }]"
          label="Warehouse address"
        >
          <a-input v-model:value="formState.url" placeholder="Please enter warehouse address" />
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 9, offset: 1 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
        <a-form-item
          name="owner"
          :rules="[{ required: true, message: 'Please select administrator' }]"
          label="Warehouse administrator"
        >
          <a-select
            v-model:value="formState.owner"
            placeholder="Please select administrator"
          >
            <a-select-option value="Student Lin">
              Student Lin
            </a-select-option>
            <a-select-option value="Student Zhang">
              Student Zhang
            </a-select-option>
            <a-select-option value="Student Li">
              Student Li
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
          name="approver"
          :rules="[{ required: true, message: 'Please select approver' }]"
          label="Approver"
        >
          <a-select
            v-model:value="formState.approver"
            placeholder="Please select approver"
          >
            <a-select-option value="Kirk Lin">
              Kirk Lin
            </a-select-option>
            <a-select-option value="Aibayanyu">
              Aibayanyu
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 7, offset: 1 }" :lg="{ span: 8 }" :md="{ span: 12 }" :sm="24">
        <a-form-item
          name="dateRange"
          :rules="[{ required: true, message: 'Please select effective date' }]"
          label="Effective date"
        >
          <a-time-picker
            v-model:value="formState.dateRange"
            style="width: 100%"
          />
        </a-form-item>
      </a-col>
      <a-col :xl="{ span: 9, offset: 1 }" :lg="{ span: 10 }" :md="{ span: 24 }" :sm="24">
        <a-form-item
          name="type"
          :rules="[{ required: true, message: 'Please select warehouse type' }]"
          label="Warehouse type"
        >
          <a-select
            v-model:value="formState.type"
            placeholder="Please select warehouse type"
          >
            <a-select-option value="Public">
              Public
            </a-select-option>
            <a-select-option value="Private">
              Private
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
