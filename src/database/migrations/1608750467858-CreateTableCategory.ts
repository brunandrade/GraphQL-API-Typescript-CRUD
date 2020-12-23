import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableCategory1608750467858 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "Category",
            columns:[
                {
                    name:'Id',
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:'Name',
                    type: "varchar",                  
                },               
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Category')
    }

}
