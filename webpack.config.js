const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')

let mode = 'development'
let target = 'web'

let plugins = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
        template: "./public/index.html"
    })
]
const optimization = {
    splitChunks: {
        cacheGroups: {
            vendors:{
                name: 'vendors',
                test: /node_modules/,
                chunks: "all",
                enforce: true
            }
        }
    },
    minimizer: []
}
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
    target='browserslist'
    optimization.minimizer.push(new UglifyJsPlugin())
} else {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new ESlintPlugin({cache:true,extensions: ['js','jsx','ts','tsx']}))
}

module.exports = {
    mode: mode,
    target: target,
    devtool: 'source-map',
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: "assets/[hash][ext][query]"
    },
    module: {
        rules: [
            //assets
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset'
            },
            //Style-loader
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
            //TS-loader
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            //Babel-loader
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: [".js",'.jsx','.ts','.tsx']
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        port: 3000,
        hot: true,
        historyApiFallback: true,
        open: true
    },
    optimization: optimization
}