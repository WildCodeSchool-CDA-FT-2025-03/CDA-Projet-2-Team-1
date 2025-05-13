import { DataSource } from 'typeorm';
// Entities
import CityEntity from '../entities/city.entity';
import ConsultationEntity from '../entities/consultation.entity';
import FileEntity from '../entities/file.entity';
import NoteSecretaryEntity from '../entities/note_secretary.entity';
import NoteConfidentialEntity from '../entities/note_confidential.entity';
import PatientEntity from '../entities/patient.entity';
import ReasonConsultationEntity from '../entities/reason_consultation.entity';
import RoleEntity from '../entities/role.entity';
import SsnEntity from '../entities/ssn.entity';
import ServiceEntity from '../entities/service.entity';
import UserEntity from '../entities/user.entity';

const port = process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 5432;
const sync = process.env.DATABASE_SYNC === 'true' ? true : false;

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || '',
  database: process.env.DATABASE_NAME || '',
  username: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  port: port,
  entities: [
    CityEntity,
    ConsultationEntity,
    FileEntity,
    NoteConfidentialEntity,
    NoteSecretaryEntity,
    PatientEntity,
    ReasonConsultationEntity,
    RoleEntity,
    ServiceEntity,
    SsnEntity,
    UserEntity,
  ],
  synchronize: sync,
});
