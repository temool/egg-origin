'use strict';

module.exports = app => {
  app.config.coreMiddlewares.push('origin');
};
