/**文件夹路径 */
const path = require("path");

//根文件夹路径 ..表示上一层目录
const srcPath = path.join(__dirname, "..", "src");
//输出文件夹路径
const distPath = path.join(__dirname, "..", "dist");
//index文件夹路径
const publicPath = path.join(__dirname, "..", "public");
module.exports = {
    srcPath,
    distPath,
    publicPath,
};
