const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Desativa o ESLint completamente durante o desenvolvimento
  lintOnSave: false,
  
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    port: 8080,
    open: true
  },
  
  // Configuração para lidar com arquivos PDF
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'assets/'
      });
  }
})