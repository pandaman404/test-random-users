import { Match } from './league';

export interface ResponseGetAccessToken {
  success: boolean;
  access_token: string;
}

export interface ResponseGetAllMatches {
  success: boolean;
  error?: string;
  matches?: Match[];
}
