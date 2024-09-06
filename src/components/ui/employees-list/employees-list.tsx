import { FC } from 'react';
import { useGetEmployeesQuery } from '@/redux/api.ts';
import { EmployeeCard } from '@/components';
import styles from './employees-list.module.scss';
import { useAppSelector } from '@/redux/configure-store.ts';

const EmployeesList: FC = () => {
  useGetEmployeesQuery();
  const employees = useAppSelector(
    (state) => state.mainStore.filteredEmployees
  );

  return (
    <ul className={styles.wrapper}>
      {employees?.map((elem) => <EmployeeCard key={elem.id} {...elem} />)}
    </ul>
  );
};

export default EmployeesList;
