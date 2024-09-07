import { FC } from 'react';
import { useGetEmployeesQuery } from '@/redux/api.ts';
import { EmployeeCard } from '@/components';
import styles from './employees-list.module.scss';
import { useAppSelector } from '@/redux/configure-store.ts';
import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '@/routes/paths.config.ts';

const EmployeesList: FC = () => {
  useGetEmployeesQuery();
  const navigate = useNavigate();
  const employees = useAppSelector(
    (state) => state.mainStore.filteredEmployees
  );

  const handleCardClick = (id: number) => {
    navigate(`${RoutesPaths.EMPLOYEES}/${id}`);
  };

  return (
    <ul className={styles.wrapper}>
      {employees?.map((elem) => (
        <EmployeeCard key={elem.id} {...elem} onClick={handleCardClick} />
      ))}
    </ul>
  );
};

export default EmployeesList;
