import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/Inventory/inventorySlice';

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
  },
});
