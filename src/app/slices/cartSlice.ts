import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../types/CartItem';

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, { payload }: PayloadAction<CartItem[]>) {
      state.items.unshift(...payload);
    },
    removeItems(state, { payload }: PayloadAction<Array<CartItem['name']>>) {
      return { ...state, items: state.items.filter(({ name }) => !payload.includes(name)) };
    },
    incrementItemQuantity(state, { payload }: PayloadAction<CartItem['name']>) {
      const cartItem = state.items.find(({ name }) => name === payload);
      if (cartItem) cartItem.quantity += 1;
    },
    decrementItemQuantity(state, { payload }: PayloadAction<CartItem['name']>) {
      const cartItem = state.items.find(({ name }) => name === payload);
      if (cartItem && cartItem.quantity > 1) cartItem.quantity -= 1;
    },
  },
});

export const { addItems, removeItems, incrementItemQuantity, decrementItemQuantity } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
