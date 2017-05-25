const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        main:'./src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        //将组件中的css提取出来而不是直接放到html页面的style标签中
                        css: ExtractTextPlugin.extract({
                            loader: 'css-loader',
                            fallbackLoader: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                //将页面中引入的css文件单独提取出来而不是打包到js中
                use: ExtractTextPlugin.extract({
                    use: "css-loader" 
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: { limit: 8192 }

            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
    ],
    devtool: "source-map", //通过在浏览器调试工具中添加元信息（meta info）增强调试，牺牲了构建速度的'source-map'是最详细的
    devServer: {
        publicPath: "/dist/",
        historyApiFallback: true,
        compress: true,
        inline: true,
    }
};

module.exports = config;