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
    ["link", { rel: "icon", href: "/favicon.ico" }]
  ],
  title: "static blog",
  description: 'A VitePress Site',
  themeConfig: {
    logo: { // string | object
      src: '/test.jpg',
      style: 'border-radius: 50%'
    },
    siteTitle: '昨天太近，明天太远',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dez0514' }
    ],
    nav: [
      { text: "文章", link: "/article" },
      { text: "归档", link: "/archive" },
      { text: "关于", link: "/about" },
      // {
      //   text: "Drop Menu",
      //   items: [
      //     { text: 'ItemA', link: '' },
      //     { text: 'ItemB', link: '' }
      //   ]
      // }
    ],
    footer: {
      message: '独揽月下萤火，照亮一纸寂寞',
      copyright: 'enjoy'
    }
  }
})