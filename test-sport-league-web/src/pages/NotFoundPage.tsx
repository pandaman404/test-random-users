import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import styled from 'styled-components';

export const NotFoundPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <div>
        <img src='/images/404.png' alt='' />
      </div>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-flow: column;

  div {
    margin: 60px 0;
    flex: 1;
    text-align: center;
  }
`;
