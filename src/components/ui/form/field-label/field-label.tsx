import { FC, useId } from 'react';
import styles from './field-label.module.scss';

type Props = {
  label: string;
};

const FieldLabel: FC<Props> = ({ label }) => {
  const id = useId();

  return (
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  );
};

export default FieldLabel;
