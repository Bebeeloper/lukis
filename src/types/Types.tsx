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

export type incomesArrayType = {
    incomesArray: incomesType
    setIncomesArray: React.Dispatch<React.SetStateAction<incomesType>>
}