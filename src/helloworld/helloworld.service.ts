import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { HelloWorld } from './helloworld.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HelloworldService {
  constructor(
    @Inject('HELLOWORLD_REPOSITORY')
    private helloWorldRepository: Repository<HelloWorld>,
  ) {}

  async getHelloWorld(id: number): Promise<HelloWorld> {
    const found = await this.helloWorldRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`helloWorld id: ${id} not found`);
    }
    return found;
  }

  async createHelloWorld(message: string): Promise<HelloWorld> {
    const created = await this.helloWorldRepository.create();
    created.Hello = message;
    await this.helloWorldRepository.save(created);
    const result = await this.helloWorldRepository.findOne({ Hello: message });
    return result;
  }
}
