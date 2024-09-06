import { FC, useRef, useState } from 'react';
import DropdownSelect from './components/dropdown-select.tsx';
import cn from 'clsx';
import styles from './dropdown.module.scss';
import { useClickOutside } from '@/hooks/useClickOutside.ts';

type Props = {
  options: string[];
};

const Dropdown: FC<Props> = ({ options }) => {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setMenuShow(false);
  };

  const selectOption = (element: string) => {
    setSelected(element);
    setMenuShow((prev) => !prev);
  };

  useClickOutside<HTMLDivElement>(dropdownRef, handleClickOutside);

  const dropdownList = options.map((option) => (
    <li key={option} onClick={() => selectOption(option)}>
      {option}
    </li>
  ));

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <DropdownSelect
        selected={selected}
        menuShow={menuShow}
        setMenuShow={setMenuShow}
      />

      <ul className={cn(styles.menu, menuShow && styles.menu_open)}>
        {dropdownList}
      </ul>
    </div>
  );
};

export default Dropdown;
