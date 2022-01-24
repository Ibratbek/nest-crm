import { createConnection } from "typeorm";
import groupsSeed from "../src/seeds/groups";
import teacherSeed from "../src/seeds/teachers";
import subjectSeed from "../src/seeds/subjects";
import studentSeed from "../src/seeds/students";
import markSeed from "../src/seeds/marks";
import subjectTeacherSeed from "../src/seeds/subject-teacher";

(async () => {
  try {
    await createConnection();
  } catch (e) {
    console.log(e);
    process.exit(1);
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
