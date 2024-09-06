import { FC } from 'react';
import { Container } from '@/components';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const PageLayout: FC = () => {
  return (
    <>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <ScrollRestoration />
    </>
  );
};

export default PageLayout;
