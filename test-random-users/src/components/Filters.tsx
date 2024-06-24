import { SortBy } from '../@types/consts';

interface FiltersProps {
  sorted: SortBy;
  toggleShowRowColors: () => void;
  handleSortUsers: (sortBy: SortBy) => void;
  resetUsers: () => Promise<void>;
  handleCountryQuery: (value: string) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  sorted,
  toggleShowRowColors,
  handleSortUsers,
  resetUsers,
  handleCountryQuery,
}) => {
  return (
    <header className='flex items-center gap-5'>
      <button className='px-3 py-1 bg-blue-500 text-white rounded' onClick={toggleShowRowColors}>
        Colorea Filas
      </button>
      <button
        className={`px-3 py-1 text-white rounded ${sorted === SortBy.COUNTRY ? 'bg-blue-300' : 'bg-blue-500'}`}
        onClick={() => (sorted === SortBy.COUNTRY ? handleSortUsers(SortBy.NONE) : handleSortUsers(SortBy.COUNTRY))}
      >
        Ordena por país
      </button>
      <button className='px-3 py-1 bg-blue-500 text-white rounded' onClick={async () => await resetUsers()}>
        Restaurar estado inicial
      </button>
      <input
        type='text'
        placeholder='Filtrar por país'
        className='border px-2 py-1 text-sm'
        onChange={(event) => handleCountryQuery(event.target.value)}
      />
    </header>
  );
};
