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

## Install

```bash
$ npm i egg-origin --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.origin = {
  enable: true,
  package: 'egg-origin',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.origin = {
  whiteList: []
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example
exports.origin = {
  whiteList: ['http://foo.com', 'http://localhost:8080']
};
<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/temool/egg-origin/issues).

## License

[MIT](LICENSE)
