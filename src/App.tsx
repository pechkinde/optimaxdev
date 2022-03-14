import { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { addItems } from './app/slices/cartSlice';
import { store } from './app/store';
import { Cart } from './components/Cart';

export const App: FC = () => {
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/cart.json`)
      .then((res) => res.json())
      .then((cart) => store.dispatch(addItems(cart)));
  }, []);

  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};
