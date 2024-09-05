import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { RoutesPaths } from './paths.config.ts';
import { MainPage } from '../pages';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route index path={RoutesPaths.MAIN} element={<MainPage />} />
  )
);

export default routes;
