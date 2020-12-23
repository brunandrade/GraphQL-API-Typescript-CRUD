import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('Category')
class Category{
    @PrimaryGeneratedColumn('increment')   
    Id!: number;

    @Column()
    Name!: string;
    
}

export default Category;