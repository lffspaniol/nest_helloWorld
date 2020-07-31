import { Module } from '@nestjs/common';
import { HelloworldService } from './helloworld.service';
import { HelloworldResolver } from './helloworld.resolver';

@Module({
  providers: [HelloworldService , HelloworldResolver],
})
export class HelloWorldModule {}
