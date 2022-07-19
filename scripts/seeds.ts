import { createConnection, getRepository } from "typeorm";
import groupsSeed from "../src/seeds/groups";
import teacherSeed from "../src/seeds/teachers";
import subjectSeed from "../src/seeds/subjects";
import studentSeed from "../src/seeds/students";
import markSeed from "../src/seeds/marks";
import subjectTeacherSeed from "../src/seeds/subject-teacher";
import { Group } from "../src/Entities/Groups";
import { Mark } from "../src/Entities/Marks";
import { Student } from "../src/Entities/Students";
import { Subject } from "../src/Entities/Subjects";
import { SubjectTeacher } from "../src/Entities/SubjectTeacher";
import { Teacher } from "../src/Entities/Teachers";

(async () => {
  try {
    await createConnection();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
  try {
    const groupsRepo = getRepository(Group);
    const marksRepo = getRepository(Mark);
    const studentsRepo = getRepository(Student);
    const subjectsRepo = getRepository(Subject);
    const subjectTeacherRepo = getRepository(SubjectTeacher);
    const teachersRepo = getRepository(Teacher);

    await subjectTeacherRepo.query("delete from subject_teacher");
    await marksRepo.query("delete from marks");
    await studentsRepo.query("delete from students");
    await groupsRepo.query("delete from groups");
    await subjectsRepo.query("delete from subjects");
    await teachersRepo.query("delete from teachers");
    
  } catch (error) {
    console.log(error);
  }
  try {
    await groupsSeed();
  } catch (error) {
    console.log(error);
  }
  try {
    await teacherSeed();
  } catch (error) {
    console.log(error);
  }
  try {
    await subjectSeed();
  } catch (error) {
    console.log(error);
  }
  try {
    await studentSeed();
  } catch (error) {
    console.log(error);
  }
  try {
    await markSeed();
  } catch (error) {
    console.log(error);
  }
  try {
    await subjectTeacherSeed();
  } catch (error) {
    console.log(error);
  }
})();
