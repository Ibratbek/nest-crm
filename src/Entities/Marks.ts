import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Student } from "./Students";
import { Subject } from "./Subjects";

@Entity("marks")
export class Mark {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: "student_id" })
  student: Student;

  @ManyToOne(() => Subject, (subject) => subject.id)
  @JoinColumn({ name: "subject_id" })
  subject: Subject;

  @Column({ type: Date, default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column()
  mark: number;
}
