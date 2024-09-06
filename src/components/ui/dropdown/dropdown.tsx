import { FC, useRef, useState } from 'react';
import DropdownSelect from './components/dropdown-select.tsx';
import cn from 'clsx';
import styles from './dropdown.module.scss';
import { useClickOutside } from '@/hooks/useClickOutside.ts';
import { SelectOption, SORTING_TYPES } from '@/shared/types';
import { useAppDispatch } from '@/redux/configure-store.ts';
import { setSorting } from '@/redux/store.ts';

type Props = {
  options: SelectOption<SORTING_TYPES>[];
};

const Dropdown: FC<Props> = ({ options }) => {
  const dispatch = useAppDispatch();
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState<SelectOption<SORTING_TYPES>>(
    options[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setMenuShow(false);
  };

  const selectOption = (element: SelectOption<SORTING_TYPES>) => {
    dispatch(setSorting(element.value));
    setSelected(element);
    setMenuShow((prev) => !prev);
  };

  useClickOutside<HTMLDivElement>(dropdownRef, handleClickOutside);

  const dropdownList = options.map((option) => (
    <li key={option.label} onClick={() => selectOption(option)}>
      {option.label}
    </li>
  ));

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <DropdownSelect
        selected={selected.label}
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
