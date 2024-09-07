import { FC, useMemo } from 'react';
import { useGetEmployeesQuery } from '@/redux/api.ts';
import { EmployeeCard } from '@/components';
import styles from './employees-list.module.scss';
import { useAppSelector } from '@/redux/configure-store.ts';
import { useNavigate } from 'react-router-dom';
import { RoutesPaths } from '@/routes/paths.config.ts';
import { filterEmployees } from '@/utils/filter-employees.ts';

const EmployeesList: FC = () => {
  const { data } = useGetEmployeesQuery();
  const navigate = useNavigate();
  const filterOptions = useAppSelector(
    (state) => state.mainStore.filterOptions
  );

  const filteredEmployees = useMemo(
    () => filterEmployees(data, filterOptions),
    [data, filterOptions]
  );

  const handleCardClick = (id: number) => {
    navigate(`${RoutesPaths.EMPLOYEES}/${id}`);
  };

  return (
    <ul className={styles.wrapper}>
      {filteredEmployees?.map((elem) => (
        <EmployeeCard key={elem.id} {...elem} onClick={handleCardClick} />
      ))}
    </ul>
  );
};

export default EmployeesList;
