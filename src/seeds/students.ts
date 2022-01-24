import { getRepository } from "typeorm";
import * as Chance from "chance";

import { Student } from "../Entities/Students";
import { Group } from "../Entities/Groups";

export default async function studentSeed() {
  try {
    const chance = new Chance();

    const studentsRepo = getRepository(Student);
    await studentsRepo.query("delete from students cascade");
    const groupsRepo = getRepository(Group);
    const groups = await groupsRepo.find();

    for (let i = 0; i < 5; i++) {
      const student = studentsRepo.create({
        first_name: chance.first(),
        last_name: chance.last(),
        group: groups[i],
      });

      await studentsRepo.save(student);
    }

    console.log("Successfully created student seeds!");
  } catch (error) {
    console.log(error.message);
  }
}
