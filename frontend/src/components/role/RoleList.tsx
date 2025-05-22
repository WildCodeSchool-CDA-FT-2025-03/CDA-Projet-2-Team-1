import { useGetRolesQuery } from '@/gql/graphql-types';
import Select from '../formUi/Select';

type RoleListProps = {
  value: string;
  handleChange: (value: string) => void;
};

export default function Rolelist({ value, handleChange }: RoleListProps) {
  const { data } = useGetRolesQuery();

  return (
    <div className="w-64">
      <Select
        value={value}
        handleChange={handleChange}
        label="Choisissez une option"
        list={data?.getRoles || []}
        field="name"
      />
    </div>
  );
}
