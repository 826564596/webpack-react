/**生产环境 */
const { smart } = require("webpack-merge");
const commonConfig = require("./webpack.common");
module.exports = smart(commonConfig, {});
