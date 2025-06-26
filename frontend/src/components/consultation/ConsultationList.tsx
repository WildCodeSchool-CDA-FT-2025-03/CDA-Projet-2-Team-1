// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
// Utils
import { formatTime } from '@/utils/date.utility';
// Types
import { useGetConsultationByDayQuery } from '@/gql/graphql-types';
// Styles
import { ButtonLink } from '../ui/button';
import { Eye } from 'lucide-react';

type ConsultationProps = {
  date: Date;
};

export default function ConsultationList({ date }: ConsultationProps) {
  const req = useGetConsultationByDayQuery({ variables: { date: date } });

  return (
    <section className="w-1/2 border rounded-md border-turquoise-600 bg-white flex flex-col h-full">
      <div className="p-4 pb-2 flex-shrink-0">
        <h2 className="text-2xl font-semibold">Liste des patients par horaires</h2>
      </div>
      {/* Header de la table - fixe */}
      <div className="flex-shrink-0">
        <Table className="table-auto w-full">
          <TableHeader>
            <TableRow className="border-gray-200">
              <TableHead className="font-bold">Heure</TableHead>
              <TableHead className="font-bold">Nom</TableHead>
              <TableHead className="font-bold">Prénom</TableHead>
              <TableHead className="font-bold">Médecin</TableHead>
              <TableHead className="font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
      {/* Contenu scrollable de la table */}
      <div className="overflow-y-auto h-full">
        <Table className="table-auto w-full">
          <TableBody>
            {req.data?.getConsultationByDay.map((el) => (
              <TableRow className="border-none" key={el.id}>
                <TableCell>{formatTime(new Date(el.date_start))}</TableCell>
                <TableCell>{el.patient.firstname}</TableCell>
                <TableCell>{el.patient.lastname}</TableCell>
                <TableCell className="font-bold">Dr. {el.doctor.lastname}</TableCell>
                <TableCell>
                  <ButtonLink
                    to={`consultation/${el.id}`}
                    className="p-2 flex flex-row items-center justify-center gap-2 text-sm font-semibold"
                  >
                    <Eye className="w-4 h-4" />
                    Voir
                  </ButtonLink>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
