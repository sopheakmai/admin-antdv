<script setup lang="ts">
const { locale, setLocale } = useI18nLocale();
function handleClick({ key }: any) {
  setLocale(key);
}
</script>

<template>
  <a-dropdown>
    <span hover="bg-[var(--hover-color)]" h-48px flex cursor-pointer items-center px-12px text-16px class="transition-all-300">
      <CarbonLanguage class="anticon" />
    </span>
    <template #overlay>
      <a-menu :selected-keys="[locale]" @click="handleClick">
        <!-- <a-menu-item key="zh-CN">
          <template #icon>
            <span>
              🇨🇳
            </span>
          </template>
          Simplified Chinese
        </a-menu-item> -->
        <a-menu-item key="en-US">
          <template #icon>
            <span>
              🇺🇸
            </span>
          </template>
          English
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
