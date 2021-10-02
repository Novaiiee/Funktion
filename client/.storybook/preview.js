import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	layout: "fullscreen",
};

export const decorators = [
	(Story) => (
		<ThemeProvider>
			<Story />
		</ThemeProvider>
	),
];