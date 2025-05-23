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
import { dateToTime } from '@/utiles/date.utile';

type ConsultationProps = {
  date: Date;
};

export default function ConsultationList({ date }: ConsultationProps) {
  const req = useGetConsultationByDayQuery({ variables: { date: date } });
  // const res = req.data?.getConsultationByDay || [];

  return (
    <section className="border-1 rounded-[6px] border-turquoise-600 w-1/2 max-h-[150px]">
      <Table className="table-auto overflow-scroll w-full">
        <TableCaption className="caption-top text-left text-2xl">
          Liste des patients par horaires
        </TableCaption>
        <TableHeader className="">
          <TableRow className="border-gray-300">
            <TableHead className="w-[100px] font-bold">Heure</TableHead>
            <TableHead className="text-right font-bold">Nom</TableHead>
            <TableHead className="text-right font-bold">Prénom</TableHead>
            <TableHead className="text-right font-bold">Médecin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-hidden">
          {req.data?.getConsultationByDay.map((el) => (
            <TableRow className="border-none" key={el.id}>
              <TableCell>{dateToTime(new Date(el.date_start))}</TableCell>
              <TableCell className="text-right">{el.patient.firstName}</TableCell>
              <TableCell className="text-right">{el.patient.lastName}</TableCell>
              <TableCell className="text-right font-bold">Dr. {el.doctor.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
