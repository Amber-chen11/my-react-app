const path = require("path");
const { CracoAliasPlugin } = require("react-app-rewire-alias");
 
module.exports = {
  // webpack 配置
  webpack: {
    // 配置内容
	 // 配置别名
	 alias: {
		// 约定：使用 @ 表示src 文件所在路径
		'@': path.resolve(__dirname, 'src')
	  }
  },
  // 配置别名
  plugins: [
    // 配置内容
  ],
};