import axios from "axios";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { UserProvider } from "../contexts/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<SWRConfig
				value={{ fetcher: (url: string) => axios.get("http://localhost:8000" + url).then((res) => res.data) }}
			>
				<UserProvider>
					<Component {...pageProps} />
				</UserProvider>
			</SWRConfig>
		</Layout>
	);
}
export default MyApp;