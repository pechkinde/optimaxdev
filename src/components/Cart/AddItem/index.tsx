import { createSelector } from '@reduxjs/toolkit';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addItems } from '../../../app/slices/cartSlice';
import { RootState } from '../../../app/store';
import { Button } from '../../Button';
import { Input } from '../../Input';
import './style.css';

const selectCartItemNames = createSelector(
  (state: RootState) => state.cart.items,
  (items) => items.map(({ name }) => name)
);

export const AddItem: FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const cartItemNames = useAppSelector(selectCartItemNames);

  const isNameInputInvalid = cartItemNames.includes(name.trim());
  const isPriceInputInvalid = price !== '' && !/^\d+((,|\.)\d{1,2})?$/.test(price.trim());

  const dispatch = useAppDispatch();

  const addItem = () => {
    dispatch(addItems([{ name: name.trim(), price: +price.replace(',', '.'), quantity: 1 }]));
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="add-item">
      <Input
        value={name}
        onChange={({ target }) => setName(target.value)}
        invalid={isNameInputInvalid}
        placeholder="Item name"
        className="add-item__input"
      />
      <Input
        value={price}
        onChange={({ target }) => setPrice(target.value)}
        invalid={isPriceInputInvalid}
        placeholder="Item price"
        className="add-item__input"
      />
      <Button
        type="submit"
        onClick={addItem}
        disabled={
          name.trim() === '' || price.trim() === '' || isNameInputInvalid || isPriceInputInvalid
        }
        className="add-item__btn"
      >
        Add item
      </Button>
    </form>
  );
};
