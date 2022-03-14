import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CartTotal } from '.';
import { addItems } from '../../../app/slices/cartSlice';
import { store } from '../../../app/store';
import { CartItem } from '../../../types/CartItem';

test('the total amount of cart is calculated correctly', () => {
  const cart: CartItem[] = [
    { name: 'Name1', price: 119.99, quantity: 3 },
    { name: 'Name2', price: 3.33, quantity: 5 },
    { name: 'Name3', price: 2000, quantity: 1 },
  ];

  store.dispatch(addItems(cart));

  const { getByText } = render(
    <Provider store={store}>
      <CartTotal />
    </Provider>
  );

  const cartTotal = cart.reduce((total, { price, quantity }) => total + price * quantity, 0);

  expect(
    parseFloat(
      getByText(/^Total/)
        .textContent!.split(' ')
        .at(-1)!
    )
  ).toBeCloseTo(cartTotal);
});
