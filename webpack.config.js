const path = require('path')
const root = path.resolve(__dirname, './')

module.exports = {
    entry: `${root}/demo/index.js`,
    output: {
        path: `${root}/demo`,
        filename: 'main.js'
    }
}
