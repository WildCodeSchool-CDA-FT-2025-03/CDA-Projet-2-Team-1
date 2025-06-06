import { beforeAll, afterAll } from '@jest/globals';
import { dataSource } from './src/services/client.service';

beforeAll(async () => await dataSource.initialize());
afterAll(async () => await dataSource.destroy());
