import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "devlanguages" })
export class DevLanguages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:100 })
  name: string;
}