import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';
import styles from './toggle.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  onToggle?: (value: boolean) => void;
};

const Toggle = forwardRef<HTMLInputElement, Props>(
  ({ name, onToggle, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => innerRef.current!, []);

    const handleChange = (isChecked: boolean) => {
      onToggle?.(isChecked);
    };

    return (
      <label
        role="presentation"
        className={styles.label}
        htmlFor={name}
        onClick={() => innerRef.current?.click()}
      >
        <input
          ref={innerRef}
          name={name}
          type="checkbox"
          className={styles.input}
          onChange={(e) => handleChange(e.target.checked)}
          {...props}
        />
        <div className={styles.toggle} />
      </label>
    );
  }
);

export default Toggle;
