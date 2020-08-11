import { Resolver, Query, Args, Mutation,Subscription } from '@nestjs/graphql';
import { HelloworldService } from './helloworld.service';
import { HelloWorld } from './helloworld.entity';
import { PubSub } from 'graphql-subscriptions';



const pubSub = new PubSub();

export class HelloworldResolver {
  constructor(private helloworldService: HelloworldService) {}

  @Query('get')
  get(@Args('id') id: number): Promise<HelloWorld> {
    return this.helloworldService.getHelloWorld(id);
  }

  @Mutation('create')
  create(@Args('message') msm: string):Promise<HelloWorld>{
    const result = this.helloworldService.createHelloWorld(msm)
    pubSub.publish('addedHelloWorld',{addedHelloWorld: result})
    return result
  }

  @Subscription('addedHelloWorld')
  addedHelloWorld(){
    return pubSub.asyncIterator('addedHelloWorld')
  }
}
