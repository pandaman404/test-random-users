export interface User {
  id: string;
  photo: string;
  firstName: string;
  lastName: string;
  country: string;
}

export type UserId = Pick<User, 'id'>;

export enum SortBy {
  NONE = 'none',
  FIRSTNAME = 'firstname',
  LASTNAME = 'lastname',
  COUNTRY = 'country',
}
