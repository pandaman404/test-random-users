import { ResponseGetAccessToken, ResponseGetAllMatches } from '../@types/api';
import { LeaderBoard, Match } from '../@types/league';

/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM,
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 *
 */
class LeagueService {
  private _matches: Match[] = [];
  private _leaderboardList: LeaderBoard[] = [];

  private static readonly API_URI = 'http://localhost:3001/api/v1';

  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array} matches List of matches.
   */
  setMatches(matches: Match[]) {
    this._matches = matches;
  }

  /**
   * Returns the full list of matches.
   *
   * @returns {Array} List of matches.
   */
  getMatches() {
    return this._matches;
  }

  /**
   * Returns the leaderboard in a form of a list of JSON objecs.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array} List of teams representing the leaderboard.
   */
  getLeaderboard(): LeaderBoard[] {
    this._matches.forEach((match) => {
      const { homeTeam, awayTeam, matchPlayed, homeTeamScore, awayTeamScore } =
        match;

      const homeTeamIndex = this._leaderboardList.findIndex(
        ({ teamName }) => teamName === homeTeam
      );

      const awayTeamIndex = this._leaderboardList.findIndex(
        ({ teamName }) => teamName === awayTeam
      );

      // agregar nuevos equipos al leaderboard
      if (homeTeamIndex === -1) {
        const newItem = {} as LeaderBoard;
        newItem.teamName = homeTeam;
        newItem.matchPlayed = matchPlayed ? 1 : 0;
        newItem.goalsFor = homeTeamScore;
        newItem.goalsAgainst = awayTeamScore;
        newItem.points = this.calculateMatchPoints(
          homeTeamScore,
          awayTeamScore
        );
        this._leaderboardList.push(newItem);
      }

      if (awayTeamIndex === -1) {
        const newItem = {} as LeaderBoard;
        newItem.teamName = awayTeam;
        newItem.matchPlayed = matchPlayed ? 1 : 0;
        newItem.goalsFor = awayTeamScore;
        newItem.goalsAgainst = homeTeamScore;
        newItem.points = this.calculateMatchPoints(
          awayTeamScore,
          homeTeamScore
        );
        this._leaderboardList.push(newItem);
      }

      // Contar Partidos jugados, goles a favor/en contra y numero de puntos
      if (homeTeamIndex >= 0 && matchPlayed) {
        this._leaderboardList[homeTeamIndex].matchPlayed += 1;
        this._leaderboardList[homeTeamIndex].goalsFor += homeTeamScore;
        this._leaderboardList[homeTeamIndex].goalsAgainst += awayTeamScore;
        this._leaderboardList[homeTeamIndex].points +=
          this.calculateMatchPoints(homeTeamScore, awayTeamScore);
      }

      if (awayTeamIndex >= 0 && matchPlayed) {
        this._leaderboardList[awayTeamIndex].matchPlayed += 1;
        this._leaderboardList[awayTeamIndex].goalsFor += awayTeamScore;
        this._leaderboardList[awayTeamIndex].goalsAgainst += homeTeamScore;
        this._leaderboardList[awayTeamIndex].points +=
          this.calculateMatchPoints(awayTeamScore, homeTeamScore);
      }
    });

    return this._leaderboardList;
  }

  calculateMatchPoints(score1: number, score2: number) {
    if (score1 > score2) return 3;
    if (score1 === score2) return 1;
    return 0;
  }

  async fetchData(): Promise<Match[]> {
    try {
      const { access_token }: ResponseGetAccessToken = await fetch(
        `${LeagueService.API_URI}/getAccessToken`
      ).then((res) => res.json());

      const response: ResponseGetAllMatches = await fetch(
        `${LeagueService.API_URI}/getAllMatches`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      ).then((res) => res.json());

      if (response.success && response.matches) {
        return response.matches;
      }

      return [] as Match[];
    } catch (error) {
      console.error('Error fetching data: ', error);
      throw error;
    }
  }
}

export default LeagueService;
