import { createConnection } from "typeorm";
import groupsSeed from "../src/seeds/groups";
import teacherSeed from "../src/seeds/teachers";

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
})();
