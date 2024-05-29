import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";

export const api = createApi({
   
    baseQuery : fetchBaseQuery({
        baseUrl : "https://api.github.com/search/repositories?q="
    }),
    endpoints : (builder) =>({
        getUsers: builder.mutation({
            query:()=>({
                url : `${baseUrl}`,
                params: "",
                method : "POST"
            })
        })
    })
})

export const {useGetUsersMutation} = api