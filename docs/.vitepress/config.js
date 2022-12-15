import { defineConfig } from 'vitepress';
export default defineConfig({
  base: '/StaticBlog/',
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/assets/favicon.ico" }]
  ],
  title: 'test',
  description: 'A VitePress site',
  themeConfig: {
    logo: '/test.jpg',
    siteTitle: '昨天太近，明天太远',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dez0514' }
    ],
    nav: [
      { text: "Guide", link: "" },
      { text: "GuideTest", link: "" },
      {
        text: "Drop Menu",
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' }
        ]
      }
    ],
    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧'
    }
  }
})