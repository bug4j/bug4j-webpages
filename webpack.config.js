const CopyWeboackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.export = {
    plugins: process.env.NODE_ENV === 'production' ? [] : [ new CopyWeboackPlugin({
        from: path.resolve(__dirname, 'samples'),
        to: path.resolve(__dirname, 'dist'),
    })]
}