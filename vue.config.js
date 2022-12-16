// const { defineConfig } = require('@vue/cli-service')
const IN_PRODUCTION = process.env.NODE_ENV === "production";

// module.exports = defineConfig({
//   publicPath: IN_PRODUCTION ? '/movies/' : '/',
//   transpileDependencies: true
// })

module.exports = {
  publicPath: IN_PRODUCTION ? '/movies' : '/',
}

