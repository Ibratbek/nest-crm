import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group } from "./Groups";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(() => Group, (group) => group.id)
  @JoinColumn({ name: "group_id" })
  group: Group;
}
