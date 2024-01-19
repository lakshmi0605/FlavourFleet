import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items : [],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state,action)=>{
            state.items = state.items.filter(item => 
                item.id != action.payload.itemList.id
                );
        },
        clearCart: (state,action)=>{
            state.items.length = 0;
        },
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;