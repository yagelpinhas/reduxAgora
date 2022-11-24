import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: [{"name":"tomato","price":10},{"name":"pasta",price:20}],
  status: 'idle',
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    buyItem: (state,action)=>{
        state.value = state.value.filter(item=>item["name"]!=action.payload)
    },
    addItem: (state,action) =>{
        state.value.push(action.payload)
    },
    changePrice: (state,action) =>{
        let nameOfProduct = action.payload.name
        let newPrice = action.payload.price
        state.value.find(item=>item["name"]==nameOfProduct)["price"]=newPrice
    },
  },
});

export const {buyItem,addItem, changePrice} = inventorySlice.actions;
export const selectInventory = (state) => state.inventory.value;
export default inventorySlice.reducer;
