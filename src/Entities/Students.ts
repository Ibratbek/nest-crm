import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./Groups";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToOne(() => Group, (group) => group.id)
  group_id: Group;
}
