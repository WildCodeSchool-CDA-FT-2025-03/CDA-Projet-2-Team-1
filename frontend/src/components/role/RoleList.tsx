import { gql, useQuery } from '@apollo/client';

import Select from '../formUi/Select';

const GET_ROLES = gql`
  query getRoles {
    getRoles {
      id
      name
    }
  }
`;

type RoleListProps = {
  value: string;
  handleChange: (value: string) => void;
};

export default function Rolelist({ value, handleChange }: RoleListProps) {
  const { data } = useQuery(GET_ROLES);

  return (
    <div className="w-64 ">
      <Select
        value={value}
        handleChange={handleChange}
        label="Choisissez un rôle"
        list={data?.getRoles || []}
        field="name"
      />
    </div>
  );
}
