const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/index.js', // 入口文件
    output: { // 指定输出选项
        path: path.resolve(__dirname, 'build/'), // 输出路径
        filename: 'bundle.js' // 指定输出文件的名称
    },
    devServer: {
        host: '0.0.0.0',
        inline: true,
        port: 3333
    },
    module: {
        rules: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/,/\.ttf$/],
                loader: 'url-loader',
                options: {
                  limit: 10000, //1w字节以下大小的图片会自动转成base64
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html', //指定模板路径
            filename: 'main.html', //指定文件名
        })
    ]
}