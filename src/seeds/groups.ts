import { getRepository } from "typeorm";
import * as Chance from "chance";

import { Group } from "../Entities/Groups";

export default async function groupsSeed() {
  try {
    const chance = new Chance();

    const groupsRepo = getRepository(Group);

    for (let i = 0; i < 5; i++) {
      const group = groupsRepo.create({
        name: chance.name(),
      });

      await groupsRepo.save(group);
    }

    console.log("Successfully created group seeds!");
  } catch (error) {
    console.log(error.message);
  }
}
