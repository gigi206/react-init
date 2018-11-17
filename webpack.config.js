const webpackMerge = require('webpack-merge')
const commonConfig = require('./config/webpack.common.config')

module.exports = (env, argv) => {
    if (env === undefined) env = {}
    if (argv.mode === undefined) argv.mode = 'development'

    const determineAddons = (addons) => {
        return [...[addons]]
            .filter(addon => Boolean(addon))
            .map(addon => require(`./config/addons/webpack.${addon}.js`))
    }

    const envConfig = require(`./config/webpack.${argv.mode}.config`)

    return webpackMerge(commonConfig, envConfig, ...determineAddons(env.addons))
}