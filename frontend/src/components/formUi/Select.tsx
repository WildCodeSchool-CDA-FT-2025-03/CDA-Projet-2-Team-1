import { RoleEntity, ServiceEntity } from '@/gql/graphql-types';

type SelectProps = {
  value: string;
  handleChange: (value: string) => void;
  list: RoleEntity[] | ServiceEntity[];
  field: 'name';
  label: string;
};

function Select({ value, handleChange, label, list, field }: SelectProps) {
  return (
    <>
      <label htmlFor="options" className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id="options"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="block w-full p-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-700"
      >
        {list.map((el) => (
          <option key={el.id} value={el[field]}>
            {el[field]}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
