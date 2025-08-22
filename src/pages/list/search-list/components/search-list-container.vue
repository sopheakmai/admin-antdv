<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const activeKey = computed(() => route.path);
function handleChangePage(key: any) {
  router.push(key);
}
</script>

<template>
  <page-container class="search-list-container">
    <template #content>
      <div class="flex items-center justify-center">
        <a-input-search
          placeholder="Please enter"
          enter-button="搜索"
          style="width: 300px"
        />
      </div>
    </template>
    <template #footer>
      <div class="mb--16px mt-6">
        <a-tabs :active-key="activeKey" @update:active-key="handleChangePage">
          <a-tab-pane key="/list/search-list/articles" tab="Article" />
          <a-tab-pane key="/list/search-list/projects" tab="Project" />
          <a-tab-pane key="/list/search-list/applications" tab="Application" />
        </a-tabs>
      </div>
    </template>
    <slot />
  </page-container>
</template>

<style lang="less">
.search-list-container {
  .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-nav::before {
    border-bottom: none;
  }
}
</style>
