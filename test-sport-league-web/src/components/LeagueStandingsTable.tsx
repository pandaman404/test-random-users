import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { LeaderBoard } from '../@types/league';
import { flagCodes } from '../utils/flags';
import { Loader } from './Loader';

interface LeagueStandingsTableProps {
  leaderBoardList: LeaderBoard[];
}

export const LeagueStandingsTable: React.FC<LeagueStandingsTableProps> = ({
  leaderBoardList,
}) => {
  if (!leaderBoardList.length) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Head>
        <div className='teamNameCol cell'>Team Name</div>
        <div className='matchPlayedCol cell'>MP</div>
        <div className='goalsForCol cell'>GF</div>
        <div className='goalsAgainstCol cell'>GA</div>
        <div className='goalsDifferenceCol cell'>GD</div>
        <div className='pointsCol cell'>Points</div>
      </Head>
      <Body>
        {leaderBoardList.map(
          ({ teamName, matchPlayed, goalsFor, goalsAgainst, points }) => {
            return (
              <div key={uuidv4()} className='row'>
                <div className='cell teamNameCol'>
                  <img
                    src={`https://flagsapi.com/${flagCodes[teamName]}/flat/64.png`}
                    alt={teamName}
                    className='teamFlag'
                  ></img>
                  <span className='teamName'>{teamName}</span>
                </div>
                <div className='cell matchPlayedCol'>{matchPlayed}</div>
                <div className='cell goalsForCol'>{goalsFor}</div>
                <div className='cell goalsAgainstCol'>{goalsAgainst}</div>
                <div className='cell goalsDifferenceCol'>
                  {goalsFor - goalsAgainst}
                </div>
                <div className='cell pointsCol'>{points}</div>
              </div>
            );
          }
        )}
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  color: var(--textTable);
  font-size: 14px;

  .cell {
    flex: 1;
  }

  .goalsForCol,
  .goalsAgainstCol {
    display: none;
  }

  .matchPlayedCol,
  .goalsForCol,
  .goalsAgainstCol,
  .goalsDifferenceCol {
    max-width: 60px;
  }

  .pointsCol {
    max-width: 100px;
  }

  @media only screen and (min-width: 700px) {
    .goalsForCol,
    .goalsAgainstCol {
      display: block;
    }

    .goalsDifferenceCol {
      display: none;
    }
  }

  .matchDateCol {
    @media only screen and (min-width: 1000px) {
      display: flex;
    }
  }
`;

const Head = styled.div`
  background-color: var(--backgroundTable);
  font-size: 12px;
  font-weight: 600;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .teamNameCol {
    justify-self: flex-start !important;
    display: flex;
    justify-content: start;
    padding: 0 10px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;

  .row {
    height: 70px;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--backgroundTable);

    .teamNameCol {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 0 10px;
      font-weight: 700;
    }

    .pointsCol {
      color: var(--backgroundHeader);
      font-weight: 700;
    }

    .teamFlag {
      height: 37px;
      width: 53px;
      object-fit: cover;
    }
  }
`;
