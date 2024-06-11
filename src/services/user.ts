import { RandomUserAPI } from '../@types/api';
import { User } from '../@types/user';

const API_URI = 'https://randomuser.me/api';

export const getHundredRandomUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URI}/?results=100`);
    const json: RandomUserAPI = await response.json();

    const users = json.results.map((result) => {
      return {
        id: result.login.uuid,
        firstName: result.name.first,
        lastName: result.name.last,
        photo: result.picture.thumbnail,
        country: result.location.country,
      } as User;
    });

    return users;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
