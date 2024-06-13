import styled from 'styled-components';

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.h2`
  font-size: 24px;
  color: var(--textHeadings);
  margin: 60px 0 20px;
`;
