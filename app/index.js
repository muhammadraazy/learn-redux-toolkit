import { configureStore } from "@reduxjs/toolkit"
import users from "../services/users"

export const store = configureStore({
     reducer: {
        [users.reducerPath]: users.reducer
     },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(users.middleware)
})