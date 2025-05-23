import {
  Table,
  TableBody,
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
    <section className="border-1 rounded-[6px] border-turquoise-600 w-1/2">
      <div className="p-4 pb-2">
        <h2 className="text-2xl font-semibold">Liste des patients par horaires</h2>
      </div>
      <div className="border-b border-gray-300">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow className="border-gray-300">
              <TableHead className="w-[100px] font-bold">Heure</TableHead>
              <TableHead className="text-right font-bold">Nom</TableHead>
              <TableHead className="text-right font-bold">Prénom</TableHead>
              <TableHead className="text-right font-bold">Médecin</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
      <div className="overflow-y-scroll max-h-[200px]">
        <Table className="table-auto w-full">
          <TableBody>
            {req.data?.getConsultationByDay.map((el) => (
              <TableRow className="border-none" key={el.id}>
                <TableCell className="w-[100px]">{dateToTime(new Date(el.date_start))}</TableCell>
                <TableCell className="text-right">{el.patient.firstName}</TableCell>
                <TableCell className="text-right">{el.patient.lastName}</TableCell>
                <TableCell className="text-right font-bold">Dr. {el.doctor.lastName}</TableCell>
              </TableRow>
            ))}
            {/* TODO: à supprimer après le test */}
            <TableRow className="border-none">
              <TableCell className="w-[100px]">10:00</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right font-bold">Dr. test</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="w-[100px]">10:00</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right font-bold">Dr. test</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="w-[100px]">10:00</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right font-bold">Dr. test</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="w-[100px]">10:00</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right font-bold">Dr. test</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="w-[100px]">10:00</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right font-bold">Dr. test</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="w-[100px]">10:00</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right font-bold">Dr. test</TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="w-[100px]">10:00</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right">test</TableCell>
              <TableCell className="text-right font-bold">Dr. test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
