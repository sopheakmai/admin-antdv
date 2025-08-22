<script setup lang="ts">
const content = "在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。";

const data = ref([
  {
    title: "Aipay",
    link: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
  },
  {
    title: "Ant Design Vue",
    link: "https://www.antdv.com/assets/logo.1ef800a8.svg",
  },
  {
    title: "Vue",
    link: "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png",
  },
  {
    title: "Vite",
    link: "https://cn.vitejs.dev/logo.svg",
  },
  {
    title: "React",
    link: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
  },
  {
    title: "Antdv Pro",
    link: "/logo.svg",
  },
  {
    title: "Webpack",
    link: "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png",
  },
  {
    title: "Angular",
    link: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
  },
]);
</script>

<template>
  <page-container>
    <div class="mt-2">
      <a-row :gutter="16">
        <a-col :xs="16" :sm="8" :md="6" :lg="6" :xl="6" class="mb-4">
          <a-button class="h-204px w-1/1" type="dashed">
            +New product
          </a-button>
        </a-col>
        <a-col v-for="(item, index) in data" :key="index" :xs="16" :sm="8" :md="6" :lg="6" :xl="6" class="mb-4">
          <a-card
            :bordered="false"
            style="borderRadius: 0"
            class="cursor-pointer transition duration-300 hover:shadow-[0_4px_20px_-5px_rgba(0,0,0,0.35)]"
          >
            <template #default>
              <div class="h-27 flex">
                <div class="h-10 w-10 rounded-full bg-gray-300">
                  <img class="h-10 w-10 rounded-full" :src="item.link">
                </div>
                <div class="ml">
                  <div style="font-size: 18px; font-weight: 500;">
                    {{ item.title }}
                  </div>
                  <div class="overflow h-17 overflow-hidden">
                    {{ content }}
                  </div>
                </div>
              </div>
            </template>
            <template #actions>
              <li>Operation one</li>
              <li>Operation two</li>
            </template>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </page-container>
</template>

<style scoped>
.overflow {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
