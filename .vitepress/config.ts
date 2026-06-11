import { defineConfig } from "vitepress";

export default defineConfig({
  title: "VitePress Site",
  description: "Created by VitePress-CMS",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
      ],
    },
    search: {
      provider: "local",
    },
    footer: {
      message: "Powered by VitePress-CMS",
      copyright: "Copyright 2026",
    },
  },
});
