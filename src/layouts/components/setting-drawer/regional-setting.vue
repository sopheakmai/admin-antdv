<script setup lang="ts">
import type { SelectValue } from "ant-design-vue/es/select";
import type { CheckedType, LayoutType } from "../../basic-layout/typing";

const props = defineProps<{
  layout?: LayoutType;
  header?: boolean;
  footer?: boolean;
  menu?: boolean;
  watermark?: boolean;
  menuHeader?: boolean;
  multiTab?: boolean;
  multiTabFixed?: boolean;
  animationName?: string;
  animationNameList?: any[];
  t?: (key: string, ...args: any[]) => string;
}>();

const emit = defineEmits(["changeSetting"]);
const list = computed(() => ([
  {
    title: "Animation",
    key: "animationName",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Watermark",
    key: "watermark",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Top bar",
    key: "header",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Footer",
    key: "footer",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Menu",
    key: "menu",
    disabled: props.layout === "top",
    disabledReason: "",
  },
  {
    title: "Menu header",
    key: "menuHeader",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Multiple tabs",
    key: "multiTab",
    disabled: false,
    disabledReason: "",
  },
  {
    title: "Fixed multiple tabs",
    key: "multiTabFixed",
    disabled: false,
    disabledReason: "The function works normally after multiple tabs are enabled",
  },
]));

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
            <a-switch
              v-if="item.key !== 'animationName'"
              size="small"
              :checked="(props as any)[item.key]"
              :disabled="item.disabled"
              @update:checked="(e:CheckedType) => handleChangeSetting(item.key, e)"
            />
            <a-select
              v-else style="width: 120px;"
              :value="animationName"
              :options="animationNameList" size="small"
              @update:value="(e:SelectValue) => handleChangeSetting(item.key, e)"
            />
          </template>
          <span :style="{ opacity: item.disabled ? '0.5' : '1' }">
            {{ t?.(`app.setting.content-area.${item.key}`, item.title) ?? item.title }}
          </span>
        </a-list-item>
      </a-tooltip>
    </template>
  </a-list>
</template>
