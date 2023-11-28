import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Decohack-Wiki",
  description: "Indie Hacker Guide",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    colorMode: "dark",
    logo: "/logo.png",
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
      ["script", { src: "scripts/demo.js" }],
    ],
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    // series 为原 sidebar
    navbar: [
      // { text: "Home", link: "/" },
      {
        text: "独立开发者完全手册",
        children: [
          { text: "💡 产品方向规划",
            link: "/docs/guide/01-产品方向规划/01-市场调研竞品分析.md",},

          { text: "🎨 产品设计开发",
            link: "/docs/guide/02-产品设计开发/01-产品设计.md",},
            
          { text: "👩🏻‍💻 产品上架发布", 
            link: "/docs/guide/03-产品上架发布/testt.md/" },

          { text: "📕 产品运营推广", 
            link: "/docs/guide/04-产品运营推广/" },

          { text: "💰 产品商业化变现", 
            link: "/docs/guide/05-产品商业化变现/" },

          { text: "📖 社区资源分享", 
            link: "/docs/guide/06-社区资源分享/" },
        ],
      },
      { text: "更新记录", link: "/timeline/", icon: "reco-date" },
      { text: "友情链接", link: "/friendship-link/", icon: "reco-date" },
    ],

    // series 为原 sidebar
    series: {
      "/docs/guide/": [
        {
          text: "💡 产品方向规划",
          children: [
            "/docs/guide/01-产品方向规划/01-市场调研竞品分析.md",
            "/docs/guide/01-产品方向规划/02-确定产品方向和目标受众.md",
          ],
        },
        {
          text: "🎨 产品设计开发",
          children: [
            "/docs/guide/02-产品设计开发/01-产品设计.md",
            "/docs/guide/02-产品设计开发/02-产品开发.md",
            ],
        // collapsible: true, 
        },
        {
          text: "👩🏻‍💻 产品上架发布",
          children: ["调研竞品分析"],
        },
      ],
    },

    friendshipLinks: [
      {
        title: "Decohack 周刊",
        logo: "/logo.png",
        link: "https://www.decohack.com",
      },
      {
        title: "Decohack 周刊",
        logo: "/logo.png",
        link: "https://www.decohack.com",
      },
      {
        title: "Decohack 周刊",
        logo: "/logo.png",
        link: "https://www.decohack.com",
      },
      {
        title: "Decohack 周刊",
        logo: "/logo.png",
        link: "https://www.decohack.com",
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `Decohack Wiki 独立开发者手册正在更新中，如果有任何问题请扫描下方微信联系我`,
          style: "font-size: 13px;",
        },
        {
          type: "title",
          content: `<img src="/wechat.png" alt="Decohack-Wiki">`,
        },
        {
          type: "title",
          content: `wechat: viggoz`,
          style: "font-size: 13px; text-align: center;color: rgba(235, 235, 245, .6);",
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
