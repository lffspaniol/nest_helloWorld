import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {
    private count = 1

    getCount(){
        return this.count++
    }
    
}
