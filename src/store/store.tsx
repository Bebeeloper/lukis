import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginReducer'
import themeReducer from './themeReducer'
import userReducer from './userReducer'

export const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    themeReducer: themeReducer,
    user: userReducer, 
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch