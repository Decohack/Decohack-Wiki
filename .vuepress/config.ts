import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
// import { copyrightPlugin } from "vuepress-plugin-copyright2";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Decohack Wiki",
  description: "帮助有想法的人做出自己的产品,结合AI技术设计落地运营自己的互联网产品,帮助更多的人找到适合自己的利基(Niche)市场.",
  head: [
          ["link", { rel: "icon", href: "/resource/favicon.ico" }],
          [
            "script",
            {
              async: true,
              src: "https://eu.umami.is/script.js",
              "data-website-id": "5fe322a1-472a-4f0d-8fd1-755a963f0d6d",
            },
          ],
          ["meta",{ property: "og:title", content: "独立开发者实践手册 - Decohack Wiki" }],
          ["meta",{ property: "og:description", content: "帮助有想法的人做出自己的产品,结合AI技术设计落地运营自己的互联网产品,帮助更多的人找到适合自己的利基(Niche)市场." }],
          ["meta",{ property: "og:image", content: "/resource/og.jpg" }],
          ["meta",{ property: "og:url", content: "https://wiki.decohack.com" }],
          ["meta",{ property: "og:type", content: "website" }],
          // twitter
          ["meta",{ name: "twitter:card", content: "summary_large_image" }],
          ["meta",{ property: "twitter:domain", content: "wiki.decohack.com" }],
          ["meta",{ property: "twitter:url", content: "https://wiki.decohack.com" }],
          ["meta",{ name: "twitter:title", content: "独立开发者实践手册 - Decohack Wiki" }],
          ["meta",{ name: "twitter:description", content: "帮助有想法的人做出自己的产品,结合AI技术设计落地运营自己的互联网产品,帮助更多的人找到适合自己的利基(Niche)市场." }],
          ["meta",{ name: "og:image", content: "/resource/og.jpg" }],
        ],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    colorMode: "dark",
    logo: "/resource/logo.png",
    author: "viggo",
    docsBranch: "master",
    docsDir: "example",
    lastUpdatedText: "",
    primaryColor: "#6F7DFF",
    head: [
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
        },
      ],
      [
        "script",
        { 
          src: "scripts/demo.js" 
        },
      ],
    ],
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },

    // plugins: [
    //   copyrightPlugin({
    //     author: "Decohack",
    //     license: "CC0",
    //     global: true,
    //     triggerLength: 200,
    //     // disableCopy: true,
    //     disableSelection: true,
    //   }),
    // ],

    navbar: [
      // { text: "Home", link: "/" },
      {
        text: "独立开发者实践手册",
        children: [
          { text: "💡 产品方向规划",
            link: "/docs/guide/01-产品方向规划/01-寻找产品灵感.md",},

          { text: "🎨 产品设计开发",
            link: "/docs/guide/02-产品设计开发/01-需求分析和文档编写.md",},
            
          { text: "👩🏻‍💻 产品上架发布", 
            link: "/docs/guide/03-产品上架发布/01-法律和合规性审核材料准备.md" },

          { text: "📕 产品运营推广", 
            link: "/docs/guide/04-产品运营推广/01-Build In Pubilc.md" },

          { text: "💰 产品商业化变现", 
            link: "/docs/guide/05-产品商业化变现/01-确定合适的盈利模式.md" },

          { text: "📖 社区资源分享", 
            link: "/docs/guide/06-社区资源分享/01-产品灵感库.md" },
        ],
      },
      { text: "博客", link: "/posts/",},
      // { text: "更新记录", link: "/timeline/", icon: "reco-date" },
      { text: "更新记录", link: "/blogs/other/release.md"},
      { text: "共建人", link: "/friendship-link/", icon: "reco-date" },
      { text: "Github", link: "https://github.com/Decohack/Decohack-Wiki", icon: "LogoGithub" },
    ],

    // series 为原 sidebar
    series: {
      "/docs/guide/": [
        '/docs/guide/index.md',
        "/docs/guide/信息搜索实操秘技.md",
        "/docs/guide/全平台翻译工具使用.md",
        {
          text: "产品方向规划 💡",
          children: [
            "/docs/guide/01-产品方向规划/01-寻找产品灵感.md",
            "/docs/guide/01-产品方向规划/02-市场调研竞品分析.md",
            "/docs/guide/01-产品方向规划/03-确定产品方向和目标受众.md",
            "/docs/guide/01-产品方向规划/04-初步的商业模式设计.md",
            "/docs/guide/01-产品方向规划/05-估算项目成本和所需资源.md",
          ],
        // collapsible: true, 
        },
        {
          text: "产品设计开发 🎨",
          children: [
            "/docs/guide/02-产品设计开发/01-需求分析和文档编写.md",
            "/docs/guide/02-产品设计开发/02-产品UI-UX设计.md",
            "/docs/guide/02-产品设计开发/03-选择合适的技术栈和工具.md",
            "/docs/guide/02-产品设计开发/04-管理时间、任务和进度.md",
            ],
        },
        {
          text: "产品上架发布 👩🏻‍💻",
          children: [
            "/docs/guide/03-产品上架发布/海外产品发布渠道.md",
            "/docs/guide/03-产品上架发布/01-法律和合规性审核材料准备.md",
            "/docs/guide/03-产品上架发布/02-产品发布上架资源准备.md",
            "/docs/guide/03-产品上架发布/03-产品发布渠道及发布流程.md",
            "/docs/guide/03-产品上架发布/04-国内外公司营业执照办理.md",
            ],
        },
        {
          text: "产品运营推广 📕",
          children: [
            "/docs/guide/04-产品运营推广/01-Build In Pubilc.md",
            "/docs/guide/04-产品运营推广/02-社交媒体运营广告推广.md",
            "/docs/guide/04-产品运营推广/03-收集早期用户反馈社群搭建.md",
            "/docs/guide/04-产品运营推广/04-数据统计分析产品迭代更新.md",
            ],
        },
        {
          text: "产品商业化变现 💰",
          children: [
            "/docs/guide/05-产品商业化变现/01-确定合适的盈利模式.md",
            "/docs/guide/05-产品商业化变现/02-定价策略及订阅回本预估.md",
            "/docs/guide/05-产品商业化变现/03-程序化广告.md",
            "/docs/guide/05-产品商业化变现/04-探索新市场和新客户群.md",
            ],
        },
        {
          text: "社区资源分享 👩🏻‍💻",
          children: [
            "/docs/guide/06-社区资源分享/01-产品灵感库.md",
            "/docs/guide/06-社区资源分享/02-商业计划书模板.md",
            "/docs/guide/06-社区资源分享/03-知识付费资源共享.md",
            "/docs/guide/06-社区资源分享/04-线上社区交流分享.md",
            ],
        },
      ],
    },


    friendshipLinks: [
      {
        title: "viggo",
        description: "移动互联网出海，Indie Hacker，设计师，Decohack/Webstack作者",
        logo: "/resource/friendship/viggo.jpg",
        link: "https://x.com/decohack",
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `Decohack Wiki 独立开发者手册正在更新中。`,
          style: "font-size: 13px;font-weight: 600;",
        },
        // {
        //   type: "hr",
        // },
        {
          type: "text",
          content: `如果你有兴趣参与共建 Wiki，请扫描下方微信联系我`,
          style: "font-size: 13px;font-weight: 600;",
        },
        {
          type: "title",
          content: `<img src="/resource/wechat.png" alt="Decohack-Wiki">`,
        },
        {
          type: "title",
          content: `wechat: viggoz`,
          style: "font-size: 13px; text-align: left;color: rgba(235, 235, 245, .6);",
        },
      ],
    },
    
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
