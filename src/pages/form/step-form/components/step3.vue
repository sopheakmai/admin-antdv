<script setup lang="ts">
const emit = defineEmits(["finish"]);
const router = useRouter();
function finish() {
  emit("finish");
}
function toOrderList() {
  router.push("/profile/advanced");
}
</script>

<template>
  <div>
    <a-form>
      <a-result title="Operation Successful" :is-success="true" sub-title="Expected to arrive within two hours" style="max-width: 560px; margin: 40px auto 0;">
        <div class="information">
          <a-row>
            <a-col :sm="8" :xs="24">
              Payment Account:
            </a-col>
            <a-col :sm="16" :xs="24">
              antdv@aibayanyu.com
            </a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">
              Recipient Account:
            </a-col>
            <a-col :sm="16" :xs="24">
              test@example.com
            </a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">
              Recipient Name:
            </a-col>
            <a-col :sm="16" :xs="24">
              Kirk Lin
            </a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">
              Transfer Amount:
            </a-col>
            <a-col :sm="16" :xs="24">
              <span class="money">1,000,000</span> Yuan
            </a-col>
          </a-row>
        </div>
        <template #extra>
          <a-button type="primary" @click="finish">
            Transfer Again
          </a-button>
          <a-button style="margin-left: 8px" @click="toOrderList">
            View Bill
          </a-button>
        </template>
      </a-result>
    </a-form>
  </div>
</template>

<style lang="less" scoped>
  .information {
  line-height: 22px;

  .ant-row:not(:last-child) {
    margin-bottom: 24px;
  }
}
.money {
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
}
</style>
