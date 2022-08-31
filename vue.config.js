const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0]["process"] = { ...args[0]["process"] };
      return args;
    });
  },
  devServer: {
    proxy: {
      [process.env.VUE_APP_API]: {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_API]: "",
        },
      },
    },
  },
});
