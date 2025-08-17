<script setup lang="ts">
defineOptions({
  name: "BasicProfile",
});
const { t } = useI18n();
</script>

<template>
  <page-container>
    <a-card :bordered="false">
      <a-descriptions :title="t('profile.basic.orderDetailTitle')">
        <a-descriptions-item :label="t('profile.basic.orderNumber')">
          1000000000
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.orderStatus')">
          {{ t('profile.basic.orderStatusValue') }} <!-- Translation for "已完成" (Completed) -->
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.transactionNumber')">
          1234123421
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.subOrderNumber')">
          3214321432
        </a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin-bottom: 32px" />
      <a-descriptions :title="t('profile.basic.customerInfoTitle')">
        <a-descriptions-item :label="t('profile.basic.customerName')">
          Zhang San
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.contactNumber')">
          18812345678
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.deliveryMethod')">
          Express Delivery
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.deliveryAddress')">
          No. 123 Jianguo Road, Chaoyang District, Beijing
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.remarks')">
          No special requirements
        </a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin-bottom: 32px" />
      <a-descriptions :title="t('profile.basic.productInfoTitle')">
        <a-descriptions-item :label="t('profile.basic.productName')">
          Product A
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.unitPrice')">
          $50.00
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.quantity')">
          3
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.subtotal')">
          $150.00
        </a-descriptions-item>
      </a-descriptions>
      <a-divider style="margin-bottom: 32px" />
      <a-descriptions :title="t('profile.basic.paymentInfoTitle')">
        <a-descriptions-item :label="t('profile.basic.paymentMethod')">
          Online Payment
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.paymentTime')">
          2023-08-18 14:30:00
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.paymentAmount')">
          $150.00
        </a-descriptions-item>
        <a-descriptions-item :label="t('profile.basic.paymentStatus')">
          Paid
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </page-container>
</template>

<style lang="less" scoped>
.title {
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
