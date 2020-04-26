var path = require('path')
var HtmlWepackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWepackPlugin({
            template: './src.index.html'

        }) 
    ]
}