import { createContext } from "react";
import { iconsArrayType, incomesArrayType, themeType } from "../types/Types";

export const themeContext = createContext<themeType>({} as themeType);

export const incomesContext = createContext<incomesArrayType>({} as incomesArrayType);

export const iconArrayContext = createContext<iconsArrayType>({} as iconsArrayType);