import { configureStore } from '@reduxjs/toolkit'
import regReducer from './entities/regSlice'

export const store = configureStore({
  reducer: {
    reg: regReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch