import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group } from "./Groups";
import { Mark } from "./Marks";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(() => Mark, (mark) => mark)
  marks: Mark[];

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn({ name: "group_id" })
  group: Group;
}
