import styled from 'styled-components';
import { LeagueScheduleTable } from '../components/LeagueScheduleTable';
import { Title } from '../components/Title';

export const SchedulePage: React.FC = () => {
  return (
    <Wrapper>
      <Title text='League Schedule' />
      <LeagueScheduleTable />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;
