#### 项目的根路径 base 需要和库名称保持一致 'StaticBlog'
#### github Actions 配置：
1. 参考： https://blog.csdn.net/lancemao/article/details/126497147
2. 监听main分支推送，如有推送，执行yml, 打包代码，并将打包文件dist中的所有文件复制放到 gh-pages分支
（需等待几分钟，才能看到部署状态）io页面读取 gh-pages 分支根目录。
#### 分支代码管理：（切勿合并）
main分支： 开发代码。
gh-pages分支： 打包代码。

#### 参考：
https://vitejs.cn/vitepress/guide/getting-started.html
https://juejin.cn/post/7134027820413485064 【看这个】
http://www.soiiy.com/Vue-js/6113643.html
https://www.cncsto.com/article/81539

#### 源码：
https://github.com/vuejs/vitepress
#### 看源码也很有必要：
1. config.js 或者 md 中很多配置，可以不是string，例如：一些图片的配置（logo），想加圆角，其实可以直接传对象带style
2. 许多地方都预留了插槽，如有需要也可以根据插槽名称配置。例如：头部标题前后都有插槽，前后都可以加内容。

#### 模块：
首页
文章
归档
关于