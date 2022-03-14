import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AddItem } from '.';
import { addItems } from '../../../app/slices/cartSlice';
import { store } from '../../../app/store';
import { CartItem } from '../../../types/CartItem';

test('the form for adding new items works correctly', () => {
  const cart: CartItem[] = [
    { name: 'Name1', price: 1, quantity: 1 },
    { name: 'Name2', price: 1, quantity: 1 },
  ];

  store.dispatch(addItems(cart));

  const newItem: CartItem = { name: 'Name3', price: 123.45, quantity: 1 };

  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <AddItem />
    </Provider>
  );

  fireEvent.change(getByPlaceholderText('Item name'), { target: { value: newItem.name } });
  fireEvent.change(getByPlaceholderText('Item price'), { target: { value: newItem.price } });
  fireEvent.click(getByText('Add item'));

  expect(store.getState().cart.items).toEqual([newItem, ...cart]);
});
