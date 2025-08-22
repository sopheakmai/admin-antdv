<script lang="ts" setup>
import type { FormInstance } from "ant-design-vue";
import type { CrudTableModel } from "~@/api/list/crud-table";

const emit = defineEmits(["cancel", "ok"]);

function cloneDeep<T>(obj: T): T {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (obj instanceof Date)
    return new Date(obj.getTime()) as T;
  if (Array.isArray(obj))
    return obj.map(item => cloneDeep(item)) as T;
  if (typeof obj === "object") {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = cloneDeep(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
}

const isUpdate = ref(false);

const visible = ref(false);

const title = computed(() => {
  return isUpdate.value ? "Edit" : "Add";
});

const formRef = ref<FormInstance>();

const formData = ref<CrudTableModel>({
  name: "",
  value: "",
});

const labelCol = { style: { width: "100px" } };
const wrapperCol = { span: 24 };

function open(record?: CrudTableModel) {
  visible.value = true;
  isUpdate.value = !!record?.id;
  formData.value = cloneDeep(record) ?? {
    name: "",
    value: "",
  };
}

async function handleOk() {
  try {
    await formRef.value?.validate();

    // Add or edit interface...

    emit("ok");
    visible.value = false;
  }
  catch (errorInfo) {
    console.log("Form Validate Failed:", errorInfo);
  }
}

function handleCancel() {
  formRef.value?.resetFields();
  emit("cancel");
}

defineExpose({
  open,
});
</script>

<template>
  <a-modal v-model:open="visible" :title="title" @ok="handleOk" @cancel="handleCancel">
    <a-form ref="formRef" :model="formData" class="w-full" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item name="name" label="Name" :rules="[{ required: true, message: 'Please enter name' }]">
        <a-input v-model:value="formData.name" :maxlength="50" placeholder="Please enter name" />
      </a-form-item>
      <a-form-item name="value" label="Value" :rules="[{ required: true, message: 'Please enter value' }]">
        <a-input v-model:value="formData.value" :maxlength="50" placeholder="Please enter value" />
      </a-form-item>
      <a-form-item name="remark" label="Notes">
        <a-textarea v-model:value="formData.remark" show-count :maxlength="200" placeholder="Please enter notes" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
