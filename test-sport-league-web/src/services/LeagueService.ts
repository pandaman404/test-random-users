import { ResponseGetAccessToken, ResponseGetAllMatches } from '../@types/api';
import { Match } from '../@types/league';

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
  getLeaderboard() {}

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
