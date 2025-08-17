<script setup lang="ts">
import { Radar } from "@antv/g2plot";

import EditableLinkGroup from "~/pages/dashboard/workplace/editable-link-group.vue";

defineOptions({
  name: "Workplace",
});

const currentUser = {
  avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
  name: "Daniel Wu", // Changed from "吴彦祖"
  userid: "00000001",
  email: "antdesign@alipay.com",
  signature: "Embrace all rivers, tolerance is great", // Changed from "海纳百川，有容乃大"
  title: "Interaction Expert", // Changed from "交互专家"
  group: "Ant Financial -某某某Business Group - 某某Platform Department - 某某Technology Department - UED", // Changed from "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED"
};

const projectNotice = [
  {
    id: "xxx1",
    title: "Alipay",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
    description: "That is something internal, they cannot reach or touch", // Changed from "那是一种内在的东西，他们到达不了，也无法触摸的"
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    member: "Science Brick Moving Group", // Changed from "科学搬砖组"
    href: "",
    memberLink: "",
  },
  {
    id: "xxx2",
    title: "Angular",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
    description: "Hope is a good thing, maybe the best of things, and good things never die", // Changed from "希望是一个好东西，也许是最好的，好东西是不会消亡的"
    updatedAt: "6 years ago", // Changed from "6 年前"
    member: "All Daniel Wu Group", // Changed from "全组都是吴彦祖"
    href: "",
    memberLink: "",
  },
  {
    id: "xxx3",
    title: "Ant Design",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
    description: "Of all the gin joints in all the towns in all the world, she walks into mine", // Changed from "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆"
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    member: "Chuunibyou Girls Group", // Changed from "中二少女团"
    href: "",
    memberLink: "",
  },
  {
    id: "xxx4",
    title: "Ant Design Pro",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
    description: "At that time I only thought about what I wanted, never what I had", // Changed from "那时候我只会想自己想要什么，从不想自己拥有什么"
    updatedAt: "6 years ago", // Changed from "6 年前"
    member: "Programmer Daily", // Changed from "程序员日常"
    href: "",
    memberLink: "",
  },
  {
    id: "xxx5",
    title: "Bootstrap",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
    description: "Winter is coming", // Changed from "凛冬将至"
    updatedAt: "6 years ago", // Changed from "6 年前"
    member: "High-end Design Team", // Changed from "高逼格设计天团"
    href: "",
    memberLink: "",
  },
  {
    id: "xxx6",
    title: "React",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
    description: "Life is like a box of chocolates, you never know what you're gonna get", // Changed from "生命就像一盒巧克力，结果往往出人意料"
    updatedAt: "6 years ago", // Changed from "6 年前"
    member: "Trick You Into Learning Computer Science", // Changed from "骗你来学计算机"
    href: "",
    memberLink: "",
  },
];

const activities = [
  {
    id: "trend-1",
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    user: {
      name: "Lily Qu", // Changed from "曲丽丽"
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    },
    group: {
      name: "High-end Design Team", // Changed from "高逼格设计天团"
      link: "http://github.com/",
    },
    project: {
      name: "June Iteration", // Changed from "六月迭代"
      link: "http://github.com/",
    },
    template1: "created", // Changed from "在"
    template2: "new project", // Changed from "新建项目"
  },
  {
    id: "trend-2",
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    user: {
      name: "Xiaoxiao Fu", // Changed from "付小小"
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
    },
    group: {
      name: "High-end Design Team", // Changed from "高逼格设计天团"
      link: "http://github.com/",
    },
    project: {
      name: "June Iteration", // Changed from "六月迭代"
      link: "http://github.com/",
    },
    template1: "created", // Changed from "在"
    template2: "new project", // Changed from "新建项目"
  },
  {
    id: "trend-3",
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    user: {
      name: "Dongdong Lin", // Changed from "林东东"
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png",
    },
    group: {
      name: "Chuunibyou Girls Group", // Changed from "中二少女团"
      link: "http://github.com/",
    },
    project: {
      name: "June Iteration", // Changed from "六月迭代"
      link: "http://github.com/",
    },
    template1: "created", // Changed from "在"
    template2: "new project", // Changed from "新建项目"
  },
  {
    id: "trend-4",
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    user: {
      name: "Stephen Zhou", // Changed from "周星星"
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png",
    },
    group: {
      name: "May Daily Iteration", // Changed from "5 月日常迭代"
      link: "http://github.com/",
    },
    template1: "updated", // Changed from "将"
    template2: "to published status", // Changed from "更新至已发布状态"
  },
  {
    id: "trend-5",
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    user: {
      name: "Pianyou Zhu", // Changed from "朱偏右"
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png",
    },
    group: {
      name: "Engineering Efficiency", // Changed from "工程效能"
      link: "http://github.com/",
    },
    project: {
      name: "Messages", // Changed from "留言"
      link: "http://github.com/",
    },
    template1: "published", // Changed from "在"
    template2: "in", // Changed from "发布了"
  },
  {
    id: "trend-6",
    updatedAt: "A few seconds ago", // Changed from "几秒前"
    user: {
      name: "Le Ge", // Changed from "乐哥"
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",
    },
    group: {
      name: "Programmer Daily", // Changed from "程序员日常"
      link: "http://github.com/",
    },
    project: {
      name: "Brand Iteration", // Changed from "品牌迭代"
      link: "http://github.com/",
    },
    template1: "created", // Changed from "在"
    template2: "new project", // Changed from "新建项目"
  },
];

const radarContainer = ref();
const radarData = [
  {
    name: "Personal", // Changed from "个人"
    label: "Citations", // Changed from "引用"
    value: 10,
  },
  {
    name: "Personal", // Changed from "个人"
    label: "Reputation", // Changed from "口碑"
    value: 8,
  },
  {
    name: "Personal", // Changed from "个人"
    label: "Output", // Changed from "产量"
    value: 4,
  },
  {
    name: "Personal", // Changed from "个人"
    label: "Contribution", // Changed from "贡献"
    value: 5,
  },
  {
    name: "Personal", // Changed from "个人"
    label: "Popularity", // Changed from "热度"
    value: 7,
  },
  {
    name: "Team", // Changed from "团队"
    label: "Citations", // Changed from "引用"
    value: 3,
  },
  {
    name: "Team", // Changed from "团队"
    label: "Reputation", // Changed from "口碑"
    value: 9,
  },
  {
    name: "Team", // Changed from "团队"
    label: "Output", // Changed from "产量"
    value: 6,
  },
  {
    name: "Team", // Changed from "团队"
    label: "Contribution", // Changed from "贡献"
    value: 3,
  },
  {
    name: "Team", // Changed from "团队"
    label: "Popularity", // Changed from "热度"
    value: 1,
  },
  {
    name: "Department", // Changed from "部门"
    label: "Citations", // Changed from "引用"
    value: 4,
  },
  {
    name: "Department", // Changed from "部门"
    label: "Reputation", // Changed from "口碑"
    value: 1,
  },
  {
    name: "Department", // Changed from "部门"
    label: "Output", // Changed from "产量"
    value: 6,
  },
  {
    name: "Department", // Changed from "部门"
    label: "Contribution", // Changed from "贡献"
    value: 5,
  },
  {
    name: "Department", // Changed from "部门"
    label: "Popularity", // Changed from "热度"
    value: 7,
  },
];
let radar: Radar;
onMounted(() => {
  radar = new Radar(radarContainer.value, {
    data: radarData,
    xField: "label",
    yField: "value",
    seriesField: "name",
    point: {
      size: 4,
    },
    legend: {
      layout: "horizontal",
      position: "bottom",
    },
  });
  radar.render();
});

onBeforeUnmount(() => {
  radar?.destroy?.();
});
</script>

<template>
  <page-container>
    <template #content>
      <div class="pageHeaderContent">
        <div class="avatar">
          <a-avatar size="large" :src="currentUser.avatar" />
        </div>
        <div class="content">
          <div class="contentTitle">
            Good morning, <!-- Changed from "早安，" -->
            {{ currentUser.name }}
            , have a great day! <!-- Changed from "，祝你开心每一天！" -->
          </div>
          <div>
            {{ currentUser.title }} |{{ currentUser.group }}
          </div>
        </div>
      </div>
    </template>
    <template #extraContent>
      <div class="extraContent">
        <div class="statItem">
          <a-statistic title="Projects" :value="56" /> <!-- Changed from "项目数" -->
        </div>
        <div class="statItem">
          <a-statistic title="Team Ranking" :value="8" suffix="/ 24" /> <!-- Changed from "团队内排名" -->
        </div>
        <div class="statItem">
          <a-statistic title="Project Visits" :value="2223" /> <!-- Changed from "项目访问" -->
        </div>
      </div>
    </template>

    <a-row :gutter="24">
      <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          class="projectList"
          :style="{ marginBottom: '24px' }"
          title="Ongoing Projects"
        >
          :bordered="false"
          :loading="false"
          :body-style="{ padding: 0 }"
          >
          <template #extra>
            <router-link to="/">
              All Projects <!-- Changed from "全部项目" -->
            </router-link>
          </template>
          <a-card-grid v-for="item in projectNotice" :key="item.id" class="projectGrid">
            <a-card :body-style="{ padding: 0 }" style="box-shadow: none" :bordered="false">
              <a-card-meta
                :description="item.description"
                class="w-full"
              >
                <template #title>
                  <div class="cardTitle">
                    <a-avatar size="small" :src="item.logo" />
                    <router-link :to="item.href">
                      {{ item.title }}
                    </router-link>
                  </div>
                </template>
              </a-card-meta>
              <div class="projectItemContent">
                <router-link :to="item.memberLink">
                  {{ item.member || '' }}
                </router-link>
                <span class="datetime" ml-2 :title="item.updatedAt">
                  {{ item.updatedAt }}
                </span>
              </div>
            </a-card>
          </a-card-grid>
        </a-card>
        <a-card
          :body-style="{ padding: 0 }"
          :bordered="false"
          class="activeCard"
          title="动态"
          :loading="false"
        >
          <a-list
            :data-source="activities"
            class="activitiesList"
          >
            <template #renderItem="{ item }">
              <a-list-item :key="item.id">
                <a-list-item-meta>
                  <template #title>
                    <span>
                      <a class="username">{{ item.user.name }}</a>&nbsp;
                      <span class="event">
                        <span>{{ item.template1 }}</span>&nbsp;
                        <a href=""> {{ item?.group?.name }} </a>&nbsp;
                        <span>{{ item.template2 }}</span>&nbsp;
                        <a href=""> {{ item?.project?.name }} </a>
                      </span>
                    </span>
                  </template>
                  <template #avatar>
                    <a-avatar :src="item.user.avatar" />
                  </template>
                  <template #description>
                    <span class="datetime" :title="item.updatedAt">
                      {{ item.updatedAt }}
                    </span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
      <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          title="Activities"
        >
          style="margin-bottom: 24px"
          :bordered="false"
          :body-style="{ padding: 0 }"
          >
          <EditableLinkGroup />
        </a-card>
        <a-card
          :style="{ marginBottom: '24px' }"
          :bordered="false"
          title="XX Index"
        >
          >
          <div class="chart">
            <div ref="radarContainer" />
          </div>
        </a-card>
        <a-card
          :body-style="{ paddingTop: '12px', paddingBottom: '12px' }"
          :bordered="false"
          title="团队"
        >
          >
          <div class="members">
            <a-row :gutter="48">
              <a-col v-for="item in projectNotice" :key="`members-item-${item.id}`" :span="12">
                <router-link :to="item.href">
                  <a-avatar :src="item.logo" size="small" />
                  <span class="member">{{ item.member }}</span>
                </router-link>
              </a-col>
            </a-row>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </page-container>
</template>

<style scoped lang="less">
.textOverflow() {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

// mixins for clearfix
// ------------------------
.clearfix() {
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
}

.activitiesList {
  padding: 0 24px 8px 24px;
  .username {
    color: var(--text-color);
  }
  .event {
    font-weight: normal;
  }
}

.pageHeaderContent {
  display: flex;
  .avatar {
    flex: 0 1 72px;
    & > span {
      display: block;
      width: 72px;
      height: 72px;
      border-radius: 72px;
    }
  }
  .content {
    position: relative;
    top: 4px;
    flex: 1 1 auto;
    margin-left: 24px;
    color: var(--pro-ant-color-text-tertiary);
    line-height: 22px;
    .contentTitle {
      margin-bottom: 12px;
      color: var(--pro-ant-color-text);
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
  }
}

.extraContent {
  .clearfix();

  float: right;
  white-space: nowrap;
  .statItem {
    position: relative;
    display: inline-block;
    padding: 0 32px;
    > p:first-child {
      margin-bottom: 4px;
      color: var(--pro-ant-color-text-tertiary);
      font-size: 14px;
      line-height: 22px;
    }
    > p {
      margin: 0;
      color: var(--pro-ant-color-text);
      font-size: 30px;
      line-height: 38px;
      > span {
        color: var(--pro-ant-color-text-tertiary);
        font-size: 20px;
      }
    }
    &::after {
      position: absolute;
      top: 8px;
      right: 0;
      width: 1px;
      height: 40px;
      content: "";
    }
    &:last-child {
      padding-right: 0;
      &::after {
        display: none;
      }
    }
  }
}

.members {
  a {
    display: block;
    height: 24px;
    margin: 12px 0;
    color: var(--text-color);
    transition: all 0.3s;
    .textOverflow();
    .member {
      margin-left: 12px;
      font-size: 14px;
      line-height: 24px;
      vertical-align: top;
    }
    &:hover {
      color: #1890ff;
    }
  }
}

.projectList {
  :deep(.ant-card-meta-description) {
    height: 44px;
    overflow: hidden;
    color: var(--pro-ant-color-text-tertiary);
    line-height: 22px;
  }
  .cardTitle {
    font-size: 0;
    a {
      display: inline-block;
      height: 24px;
      margin-left: 12px;
      color: var(--pro-ant-color-text);
      font-size: 14px;
      line-height: 24px;
      vertical-align: top;
      &:hover {
        color: var(--pro-ant-color-primary-hover);
      }
    }
  }
  .projectGrid {
    width: 33.33%;
  }
  .projectItemContent {
    display: flex;
    height: 20px;
    margin-top: 8px;
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    .textOverflow();
    a {
      display: inline-block;
      flex: 1 1 0;
      color: var(--pro-ant-color-text-tertiary);
      .textOverflow();
      &:hover {
        color: var(--pro-ant-color-primary-hover);
      }
    }
    .datetime {
      flex: 0 0 auto;
      float: right;
      color: var(--pro-ant-color-text-quaternary);
    }
  }
}

.datetime {
  color: var(--pro-ant-color-text-quaternary);
}

@media screen and (max-width: 1200px) and (min-width: 992px) {
  .activeCard {
    margin-bottom: 24px;
  }
  .members {
    margin-bottom: 0;
  }
  .extraContent {
    margin-left: -44px;
    .statItem {
      padding: 0 16px;
    }
  }
}

@media screen and (max-width: 992px) {
  .activeCard {
    margin-bottom: 24px;
  }
  .members {
    margin-bottom: 0;
  }
  .extraContent {
    float: none;
    margin-right: 0;
    .statItem {
      padding: 0 16px;
      text-align: left;
      &::after {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .extraContent {
    margin-left: -16px;
  }
  .projectList {
    .projectGrid {
      width: 50%;
    }
  }
}

@media screen and (max-width: 576px) {
  .pageHeaderContent {
    display: block;
    .content {
      margin-left: 0;
    }
  }
  .extraContent {
    .statItem {
      float: none;
    }
  }
}

@media screen and (max-width: 480px) {
  .projectList {
    .projectGrid {
      width: 100%;
    }
  }
}
</style>
