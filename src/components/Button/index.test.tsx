import { render } from '@testing-library/react';
import { Button } from '.';

describe('Button component works correctly', () => {
  test('Button without a "type" prop sets the default value correctly', () => {
    const testId = 'testId';
    const { getByTestId } = render(<Button data-testid={testId} />);
    expect(getByTestId(testId)).toHaveAttribute('type', 'button');
  });

  test('Button with the "disabled" prop has the correct class', () => {
    const testId = 'testId';
    const { getByTestId } = render(<Button data-testid={testId} disabled />);
    expect(getByTestId(testId)).toHaveClass('button--disabled');
  });
});
