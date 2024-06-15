import styled from 'styled-components';

export const Loader: React.FC = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  border: 8px solid var(--backgroundFooter);
  border-top: 8px solid var(--backgroundHeader);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  margin-top: 100px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
