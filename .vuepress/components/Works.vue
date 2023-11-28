<template>
  <div class="works__container">
    <MagicCard
      class="works__item"
      v-for="(item, index) in data"
      :key="index"
      @click="() => jumpLink(item.link)"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc1 }}</p>
      <p>{{ item.desc2 }}</p>
      <p>{{ item.desc3 }}</p>
      <p>{{ item.desc4 }}</p>
    </MagicCard>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    title: '💡 产品方向规划',
    desc1: '📄 确定产品方向和目标受众',
    desc2: '📄 市场调研竞品分析',
    desc3: '📄 初步的商业模式设计',
    desc4: '📄 估算项目成本和所需资源',
    link: '/blogs/other/guide'
  },
  {
    title: '🎨 产品设计开发',
    desc1: '📄 需求分析和文档编写',
    desc2: '📄 产品UI/UX设计',
    desc3: '📄 选择合适的技术栈和工具',
    desc4: '📄 管理时间、任务和进度',
    link: '/blogs/other/guide'
  },
  {
    title: '👩🏻‍💻 产品上架发布',
    desc1: '📄 法律和合规性审核材料准备',
    desc2: '📄 产品发布上架资源准备',
    desc3: '📄 产品发布渠道及发布流程',
    desc4: '📄 国内外公司营业执照办理',
    link: '/blogs/other/guide'
  },
  {
    title: '📕 产品运营推广',
    desc1: '📄 Build In Pubilc',
    desc2: '📄 社交媒体运营，广告推广',
    desc3: '📄 收集早期用户反馈，社群搭建',
    desc4: '📄 数据统计分析，产品迭代更新',
    link: '/blogs/other/guide'
  },
  {
    title: '💰 产品商业化变现',
    desc1: '📄 确定合适的盈利模式',
    desc2: '📄 定价策略及订阅回本预估',
    desc3: '📄 程序化广告',
    desc4: '📄 探索新市场和新客户群',
    link: '/blogs/other/guide'
  },
  {
    title: '📖 社区资源分享',
    desc1: '📄 产品灵感库',
    desc2: '📄 商业计划书模板',
    desc3: '📄 知识付费资源共享',
    desc4: '📄 线上社区交流分享',
    link: '/blogs/other/guide'
  },
]

const jumpLink = (link?: string) => {
  if (link) {
    window.open(link, '_self')
  }
}
</script>

<style scoped>
@import '@vuepress-reco/tailwindcss-config/lib/client/styles/tailwindcss-base.css';

.works__container {
  @apply grid grid-cols-1 gap-4 max-w-screen-lg mx-auto my-16 px-6;
  margin-top: 0px !important;
  @apply md:grid-cols-3;
  .works__item {
    @apply py-4 px-6 cursor-pointer;
    h3 {
      @apply mt-0 mb-4 pt-0;
    }
    p {
      @apply my-2 text-lighter;
    }
  }
}
</style>