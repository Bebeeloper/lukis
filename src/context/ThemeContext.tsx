import { createContext } from "react";
import { iconsArrayType, incomesArrayType, incomesSearchedArrayType, themeType, totalMoneyType } from "../types/Types";

export const themeContext = createContext<themeType>({} as themeType);

export const incomesContext = createContext<incomesArrayType>({} as incomesArrayType);

export const incomesSearchedContext = createContext<incomesSearchedArrayType>({} as incomesSearchedArrayType);

export const iconArrayContext = createContext<iconsArrayType>({} as iconsArrayType);

export const totalMoneyContext = createContext<totalMoneyType>({} as totalMoneyType);