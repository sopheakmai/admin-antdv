<script setup lang="ts">
import { Column } from "@antv/g2plot";
import type { Key } from "ant-design-vue/es/_util/type";
import dayjs from "dayjs";

defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const rankingListData: { title: string; total: number }[] = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `Gongzhuan Road ${i} No. store`,
    total: 323234,
  });
}

const rangePickerValue = ref();

function getDateRange(type: string) {
  const today = new Date();
  let startDate;
  let endDate;
  switch (type) {
    case "day":
      rangePickerValue.value = [dayjs(new Date(today.getFullYear(), today.getMonth(), today.getDate())), dayjs(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999))];
      break;
    case "week":
      startDate = new Date(today.setDate(today.getDate() - today.getDay()));
      endDate = new Date(today.setDate(today.getDate() + 6));
      rangePickerValue.value = [dayjs(startDate), dayjs(endDate)];
      break;
    case "month":
      startDate = new Date(today.getFullYear(), today.getMonth(), 1);
      endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      rangePickerValue.value = [dayjs(startDate), dayjs(endDate)];
      break;
    case "year":
      startDate = new Date(today.getFullYear(), 0, 1);
      endDate = new Date(today.getFullYear(), 11, 31);
      rangePickerValue.value = [dayjs(startDate), dayjs(endDate)];
      break;
    default:
      // Return default value or throw error，Depends on the situation
      return null;
  }
}
getDateRange("day");
function onClick(e: any) {
  e.target?.parentElement?.querySelectorAll("a").forEach((item: HTMLElement) => {
    item.classList.remove("currentDate");
  });
  e.target?.classList.add("currentDate");
  getDateRange(e.target.__vnode.key);
}

function convertNumber(number: number) {
  return number.toLocaleString();
}

const salesData = [
  {
    x: "1Month",
    y: 809,
  },
  {
    x: "2Month",
    y: 766,
  },
  {
    x: "3Month",
    y: 585,
  },
  {
    x: "4Month",
    y: 763,
  },
  {
    x: "5Month",
    y: 853,
  },
  {
    x: "6Month",
    y: 898,
  },
  {
    x: "7Month",
    y: 1096,
  },
  {
    x: "8Month",
    y: 452,
  },
  {
    x: "9Month",
    y: 244,
  },
  {
    x: "10Month",
    y: 838,
  },
  {
    x: "11Month",
    y: 673,
  },
  {
    x: "12Month",
    y: 431,
  },
];

const columnPlotContainer1 = ref();
const columnPlotContainer2 = ref();

let renderOnce = false;

function changTab(activeKey: Key) {
  if (activeKey === "views" && !renderOnce) {
    setTimeout(() => {
      new Column(columnPlotContainer2.value, {
        data: salesData,
        xField: "x",
        yField: "y",
        height: 300,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          y: {
            alias: "Sales volume",
          },
        },
      }).render();
      renderOnce = true;
    });
  }
}

const column = shallowRef<Column>();
onMounted(() => {
  column.value = new Column(columnPlotContainer1.value, {
    data: salesData,
    xField: "x",
    yField: "y",
    height: 300,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      y: {
        alias: "Sales volume",
      },
    },
  });
  column.value?.render();
});

onBeforeUnmount(() => {
  column.value?.destroy();
  column.value = undefined;
});
</script>

<template>
  <a-card :loading="loading" :bordered="false" :body-style="{ padding: 0 }">
    <div class="salesCard">
      <a-tabs
        size="large"
        :tab-bar-style="{ marginBottom: '24px' }"
        @change="changTab"
      >
        <template #rightExtra>
          <div class="salesExtraWrap">
            <div class="salesExtra">
              <a key="day" class="currentDate" @click="onClick">Today</a>
              <a key="week" @click="onClick">This week</a>
              <a key="month" @click="onClick">This month</a>
              <a key="year" @click="onClick">This year</a>
            </div>
            <a-range-picker
              :value="rangePickerValue"
              :style="{ width: '256px' }"
            />
          </div>
        </template>
        <a-tab-pane key="sales" tab="Sales amount">
          <a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="salesBar">
                <div ref="columnPlotContainer1" />
              </div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="salesRank">
                <h4 class="rankingTitle">
                  Store sales ranking
                </h4>
                <ul class="rankingList">
                  <li v-for="(item, index) in rankingListData" :key="index">
                    <span
                      :class="`rankingItemNumber ${index < 3 ? 'active' : ''}`"
                    >
                      {{ index + 1 }}
                    </span>
                    <span class="rankingItemTitle" :title="item.title">
                      {{ item.title }}
                    </span>
                    <span class="rankingItemValue">
                      {{ convertNumber(item.total) }}
                    </span>
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
        <a-tab-pane key="views" tab="Views">
          <a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="salesBar">
                <div ref="columnPlotContainer2" />
              </div>
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <div class="salesRank">
                <h4 class="rankingTitle">
                  Store views ranking
                </h4>
                <ul class="rankingList">
                  <li v-for="(item, index) in rankingListData" :key="index">
                    <span
                      :class="`rankingItemNumber ${index < 3 ? 'active' : ''}`"
                    >
                      {{ index + 1 }}
                    </span>
                    <span class="rankingItemTitle" :title="item.title">
                      {{ item.title }}
                    </span>
                    <span class="rankingItemValue">
                      {{ convertNumber(item.total) }}
                    </span>
                  </li>
                </ul>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-card>
</template>

<style scoped lang="less">
.rankingList {
  margin: 25px 0 0;
  padding: 0;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    margin-top: 16px;
    zoom: 1;
    &::before,
    &::after {
      display: table;
      content: " ";
    }
    &::after {
      clear: both;
      height: 0;
      font-size: 0;
      visibility: hidden;
    }
    span {
      color: var(--text-color);
      font-size: 14px;
      line-height: 22px;
    }
    .rankingItemNumber {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: 1.5px;
      margin-right: 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background-color: #fafafa;
      border-radius: 20px;
      &.active {
        color: #fff;
        background-color: #314659;
      }
    }
    .rankingItemTitle {
      flex: 1;
      margin-right: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.salesExtra {
  display: inline-block;
  margin-right: 24px;
  a {
    margin-left: 24px;
    color: var(--text-color);
    &:hover {
      color: #1890ff;
    }
    &.currentDate {
      color: #1890ff;
    }
  }
}

.salesCard {
  .salesBar {
    padding: 0 0 32px 32px;
  }
  .salesRank {
    padding: 0 32px 32px 72px;
  }
  :deep(.ant-tabs-nav-wrap) {
    padding-left: 16px;
    .ant-tabs-tab {
      padding-top: 16px;
      padding-bottom: 14px;
      line-height: 24px;
    }
  }
  :deep(.ant-tabs-bar) {
    padding-left: 16px;
    .ant-tabs-tab {
      padding-top: 16px;
      padding-bottom: 14px;
      line-height: 24px;
    }
  }
  :deep(.ant-tabs-extra-content) {
    padding-right: 24px;
    line-height: 55px;
  }
  :deep(.ant-card-head) {
    position: relative;
  }
  :deep(.ant-card-head-title) {
    align-items: normal;
  }
}

.salesCardExtra {
  height: inherit;
}

.salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}

.offlineCard {
  :deep(.ant-tabs-ink-bar) {
    bottom: auto;
  }
  :deep(.ant-tabs-bar) {
    border-bottom: none;
  }
  :deep(.ant-tabs-nav-container-scrolling) {
    padding-right: 40px;
    padding-left: 40px;
  }
  :deep(.ant-tabs-tab-prev-icon::before) {
    position: relative;
    left: 6px;
  }
  :deep(.ant-tabs-tab-next-icon::before) {
    position: relative;
    right: 6px;
  }
  :deep(.ant-tabs-tab-active h4) {
    color: #1890ff;
  }
}

@media screen and (max-width: 992px) {
  .salesExtra {
    display: none;
  }

  .rankingList {
    li {
      span:first-child {
        margin-right: 8px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .rankingTitle {
    margin-top: 16px;
  }

  .salesCard .salesBar {
    padding: 16px;
  }
}

@media screen and (max-width: 576px) {
  .salesExtraWrap {
    display: none;
  }

  .salesCard {
    :deep(.ant-tabs-content) {
      padding-top: 30px;
    }
  }
}
</style>
