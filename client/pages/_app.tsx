import axios from "axios";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { ThemeProvider } from "../contexts/ThemeContext";
import { UserProvider } from "../contexts/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<SWRConfig
				value={{ fetcher: (url: string) => axios.get("http://localhost:8000" + url).then((res) => res.data) }}
			>
				<UserProvider>
					<ThemeProvider>
						<Component {...pageProps} />
					</ThemeProvider>
				</UserProvider>
			</SWRConfig>
		</Layout>
	);
}
export default MyApp;
