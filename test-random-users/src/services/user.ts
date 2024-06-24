import { RandomUserAPI } from '../@types/api';
import { User } from '../@types/user';

const API_URI = 'https://randomuser.me/api';

export const getRandomUsers = async (pageParam: unknown): Promise<{ users: User[]; nextPage?: number }> => {
  try {
    const response = await fetch(`${API_URI}/?results=10&seed=jio&page=${pageParam}`);

    if (!response.ok) {
      throw new Error('Error en la petición');
    }

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

    return {
      users,
      nextPage: json.info.page > 10 ? undefined : json.info.page + 1, // Vamos a traer hasta un máximo de 10 paginas
    };
  } catch (error) {
    throw new Error('Error fetching users');
  }
};
