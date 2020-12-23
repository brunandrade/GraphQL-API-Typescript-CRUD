import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

@Entity('Product')
class Category{
    @PrimaryGeneratedColumn('increment')   
    Id!: number;

    @Column()
    Name!: string;

    @Column('int', {default:0})
    Quantity!: number;

    @CreateDateColumn()
    created_at!: Date;

    @Column()
    CategoryId!: number;
    
}

export default Category;