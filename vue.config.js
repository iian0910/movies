const IN_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: IN_PRODUCTION ? '/movies/' : '/',
}

