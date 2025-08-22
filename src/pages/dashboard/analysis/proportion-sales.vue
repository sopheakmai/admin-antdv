<script setup lang="ts">
import { EllipsisOutlined } from "@ant-design/icons-vue";
import { Pie } from "@antv/g2plot";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const salesType = ref("all");
const pieContainer1 = ref();
const pieContainer2 = ref();
const pieContainer3 = ref();
function handleChangeSalesType(e: any) {
  salesType.value = e.target.value;
}

const pies = shallowRef<Pie[]>([]);

function renderPie(container: any, data: any) {
  const pie = new Pie(container, {
    appendPadding: 10,
    data,
    angleField: "y",
    colorField: "x",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "spider",
      formatter: (item) => {
        return `${item.x}: ${item.y.toLocaleString()}`;
      },
    },
    legend: false,
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: {
        content: "Sales amount",
      },
    },
  });
  pie.render();
  pies.value.push(pie);
}

const salesTypeData = [
  {
    x: "Home appliances",
    y: 4544,
  },
  {
    x: "Edible beverages",
    y: 3321,
  },
  {
    x: "Personal care and health",
    y: 3113,
  },
  {
    x: "Clothing and bags",
    y: 2341,
  },
  {
    x: "Maternal and infant products",
    y: 1231,
  },
  {
    x: "Other",
    y: 1231,
  },
];
const salesTypeDataOnline = [
  {
    x: "Home appliances",
    y: 244,
  },
  {
    x: "Edible beverages",
    y: 321,
  },
  {
    x: "Personal care and health",
    y: 311,
  },
  {
    x: "Clothing and bags",
    y: 41,
  },
  {
    x: "Maternal and infant products",
    y: 121,
  },
  {
    x: "Other",
    y: 111,
  },
];
const salesTypeDataOffline = [
  {
    x: "Home appliances",
    y: 99,
  },
  {
    x: "Edible beverages",
    y: 188,
  },
  {
    x: "Personal care and health",
    y: 344,
  },
  {
    x: "Clothing and bags",
    y: 255,
  },
  {
    x: "Other",
    y: 65,
  },
];

onMounted(() => {
  renderPie(pieContainer1.value, salesTypeData);
  renderPie(pieContainer2.value, salesTypeDataOnline);
  renderPie(pieContainer3.value, salesTypeDataOffline);
});

onUnmounted(() => {
  pies.value.forEach((pie) => {
    pie?.destroy?.();
  });
  pies.value = [];
});
</script>

<template>
  <a-card
    :loading="loading"
    class="salesCard"
    :bordered="false"
    title="Sales category proportion"
    :style="{
      height: '100%',
    }"
  >
    <template #extra>
      <div class="salesCardExtra">
        <a-dropdown placement="bottomRight">
          <template #overlay>
            <a-menu>
              <a-menu-item>Operation one</a-menu-item>
              <a-menu-item>Operation two</a-menu-item>
            </a-menu>
          </template>
          <EllipsisOutlined />
        </a-dropdown>
        <div class="salesTypeRadio">
          <a-radio-group :value="salesType" @change="handleChangeSalesType">
            <a-radio-button value="all">
              All channels
            </a-radio-button>
            <a-radio-button value="online">
              Online
            </a-radio-button>
            <a-radio-button value="stores">
              Store
            </a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </template>
    <div>
      <a-typography-text>Sales amount</a-typography-text>
      <div v-show="salesType === 'all'" ref="pieContainer1" />
      <div v-show="salesType === 'online'" ref="pieContainer2" />
      <div v-show="salesType === 'stores'" ref="pieContainer3" />
    </div>
  </a-card>
</template>

<style scoped lang="less">
.salesCardExtra {
  height: inherit;
}

.salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}

.salesCard {
  :deep(.ant-card-head) {
    position: relative;
  }
}
</style>
