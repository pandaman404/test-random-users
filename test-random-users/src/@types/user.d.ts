export interface User {
  id: string;
  photo: string;
  firstName: string;
  lastName: string;
  country: string;
}

export type UserId = Pick<User, 'id'>;
