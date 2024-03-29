// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv')
const webpack = require('webpack')

dotenv.config();

module.exports = {
    entry: './src/index.js', // webpack 최초 진입점(엔트리 포인트) 파일 경로를 설정합니다.
    output: { // webpack을 실행한 후의 결과물의 이름/경로 등을 설정합니다.
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // 번들링 파일을 주입하여 번들링 폴더로 복사할 대상 HTML 파일을 설정합니다.
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, // 해당 파일명으로 끝나면 babel-loader가 처리
                exclude: /node_modules/, // node_modules는 대상에서 제외
                loader: "babel-loader", // 바벨 로더 추가
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: { // webpack-dev-server 옵션을 설정합니다.
        port: "5001",
        static: path.resolve(__dirname, 'dist'),
        historyApiFallback: {
            index: '/index.html',
        },
        hot: true, // 모듈 전체를 다시 로드하지 않고 변경된 사항만 갱신합니다.
    },
    resolve: { // resolve: import를 할 때 확장자를 생략할 수 있습니다.
        extensions: ['.jsx', '.js'],
    },
};