import CityEntity from '../entities/city.entity';
import ConsultationEntity from '../entities/consultation.entity';
import { DataSource } from 'typeorm';
import { Doctor } from '../entities/Doctor';
import PatientEntity from '../entities/patient.entity';
import RestEntity from '../entities/rest.entity';
import { Service } from '../entities/Service';
import SsnEntity from '../entities/ssn.entity';
import UserEntity from '../entities/user.entity';
import ConsultationEntity from '../entities/consultation.entity';
import ServiceEntity from '../entities/service.entity';
import RoleEntity from '../entities/role.entity';

const port = process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 5432;
const sync = true; // Temporarily enable sync to create correct tables

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  database: process.env.DATABASE_NAME || '',
  username: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  port: port,
  entities: [
    CityEntity,
    PatientEntity,
    RestEntity,
    UserEntity,
    SsnEntity,
    ConsultationEntity,
    Service,
    Doctor,
    ServiceEntity,
    RoleEntity,
  ],
  synchronize: sync,
});
