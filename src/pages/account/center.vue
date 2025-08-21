<script setup lang="ts">
import { ApartmentOutlined, AuditOutlined, HomeOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { nextTick, reactive, ref } from "vue";
import rightContent from "./components/right-content.vue";

const { t } = useI18n();

const inputRef = ref();
const state = reactive({
  tags: ["Focused", "Persistent", "Creative", "Effective", "Optimistic"],
  inputVisible: false,
  inputValue: "",
});

function handleClose(removedTag: string) {
  const tags = state.tags.filter(tag => tag !== removedTag);
  state.tags = tags;
}

function showInput() {
  state.inputVisible = true;
  nextTick(() => {
    inputRef.value.focus();
  });
}

function handleInputConfirm() {
  const inputValue = state.inputValue;
  let tags = state.tags;
  if (inputValue && !tags.includes(inputValue))
    tags = [...tags, inputValue];

  Object.assign(state, {
    tags,
    inputVisible: false,
    inputValue: "",
  });
}

type ITeamDataItem = {
  name: string;
  link: string;
};

const teamData = ref<ITeamDataItem[]>([
  {
    name: "Antdv Pro",
    link: "/logo.svg",
  },
  {
    name: "Study Group",
    link: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
  },
  {
    name: "Work Group",
    link: "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png",
  },
  {
    name: "Design Team",
    link: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
  },
]);
</script>

<template>
  <div class="gutter-example">
    <a-row :gutter="24">
      <a-col :span="7">
        <a-card>
          <div class="flex justify-center">
            <a-avatar :size="86">
              <template #icon>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="">
              </template>
            </a-avatar>
          </div>
          <div class="mt-5 flex flex-col items-center justify-center">
            <span class="text-16px font-bold">Super Administrator</span>
            <span>Study hard, make progress every day</span>
          </div>
          <div class="p-8">
            <p>
              <span class="mr-2">
                <AuditOutlined />
              </span>
              <span>
                Developer
              </span>
            </p>
            <p>
              <span class="mr-2">
                <ApartmentOutlined />
              </span>
              <span>
                Ant Financial - Some Business Group - Some Platform Department - Some Technology Department - UED
              </span>
            </p>
            <p>
              <span class="mr-2">
                <HomeOutlined />
              </span>
              <span>
                Guangzhou, Guangdong Province
              </span>
            </p>
          </div>
          <div>
            <p>
              {{ t('account.center.tags') }}
            </p>
            <template v-for="(tag, index) in state.tags" :key="tag">
              <a-tooltip v-if="tag.length > 20" :title="tag">
                <a-tag :closable="index !== 0" @close="handleClose(tag)">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :closable="index !== 0" @close="handleClose(tag)">
                {{ tag }}
              </a-tag>
            </template>
            <a-input
              v-if="state.inputVisible"
              ref="inputRef"
              v-model:value="state.inputValue"
              type="text"
              size="small"
              :style="{ width: '78px' }"
              @blur="handleInputConfirm"
              @keyup.enter="handleInputConfirm"
            />
            <a-tag v-else style="border-style: dashed" @click="showInput">
              <PlusOutlined />
            </a-tag>
          </div>
          <div class="mt-10">
            <p>
              {{ t('account.cneter.team') }}
            </p>
            <div class="flex flex-wrap justify-between">
              <span v-for="(item, index) in teamData" :key="index" class="mb-5 w-120px flex items-center">
                <a-avatar :size="26" class="mr-2">
                  <template #icon>
                    <img :src="item.link" alt="">
                  </template>
                </a-avatar>
                <span>{{ item.name }}</span>
              </span>
            </div>
          </div>
        </a-card>
      </a-col>
      <!-- right-content -->
      <a-col :span="17">
        <right-content />
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="less">

</style>
