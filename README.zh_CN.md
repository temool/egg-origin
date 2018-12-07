# egg-origin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-origin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-origin
[travis-image]: https://img.shields.io/travis/eggjs/egg-origin.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-origin
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-origin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-origin?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-origin.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-origin
[snyk-image]: https://snyk.io/test/npm/egg-origin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-origin
[download-image]: https://img.shields.io/npm/dm/egg-origin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-origin

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-origin 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.origin = {
  enable: true,
  package: 'egg-origin',
};
```

## 配置插件
```js
// {app_root}/config/config.default.js
exports.origin = {
  whiteList: [http://foo.com', 'http://localhost:8080']
};
```
## 使用场景

- 目前 egg-cors 存在一定的局限性：
- 1、只能设置一个域名 或者 '*'，不能指定多个域名，维护一个白名单；
- 2、设置成'*'时，前端请求带 withCredentials: true 参数时，还是会跨域。
egg-origin 解决了以上问题，后期将会添加更多配置，是配置更灵活，满足不同的需求。


<!-- ## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。 -->

<!-- ## 单元测试 -->

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg-origin issues](https://github.com/temool/egg-origin/issues) 异步交流。

## License

[MIT](LICENSE)
