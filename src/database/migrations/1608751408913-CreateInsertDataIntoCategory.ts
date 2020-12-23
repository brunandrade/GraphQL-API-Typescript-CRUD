import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateInsertDataIntoCategory1608751408913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO Category (Name) values ('Livros');`);
        await queryRunner.query(`INSERT INTO Category (Name) values ('Tecnologia');`);
        await queryRunner.query(`INSERT INTO Category (Name) values ('Casa');`);
        await queryRunner.query(`INSERT INTO Category (Name) values ('Jogos');`);
        await queryRunner.query(`INSERT INTO Category (Name) values ('Jardim');`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
