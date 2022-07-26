import { configureStore } from "@reduxjs/toolkit"
import todos from "../features/todos"

export const store = configureStore({
     reducer: {
        [todos.reducerPath]: todos.reducer,
     }
})