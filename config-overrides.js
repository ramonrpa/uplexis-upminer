// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line no-undef
const resolve = (dir) => path.resolve(__dirname, dir);

// eslint-disable-next-line no-undef
module.exports = function (config) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '~': resolve('src/'),
  });

  return config;
};
