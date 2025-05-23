import { useGetServicesQuery } from '@/gql/graphql-types';
import Select from '../formUi/Select';

type ServiceListProps = {
  value: string;
  handleChange: (value: string) => void;
};

export default function Servicelist({ value, handleChange }: ServiceListProps) {
  const { data } = useGetServicesQuery();

  return (
    <div className="w-64">
      <Select
        value={value}
        handleChange={handleChange}
        label="Choisissez une option"
        list={data?.getServices || []}
        field="name"
      />
    </div>
  );
}
