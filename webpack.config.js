const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        watchContentBase: true,
        progress: true,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/public/index.html"
        })
    ],
}