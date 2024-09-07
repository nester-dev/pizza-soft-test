import { FC } from 'react';
import {
  Button,
  CreateEmployeeModal,
  Dropdown,
  FieldControl,
  Toggle,
} from '@/components';
import { POSITION_OPTIONS, SORTING_OPTIONS } from '@/shared/constants.ts';
import { useAppDispatch, useAppSelector } from '@/redux/configure-store.ts';
import { SelectOption, SORTING_TYPES } from '@/shared/types';
import { setFilterOptions, setShowModal } from '@/redux/store.ts';
import { ROLES_TYPES } from '@/shared/types/employee.interface.ts';
import styles from './aside.module.scss';

const Aside: FC = () => {
  const filterOptions = useAppSelector(
    (state) => state.mainStore.filterOptions
  );
  const showModal = useAppSelector((state) => state.mainStore.showModal);
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

      <Button onClick={() => dispatch(setShowModal(true))}>Add Employee</Button>

      <CreateEmployeeModal
        onClose={() => dispatch(setShowModal(false))}
        showModal={showModal}
      />
    </aside>
  );
};

export default Aside;
