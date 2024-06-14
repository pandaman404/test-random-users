import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import styled from 'styled-components';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <img src='/images/404.png' alt='' />
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0;
  height: 75.8dvh;
`;
