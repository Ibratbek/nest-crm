import { createConnection } from "typeorm";
import groupsSeed from "../src/seeds/groups";

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
})();
