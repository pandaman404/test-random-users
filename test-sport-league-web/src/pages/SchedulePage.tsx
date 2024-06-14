import styled from 'styled-components';
import { LeagueScheduleTable } from '../components/LeagueScheduleTable';
import { Title } from '../components/Title';
import { useSchedule } from '../hooks/useSchedule';

export const SchedulePage: React.FC = () => {
  const { matches } = useSchedule();

  return (
    <Wrapper>
      <Title text='League Schedule' />
      <LeagueScheduleTable matches={matches} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 0 auto;
  text-align: center;
  width: inherit;
  min-height: 82.4dvh;
`;
