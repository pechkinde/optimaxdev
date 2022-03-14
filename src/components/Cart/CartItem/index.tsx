import { FC } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeItems,
} from '../../../app/slices/cartSlice';
import { CartItem as ICartItem } from '../../../types/CartItem';
import { Button } from '../../Button';
import { NumberInput } from '../../NumberInput';
import './style.css';

export type Props = ICartItem;

export const CartItem: FC<Props> = ({ name, price, quantity }) => {
  const dispatch = useAppDispatch();
  const increment = () => dispatch(incrementItemQuantity(name));
  const decrement = () => dispatch(decrementItemQuantity(name));
  const remove = () => dispatch(removeItems([name]));

  return (
    <div className="cart-item">
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__price">{price}$</div>
      <NumberInput value={quantity} increment={increment} decrement={decrement} />
      <div className="cart-item__total">Total: {(price * quantity).toFixed(2)}$</div>
      <Button onClick={remove} className="cart-item__remove-btn">
        Remove
      </Button>
    </div>
  );
};
