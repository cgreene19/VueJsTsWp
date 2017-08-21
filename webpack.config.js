const path = require('path');

module.exports = {
    entry: './app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [ 
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/],
              }
        },]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};