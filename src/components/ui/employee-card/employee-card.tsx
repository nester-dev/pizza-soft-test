import { FC } from 'react';
import { Employee } from '@/shared/types/employee.interface.ts';
import EmployeeIcon from 'public/icons/employee-card.svg?react';
import ArrowRight from 'public/icons/arrow-right-line.svg?react';
import styles from './employee-card.module.scss';

type Props = Employee & {
  onClick: (id: number) => void;
};

const EmployeeCard: FC<Props> = ({ id, name, phone, role, onClick }) => {
  return (
    <li className={styles.card} onClick={() => onClick(id)}>
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
