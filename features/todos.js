import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://jsonplaceholder.typicode.com'

const request = (url) => `${url}`;

const todos = createApi({
    reducerPath: "todos",
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => request(`/users`),
            transformResponse: (data, resAndReq, arg) => {
                console.log(resAndReq.response.url, arg)

                return data
            },
            providesTags: ['users']
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['users'] 
        }),
        deleteUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "DELETE",
                body: user.id
            }),
            invalidatesTags: ['users'] 
        })
    })
})

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } = todos
export default todos;