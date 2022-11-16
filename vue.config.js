const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: "http://localhost:3000",
  },
  // 跨域的代理中转服务器服务
  // proxyTable: {
  //   // '/api'会拦截axios请求中带有/api的请求
  //   "/api": {
  //     target: "http://localhost:3000/", // 后端接口的根目录
  //     // secure: true,                       // 如果是 https ,需要开启这个选项
  //     changeOrigin: true, // 是否跨域
  //     pathRewrite: {
  //       // 重写路径
  //       "^/api": "",
  //       // '^/api': '/api' ---> localhost:8080/api/auth/ 通过代理服务器访问 localhost:8081/api/auth/
  //       // '^/api': ''     ---> localhost:8080/api/auth/ 通过代理服务器访问 localhost:8081/auth/
  //     },
  //   },
  // },

  transpileDependencies: true,
  publicPath: "./",
});
