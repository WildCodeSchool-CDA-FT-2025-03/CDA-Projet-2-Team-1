import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetConsultationByDayQuery } from '@/gql/graphql-types';

type ConsultationProps = {
  date: Date;
};

export default function ConsultationList({ date }: ConsultationProps) {
  const req = useGetConsultationByDayQuery({ variables: { date: date } });
  const res = req.data?.getConsultationByDay || [];

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Heure</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>Prenom</TableHead>
          <TableHead className="text-right">Medecin</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {res.map((el) => (
          <TableRow key={el.id}>
            <TableCell>{new Date(el.date_start).getTime()}</TableCell>
            <TableCell>{el.patient.firstName}</TableCell>
            <TableCell>{el.patient.lastName}</TableCell>
            <TableCell>{el.doctor.lastName}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
