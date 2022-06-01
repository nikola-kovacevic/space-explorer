module.exports = {
  chainWebpack: (config) => {
    config.externals(["vue", "vue-router"]);
  },
  filenameHashing: false,
  configureWebpack: {
    module: {
      rules: [{ parser: { system: false } }],
    },
  },
};
