import { HTMLProps } from 'react';

import './styles.css';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <button className="button">{props.label}</button>;
};
