import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity({ name: "tools" })
export class Tool extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;
}
