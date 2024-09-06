import { useRef, useState } from 'react';
import DropdownSelect from './components/dropdown-select.tsx';
import cn from 'clsx';
import styles from './dropdown.module.scss';
import { useClickOutside } from '@/hooks/useClickOutside.ts';
import { SelectOption } from '@/shared/types';

interface Props<T> {
  options: SelectOption<T>[];
  onSelect: (value: SelectOption<T>) => void;
}

function Dropdown<T>({ options, onSelect }: Props<T>) {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState<SelectOption<T>>(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setMenuShow(false);
  };

  const selectOption = (element: SelectOption<T>) => {
    onSelect(element);
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
}

export default Dropdown;
