module.exports = {
    entry: './js/index.js', // 入口文件路径
    output: {
        path: '/',
        filename: 'main.js'
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
    }
}