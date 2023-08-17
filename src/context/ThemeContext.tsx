import { createContext } from "react";
import { themeType } from "../types/Types";

export const themeContext = createContext<themeType>({} as themeType);