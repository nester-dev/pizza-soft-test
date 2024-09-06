import { FC } from 'react';
import styles from './main-page.module.scss';
import { Dropdown } from '@/components';

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

      <Dropdown options={['Имя', 'Год рождения']} />
    </div>
  );
};

export default MainPage;
