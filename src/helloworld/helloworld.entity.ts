import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'hellos' })
export class HelloWorld {
  @PrimaryColumn({ name: 'id' })
  ID: number;

  @Column({ name: 'contador' })
  count: number;

  @Column({ name: 'messagem' })
  Hello: string;

  @Column({ name: 'data_criacao' })
  CreatedAt: Date;

  @Column({ name: 'data_alteracao' })
  UpdatedAt?: Date;

  @Column({ name: 'data_exclusao' })
  DeletedAt?: Date;
}
