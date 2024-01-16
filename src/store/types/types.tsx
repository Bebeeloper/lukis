export interface User {
    username: string,
    password: string,
}

export interface userState {
    loadingLogin: boolean,
    token: string,
    errorLogin: string | undefined
}