<script setup lang="ts">
import type { FormInstance } from "ant-design-vue";

const emit = defineEmits(["nextStep"]);
const formRef = ref<FormInstance>();
const labelCol = { lg: { span: 5 }, sm: { span: 5 } };
const wrapperCol = { lg: { span: 19 }, sm: { span: 19 } };

type FirstFormState = {
  paymentAccount: string;
  collectAccount: string;
  name: string;
  amount: number | undefined;
};
const formState = reactive<FirstFormState>({
  paymentAccount: "",
  collectAccount: "test@example.com",
  name: "Kirk Lin",
  amount: 1000000,
});
async function nextStep() {
  try {
    await formRef.value?.validateFields();
    emit("nextStep");
  }
  catch (errorInfo) {
    console.log("Failed:", errorInfo);
  }
}
</script>

<template>
  <div>
    <a-form
      ref="formRef" :model="formState" style="max-width: 500px; margin: 40px auto 0;"
      :label-col="labelCol" :wrapper-col="wrapperCol"
    >
      <a-form-item
        label="Payer's account"
        name="paymentAccount"
        :rules="[{ required: true, message: 'Payer is account must be filled' }]"
      >
        <a-select
          v-model:value="formState.paymentAccount"
          placeholder="ant-design@alipay.com"
        >
          <a-select-option value="1">
            antdv@aibayanyu.com
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        label="Payee's account"
        name="collectAccount"
        :rules="[{ required: true, message: 'Payee is account must be filled' }]"
      >
        <a-input
          v-model:value="formState.collectAccount"
        />
      </a-form-item>
      <a-form-item
        label="Payee's name"
        name="name"
        :rules="[{ required: true, message: 'Payee is name must be checked' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item
        label="Transfer amount"
        name="amount"
        :rules="[{ required: true, message: 'Transfer amount must be filled' }]"
      >
        <a-input v-model:value="formState.amount" prefix="￥" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 19, offset: 5 }">
        <a-button type="primary" @click="nextStep">
          Next step
        </a-button>
      </a-form-item>
    </a-form>
    <a-divider />
    <div class="step-form-style-desc ant-steps-item-title">
      <h3>
        Description
      </h3>
      <h4>Transfer to Alipay account</h4>
      <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
      <h4>Transfer to bank card</h4>
      <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.step-form-style-desc {
  padding: 0 56px;

  h3 {
    margin: 0 0 12px;
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
