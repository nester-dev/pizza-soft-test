import { FC, PropsWithChildren } from 'react';
import styles from './field-helper-text.module.scss';

const FieldHelperText: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default FieldHelperText;
