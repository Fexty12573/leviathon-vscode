
const extendBaseConfig = require('../base.webpack.config');
const path = require('path');

module.exports = extendBaseConfig({
    context: __dirname,
    entry: { extension: './src/debugger.ts' },
    output: {
        filename: 'debugger.js',
        path: path.join(__dirname, 'out')
    }
});