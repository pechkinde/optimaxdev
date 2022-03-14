import { render } from '@testing-library/react';
import { Input } from '.';

describe('Input component works correctly', () => {
  test('Input without a "type" prop sets the default value correctly', () => {
    const testId = 'testId';
    const { getByTestId } = render(<Input data-testid={testId} />);
    expect(getByTestId(testId)).toHaveAttribute('type', 'text');
  });

  test('Input with the "invalid" prop has the correct class', () => {
    const testId = 'testId';
    const { getByTestId } = render(<Input data-testid={testId} invalid />);
    expect(getByTestId(testId)).toHaveClass('input--invalid');
  });
});
