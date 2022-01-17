import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./Groups";
import { Teacher } from "./Teachers";

@Entity("subject_teacher")
export class SubjectTeacher {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Teacher, (teacher) => teacher.id)
  techer_id: Teacher;

  @OneToOne(() => Group, (group) => group.id)
  group_id: Group;
}
