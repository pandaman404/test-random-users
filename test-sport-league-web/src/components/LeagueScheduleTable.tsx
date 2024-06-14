import styled from 'styled-components';
import { Match } from '../@types/league';
import { flagCodes } from '../utils/flags';
import { createDateFromTimeStamp } from '../utils/date';

interface LeagueScheduleTableProps {
  matches: Match[];
}

export const LeagueScheduleTable: React.FC<LeagueScheduleTableProps> = ({
  matches,
}) => {
  if (!matches.length) {
    return <p>Loading...</p>;
  }

  return (
    <Wrapper>
      <Head>
        <div className='matchDateCol cell'>Date/Time</div>
        <div className='stadiumCol cell'>Stadium</div>
        <div className='homeTeamCol cell'>Home Team</div>
        <div className='awayTeamCol cell'>Away Team</div>
      </Head>
      <Body>
        {matches.map(
          ({
            matchDate,
            stadium,
            homeTeam,
            awayTeam,
            matchPlayed,
            homeTeamScore,
            awayTeamScore,
          }) => {
            return (
              <div key={matchDate + homeTeam + awayTeam} className='row'>
                <div className='cell matchDateCol'>
                  {createDateFromTimeStamp(matchDate)
                    .split(' ')
                    .map((item) => (
                      <span>{item}</span>
                    ))}
                </div>
                <div className='cell stadiumCol'>{stadium}</div>
                <div className='cell homeTeamCol'>
                  <span className='homeTeamName'>{homeTeam}</span>
                  <img
                    src={`https://flagsapi.com/${flagCodes[homeTeam]}/flat/64.png`}
                    alt={homeTeam}
                    className='homeTeamFlag'
                  ></img>
                  <span className='homeTeamScore'>
                    {matchPlayed ? homeTeamScore : '-'}
                  </span>
                </div>
                <div className='cell awayTeamCol'>
                  <span className='awayTeamScore'>
                    {matchPlayed ? awayTeamScore : '-'}{' '}
                  </span>
                  <img
                    src={`https://flagsapi.com/${flagCodes[awayTeam]}/flat/64.png`}
                    alt={awayTeam}
                    className='awayTeamFlag'
                  ></img>
                  <span className='awayTeamName'>{awayTeam}</span>
                </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .matchDateCol,
  .stadiumCol {
    display: none;
  }

  .stadiumCol {
    @media only screen and (min-width: 700px) {
      display: block;
    }
  }

  .matchDateCol {
    @media only screen and (min-width: 1000px) {
      display: flex;
    }
  }

  .matchDateCol,
  .homeTeamCol,
  .awayTeamCol {
    max-width: 400px;
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

    .matchDateCol {
      flex-direction: column;
      gap: 2px;
    }

    .homeTeamCol,
    .awayTeamCol {
      font-size: 16px;
      font-weight: 600;
      gap: 15px;
      position: relative;
    }

    .homeTeamScore {
      position: absolute;
      right: 10px;
    }

    .homeTeamCol::after {
      content: ':';
      position: absolute;
      font-size: 16px;
      right: -2px;
    }

    .awayTeamScore {
      position: absolute;
      left: 10px;
    }

    .homeTeamFlag,
    .awayTeamFlag {
      height: 37px;
      width: 53px;
      object-fit: cover;
    }
  }

  .row:nth-child(even) {
    background-color: var(--backgroundEvenRows);
  }
`;
