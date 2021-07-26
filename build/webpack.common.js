/**公共配置项 */
const { srcPath, publicPath } = require("./path");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(srcPath, "index"),
    resolve: {
        //识别文件名后缀
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
                include: srcPath,
                exclude: /node_modules/,
            },

            {
                test: /\.(ts|tsx)$/,
                use: ["babel-loader", "ts-loader"],
                include: srcPath,
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|svg|jpeg)$/,
                use: ["url-loader"],
                include: srcPath,
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(publicPath, "index.html"),
            filename: "index.html",
        }),
    ],
};
