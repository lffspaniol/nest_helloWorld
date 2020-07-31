import { Resolver, Query, Args } from '@nestjs/graphql';
import { HelloworldService } from './helloworld.service';
import { HelloWorld } from './helloworld';

@Resolver('Helloworld')
export class HelloworldResolver {
  constructor(private helloworldService: HelloworldService) {}

  private toAdd(count: number): HelloWorld {
    return {
      ID: 1,
      count: count,
      Hello: 'world',
    };
  }

  @Query('add')
  add(@Args('id') id: number) {
    console.log(id)
    return this.toAdd(this.helloworldService.getCount());
  }
}
