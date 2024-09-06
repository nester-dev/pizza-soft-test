import { FC } from 'react';
import { Employee } from '@/shared/types/employee.interface.ts';
import EmployeeIcon from 'public/icons/employee-card.svg?react';
import ArrowRight from 'public/icons/arrow-right-line.svg?react';
import styles from './employee-card.module.scss';

const EmployeeCard: FC<Employee> = ({ name, phone, role }) => {
  return (
    <li className={styles.card}>
      <EmployeeIcon className={styles.icon} />
      <div className={styles.card_info}>
        <p>
          <span>Name:</span> {name}
        </p>
        <p>
          <span>Position:</span> {role}
        </p>
        <p>
          <span>Phone number:</span> {phone}
        </p>
      </div>
      <ArrowRight />
    </li>
  );
};

export default EmployeeCard;
