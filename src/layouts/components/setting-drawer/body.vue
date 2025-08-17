<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div mb-24px>
    <h3 mb-12px text-14px font-500 line-height-22px>
      {{ title }}
    </h3>
    <slot />
  </div>
</template>
