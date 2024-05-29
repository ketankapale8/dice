import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    users : 0
}

const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers:{
        
    }
})

export default userSlice.reducer;