import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { HelloworldService } from './helloworld.service';
import { HelloWorld } from './helloworld.entity';

@Resolver('Helloworld')
export class HelloworldResolver {
  constructor(private helloworldService: HelloworldService) {}

  @Query('get')
  get(@Args('id') id: number): Promise<HelloWorld> {
    return this.helloworldService.getHelloWorld(id);
  }

  @Mutation('create')
  create(@Args('message') msm: string):Promise<HelloWorld>{
    return this.helloworldService.createHelloWorld(msm)
  }
}
