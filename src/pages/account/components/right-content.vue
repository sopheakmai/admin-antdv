<script setup lang="ts">
import { ref } from "vue";
import articleTab from "./article-tab.vue";
import applicationTab from "./application-tab.vue";
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
    tags: ["Ant Design Vue", "Mid-to-back end", "Automation"],
    content: "AntdvProis a set of enterprise-level mid-to-back end front-endVue3、Vite4、ant-design-vue4、Pinia、UnoCSSandTypescriptdesign solutions based on/design solutions，It refers to Alibaba'sreactversionantd-prodesign patterns，and uses the latest and most popular front-end technology stacks，It has built-in dynamic routing、multi-theme、multi-layout and other features，which can help you quickly build enterprise-level mid-to-back end product prototypes。",
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
