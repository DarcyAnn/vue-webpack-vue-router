# vue-webpack-vue-router
A single page application staging with vue, webpack and vue-router.

``` 
.
├── index.html
├── package.json
├── webpack.config.js
│ 
└── src
    ├─main.js    项目入口js文件
    ├─route-config.js    路由配置文件
    ├─assets    公共静态资源
    │  ├─images
    │  └─styles
    ├─common    无npm包的第三方插件
    ├─components    公共组件，比如可复用的按钮等
    ├─services    将所有后端提供的api封装成方法，返回promise对象
    ├─util    自定义的公共方法
    └─views    页面
        ├─App.vue    根vue组件
        ├─DetailPage    页面1
        │  ├─DetailPage.vue
        │  └─ ...
        └─HomePage    页面2
           ├─HomePage.vue
           └─ ...
        
```
