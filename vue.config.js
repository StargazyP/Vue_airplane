const { defineConfig } = require('@vue/cli-service')
var path = require("path");
module.exports = defineConfig({

  outputDir : path.resolve("../air_back"),
  devServer:{
    proxy:{
      '/api': {
        target: 'http://localhost:8080/api',
        changeOrigin: true,
        pathRewrite:{
          "^api" : ''
        }
      }
    }
  }
  // transpileDependencies: true
});
