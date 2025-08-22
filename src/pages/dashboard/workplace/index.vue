<script setup lang="ts">
import { Radar } from "@antv/g2plot";
import EditableLinkGroup from "~/pages/dashboard/workplace/editable-link-group.vue";

defineOptions({
  name: "Workplace",
});

const currentUser = {
  avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
  name: "Daniel Wu",
  userid: "00000001",
  email: "antdesign@alipay.com",
  signature: "海纳百川，有容乃大",
  title: "Interaction expert",
  group: "Ant Financial－Certain business group－Certain platform department－Certain technology department－UED",
};

const projectNotice = [
  {
    id: "xxx1",
    title: "Alipay",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
    description: "It is something internal, they cannot reach it, nor can they touch it.",
    updatedAt: "A few seconds ago",
    member: "Scientific brick-moving group",
    href: "",
    memberLink: "",
  },
  {
    id: "xxx2",
    title: "Angular",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
    description: "Hope is a good thing, maybe the best of things, and good things never die.",
    updatedAt: "6 Years ago",
    member: "The whole team is Daniel Wu",
    href: "",
    memberLink: "",
  },
  {
    id: "xxx3",
    title: "Ant Design",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png",
    description: "There are so many bars in town, but she just walked into my bar.",
    updatedAt: "A few seconds ago",
    member: "Chunibyo Girls Group",
    href: "",
    memberLink: "",
  },
  {
    id: "xxx4",
    title: "Ant Design Pro",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png",
    description: "At that time, I only thought about what I wanted, never about what I had.",
    updatedAt: "6 Years ago",
    member: "Programmer's daily life",
    href: "",
    memberLink: "",
  },
  {
    id: "xxx5",
    title: "Bootstrap",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png",
    description: "Winter is coming",
    updatedAt: "6 Years ago",
    member: "High-class design team",
    href: "",
    memberLink: "",
  },
  {
    id: "xxx6",
    title: "React",
    logo: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
    description: "Life is like a box of chocolates，The results are often unexpected",
    updatedAt: "6 Years ago",
    member: "Trick you into learning computer science",
    href: "",
    memberLink: "",
  },
];

const activities = [
  {
    id: "trend-1",
    updatedAt: "A few seconds ago",
    user: {
      name: "Qu Lili",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    },
    group: {
      name: "High-class design team",
      link: "http://github.com/",
    },
    project: {
      name: "June iteration",
      link: "http://github.com/",
    },
    template1: "at",
    template2: "New project",
  },
  {
    id: "trend-2",
    updatedAt: "A few seconds ago",
    user: {
      name: "Fu Xiaoxiao",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
    },
    group: {
      name: "High-class design team",
      link: "http://github.com/",
    },
    project: {
      name: "June iteration",
      link: "http://github.com/",
    },
    template1: "at",
    template2: "New project",
  },
  {
    id: "trend-3",
    updatedAt: "A few seconds ago",
    user: {
      name: "Lin Dongdong",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png",
    },
    group: {
      name: "Chunibyo Girls Group",
      link: "http://github.com/",
    },
    project: {
      name: "June iteration",
      link: "http://github.com/",
    },
    template1: "at",
    template2: "New project",
  },
  {
    id: "trend-4",
    updatedAt: "A few seconds ago",
    user: {
      name: "Zhou Xingxing",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png",
    },
    group: {
      name: "5 Monthly routine iteration",
      link: "http://github.com/",
    },
    template1: "will",
    template2: "Update to published status",
  },
  {
    id: "trend-5",
    updatedAt: "A few seconds ago",
    user: {
      name: "Zhu Pianyou",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png",
    },
    group: {
      name: "Engineering efficiency",
      link: "http://github.com/",
    },
    project: {
      name: "Leave a message",
      link: "http://github.com/",
    },
    template1: "at",
    template2: "Published",
  },
  {
    id: "trend-6",
    updatedAt: "A few seconds ago",
    user: {
      name: "Brother Le",
      avatar: "https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png",
    },
    group: {
      name: "Programmer's daily life",
      link: "http://github.com/",
    },
    project: {
      name: "Brand iteration",
      link: "http://github.com/",
    },
    template1: "at",
    template2: "New project",
  },
];

const radarContainer = ref();
const radarData = [
  {
    name: "Personal",
    label: "Quote",
    value: 10,
  },
  {
    name: "Personal",
    label: "Word of mouth",
    value: 8,
  },
  {
    name: "Personal",
    label: "Output",
    value: 4,
  },
  {
    name: "Personal",
    label: "Contribution",
    value: 5,
  },
  {
    name: "Personal",
    label: "Popularity",
    value: 7,
  },
  {
    name: "Team",
    label: "Quote",
    value: 3,
  },
  {
    name: "Team",
    label: "Word of mouth",
    value: 9,
  },
  {
    name: "Team",
    label: "Output",
    value: 6,
  },
  {
    name: "Team",
    label: "Contribution",
    value: 3,
  },
  {
    name: "Team",
    label: "Popularity",
    value: 1,
  },
  {
    name: "Department",
    label: "Quote",
    value: 4,
  },
  {
    name: "Department",
    label: "Word of mouth",
    value: 1,
  },
  {
    name: "Department",
    label: "Output",
    value: 6,
  },
  {
    name: "Department",
    label: "Contribution",
    value: 5,
  },
  {
    name: "Department",
    label: "Popularity",
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
            Good morning,
            {{ currentUser.name }}
            , wish you a happy day!
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
          <a-statistic title="Number of projects" :value="56" />
        </div>
        <div class="statItem">
          <a-statistic title="Team ranking" :value="8" suffix="/ 24" />
        </div>
        <div class="statItem">
          <a-statistic title="Project visits" :value="2223" />
        </div>
      </div>
    </template>

    <a-row :gutter="24">
      <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          class="projectList"
          :style="{ marginBottom: '24px' }"
          title="Projects in progress"
          :bordered="false"
          :loading="false"
          :body-style="{ padding: 0 }"
        >
          <template #extra>
            <router-link to="/">
              All projects
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
          title="Activity"
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
          :style="{ marginBottom: '24px' }"
          title="Quick start / Convenient navigation"
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
          <div class="chart">
            <div ref="radarContainer" />
          </div>
        </a-card>
        <a-card
          :body-style="{ paddingTop: '12px', paddingBottom: '12px' }"
          :bordered="false"
          title="Team"
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
