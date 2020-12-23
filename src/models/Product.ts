import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BaseEntity} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity('Product')
class Product extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn('increment')   
    Id!: number;

    @Field()
    @Column()
    Name!: string;

    @Field(() => Int)
    @Column('int', {default:0})
    Quantity!: number;

    @Field()
    @CreateDateColumn()
    created_at!: Date;

    @Field(() => Int)
    @Column()
    CategoryId!: number;
    
}

export default Product;