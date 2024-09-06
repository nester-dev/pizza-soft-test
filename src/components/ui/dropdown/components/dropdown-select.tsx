import { Dispatch, FC, SetStateAction } from 'react';
import cn from 'clsx';
import styles from '../dropdown.module.scss';

type Props = {
  selected: string;
  menuShow: boolean;
  setMenuShow: Dispatch<SetStateAction<boolean>>;
};

const DropdownSelect: FC<Props> = ({ selected, menuShow, setMenuShow }) => {
  return (
    <button
      className={cn(styles.select, menuShow && styles.select_clicked)}
      onClick={() => setMenuShow((prev) => !prev)}
    >
      <span className={styles.selected}>{selected}</span>

      <div className={cn(styles.caret, menuShow && styles.caret_rotate)}></div>
    </button>
  );
};

export default DropdownSelect;
