import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";

export const api = createApi({
   
    baseQuery : fetchBaseQuery({
        baseUrl : "https://api.github.com/search"
    }),
    endpoints : (builder) =>({
        getUsers: builder.mutation({
            query:(data)=>({
                url : `/repositories?q=${data}`,
                method : "POST",
                 
                

            
            })
        })
    })
})

export const {useGetUsersMutation} = api