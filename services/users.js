import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://jsonplaceholder.typicode.com'

const request = (url) => `${url}`;

const users = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => request('/users')
        })
    })
})

export const { useGetUsersQuery } = users
export default users;