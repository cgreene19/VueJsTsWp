const path = require('path');

module.exports = {
    entry: './app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};