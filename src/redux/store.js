import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { api } from "./slices/api";

const store = configureStore({
    reducer:{
        [api.reducerPath] : api.reducer,
        userSlice
    }
})

export default store;