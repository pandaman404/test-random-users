import { createContext, useContext } from 'react';
import { LeagueContextType } from '../@types/league';
import { useHandleLeague } from '../hooks/useHandleLeague';

export const LeagueContext = createContext<LeagueContextType>(
  {} as LeagueContextType
);

export const LeagueProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { matches, leaderBoardList } = useHandleLeague();
  return (
    <LeagueContext.Provider value={{ matches, leaderBoardList }}>
      {children}
    </LeagueContext.Provider>
  );
};

export const useLeagueContext = () => useContext(LeagueContext);
