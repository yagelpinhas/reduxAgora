import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import inventoryReducer from '../features/Inventory/inventorySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    inventory: inventoryReducer,
  },
});
