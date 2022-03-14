import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { AddItem } from './AddItem';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';
import './style.css';

export const Cart: FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <AddItem />
      {cartItems.map(({ name, price, quantity }) => (
        <CartItem key={name} name={name} price={price} quantity={quantity} />
      ))}
      <CartTotal />
    </div>
  );
};
