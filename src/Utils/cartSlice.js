import { createSlice } from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{

            //vanialla(older) Redux => DON'T MUTED STATE,returning was mandatory
            //const newState=[...state]
            //newState.items.push(action.payload)
            //return newState



            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        //originalState={items: ["pizza"]}
        clearItem:(state,action)=>{
            //RTK eithere mutate the existing state or return a new state
            // state.items.length=0             //state is a local variable
            return {items:[]}
        }
    }
})



export default cartSlice.reducer;
export const {addItem,removeItem,clearItem}=cartSlice.actions;