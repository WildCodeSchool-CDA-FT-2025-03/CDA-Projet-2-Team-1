import { useGetRolesQuery } from '@/gql/graphql-types';
import { useState, useCallback } from 'react';

export default function Rolelist() {
  const { data } = useGetRolesQuery();
  const roles = data?.getRoles || [];
  const [selectedRole, setSelectedRole] = useState('admin');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setSelectedRole(event.target.value);
  }, []);

  return (
    <div className="w-64">
      <label htmlFor="options" className="block mb-2 text-sm font-medium text-gray-700">
        Choisissez une option
      </label>
      <select
        id="options"
        value={selectedRole}
        onChange={handleChange}
        className="block w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700"
      >
        {roles.map((role) => (
          <option key={role.id} value={role.name}>
            {role.name}
          </option>
        ))}
      </select>
    </div>
  );
}
