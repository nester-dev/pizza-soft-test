import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '@/redux/api.ts';
import { EmployeeForm } from '@/components';
import styles from './employee-page.module.scss';

const EmployeePage: FC = () => {
  const params = useParams<{ employeeId: string }>();
  const { data } = useGetEmployeeByIdQuery(params.employeeId || '');

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>
        <span className={styles.label}>Edit employee:</span> {data?.name}
      </h1>

      <EmployeeForm />
    </div>
  );
};

export default EmployeePage;
