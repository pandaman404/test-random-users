import styled from 'styled-components';

export const Footer: React.FC = () => {
  return <Wrapper>Api Version: 1.0</Wrapper>;
};

const Wrapper = styled.footer`
  background-color: var(--backgroundFooter);
  color: var(--textFooter);
  font-weight: 600;
  height: 40px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
