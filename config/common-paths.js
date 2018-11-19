const path = require('path')

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'public'),
    root: path.resolve(__dirname),
    template: './src/index.html',
    favicon: './src/favicon.ico',
    rootPath: path.resolve('./src'),
    imagesPath: path.resolve('./src/img'),
    cssPath: path.resolve('./src/styles'),
    componentsPath: path.resolve('./src/components')
}
