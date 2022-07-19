import { getRepository } from "typeorm";
import * as Chance from "chance";

import { Subject } from "../Entities/Subjects";

export default async function subjectSeed() {
  try {
    const chance = new Chance();

    const subjectsRepo = getRepository(Subject);
    await subjectsRepo.query("delete from subjects");

    for (let i = 0; i < 6; i++) {
      const subject = subjectsRepo.create({
        title: chance.word(),
      });

      await subjectsRepo.save(subject);
    }

    console.log("Successfully created subject seeds!");
  } catch (error) {
    console.log(error.message);
  }
}
