import { useMemo, useState } from 'react';
import { SortBy } from '../@types/consts';
import { User, UserId } from '../@types/user';
import { getRandomUsers } from '../services/user';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useUsers() {
  const { isLoading, isFetching, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{
    users: User[];
    nextPage?: number;
  }>({
    queryKey: ['users'], // key de la query
    queryFn: ({ pageParam }) => getRandomUsers(pageParam), // función asincrona
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage, // paginación
    refetchOnWindowFocus: false, // no hacer refetching cuando hacemos focus en la ventana
    staleTime: Infinity, // los datos siempre van a ser frescos
  });

  const [users, setUsers] = useState<User[]>([]);

  useMemo(() => {
    if (data) {
      setUsers(data?.pages?.flatMap((page) => page.users) ?? []);
    }
  }, [data]);

  const [sorted, setSorted] = useState<SortBy>(SortBy.NONE);
  const [countryQuery, setCountryQuery] = useState<string | null>(null);

  const handleSortUsers = (sortBy: SortBy): void => {
    setSorted(sortBy);
  };

  const resetUsers = async (): Promise<void> => {
    console.log(isLoading);
    const { data } = await refetch();
    if (data) {
      setUsers(data.pages.flatMap((page) => page.users));
    }
    console.log(isLoading);
  };

  const deleteUser = ({ id }: UserId): void => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleCountryQuery = (value: string): void => {
    setCountryQuery(value);
  };

  const filteredUsers = useMemo(() => {
    return countryQuery ? [...users].filter((user) => user.country.toLocaleLowerCase().includes(countryQuery)) : users;
  }, [users, countryQuery]);

  const sortedUsers = useMemo(() => {
    if (sorted === SortBy.COUNTRY) {
      return [...filteredUsers].sort((a, b) => a.country.localeCompare(b.country));
    }
    if (sorted === SortBy.FIRSTNAME) {
      return [...filteredUsers].sort((a, b) => a.firstName.localeCompare(b.firstName));
    }
    if (sorted === SortBy.LASTNAME) {
      return [...filteredUsers].sort((a, b) => a.lastName.localeCompare(b.lastName));
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
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
}
