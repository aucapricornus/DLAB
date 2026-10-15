import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "softskills" })
export class SoftSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:100 })
  name: string;
}