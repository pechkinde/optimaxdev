import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import './style.css';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type = 'button',
  className,
  disabled,
  children,
  ...props
}) => (
  <button
    type={type}
    disabled={disabled}
    className={clsx('button', className, disabled && 'button--disabled')}
    {...props}
  >
    {children}
  </button>
);
