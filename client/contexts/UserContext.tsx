import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/dist/client/router";
import { createContext, FC, useCallback, useEffect, useState } from "react";

export interface UserContextState {
	register: (v: FormValues) => void;
	login: (v: FormValues) => void;
	logout: () => void;
	user: User | null;
	authErrors: string[];
}

interface AuthResponse {
	user: User;
	token: string;
}

export const UserContext = createContext({} as UserContextState);

export const UserProvider: FC = ({ children }) => {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [authErrors, setAuthErrors] = useState<string[]>([]);
	const [hasLoggedOut, setHasLoggedOut] = useState(false);

	const requestCallback = (res: AxiosResponse<AuthResponse>) => {
		const data = res.data;

		setUser({ ...data.user });
		setAuthErrors([]);
		localStorage.setItem("FUNKTION_ACCESS_TOKEN", data.token);

		router.push("/dashboard/todos");
	};

	
	const logout = () => {
		setHasLoggedOut(true);
		setUser(null);
		setAuthErrors([]);

		localStorage.removeItem("FUNKTION_ACCESS_TOKEN");
		router.push("/");
	};

	const register = (values: FormValues) => {
		axios
			.post<FormValues, AxiosResponse<AuthResponse>>("http://localhost:8000/auth/register", {
				name: values.name,
				email: values.email,
				password: values.password,
			})
			.then(requestCallback)
			.catch((error) => {
				if (error.response) {
					console.log(error.response.data);
					setAuthErrors([...authErrors, error.response.data]);
				}
			});
	};

	const login = (values: FormValues) => {
		axios
			.post<FormValues, AxiosResponse<AuthResponse>>("http://localhost:8000/auth/login", {
				email: values.email,
				password: values.password,
			})
			.then(requestCallback)
			.catch((e) => {
				if (e.response) {
					const alreadyExists = authErrors.find((error) => error === e.response.data.error);
					if (!alreadyExists) setAuthErrors([...authErrors, e.response.data.error]);
				}
			});
	};

	const startupLogin = useCallback(
		(token: string) => {
			axios
				.get<AuthResponse>("http://localhost:8000/auth/user", {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => {
					const data = res.data;
					setUser({ ...data.user });

					router.push("/dashboard/todos");
				})
				.catch(() => {
					return;
				});
		},
		[router]
	);

	useEffect(() => {
		const token = localStorage.getItem("FUNKTION_ACCESS_TOKEN");

		if (hasLoggedOut || !token) router.push("/");
		else startupLogin(token);
	}, [startupLogin, hasLoggedOut, router]);

	return (
		<UserContext.Provider value={{ logout, authErrors, user, register, login }}>
			{children}
		</UserContext.Provider>
	);
};
