import { FC } from 'react';
import { Dropdown } from '@/components';
import styles from './aside.module.scss';
import { SORTING_OPTIONS } from '@/shared/constants.ts';

const Aside: FC = () => {
  return (
    <aside className={styles.wrapper}>
      <Dropdown options={SORTING_OPTIONS} />
    </aside>
  );
};

export default Aside;
