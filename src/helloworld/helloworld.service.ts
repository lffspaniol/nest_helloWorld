import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {
    constructor(){}
    
    private count = 1

    getCount(){
        return this.count++
    }
    
}
