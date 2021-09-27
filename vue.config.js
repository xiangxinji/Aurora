const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  lintOnSave: false,
  outputDir: 'docs',
  publicPath: isProd ? 'https://xiangxinji.github.io/Aurora/' : '/',
  productionSourceMap: false,
};
