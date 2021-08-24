const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
	webpackFinal: async (baseConfig, options) => {
		// Modify or replace config. Mutating the original reference object can cause unexpected bugs.
		const { module = {} } = baseConfig;

		const newConfig = {
			...baseConfig,
			module: {
				...module,
				rules: [...(module.rules || [])],
			},
		};

		newConfig.resolve.plugins = newConfig.resolve.plugins || [];
		newConfig.resolve.plugins.push(
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, "../tsconfig.json"),
			})
		);

		// // TypeScript with Next.js
		// newConfig.module.rules.push({
		// 	test: /\.(ts|tsx)$/,
		// 	include: [path.resolve(__dirname, "../components"), path.resolve(__dirname, "../stories")],
		// 	use: [
		// 		{
		// 			loader: "babel-loader",
		// 			options: {
		// 				presets: ["next/babel"],
		// 				plugins: ["react-docgen"],
		// 			},
		// 		},
		// 	],
		// });
		// newConfig.resolve.extensions.push(".ts", ".tsx");

		return newConfig;
	},
};
