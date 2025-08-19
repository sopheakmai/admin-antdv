<script setup lang="ts">
const router = useRouter();
function back() {
  router.replace({
    path: "/",
  });
}
</script>

<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you are accessing does not exist!">
    <template #extra>
      <a-button type="primary" @click="back">
        Back to Home
      </a-button>
    </template>
  </a-result>
</template>
