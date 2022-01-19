import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Student } from "./Students";
import { Subject } from "./Subjects";

@Entity("marks")
export class Mark {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Student, (student) => student.id)
  @JoinColumn({ name: "student_id" })
  student: Student;

  @OneToOne(() => Subject, (subject) => subject.id)
  @JoinColumn({ name: "subject_id" })
  subject: Subject;

  @Column({ type: Date, default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column()
  mark: number;
}
