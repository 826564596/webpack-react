/**开发环境 */
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { distPath, srcPath } = require("./path");
const path = require("path");
const webpack = require("webpack");
module.exports = merge(commonConfig, {
    mode: "development",
    entry: [path.join(srcPath, "index"), path.join(srcPath, "dev")],
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        port: 8000,
        hot: true,
        progress: true, // 显示打包的进度条
        contentBase: distPath, // 根目录
        open: true, // 自动打开浏览器
        compress: true, // 启动 gzip 压缩
    },
});
