import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { User, userState } from './types/types';
import { EXPO_PUBLIC_API_BASEURL } from "@env";

const initialState: userState = {
  loadingLogin: false,
  access_token: '',
  errorLogin: ''
}

export const loginPost = createAsyncThunk('user/loginPost', async (user: User) => {

    const response = await axios.post(`${EXPO_PUBLIC_API_BASEURL}/users/login`, {
        data: {
            email: user.email,
            password: user.password
        }
    }, 
    {
        headers: {
            'Content-Type': 'application/json'
        }
    });    

    return response.data;

});

export const userSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
     
  },
  extraReducers: (builder) =>{
    builder.addCase(loginPost.pending, (state) => {
        state.loadingLogin = true;
        state.errorLogin = '';
    });
    builder.addCase(loginPost.fulfilled, (state, action) => {
        state.loadingLogin = false;
        state.access_token = action.payload.access_token;
        state.errorLogin = '';
    });
    builder.addCase(loginPost.rejected, (state, action) => {
        state.loadingLogin = false;
        state.access_token = '';
        state.errorLogin = action.error.message;
    });
  }
})

// Action creators are generated for each case reducer function
// export const { signIn, logOut } = loginSlice.actions

export default userSlice.reducer