import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import './style.css';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input: FC<Props> = ({ type = 'text', invalid, className, ...props }) => (
  <input type={type} className={clsx('input', className, invalid && 'input--invalid')} {...props} />
);
