import { Filters } from './components/Filters';
import { Results } from './components/Results';
import { Table } from './components/Table';
import { useTable } from './hooks/useTable';
import { useUsers } from './hooks/useUsers';

const App: React.FC = () => {
  const { showRowColors, toggleShowRowColors } = useTable();
  const {
    sorted,
    sortedUsers,
    handleSortUsers,
    resetUsers,
    handleCountryQuery,
    deleteUser,
    users,
    isLoading,
    isFetching,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useUsers();

  return (
    <div className='mx-auto w-full max-w-screen-xl flex flex-col items-center gap-5 my-10'>
      <h1 className='text-2xl font-black text-center'>Lista de usuarios</h1>
      <Results count={sortedUsers.length} />
      <Filters
        toggleShowRowColors={toggleShowRowColors}
        sorted={sorted}
        handleSortUsers={handleSortUsers}
        resetUsers={resetUsers}
        handleCountryQuery={handleCountryQuery}
      />
      {users.length > 0 && !isFetching && (
        <Table
          users={sortedUsers}
          showRowColors={showRowColors}
          deleteUser={deleteUser}
          handleSortUsers={handleSortUsers}
        />
      )}
      {(isLoading || isFetching) && <strong>Cargando...</strong>}
      {!isLoading && isError && <p>Ha habido un error</p>}
      {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}
      {!isLoading && !isError && hasNextPage && (
        <button onClick={async () => await fetchNextPage()}>Cargar más resultados</button>
      )}
    </div>
  );
};

export default App;
