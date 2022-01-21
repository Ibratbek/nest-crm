import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1642767707403 implements MigrationInterface {
    name = 'InitialMigration1642767707403'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "students_group_id_fkey"`);
        await queryRunner.query(`CREATE TABLE "subject_teacher" ("id" SERIAL NOT NULL, "group_id" integer, "teacher_id" integer, CONSTRAINT "REL_40342181b68e4b510e93b0311c" UNIQUE ("teacher_id"), CONSTRAINT "PK_363efd8b6cb5ef4bb5858627075" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students" ALTER COLUMN "first_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_b9f6fcd8a397ee5b503191dd7c3" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "marks" ADD CONSTRAINT "FK_5226e1592e6291dbe7a07640346" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subject_teacher" ADD CONSTRAINT "FK_09299f570d395619a50d778b8a7" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subject_teacher" ADD CONSTRAINT "FK_40342181b68e4b510e93b0311ca" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subject_teacher" DROP CONSTRAINT "FK_40342181b68e4b510e93b0311ca"`);
        await queryRunner.query(`ALTER TABLE "subject_teacher" DROP CONSTRAINT "FK_09299f570d395619a50d778b8a7"`);
        await queryRunner.query(`ALTER TABLE "marks" DROP CONSTRAINT "FK_5226e1592e6291dbe7a07640346"`);
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_b9f6fcd8a397ee5b503191dd7c3"`);
        await queryRunner.query(`ALTER TABLE "students" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" ALTER COLUMN "first_name" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "subject_teacher"`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "students_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
