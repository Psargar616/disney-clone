import { configureStore } from '@reduxjs/toolkit'
// import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

import userReducer from "../Features/User/userSlice"
import movieReducer from "../Features/Movie/MovieSlice"

export const store = configureStore({
  reducer: {
    user:userReducer,
    movie:movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
   
    serializableCheck: false,
  }),

})