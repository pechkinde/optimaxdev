import { createSelector } from '@reduxjs/toolkit';
import { FC } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { Button } from '../../Button';
import './style.css';

const selectCartItemsCount = createSelector(
  (state: RootState) => state.cart.items,
  (items) => items.reduce((count, { quantity }) => count + quantity, 0)
);

const selectCartTotal = createSelector(
  (state: RootState) => state.cart.items,
  (items) => items.reduce((total, { price, quantity }) => total + price * quantity, 0)
);

export const CartTotal: FC = () => {
  const itemsCount = useAppSelector(selectCartItemsCount);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className="cart-total">
      <div className="cart-total__heading">
        Total {itemsCount} {itemsCount === 1 ? 'item' : 'items'} of {cartTotal.toFixed(2)}$
      </div>
      <Button className="cart-total__checkout-btn">Proceed to checkout</Button>
    </div>
  );
};
