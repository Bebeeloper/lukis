import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export interface User {
    username: string,
    password: string,
}

export interface userState {
  loading: boolean,
  user: User,
  error: string | undefined
}

const initialState: userState = {
  loading: false,
  user: {
    username: '',
    password: ''
  },
  error: ''
}

export const loginPost = createAsyncThunk('user/loginPost', async (user: User) => {

    const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: user.username,
        password: user.password
    }, 
    {
        headers: {
            'Content-Type': 'application/json'
        }
    });    

    return response.data;

});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     
  },
  extraReducers: (builder) =>{
    builder.addCase(loginPost.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(loginPost.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = '';
    });
    builder.addCase(loginPost.rejected, (state, action) => {
        state.loading = false;
        state.user = {username: '', password: ''};
        state.error = action.error.message;
    });
  }
})

// Action creators are generated for each case reducer function
// export const { signIn, logOut } = loginSlice.actions

export default userSlice.reducer