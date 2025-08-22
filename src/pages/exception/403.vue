<script setup lang="ts">
const router = useRouter();
function back() {
  router.replace({
    path: "/",
  });
}
</script>

<template>
  <a-result status="403" title="403" sub-title="Sorry, you donot have access to this page.">
    <template #extra>
      <a-button type="primary" @click="back">
        Back to home
      </a-button>
    </template>
  </a-result>
</template>
<!-- <script setup lang="ts">
import { useLoading } from '@/composables/base-loading'

const loading = ref(false)
const full = ref(false)

const time = ref(1000)

const loadingList = ref([
  'pulse',
  'rect',
  'plane',
  'cube',
  'preloader',
  'chase',
  'dot',
])

const startCustomLoading = (val: number) => {
  full.value = val === 2
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const startLoading = (item: any) => {
  const { open, close } = useLoading({ spin: item })
  open()
  setTimeout(() => {
    close()
  }, 2000)
}

const startTimeLoading = () => {
  const { open, close } = useLoading({ minTime: time.value })
  open()
  close()
}
</script>

<template>
  <div>
    <a-card title="Load by commandloading" :hoverable="true" :bordered="false">
      <div
        v-loading="loading"
        class="relative w-full h-[150px]"
        loading-text="Custom directiveloading"
        loading-spin="pulse"
        :loading-full="full"
      >
        <a-space :size="15">
          <a-button type="primary" @click="startCustomLoading(1)">
            v-loadingFull screen command
          </a-button>
          <a-button type="primary" @click="startCustomLoading(2)">
            v-loadingNon-full screen command
          </a-button>
        </a-space>
      </div>
    </a-card>
    <a-card title="hookLoadloading" hoverable :bordered="false" mt-3>
      <a-space :size="15">
        <a-button v-for="(item, index) in loadingList" :key="item" type="primary" @click="startLoading(item)">
          loading{{ index + 1 }}
        </a-button>
      </a-space>
    </a-card>
    <a-card title="hooloadingMinimum duration" hoverable :bordered="false" mt-3>
      <a-space :size="15">
        <a-input-number v-model:value="time" />
        <a-button type="primary" @click="startTimeLoading">
          Click to triggerloading
        </a-button>
      </a-space>
    </a-card>
  </div>
</template>

<style scoped></style> -->
