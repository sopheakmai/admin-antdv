<script setup lang="ts">
import Header from "../components/header/index.vue";
import SiderMenu from "../components/sider-menu/index.vue";
import DrawerMenu from "../components/drawer-menu/index.vue";
import Menu from "../components/menu/index.vue";
import SplitMenu from "../components/menu/split-menu.vue";
import GlobalFooter from "../components/global-footer/index.vue";
import { proLayoutProps } from "./typing";
import { useLayoutProvider } from "./context";

defineOptions({
  name: "BasicLayout",
});
const props = defineProps(proLayoutProps);
const emit = defineEmits(["update:collapsed"]);
const slots = defineSlots<{
  renderFooterLinks?: () => any;
  headerActions?: () => any;
  headerContent?: () => any;
  contentPrefix?: () => any;
  default: () => any;
  footerRender?: () => any;
  [key: string]: any;
}>();
/**
 * Handle the event parameters of expansion and collapse
 * @param collapsed Event parameters for expansion and collapse
 */
function handleCollapsed(collapsed: boolean) {
  emit("update:collapsed", collapsed);
  props?.onCollapsed?.(collapsed);
}

// Dependency injects all configuration items，Control the properties，Reduce value passing
const { layout, contentWidth } = useLayoutProvider(props, {
  handleCollapsed,
});
const contentCls = computed(() => {
  if (contentWidth.value === "Fixed")
    return "ant-pro-basicLayout-content-fixed";

  else
    return "";
});
</script>

<template>
  <div class="ant-pro-basicLayout" :data-theme="theme">
    <a-layout>
      <template v-if="menu">
        <SiderMenu v-if="layout !== 'top' && !isMobile" />
      </template>
      <a-layout>
        <template v-if="header">
          <Header>
            <template v-if="slots.headerActions" #headerActions>
              <slot name="headerActions" />
            </template>
            <template v-if="slots.headerContent || layout === 'top' || layout === 'mix'" #headerContent>
              <slot name="headerContent">
                <Menu v-if="!isMobile && layout === 'top'" />
                <!-- Split menu mode -->
                <SplitMenu v-if="!isMobile && layout === 'mix' && props.splitMenus" />
              </slot>
            </template>
          </Header>
        </template>
        <slot name="contentPrefix" />
        <a-layout-content class="ant-pro-basicLayout-content" flex flex-col>
          <div h-full flex flex-1 flex-col :class="contentCls">
            <slot />
          </div>
        </a-layout-content>
        <a-layout-footer v-if="footer" style="background-color: transparent;">
          <slot name="footerRender">
            <GlobalFooter :copyright="copyright" />
          </slot>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <DrawerMenu v-if="menu" />
  </div>
</template>

<style lang="less">
@import "./index.less";
</style>
