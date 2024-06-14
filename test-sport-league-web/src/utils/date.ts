import { formatInTimeZone } from 'date-fns-tz';

export function createDateFromTimeStamp(timeStamp: number) {
  const date = new Date(timeStamp);
  const formattedDate = formatInTimeZone(
    date,
    'America/Santiago',
    'd.M.yyyy HH:mm'
  );
  return formattedDate;
}
