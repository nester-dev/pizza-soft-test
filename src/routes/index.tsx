import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RoutesPaths } from './paths.config.ts';
import { MainPage } from '../pages';
import { PageLayout } from '@/components';
import { EmployeePage } from '@/pages';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route index path={RoutesPaths.MAIN} element={<MainPage />} />
      <Route
        path={`${RoutesPaths.EMPLOYEES}/:employeeId`}
        element={<EmployeePage />}
      />
    </Route>
  )
);

export default routes;
