import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  type = 'button',
}) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
