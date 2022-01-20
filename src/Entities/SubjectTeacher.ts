import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group } from "./Groups";
import { Teacher } from "./Teachers";

@Entity("subject_teacher")
export class SubjectTeacher {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Group, (group) => group.id)
  @JoinColumn({ name: "group_id" })
  group: Group;

  @OneToOne(() => Teacher, (teacher) => teacher.id)
  @JoinColumn({ name: "teacher_id" })
  teacher: Teacher;
  subject_teacher: { id: number };
}
