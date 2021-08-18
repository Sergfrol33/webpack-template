const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'
let target = 'web'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
    target='browserslist'
}

module.exports = {
    mode: mode,
    target: target,
    devtool: 'source-map',
    output: {
        assetModuleFilename: "assets/[hash][ext][query]"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/inline'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: ""}
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".js",'.jsx','.ts','.tsx']
    },
    devServer: {
        contentBase: "./dist",
        port: 3000,
        hot: true
    },
}