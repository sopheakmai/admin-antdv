<script setup lang="ts">
import { Gauge, Liquid, RingProgress, WordCloud } from "@antv/g2plot";
import ActiveChart from "~/pages/dashboard/monitor/active-chart.vue";
import CustomMap from "~/pages/dashboard/monitor/custom-map.vue";

defineOptions({
  name: "Monitor",
});

function convertNumber(number: number) {
  return number.toLocaleString();
}
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const wordCloudData = [
  {
    name: "Sanya City",
    value: 69,
    type: 1,
  },
  {
    name: "Baishan City",
    value: 70,
    type: 2,
  },
  {
    name: "Shizuishan City",
    value: 96,
    type: 1,
  },
  {
    name: "Honghe Hani and Yi Autonomous Prefecture",
    value: 36,
    type: 1,
  },
  {
    name: "Hong Kong Island",
    value: 53,
    type: 1,
  },
  {
    name: "Sanya City",
    value: 90,
    type: 0,
  },
  {
    name: "Chuxiong Yi Autonomous Prefecture",
    value: 6,
    type: 1,
  },
  {
    name: "Changzhi City",
    value: 59,
    type: 2,
  },
  {
    name: "Sansha City",
    value: 16,
    type: 2,
  },
  {
    name: "Quanzhou City",
    value: 87,
    type: 1,
  },
  {
    name: "Anshun City",
    value: 55,
    type: 2,
  },
  {
    name: "Qingyuan City",
    value: 98,
    type: 1,
  },
  {
    name: "Bozhou City",
    value: 2,
    type: 1,
  },
  {
    name: "Chongqing City",
    value: 47,
    type: 0,
  },
  {
    name: "Laibin City",
    value: 61,
    type: 0,
  },
  {
    name: "Chiayi County",
    value: 36,
    type: 1,
  },
  {
    name: "Baoji City",
    value: 44,
    type: 1,
  },
  {
    name: "Yichang City",
    value: 95,
    type: 1,
  },
  {
    name: "Cangzhou City",
    value: 63,
    type: 0,
  },
  {
    name: "Hainan Tibetan Autonomous Prefecture",
    value: 89,
    type: 1,
  },
  {
    name: "Ya'an City",
    value: 17,
    type: 0,
  },
  {
    name: "Baiyin City",
    value: 44,
    type: 2,
  },
  {
    name: "Linfen City",
    value: 21,
    type: 1,
  },
  {
    name: "Suzhou City",
    value: 65,
    type: 1,
  },
  {
    name: "New Territories",
    value: 84,
    type: 2,
  },
  {
    name: "Yulin City",
    value: 80,
    type: 1,
  },
  {
    name: "Sansha City",
    value: 24,
    type: 1,
  },
  {
    name: "Weihai City",
    value: 24,
    type: 1,
  },
  {
    name: "Taizhou City",
    value: 82,
    type: 1,
  },
  {
    name: "Karamay City",
    value: 30,
    type: 1,
  },
  {
    name: "Handan City",
    value: 72,
    type: 1,
  },
  {
    name: "Bozhou City",
    value: 57,
    type: 1,
  },
  {
    name: "Jingmen City",
    value: 82,
    type: 2,
  },
  {
    name: "Yichang City",
    value: 98,
    type: 1,
  },
  {
    name: "Ili Kazakh Autonomous Prefecture",
    value: 90,
    type: 1,
  },
  {
    name: "Liuzhou City",
    value: 26,
    type: 1,
  },
  {
    name: "Rizhao City",
    value: 10,
    type: 0,
  },
  {
    name: "Shizuishan City",
    value: 9,
    type: 2,
  },
  {
    name: "Tieling City",
    value: 60,
    type: 1,
  },
  {
    name: "Jinan City",
    value: 55,
    type: 1,
  },
  {
    name: "Sansha City",
    value: 80,
    type: 0,
  },
  {
    name: "Linyi City",
    value: 62,
    type: 1,
  },
  {
    name: "Jixi City",
    value: 52,
    type: 2,
  },
  {
    name: "Ngari Prefecture",
    value: 96,
    type: 0,
  },
  {
    name: "Alxa League",
    value: 43,
    type: 1,
  },
  {
    name: "Zhoushan City",
    value: 85,
    type: 1,
  },
  {
    name: "Macau Peninsula",
    value: 11,
    type: 0,
  },
  {
    name: "Taizhou City",
    value: 48,
    type: 0,
  },
  {
    name: "Hangzhou City",
    value: 61,
    type: 1,
  },
  {
    name: "Kinmen County",
    value: 97,
    type: 2,
  },
  {
    name: "Jiaxing City",
    value: 67,
    type: 1,
  },
  {
    name: "Weifang City",
    value: 35,
    type: 0,
  },
  {
    name: "Beihai City",
    value: 46,
    type: 1,
  },
  {
    name: "Benxi City",
    value: 72,
    type: 2,
  },
  {
    name: "Longyan City",
    value: 8,
    type: 1,
  },
  {
    name: "Macau Peninsula",
    value: 53,
    type: 1,
  },
  {
    name: "Qianxinan Buyi and Miao Autonomous Prefecture",
    value: 89,
    type: 0,
  },
  {
    name: "Wuxi City",
    value: 66,
    type: 1,
  },
  {
    name: "Kowloon",
    value: 68,
    type: 0,
  },
  {
    name: "Haidong City",
    value: 78,
    type: 1,
  },
  {
    name: "Anyang City",
    value: 16,
    type: 1,
  },
  {
    name: "Qiannan Buyi and Miao Autonomous Prefecture",
    value: 36,
    type: 1,
  },
  {
    name: "Longnan City",
    value: 42,
    type: 1,
  },
  {
    name: "Hong Kong Island",
    value: 24,
    type: 0,
  },
  {
    name: "Anyang City",
    value: 11,
    type: 0,
  },
  {
    name: "Islands District",
    value: 24,
    type: 1,
  },
  {
    name: "Haidong City",
    value: 94,
    type: 0,
  },
  {
    name: "Shantou City",
    value: 6,
    type: 0,
  },
  {
    name: "Zaozhuang City",
    value: 52,
    type: 1,
  },
  {
    name: "Dezhou City",
    value: 88,
    type: 1,
  },
  {
    name: "Islands District",
    value: 18,
    type: 1,
  },
  {
    name: "Linfen City",
    value: 91,
    type: 0,
  },
  {
    name: "Mudanjiang City",
    value: 34,
    type: 1,
  },
  {
    name: "Islands District",
    value: 64,
    type: 1,
  },
  {
    name: "Lishui City",
    value: 33,
    type: 1,
  },
  {
    name: "Liaocheng City",
    value: 48,
    type: 1,
  },
  {
    name: "Qinzhou City",
    value: 13,
    type: 1,
  },
  {
    name: "Jiaxing City",
    value: 74,
    type: 2,
  },
  {
    name: "Putian City",
    value: 67,
    type: 1,
  },
  {
    name: "Pingxiang City",
    value: 39,
    type: 1,
  },
  {
    name: "Beijing City",
    value: 25,
    type: 1,
  },
  {
    name: "Kowloon",
    value: 39,
    type: 1,
  },
  {
    name: "Lincang City",
    value: 65,
    type: 1,
  },
  {
    name: "Guilin City",
    value: 1,
    type: 0,
  },
  {
    name: "Heihe City",
    value: 72,
    type: 1,
  },
  {
    name: "Suzhou City",
    value: 15,
    type: 1,
  },
  {
    name: "Hohhot City",
    value: 41,
    type: 2,
  },
  {
    name: "Yueyang City",
    value: 72,
    type: 0,
  },
  {
    name: "Anshun City",
    value: 13,
    type: 2,
  },
  {
    name: "Yingkou City",
    value: 33,
    type: 2,
  },
  {
    name: "Shannan Prefecture",
    value: 11,
    type: 2,
  },
  {
    name: "Nantou County",
    value: 5,
    type: 2,
  },
  {
    name: "Wuhai City",
    value: 56,
    type: 2,
  },
  {
    name: "Dandong City",
    value: 100,
    type: 2,
  },
  {
    name: "Zhongwei City",
    value: 76,
    type: 0,
  },
  {
    name: "Qingyang City",
    value: 23,
    type: 1,
  },
  {
    name: "Zunyi City",
    value: 56,
    type: 0,
  },
  {
    name: "Jinzhong City",
    value: 6,
    type: 0,
  },
  {
    name: "Heyuan City",
    value: 34,
    type: 0,
  },
  {
    name: "Yantai City",
    value: 95,
    type: 0,
  },
];

const gaugeContainer = ref();
const ringContainer1 = ref();
const ringContainer2 = ref();
const ringContainer3 = ref();
const wordCloudContainer = ref();
const liquidContainer = ref();

onMounted(() => {
  new Gauge(gaugeContainer.value, {
    height: 180,
    percent: 0.87,
    range: {
      ticks: [0, 1 / 4, 1 / 2, 3 / 4, 1],
      color: ["#6395fa", "#62daab", "#657798", "#f7c122"],
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        content: "Excellent",
        style: {
          color: "#30bf78",
        },
      },
    },
  }).render();

  new RingProgress(ringContainer1.value, {
    height: 128,
    autoFit: true,
    percent: 0.28,
    innerRadius: 0.8,
    color: ["#fab120", "#E8EDF3"],
  }).render();

  new RingProgress(ringContainer2.value, {
    height: 128,
    autoFit: true,
    percent: 0.22,
    innerRadius: 0.8,
    color: ["#5DDECF", "#E8EDF3"],
  }).render();

  new RingProgress(ringContainer3.value, {
    height: 128,
    autoFit: true,
    percent: 0.32,
    innerRadius: 0.8,
    color: ["#2FC25B", "#E8EDF3"],
  }).render();

  new WordCloud(wordCloudContainer.value, {
    data: wordCloudData,
    height: 162,
    wordField: "name",
    weightField: "value",
    colorField: "name",
    wordStyle: {
      fontSize: [10, 20],
    },
    // Set interaction type
    interactions: [{ type: "element-active" }],
    state: {
      active: {
        // Here you can set active style when
        style: {
          lineWidth: 3,
        },
      },
    },
  }).render();

  new Liquid(liquidContainer.value, {
    height: 161,
    percent: 0.35,
    outline: {
      border: 2,
      distance: 3,
    },
    statistic: {
      content: {
        style: {
          fontSize: "17px",
        },
      },
    },
    wave: {
      length: 128,
    },
  }).render();
});
</script>

<template>
  <page-container>
    <a-row :gutter="24">
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="Real-time transaction status of the event" :bordered="false">
          <a-row>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic
                title="Todayistotal transaction amount"
                suffix="yuan"
                :value="convertNumber(124543233)"
              />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic title="Sales target completion rate" value="92%" />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic-countdown title="Remaining time of the event" :value="deadline" format="HH:mm:ss:SSS" />
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <a-statistic title="Total transaction amount per second" suffix="yuan" :value="convertNumber(234)" />
            </a-col>
          </a-row>
          <div class="mapChart">
            <CustomMap />
          </div>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card title="Event status forecast" :style="{ marginBottom: '24px' }" :bordered="false">
          <ActiveChart />
        </a-card>
        <a-card
          title="Coupon verification efficiency"
          :style="{ marginBottom: 24 }"
          :body-style="{ textAlign: 'center' }"
          :bordered="false"
        >
          <div ref="gaugeContainer" />
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="Proportion of each category" :bordered="false" class="pieCard">
          <a-row :style="{ padding: '16px 0' }">
            <a-col :span="8">
              <div ref="ringContainer1" />
            </a-col>
            <a-col :span="8">
              <div ref="ringContainer2" />
            </a-col>
            <a-col :span="8">
              <div ref="ringContainer3" />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card
          title="Popular searches"
          :bordered="false"
          :body-style="{ overflow: 'hidden' }"
        >
          <div ref="wordCloudContainer" />
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: 24 }">
        <a-card
          title="Remaining resources"
          :body-style="{ textAlign: 'center', fontSize: 0 }"
          :bordered="false"
        >
          <div ref="liquidContainer" />
        </a-card>
      </a-col>
    </a-row>
  </page-container>
</template>

<style scoped lang="less">
.mapChart {
  height: 452px;
  padding-top: 24px;
  img {
    display: inline-block;
    max-width: 100%;
    max-height: 437px;
  }
}

.pieCard :global(.pie-stat) {
  font-size: 24px !important;
}

@media screen and (max-width: 992px) {
  .mapChart {
    height: auto;
  }
}
</style>
