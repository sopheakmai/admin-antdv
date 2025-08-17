<script setup lang="ts">
import { ref } from "vue";

import applicationTab from "./application-tab.vue";
import articleTab from "./article-tab.vue";
import proTab from "./pro-tab.vue";

const { t } = useI18n();

const activeKey = ref();

type IDataItem = {
  title: string;
  tags: string[];
  content: string;
};

const data = ref<IDataItem[]>([
  {
    title: "Antdv Pro",
    tags: ["Ant Design Vue", "Admin Dashboard", "Automation"],
    content: "AntdvPro is a complete enterprise-level admin dashboard frontend/design solution based on Vue3, Vite4, ant-design-vue4, Pinia, UnoCSS and TypeScript. It references the design patterns of Alibaba's React version antd-pro, uses the latest and most popular frontend technology stack, and includes built-in features such as dynamic routing, multiple themes, and multiple layouts to help you quickly build enterprise-level admin dashboard product prototypes.",
  },
]);

const dataSource = computed(() => {
  const arr = [];
  for (let i = 0; i < 10; i++)
    arr.push(...data.value);

  return arr;
});
</script>

<template>
  <a-card :borderer="false">
    <a-tabs v-model:active-key="activeKey">
      <a-tab-pane key="1" :tab="t('account.center.article')">
        <article-tab :data-source="dataSource" />
      </a-tab-pane>
      <a-tab-pane key="2" :tab="t('account.center.application')" force-render>
        <application-tab />
      </a-tab-pane>
      <a-tab-pane key="3" :tab="t('account.center.project')">
        <pro-tab />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<style scoped lang="less">
:deep(.ant-list-item) {
  flex-direction: column !important;
  align-items: normal !important;
}
:deep(.ant-btn) {
  padding-left: 0;
}
</style>
