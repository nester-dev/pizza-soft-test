import { FC, InputHTMLAttributes, useRef } from 'react';
import styles from './toggle.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  onToggle: (value: boolean) => void;
};

const Toggle: FC<Props> = ({ name, onToggle, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (isChecked: boolean) => {
    onToggle(isChecked);
  };

  return (
    <label
      role="presentation"
      className={styles.label}
      htmlFor={name}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        name={name}
        type="checkbox"
        className={styles.input}
        onChange={(e) => handleChange(e.target.checked)}
        {...rest}
      />
      <div className={styles.toggle} />
    </label>
  );
};

export default Toggle;
