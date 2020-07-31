import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class HelloWorld {
  @PrimaryColumn()
  id: number;

  @Column()
  Hello: string;

  @Column()
  count: number;
}
