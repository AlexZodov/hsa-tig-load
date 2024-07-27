import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUnit1Table1722071486144 implements MigrationInterface {
  name = 'CreateUnit1Table1722071486144';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "unit_one" ("id" text NOT NULL, "type" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2b2c89513b85f338d0b431aa078" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "unit_one"`);
  }
}
