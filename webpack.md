## 5

## 1 webpack 常见优化

- thread-loader
  多进程打包，可以大大提高构建的速度，使用方法是将 ​​thread-loader​​ 放在比较费时间的 loader 之前，比如 ​​babel-loader​​
- cache-loader
  缓存资源，提高二次构建的速度，使用方法是将 ​​cache-loader​​ 放在比较费时间的 loader 之前，比如 ​​babel-loader​​
- exclude & include
  ​​ exclude​​：不需要处理的文件， include​​：需要处理的文件
- 区分环境
  ​​ 开发环境 ​​：去除代码压缩、gzip、体积分析等优化的配置，大大提高构建速度
  ​​ 生产环境 ​​：需要代码压缩、gzip、体积分析等优化的配置，大大降低最终项目打包体积
- 代码压缩
- 小图转 base64
  对于一些小图片，可以转 base64，这样可以减少用户的 http 网络请求次数，提高用户的体验。​​webpack5​​ 中 ​​url-loader​​ 已被废弃，改用 ​​asset-module​​
- 合理配置 hash
  新的资源可以避免命中缓存

## 2 webpack Plugin 和 Loader 的区别

Loader：
用于对模块源码的转换，loader 描述了 webpack 如何处理非 javascript 模块，并且在 buld 中引入这些依赖。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或者将内联图像转换为 data URL。比如说：CSS-Loader，Style-Loader 等。

Plugin
目的在于解决 loader 无法实现的其他事,它直接作用于 webpack，扩展了它的功能。在 webpack 运行的生命周期中会广播出许多事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。

## webpack 打包原理
