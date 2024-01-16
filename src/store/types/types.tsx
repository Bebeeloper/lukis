export interface User {
    email: string,
    password: string,
}

export interface userState {
    loadingLogin: boolean,
    access_token: string,
    errorLogin: string | undefined
}