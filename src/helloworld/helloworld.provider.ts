import { Connection, Repository } from 'typeorm';
import { HelloWorld } from './helloworld.entity';

export const helloWorldProviders = [
  {
    provide: 'HELLOWORLD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(HelloWorld),
    inject: ['DATABASE_CONNECTION'],
  },
];