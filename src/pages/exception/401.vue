<script setup lang="ts">
const router = useRouter();
function login() {
  router.replace({
    path: "/login",
  });
}
</script>

<template>
  <a-result status="404" title="401" sub-title="Login has expired, please log in again">
    <template #extra>
      <a-button type="primary" @click="login">
        Go to Login
      </a-button>
    </template>
  </a-result>
</template>
