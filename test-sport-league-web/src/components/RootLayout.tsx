import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import styled from 'styled-components';

export const RootLayout: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
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
