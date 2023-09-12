import { createContext } from "react";
import { incomesArrayType, themeType } from "../types/Types";

export const themeContext = createContext<themeType>({} as themeType);

export const incomesContext = createContext<incomesArrayType>({} as incomesArrayType);