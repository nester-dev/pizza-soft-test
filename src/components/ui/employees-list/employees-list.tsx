import { FC } from 'react';
import { useGetEmployeesQuery } from '@/redux/api.ts';
import { EmployeeCard } from '@/components';
import styles from './employees-list.module.scss';

const EmployeesList: FC = () => {
  const { data } = useGetEmployeesQuery();

  return (
    <ul className={styles.wrapper}>
      {data?.map((elem) => <EmployeeCard key={elem.id} {...elem} />)}
    </ul>
  );
};

export default EmployeesList;
