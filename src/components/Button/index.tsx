import { HTMLProps } from 'react';

import './styles.css';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <button className="button" type="button">
      {label}
    </button>
  );
}
