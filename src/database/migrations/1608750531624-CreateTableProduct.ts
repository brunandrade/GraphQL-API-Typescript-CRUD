import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableProduct1608750531624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "Product",
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
                {
                    name:'Quantity',
                    type: "varchar",                  
                },    
                {
                    name:'CategoryId',
                    type: "int",                  
                },   
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }    
            ]

            
        }), true)

        await queryRunner.createForeignKey("Product", new TableForeignKey({
            columnNames: ["CategoryId"],
            referencedColumnNames: ["Id"],
            referencedTableName: "Category",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Product')
    }

}
