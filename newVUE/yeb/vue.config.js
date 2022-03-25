/*
 * @Author: your name
 * @Date: 2022-03-08 16:31:33
 * @LastEditTime: 2022-03-16 09:16:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端项目test\newVUE\yeb\vue.config.js
 */

module.exports = {

  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
