import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./Students";
import { Subject } from "./Subjects";

@Entity("marks")
export class Mark {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Student, (student) => student.id)
  student_id: Student;

  @OneToOne(() => Subject, (subject) => subject.id)
  subject_id: Subject;

  @Column({ type: Date, default: () => "CURRENT_TIMESTAPM" })
  date: Date;

  @Column()
  mark: number;
}
