<script setup lang="ts">
import type { SelectValue } from "ant-design-vue/es/select";
import type { CheckedType, ContentWidth, LayoutType } from "../../basic-layout/typing";

const props = defineProps<{
  contentWidth?: ContentWidth;
  layout?: LayoutType;
  fixedHeader?: boolean;
  fixedSider?: boolean;
  splitMenus?: boolean;
  keepAlive?: boolean;
  accordionMode?: boolean;
  leftCollapsed?: boolean;
  compactAlgorithm?: boolean;
  t?: (key: string, ...args: any[]) => string;
}>();

const emit = defineEmits(["changeSetting"]);
const list = computed(() => [
  {
    title: "Content area width",
    key: "contentWidth",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Fixed Header",
    key: "fixedHeader",
    disabled: props.layout === "mix",
    disabledReason: "",
  },
  {
    title: "Fixed side menu",
    key: "fixSiderbar",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Automatically split menu",
    key: "splitMenus",
    disabled: props.layout !== "mix",
    disabledReason: "",
  },
  {
    title: "Caching function",
    key: "keepAlive",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Menu accordion mode",
    key: "accordionMode",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Side menu collapse Left side",
    key: "leftCollapsed",
    disabled: props.layout !== "side",
    disabledReason: "",
  },
  {
    title: "Compact mode",
    key: "compactAlgorithm",
    disabled: false,
    disabledReason: "",
  },
]);
function handleChangeSetting(key: string, value: any) {
  emit("changeSetting", key, value);
}
</script>

<template>
  <a-list :data-source="list" :split="false">
    <template #renderItem="{ item }">
      <a-tooltip :title="item.disabled ? item.disabledReason : ''" placement="left">
        <a-list-item>
          <template #actions>
            <template v-if="item.key === 'contentWidth'">
              <a-select
                size="small"
                :disabled="item.disabled"
                :value="contentWidth || 'Fluid'"
                @update:value="(e:SelectValue) => handleChangeSetting('contentWidth', e)"
              >
                <a-select-option v-if="layout === 'top'" value="Fixed">
                  {{ t?.('app.setting.content-width.fixed') ?? 'Fixed' }}
                </a-select-option>
                <a-select-option value="Fluid">
                  {{ t?.('app.setting.content-width.fluid') ?? 'Fluid' }}
                </a-select-option>
              </a-select>
            </template>
            <template v-if="item.key === 'fixedHeader'">
              <a-switch
                size="small"
                :checked="fixedHeader"
                :disabled="item.disabled"
                @update:checked="(e:CheckedType) => handleChangeSetting('fixedHeader', e)"
              />
            </template>
            <template v-if="item.key === 'fixSiderbar'">
              <a-switch
                size="small"
                :checked="fixedSider"
                :disabled="item.disabled"
                @update:checked="(e:CheckedType) => handleChangeSetting('fixedSider', e)"
              />
            </template>
            <template v-if="item.key === 'splitMenus'">
              <a-switch
                size="small"
                :checked="splitMenus"
                :disabled="item.disabled"
                @update:checked="(e:CheckedType) => handleChangeSetting('splitMenus', e)"
              />
            </template>
            <template v-if="item.key === 'keepAlive'">
              <a-switch
                size="small"
                :checked="keepAlive"
                :disabled="item.disabled"
                @update:checked="(e:CheckedType) => handleChangeSetting('keepAlive', e)"
              />
            </template>
            <template v-if="item.key === 'accordionMode'">
              <a-switch
                size="small"
                :checked="accordionMode"
                :disabled="item.disabled"
                @update:checked="(e:CheckedType) => handleChangeSetting('accordionMode', e)"
              />
            </template>
            <template v-if="item.key === 'leftCollapsed'">
              <a-switch
                size="small"
                :checked="leftCollapsed"
                :disabled="item.disabled"
                @update:checked="(e:CheckedType) => handleChangeSetting('leftCollapsed', e)"
              />
            </template>
            <template v-if="item.key === 'compactAlgorithm'">
              <a-switch
                size="small"
                :checked="compactAlgorithm"
                :disabled="item.disabled"
                @update:checked="(e:CheckedType) => handleChangeSetting('compactAlgorithm', e)"
              />
            </template>
          </template>
          <span :style="{ opacity: item.disabled ? '0.5' : '1' }">
            {{ t?.(`app.setting.content-width.${item.key}`, item.title) ?? item.title }}
          </span>
        </a-list-item>
      </a-tooltip>
    </template>
  </a-list>
</template>
