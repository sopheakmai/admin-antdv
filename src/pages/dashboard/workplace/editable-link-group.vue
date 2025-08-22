<script setup lang="ts">
import { PlusOutlined } from "@ant-design/icons-vue";

const links = [
  {
    title: "Operation one",
    href: "",
  },
  {
    title: "Operation two",
    href: "",
  },
  {
    title: "Operation three",
    href: "",
  },
  {
    title: "Operation four",
    href: "",
  },
  {
    title: "Operation five",
    href: "",
  },
  {
    title: "Operation six",
    href: "",
  },
];
</script>

<template>
  <div class="linkGroup">
    <router-link v-for="(item, index) in links" :key="index" :to="item.href">
      {{ item.title }}
    </router-link>
    <a-button size="small" type="primary" ghost>
      <PlusOutlined /> Add
    </a-button>
  </div>
</template>

<style scoped lang="less">
.linkGroup {
  padding: 20px 0 8px 24px;
  font-size: 0;
  & > a {
    display: inline-block;
    width: 25%;
    margin-bottom: 13px;
    color: var(--text-color);
    font-size: 14px;
    &:hover {
      //color: @primary-color;
    }
  }
}
</style>
