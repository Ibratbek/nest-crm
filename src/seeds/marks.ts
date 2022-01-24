import { getRepository } from "typeorm";
import * as Chance from "chance";

import { Student } from "../Entities/Students";
import { Mark } from "../Entities/Marks";
import { Subject } from "../Entities/Subjects";

export default async function markSeed() {
  try {
    const chance = new Chance();

    const marksRepo = getRepository(Mark);
    await marksRepo.query("delete from marks");

    const studentsRepo = getRepository(Student);
    const students = await studentsRepo.find();

    const subjectsRepo = getRepository(Subject);
    const subjects = await subjectsRepo.find();

    for (let i = 0; i < 5; i++) {
      const mark = marksRepo.create({
        student: students[i],
        subject: subjects[i],
        mark: Math.trunc(Math.random() * 3 + 2),
      });

      await marksRepo.save(mark);
    }

    console.log("Successfully created mark seeds!");
  } catch (error) {
    console.log(error.message);
  }
}
