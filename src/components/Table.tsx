import { SortBy, User, UserId } from '../@types/user';

interface TableProps {
  users: User[];
  showRowColors: boolean;
  deleteUser: (id: UserId) => void;
  handleSortUsers: (sortBy: SortBy) => void;
}

export const Table: React.FC<TableProps> = ({
  users,
  showRowColors,
  deleteUser,
  handleSortUsers,
}) => {
  return (
    <table className='table-auto w-full text-center'>
      <thead className='bg-blue-100'>
        <tr>
          <th className='w-32'>Foto</th>
          <th
            className='cursor-pointer'
            onClick={() => handleSortUsers(SortBy.FIRSTNAME)}
          >
            Nombre
          </th>
          <th
            className='cursor-pointer'
            onClick={() => handleSortUsers(SortBy.LASTNAME)}
          >
            Apellido
          </th>
          <th
            className='cursor-pointer'
            onClick={() => handleSortUsers(SortBy.COUNTRY)}
          >
            País
          </th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ id, photo, firstName, lastName, country }, index) => {
          const bgColor =
            index % 2 === 0
              ? 'bg-blue-500 text-white'
              : 'bg-blue-300 text-white';
          const color = showRowColors ? bgColor : '';

          return (
            <tr key={id} className={color}>
              <td className='flex items-center justify-center'>
                <img
                  src={photo}
                  alt={`${firstName} ${lastName}`}
                  className='w-10'
                />
              </td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{country}</td>
              <td>
                <button
                  className='bg-red-700 text-white px-5 py-1 font-semibold'
                  onClick={() => deleteUser({ id })}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
