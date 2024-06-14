import { useEffect, useState } from 'react';
import LeagueService from '../services/LeagueService';
import { Match } from '../@types/league';

export function useSchedule() {
  const [matches, setMatches] = useState<Match[]>([]);
  const leagueService = new LeagueService();

  const fetchMatches = async (): Promise<void> => {
    const matches = await leagueService.fetchData();
    leagueService.setMatches(matches);
    setMatches(leagueService.getMatches());
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return {
    matches,
  };
}
