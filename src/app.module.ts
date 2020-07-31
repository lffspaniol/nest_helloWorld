import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HelloWorldModule } from './helloworld/helloworld.module';
import { DatabaseService } from './database/database.service';
import { HelloworldService } from './helloworld/helloworld.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    HelloWorldModule
  ],
  providers: [DatabaseService, HelloworldService],
})
export class AppModule {}
