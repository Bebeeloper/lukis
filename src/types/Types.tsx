export type themeType = {
    mode: boolean;
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export type incomesType = {
    incomes: {
        id: number,
        name: string,
        description: string,
        price: number,
        date: string,
        category: string
    }[]
}

export type incomeType = {
    id: string,
    name: string,
    description: string,
    price: string,
    date: string,
    category: string
}

export type iconsType = {
    icons: {
        name: string,
        color: string,
        text: string,
        background: string
    }[]
}

export type incomesArrayType = {
    incomesArray: incomesType
    setIncomesArray: React.Dispatch<React.SetStateAction<incomesType>>
}

export type incomesSearchedArrayType = {
    incomesSearchedArray: incomesType
    setIncomesSearchedArray: React.Dispatch<React.SetStateAction<incomesType>>
}

export type iconsArrayType = {
    iconCategoryArray: iconsType, 
    setIconCategoryArray: React.Dispatch<React.SetStateAction<iconsType>> 
}

export type totalMoneyType = {
    totalMoney: number,
    setTotalMoney: React.Dispatch<React.SetStateAction<number>>
}
