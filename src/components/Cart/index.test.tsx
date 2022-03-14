import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Cart } from '.';
import { addItems } from '../../app/slices/cartSlice';
import { store } from '../../app/store';
import { CartItem } from '../../types/CartItem';

test('Cart component renders the correct number of cart items', () => {
  const cart: CartItem[] = Array.from({ length: +(Math.random() * 10).toFixed(0) }, (_, index) => ({
    name: `Name${index}`,
    price: 1,
    quantity: 1,
  }));

  store.dispatch(addItems(cart));

  const { getAllByText } = render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );

  expect(getAllByText(/^Total:/).length).toBe(cart.length);
});
