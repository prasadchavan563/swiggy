import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//created a store here name appStore
const appStore=configureStore({
    reducer :{
        cart:cartReducer
    }
})
export default appStore;