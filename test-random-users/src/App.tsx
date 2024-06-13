import { Filters } from './components/Filters';
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
    deleteUser,
    handleCountryQuery,
  } = useUsers();

  return (
    <div className='mx-auto w-full max-w-screen-xl flex flex-col items-center gap-5 my-10'>
      <h1 className='text-2xl font-black text-center'>Lista de usuarios</h1>
      <Filters
        toggleShowRowColors={toggleShowRowColors}
        sorted={sorted}
        handleSortUsers={handleSortUsers}
        resetUsers={resetUsers}
        handleCountryQuery={handleCountryQuery}
      />
      <Table
        users={sortedUsers}
        showRowColors={showRowColors}
        deleteUser={deleteUser}
        handleSortUsers={handleSortUsers}
      />
    </div>
  );
};

export default App;
