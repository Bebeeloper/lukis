import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface themeState {
  mode: boolean
}

const initialState: themeState = {
  mode: false,
}

export const loginSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    darkMode: (state) => {
      state.mode = !state.mode;
    }
  },
})

// Action creators are generated for each case reducer function
export const { darkMode } = loginSlice.actions

export default loginSlice.reducer