/**

   【自定义允许跨域】：Access-Control-Allow-Origin

   配置方法：
    1.在对应环境的配置文件中（config.[env].js）配置
    2.中间件配置
      config.middleware = [ 'customOrigin' ];
      config.customOrigin = {
        whiteList: [ 'http://localhost:9088', 'http://test.com' ]
      };
      whiteList 参数必须为数组，传入允许跨域的白名单

    3. config.cors (*****这个配置项一定要有******)
    config.cors = {
      origin: [ 'http://pas-web.guazi-cloud.com' ],
    };
    这里 origin必须为数组，可以传任意数组，包括空数组[]
 */
'use strict';

module.exports = options => {
  const { whiteList } = options;
  /**
     * 如果传入的不是数组，直接抛出错误
     *  */
  if (!Array.isArray(whiteList)) {
    throw Error('---------跨域白名单必须设置为数组----------');
  }

  return async function setOrigin(ctx, next) {
    const { origin } = ctx.request.header;
    if (whiteList.indexOf(origin) > -1) {
      ctx.response.set('Access-Control-Allow-Origin', origin);
    }
    await next();
  };
};
