import { Suspense } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Loader } from './Loader';

const RootLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export default RootLayout;
