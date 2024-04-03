import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    } ,
    reducers: {
        addItem: (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            //console.log(itemToRemove)
            const index = state.items.findIndex(item => item.card.info.id === itemToRemove.card.info.id);

            state.items.splice(index, 1);
            //state.items.pop()
        },
        clearCart: (state) => {
            state.items.length = 0;
            // return {items: []};
        },
        findItem: (state, action) => {
           return  state.items.find(action.payload);
        }
    }
});

export const {addItem, removeItem, clearCart, findItem} = cartSlice.actions;

export default cartSlice.reducer;