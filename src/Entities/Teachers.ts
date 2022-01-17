import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("teachers")
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
}
