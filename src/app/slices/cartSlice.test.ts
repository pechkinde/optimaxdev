import { cartReducer, CartState, decrementItemQuantity, removeItems } from './cartSlice';

test('decrementItemQuantity will not work if the quantity of item is equal to one', () => {
  const state: CartState = { items: [{ name: 'Name', price: 1, quantity: 1 }] };
  expect(cartReducer(state, decrementItemQuantity(state.items[0].name))).toEqual(state);
});

test('removeItems works correctly', () => {
  const oldState: CartState = { items: [{ name: 'Name1', price: 1, quantity: 1 }] };

  const newState: CartState = {
    items: oldState.items.concat([
      { name: 'Name2', price: 1, quantity: 1 },
      { name: 'Name3', price: 1, quantity: 1 },
    ]),
  };

  expect(
    cartReducer(newState, removeItems([newState.items[1].name, newState.items[2].name]))
  ).toEqual(oldState);
});
