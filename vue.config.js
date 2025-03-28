const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Esta linha desativa o ESLint completamente durante o desenvolvimento
  lintOnSave: false,
  
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    port: 8080,
    open: true
  }
})