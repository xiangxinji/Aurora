/* eslint-disable @typescript-eslint/no-var-requires,global-require */
// @ts-ignore
import Mock from 'mockjs';

const path = require('path');

Mock.setup({
  timeout: 0,
});
const servicesFiles = require.context('./services', true, /\.ts$/);

servicesFiles.keys().forEach((modulePath) => {
  // eslint-disable-next-line import/no-dynamic-require
  require(`./services/${path.join(modulePath)}`);
});
