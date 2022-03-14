import { fireEvent, render } from '@testing-library/react';
import { NumberInput } from '.';

test('number input works correctly', () => {
  let value = 1;
  const increment = () => (value += 1);
  const decrement = () => (value -= 1);

  const { rerender, getByTitle, getByTestId } = render(
    <NumberInput value={value} increment={increment} decrement={decrement} />
  );

  const incrementBtn = getByTitle('Increment');
  const decrementBtn = getByTitle('Decrement');

  Array.from({ length: 10 }, () => Math.random()).forEach((num) =>
    fireEvent.click(num >= 0.5 ? incrementBtn : decrementBtn)
  );

  rerender(<NumberInput value={value} increment={increment} decrement={decrement} />);
  expect(getByTestId('number-input-value')).toHaveTextContent(value.toString());
});
