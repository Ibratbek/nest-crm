import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1642849149078 implements MigrationInterface {
  name = "initial1642849149078";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "groups" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_659d1483316afb28afd3a90646e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "students" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "group_id" integer, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "marks" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "mark" integer NOT NULL, "student_id" integer, "subject_id" integer, CONSTRAINT "PK_051deeb008f7449216d568872c6" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "subject_teacher" ("id" SERIAL NOT NULL, "group_id" integer, "teacher_id" integer, CONSTRAINT "REL_40342181b68e4b510e93b0311c" UNIQUE ("teacher_id"), CONSTRAINT "PK_363efd8b6cb5ef4bb5858627075" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "students" ADD CONSTRAINT "FK_b9f6fcd8a397ee5b503191dd7c3" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "marks" ADD CONSTRAINT "FK_5226e1592e6291dbe7a07640346" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "marks" ADD CONSTRAINT "FK_13120386acf0b80ecd25fdac3b0" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "subject_teacher" ADD CONSTRAINT "FK_09299f570d395619a50d778b8a7" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "subject_teacher" ADD CONSTRAINT "FK_40342181b68e4b510e93b0311ca" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subject_teacher" DROP CONSTRAINT "FK_40342181b68e4b510e93b0311ca"`
    );
    await queryRunner.query(
      `ALTER TABLE "subject_teacher" DROP CONSTRAINT "FK_09299f570d395619a50d778b8a7"`
    );
    await queryRunner.query(
      `ALTER TABLE "marks" DROP CONSTRAINT "FK_13120386acf0b80ecd25fdac3b0"`
    );
    await queryRunner.query(
      `ALTER TABLE "marks" DROP CONSTRAINT "FK_5226e1592e6291dbe7a07640346"`
    );
    await queryRunner.query(
      `ALTER TABLE "students" DROP CONSTRAINT "FK_b9f6fcd8a397ee5b503191dd7c3"`
    );
    await queryRunner.query(`DROP TABLE "subject_teacher"`);
    await queryRunner.query(`DROP TABLE "teachers"`);
    await queryRunner.query(`DROP TABLE "marks"`);
    await queryRunner.query(`DROP TABLE "subjects"`);
    await queryRunner.query(`DROP TABLE "students"`);
    await queryRunner.query(`DROP TABLE "groups"`);
  }
}
