import { Header } from '../components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <img src='/images/404.png' alt='' />
      </Wrapper>
    </>
  );
};
