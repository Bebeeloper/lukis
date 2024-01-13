import { createSlice } from '@reduxjs/toolkit'

export interface LoginState {
  login: boolean
}

const initialState: LoginState = {
  login: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // signIn: (state) => {
    //   state.login = true;
    // },
    signIn: (state) => {      
      // if (action.payload[0] === 'kevind@admin.com' && action.payload[1] === '1234') {
        state.login = true;
      // }
    },
    logOut: (state) => {
      state.login = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { signIn, logOut } = loginSlice.actions

export default loginSlice.reducer