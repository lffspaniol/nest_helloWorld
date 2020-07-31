import { Module } from '@nestjs/common';
import { HelloworldService } from './helloworld.service';
import { HelloworldResolver } from './helloworld.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { helloWorldProviders } from './helloworld.provider';

@Module({
  imports: [DatabaseModule],
  providers: [
    HelloworldService, 
    HelloworldResolver,
    ...helloWorldProviders
  ],
  exports: [HelloworldResolver],
})
export class HelloWorldModule {}
