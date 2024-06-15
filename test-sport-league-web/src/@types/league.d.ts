export interface Match {
  matchDate: number;
  stadium: string;
  homeTeam: string;
  awayTeam: string;
  matchPlayed: boolean;
  homeTeamScore: number;
  awayTeamScore: number;
}

export interface LeaderBoard {
  teamName: string;
  matchPlayed: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface FlagCodes {
  [key: string]: string;
}

export interface LeagueContextType {
  matches: Match[];
  leaderBoardList: LeaderBoard[];
}
