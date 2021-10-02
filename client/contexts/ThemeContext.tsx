import { createContext, FC, useState, Dispatch, SetStateAction } from "react";

export interface ThemeContextState {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext({} as ThemeContextState);

export const ThemeProvider: FC = ({ children }) => {
	const [dark, setDark] = useState(false);

	return <ThemeContext.Provider value={{ dark , setDark }}>{children}</ThemeContext.Provider>;
};
