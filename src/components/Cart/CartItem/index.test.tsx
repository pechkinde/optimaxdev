import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CartItem } from '.';
import { addItems } from '../../../app/slices/cartSlice';
import { store } from '../../../app/store';
import { CartItem as ICartItem } from '../../../types/CartItem';

test('the total amount of cart item is calculated correctly', () => {
  const cartItem: ICartItem = { name: 'Name', price: 123.45, quantity: 7 };

  const { getByText } = render(
    <Provider store={store}>
      <CartItem {...cartItem} />
    </Provider>
  );

  expect(parseFloat(getByText(/^Total:/).textContent!.split(' ')[1])).toBeCloseTo(
    cartItem.price * cartItem.quantity
  );
});

test('remove button works correctly', () => {
  const cartItemsAfterRemoval: ICartItem[] = [
    { name: 'Name1', price: 1, quantity: 1 },
    { name: 'Name2', price: 1, quantity: 1 },
  ];

  const cartItemsBeforeRemoval = cartItemsAfterRemoval.concat([
    { name: 'Name3', price: 1, quantity: 1 },
    { name: 'Name4', price: 1, quantity: 1 },
  ]);

  store.dispatch(addItems(cartItemsBeforeRemoval));

  const { getAllByText } = render(
    <Provider store={store}>
      {cartItemsBeforeRemoval.slice(2).map((item) => (
        <CartItem key={item.name} {...item} />
      ))}
    </Provider>
  );

  getAllByText('Remove').forEach((btn) => fireEvent.click(btn));
  expect(store.getState().cart.items).toEqual(cartItemsAfterRemoval);
});
