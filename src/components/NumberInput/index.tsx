import { FC } from 'react';
import './style.css';

export interface Props {
  value: number;
  increment: () => void;
  decrement: () => void;
}

export const NumberInput: FC<Props> = ({ value, increment, decrement }) => (
  <div className="number-input">
    <button type="button" onClick={decrement} title="Decrement" className="number-input__button">
      <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.75 0.750001C19.0815 0.750001 19.3995 0.881696 19.6339 1.11612C19.8683 1.35054 20 1.66848 20 2C20 2.33152 19.8683 2.64946 19.6339 2.88388C19.3995 3.1183 19.0815 3.25 18.75 3.25H1.25C0.918479 3.25 0.600537 3.1183 0.366117 2.88388C0.131696 2.64946 0 2.33152 0 2C0 1.66848 0.131696 1.35054 0.366117 1.11612C0.600537 0.881696 0.918479 0.75 1.25 0.75L18.75 0.750001Z"
          fill="black"
        />
      </svg>
    </button>
    <div data-testid="number-input-value" className="number-input__value">{value}</div>
    <button type="button" onClick={increment} title="Increment" className="number-input__button">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C10.3315 0 10.6495 0.131696 10.8839 0.366117C11.1183 0.600537 11.25 0.918479 11.25 1.25V8.75H18.75C19.0815 8.75 19.3995 8.8817 19.6339 9.11612C19.8683 9.35054 20 9.66848 20 10C20 10.3315 19.8683 10.6495 19.6339 10.8839C19.3995 11.1183 19.0815 11.25 18.75 11.25H11.25V18.75C11.25 19.0815 11.1183 19.3995 10.8839 19.6339C10.6495 19.8683 10.3315 20 10 20C9.66848 20 9.35054 19.8683 9.11612 19.6339C8.8817 19.3995 8.75 19.0815 8.75 18.75V11.25H1.25C0.918479 11.25 0.600537 11.1183 0.366117 10.8839C0.131696 10.6495 0 10.3315 0 10C0 9.66848 0.131696 9.35054 0.366117 9.11612C0.600537 8.8817 0.918479 8.75 1.25 8.75H8.75V1.25C8.75 0.918479 8.8817 0.600537 9.11612 0.366117C9.35054 0.131696 9.66848 0 10 0Z"
          fill="black"
        />
      </svg>
    </button>
  </div>
);
