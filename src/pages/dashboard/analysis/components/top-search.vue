<script setup lang="ts">
import { EllipsisOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";
import { TinyArea } from "@antv/g2plot";
import NumberInfo from "~/pages/dashboard/analysis/number-info.vue";
import Trend from "~/pages/dashboard/analysis/trend.vue";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const columns: Record<string, any>[] = [
  {
    title: "Ranking",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Search keywords",
    dataIndex: "keyword",
    key: "keyword",
  },
  {
    title: "User count",
    dataIndex: "count",
    key: "count",
    sorter: (a: { count: number }, b: { count: number }) => a.count - b.count,
  },
  {
    title: "Weekly increase",
    dataIndex: "range",
    key: "range",
    sorter: (a: { range: number }, b: { range: number }) => a.range - b.range,
  },
];

const searchData = [
  {
    index: 1,
    keyword: "Search keywords-0",
    count: 286,
    range: 10,
    status: 1,
  },
  {
    index: 2,
    keyword: "Search keywords-1",
    count: 659,
    range: 9,
    status: 1,
  },
  {
    index: 3,
    keyword: "Search keywords-2",
    count: 579,
    range: 5,
    status: 0,
  },
  {
    index: 4,
    keyword: "Search keywords-3",
    count: 369,
    range: 51,
    status: 0,
  },
  {
    index: 5,
    keyword: "Search keywords-4",
    count: 658,
    range: 11,
    status: 1,
  },
  {
    index: 6,
    keyword: "Search keywords-5",
    count: 956,
    range: 52,
    status: 0,
  },
  {
    index: 7,
    keyword: "Search keywords-6",
    count: 607,
    range: 23,
    status: 0,
  },
  {
    index: 8,
    keyword: "Search keywords-7",
    count: 19,
    range: 22,
    status: 1,
  },
  {
    index: 9,
    keyword: "Search keywords-8",
    count: 309,
    range: 77,
    status: 1,
  },
  {
    index: 10,
    keyword: "Search keywords-9",
    count: 382,
    range: 99,
    status: 0,
  },
  {
    index: 11,
    keyword: "Search keywords-10",
    count: 526,
    range: 58,
    status: 0,
  },
  {
    index: 12,
    keyword: "Search keywords-11",
    count: 824,
    range: 18,
    status: 0,
  },
  {
    index: 13,
    keyword: "Search keywords-12",
    count: 140,
    range: 10,
    status: 1,
  },
  {
    index: 14,
    keyword: "Search keywords-13",
    count: 781,
    range: 82,
    status: 1,
  },
  {
    index: 15,
    keyword: "Search keywords-14",
    count: 231,
    range: 16,
    status: 1,
  },
  {
    index: 16,
    keyword: "Search keywords-15",
    count: 672,
    range: 9,
    status: 1,
  },
  {
    index: 17,
    keyword: "Search keywords-16",
    count: 305,
    range: 52,
    status: 0,
  },
  {
    index: 18,
    keyword: "Search keywords-17",
    count: 32,
    range: 37,
    status: 1,
  },
  {
    index: 19,
    keyword: "Search keywords-18",
    count: 596,
    range: 73,
    status: 0,
  },
  {
    index: 20,
    keyword: "Search keywords-19",
    count: 346,
    range: 82,
    status: 0,
  },
  {
    index: 21,
    keyword: "Search keywords-20",
    count: 622,
    range: 12,
    status: 1,
  },
  {
    index: 22,
    keyword: "Search keywords-21",
    count: 845,
    range: 12,
    status: 0,
  },
  {
    index: 23,
    keyword: "Search keywords-22",
    count: 187,
    range: 37,
    status: 1,
  },
  {
    index: 24,
    keyword: "Search keywords-23",
    count: 822,
    range: 30,
    status: 1,
  },
  {
    index: 25,
    keyword: "Search keywords-24",
    count: 733,
    range: 77,
    status: 0,
  },
  {
    index: 26,
    keyword: "Search keywords-25",
    count: 356,
    range: 91,
    status: 0,
  },
  {
    index: 27,
    keyword: "Search keywords-26",
    count: 771,
    range: 17,
    status: 1,
  },
  {
    index: 28,
    keyword: "Search keywords-27",
    count: 50,
    range: 41,
    status: 1,
  },
  {
    index: 29,
    keyword: "Search keywords-28",
    count: 224,
    range: 1,
    status: 0,
  },
  {
    index: 30,
    keyword: "Search keywords-29",
    count: 218,
    range: 81,
    status: 1,
  },
  {
    index: 31,
    keyword: "Search keywords-30",
    count: 696,
    range: 34,
    status: 0,
  },
  {
    index: 32,
    keyword: "Search keywords-31",
    count: 379,
    range: 56,
    status: 1,
  },
  {
    index: 33,
    keyword: "Search keywords-32",
    count: 750,
    range: 44,
    status: 1,
  },
  {
    index: 34,
    keyword: "Search keywords-33",
    count: 905,
    range: 66,
    status: 1,
  },
  {
    index: 35,
    keyword: "Search keywords-34",
    count: 806,
    range: 41,
    status: 0,
  },
  {
    index: 36,
    keyword: "Search keywords-35",
    count: 854,
    range: 92,
    status: 1,
  },
  {
    index: 37,
    keyword: "Search keywords-36",
    count: 887,
    range: 18,
    status: 1,
  },
  {
    index: 38,
    keyword: "Search keywords-37",
    count: 755,
    range: 24,
    status: 0,
  },
  {
    index: 39,
    keyword: "Search keywords-38",
    count: 267,
    range: 41,
    status: 1,
  },
  {
    index: 40,
    keyword: "Search keywords-39",
    count: 34,
    range: 38,
    status: 0,
  },
  {
    index: 41,
    keyword: "Search keywords-40",
    count: 942,
    range: 16,
    status: 0,
  },
  {
    index: 42,
    keyword: "Search keywords-41",
    count: 844,
    range: 56,
    status: 0,
  },
  {
    index: 43,
    keyword: "Search keywords-42",
    count: 559,
    range: 28,
    status: 1,
  },
  {
    index: 44,
    keyword: "Search keywords-43",
    count: 29,
    range: 97,
    status: 1,
  },
  {
    index: 45,
    keyword: "Search keywords-44",
    count: 989,
    range: 43,
    status: 0,
  },
  {
    index: 46,
    keyword: "Search keywords-45",
    count: 377,
    range: 24,
    status: 1,
  },
  {
    index: 47,
    keyword: "Search keywords-46",
    count: 990,
    range: 47,
    status: 1,
  },
  {
    index: 48,
    keyword: "Search keywords-47",
    count: 848,
    range: 64,
    status: 1,
  },
  {
    index: 49,
    keyword: "Search keywords-48",
    count: 549,
    range: 68,
    status: 1,
  },
  {
    index: 50,
    keyword: "Search keywords-49",
    count: 53,
    range: 47,
    status: 1,
  },
];

const visitData2 = [1, 6, 4, 8, 3, 7, 2];

const tinyAreaContainer1 = ref();
const tinyAreaContainer2 = ref();

onMounted(() => {
  new TinyArea(tinyAreaContainer1.value, {
    height: 45,
    data: visitData2,
    smooth: true,
    autoFit: true,
  }).render();

  new TinyArea(tinyAreaContainer2.value, {
    height: 45,
    data: visitData2,
    smooth: true,
    autoFit: true,
  }).render();
});
</script>

<template>
  <a-card
    :loading="loading"
    :bordered="false"
    title="Online popular searches"
    :style="{ height: '100%' }"
  >
    <template #extra>
      <span class="iconGroup">
        <a-dropdown placement="bottomRight">
          <template #overlay>
            <a-menu>
              <a-menu-item>Operation one</a-menu-item>
              <a-menu-item>Operation two</a-menu-item>
            </a-menu>
          </template>
          <EllipsisOutlined />
        </a-dropdown>
      </span>
    </template>
    <a-row :gutter="68">
      <a-col :sm="12" :xs="24" :style="{ marginBottom: '24px' }">
        <NumberInfo
          :gap="8"
          :total="12321"
          status="up"
          :sub-total="17.1"
        >
          <template #subTitle>
            <span>
              Average search count per person
              <Tooltip title="Metric description">
                <InfoCircleOutlined :style="{ marginLeft: '8px' }" />
              </Tooltip>
            </span>
          </template>
        </NumberInfo>
        <div ref="tinyAreaContainer1" />
      </a-col>
      <a-col :sm="12" :xs="24" :style="{ marginBottom: '24px' }">
        <NumberInfo
          :gap="8"
          :total="2.7"
          status="down"
          :sub-total="26.2"
        >
          <template #subTitle>
            <span>
              Number of search users
              <Tooltip title="Metric description">
                <InfoCircleOutlined :style="{ marginLeft: '8px' }" />
              </Tooltip>
            </span>
          </template>
        </NumberInfo>
        <div ref="tinyAreaContainer2" />
      </a-col>
    </a-row>
    <a-table
      :row-key="(record:any) => record.index"
      size="small"
      :columns="columns"
      :data-source="searchData"
      :pagination="{
        style: { marginBottom: 0 },
        pageSize: 5,
      }"
    >
      <template #bodyCell="scope">
        <template v-if="scope?.column?.key === 'keyword'">
          <a>
            {{ scope?.record?.keyword }}
          </a>
        </template>
        <template v-else-if="scope?.column?.key === 'range'">
          <Trend :flag="scope?.record?.status === 1 ? 'down' : 'up'">
            <span :style="{ marginRight: '4px' }">{{ scope?.record?.range }}%</span>
          </Trend>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<style scoped lang="less">
.iconGroup {
  span.anticon {
    margin-left: 16px;
    color: inherit;
    cursor: pointer;
    transition: color 0.32s;
    &:hover {
      color: var(--text-color);
    }
  }
}
</style>
