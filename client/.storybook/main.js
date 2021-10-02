const path = require("path");
module.exports = {
	stories: [
		// Paths to the story files
		"../components/stories/*.stories.mdx",
		"../components/stories/*.stories.tsx",
	],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-formik/register"],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\,css&/,
			use: [
				{
					loader: "postcss-loader",
					options: {
						ident: "postcss",
						plugins: [require("tailwindcss"), require("autoprefixer")],
					},
				},
			],
			include: path.resolve(__dirname, "../"),
		});
		return config;
	},
};
