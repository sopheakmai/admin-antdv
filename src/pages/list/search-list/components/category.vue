<script setup lang="ts">
const number = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

type ListType = {
  name: string;
  key: string;
};
const list = shallowRef<ListType[]>([
  {
    name: "All",
    key: "all",
  },
  ...number.map((v, index) => ({
    name: `Category${v}`,
    key: `category${index + 1}`,
  })),
]);
const activeList = ref<string[]>([]);
function handleClick(item: ListType) {
  if (item.key === "all") {
    if (activeList.value.includes("all")) {
      // Delete all selected
      activeList.value = [];
      return;
    }
    else {
      // Select all
      activeList.value = list.value.map(v => v.key);
    }
    return;
  }
  if (activeList.value.includes(item.key)) {
    // Delete current selection
    activeList.value = activeList.value.filter(v => v !== item.key);
    if (activeList.value.includes("all")) {
      // Delete all selected
      activeList.value = activeList.value.filter(v => v !== "all");
    }
  }
  else {
    // Add current selection
    activeList.value = [...activeList.value, item.key];
    if (activeList.value.length === list.value.length - 1) {
      // Select all
      activeList.value = [...activeList.value, "all"];
    }
  }
}
const authorList = shallowRef([
  {
    label: "Fu Xiaoxiao",
    value: "Fu Xiaoxiao",
  },
  {
    label: "Zhou Maomao",
    value: "Zhou Maomao",
  },
]);
// Rating
const praiseList = shallowRef([
  {
    label: "Excellent",
    value: 1,
  },
  {
    label: "Normal",
    value: 2,
  },
]);
</script>

<template>
  <a-card :bordered="false">
    <a-form>
      <a-form-item label="Category">
        <div class="flex flex-wrap gap-2">
          <a-tag
            v-for="item in list"
            :key="item.key"
            cursor-pointer
            :color="activeList.includes(item.key) ? '#108ee9' : ''"
            @click="handleClick(item)"
          >
            {{ item.name }}
          </a-tag>
        </div>
      </a-form-item>
      <a-divider dashed />
      <a-form-item label="Other options">
        <a-form-item-rest>
          <div class="category-other-item flex gap-4">
            <a-form-item label="Author">
              <a-select placeholder="Unlimited" style="width: 100px" :options="authorList" />
            </a-form-item>
            <a-form-item label="Rating">
              <a-select placeholder="Unlimited" style="width: 100px" :options="praiseList" />
            </a-form-item>
          </div>
        </a-form-item-rest>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<style lang="less">
.category-other-item {
  .ant-form-item {
    margin-bottom: 0;
  }
}
</style>
