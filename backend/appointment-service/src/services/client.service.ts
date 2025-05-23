import { DataSource } from 'typeorm';
import CityEntity from '../entities/city.entity';
import PatientEntity from '../entities/patient.entity';
import RestEntity from '../entities/rest.entity';
import SsnEntity from '../entities/ssn.entity';
import UserEntity from '../entities/user.entity';

const port = process.env.DATABASE_PORT ? +process.env.DATABASE_PORT : 5432;
const sync = process.env.DATABASE_SYNC === 'true' ? true : false;

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  database: process.env.DATABASE_NAME || '',
  username: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  port: port,
  entities: [CityEntity, PatientEntity, RestEntity, UserEntity, SsnEntity],
  synchronize: sync,
});
