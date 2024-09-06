import { FC } from 'react';
import { Dropdown, FieldControl, Toggle } from '@/components';
import styles from './aside.module.scss';
import { POSITION_OPTIONS, SORTING_OPTIONS } from '@/shared/constants.ts';
import { useAppDispatch, useAppSelector } from '@/redux/configure-store.ts';
import { SelectOption, SORTING_TYPES } from '@/shared/types';
import { setFilterOptions } from '@/redux/store.ts';
import { ROLES_TYPES } from '@/shared/types/employee.interface.ts';

const Aside: FC = () => {
  const filterOptions = useAppSelector(
    (state) => state.mainStore.filterOptions
  );
  const dispatch = useAppDispatch();

  const handleSortingSelect = (option: SelectOption<SORTING_TYPES>) => {
    dispatch(
      setFilterOptions({
        ...filterOptions,
        sorting: option.value,
      })
    );
  };

  const handlePositionSelect = (option: SelectOption<ROLES_TYPES>) => {
    dispatch(
      setFilterOptions({
        ...filterOptions,
        position: option.value,
      })
    );
  };

  const handleToggle = (archived: boolean) => {
    dispatch(
      setFilterOptions({
        ...filterOptions,
        archived,
      })
    );
  };

  return (
    <aside className={styles.wrapper}>
      <FieldControl label="SORT BY:">
        <Dropdown<SORTING_TYPES>
          options={SORTING_OPTIONS}
          onSelect={handleSortingSelect}
        />
      </FieldControl>

      <FieldControl label="POSITION:">
        <Dropdown<ROLES_TYPES>
          options={POSITION_OPTIONS}
          onSelect={handlePositionSelect}
        />
      </FieldControl>

      <FieldControl label="In Archive:">
        <Toggle name="archived" onToggle={handleToggle} />
      </FieldControl>
    </aside>
  );
};

export default Aside;
