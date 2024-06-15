import { useEffect, useState } from 'react';
import LeagueService from '../services/LeagueService';
import { LeaderBoard, Match } from '../@types/league';

export function useHandleLeague() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [leaderBoardList, setLeaderBoardList] = useState<LeaderBoard[]>([]);
  const leagueService = new LeagueService();

  const fetchMatches = async (): Promise<void> => {
    const matches = await leagueService.fetchData();
    leagueService.setMatches(matches);
    setMatches(leagueService.getMatches());
    setLeaderBoardList(leagueService.getLeaderboard());
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return {
    matches,
    leaderBoardList,
  };
}
