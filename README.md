# iyuban-backend

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Dev of vux

先将vux模块link到全局：

```
$ cd vux
$ npm link
```

接下来将全局的vux模块引入到当前开发环境

```
$ cd project
$ npm link vux
```
