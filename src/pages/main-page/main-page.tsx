import { FC } from 'react';
import styles from './main-page.module.scss';
import { Aside, EmployeesList } from '@/components';

const MainPage: FC = () => {
  return (
    <div>
      <h1 className={styles.title}>
        Welcome to employee manager app {'\u2728'}
      </h1>
      <p className={styles.description}>
        Here you can see all your employees, add and edit information about
        them! 👇
      </p>

      <div className={styles.content}>
        <Aside />
        <EmployeesList />
      </div>
    </div>
  );
};

export default MainPage;
