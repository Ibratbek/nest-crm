import { getRepository } from "typeorm";
import * as Chance from "chance";

import { Teacher } from "../Entities/Teachers";
import { Group } from "../Entities/Groups";
import { SubjectTeacher } from "../Entities/SubjectTeacher";

export default async function subjectTeacherSeed() {
  try {
    const chance = new Chance();

    const subjectTeacherRepo = getRepository(SubjectTeacher);
    await subjectTeacherRepo.query("delete from subject_teacher");
    const groupsRepo = getRepository(Group);
    const groups = await groupsRepo.find();
    const teacherRepo = getRepository(Teacher);
    const teachers = await teacherRepo.find();

    for (let i = 0; i < 5; i++) {
      const subjectTeacher = subjectTeacherRepo.create({
        group: groups[i],
        teacher: teachers[i],
      });

      await subjectTeacherRepo.save(subjectTeacher);
    }

    console.log("Successfully created subject-teacher seeds!");
  } catch (error) {
    console.log(error.message);
  }
}
