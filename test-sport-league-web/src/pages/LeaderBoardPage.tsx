import styled from 'styled-components';
import { useLeagueContext } from '../context/LeagueContext';
import { Title } from '../components/Title';
import { LeagueStandingsTable } from '../components/LeagueStandingsTable';

const LeaderBoardPage: React.FC = () => {
  const { leaderBoardList } = useLeagueContext();

  return (
    <Wrapper>
      <Title text='League Standings' />
      <LeagueStandingsTable leaderBoardList={leaderBoardList} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  text-align: center;
  width: inherit;
  flex: 1;
`;

export default LeaderBoardPage;
