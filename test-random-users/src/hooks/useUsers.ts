import { useEffect, useMemo, useRef, useState } from 'react';
import { SortBy } from '../@types/consts';
import { User, UserId } from '../@types/user';

import { getHundredRandomUsers } from '../services/user';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [sorted, setSorted] = useState<SortBy>(SortBy.NONE);
  const initialUsers = useRef<User[]>([]);
  const [countryQuery, setCountryQuery] = useState<string | null>(null);

  useEffect(() => {
    getHundredRandomUsers().then((users) => {
      setUsers(users);
      initialUsers.current = users;
    });
  }, []);

  const handleSortUsers = (sortBy: SortBy): void => {
    setSorted(sortBy);
  };

  const resetUsers = (): void => {
    setSorted(SortBy.NONE);
    setUsers(initialUsers.current);
  };

  const deleteUser = ({ id }: UserId): void => {
    return setUsers(users.filter((user) => user.id !== id));
  };

  const handleCountryQuery = (value: string): void => {
    setCountryQuery(value);
  };

  const filteredUsers = useMemo(() => {
    return countryQuery
      ? [...users].filter((user) =>
          user.country.toLocaleLowerCase().includes(countryQuery)
        )
      : users;
  }, [users, countryQuery]);

  const sortedUsers = useMemo(() => {
    if (sorted === SortBy.COUNTRY) {
      return [...filteredUsers].sort((a, b) =>
        a.country.localeCompare(b.country)
      );
    }
    if (sorted === SortBy.FIRSTNAME) {
      return [...filteredUsers].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    }
    if (sorted === SortBy.LASTNAME) {
      return [...filteredUsers].sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
    }
    return filteredUsers;
  }, [filteredUsers, sorted]);

  return {
    users,
    sorted,
    sortedUsers,
    handleSortUsers,
    resetUsers,
    deleteUser,
    handleCountryQuery,
  };
}
