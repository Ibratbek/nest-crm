import { getRepository } from "typeorm";
import * as Chance from "chance";

import { Teacher } from "../Entities/Teachers";

export default async function teacherSeed() {
  try {
    const chance = new Chance();

    const teachersRepo = getRepository(Teacher);
    await teachersRepo.query("delete from teachers cascade");

    for (let i = 0; i < 5; i++) {
      const teacher = teachersRepo.create({
        first_name: chance.first(),
        last_name: chance.last(),
      });

      await teachersRepo.save(teacher);
    }

    console.log("Successfully created teacher seeds!");
  } catch (error) {
    console.log(error.message);
  }
}
