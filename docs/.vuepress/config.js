import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { recoTheme } from 'vuepress-theme-reco'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: "/",
  lang: "zh-cn",
  title: "幻心互联V3帮助文档",
  description: "适用于 幻心互联V3 的帮助文档",
  //head: [["link", { rel: "icon", href: "https://cdn.qwqo.cn" }]],
  head: [],
  bundler: viteBundler(),
  theme: recoTheme({
    navbar: [
      {
        text: "首页",
        link: "/main",
      },
      {
        text: "控制台",
        link: "https://app.2mc.shop",
      },
      "/contact",
    ],
    series: {
      "/": [
        "/main",
        "/contact",
        "/start",
        "/solution",
        "/buildId",
        "/how-to-ask",
        "/definition",
        {
          text: "账户",
          children: ["/account/main"],
        },
      ],
    },
  }),
});
