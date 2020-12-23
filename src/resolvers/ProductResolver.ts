import {Resolver, Query, Mutation, InputType, Arg, Field, Int} from 'type-graphql'
import Product from '../models/Product'

@InputType()
class ProductInput{
    @Field()
    Name!: string;

    @Field(() => Int)
    Quantity!: number;

    @Field(() => Int)
    CategoryId!: number;
}

@Resolver()
export class ProductResolver{

    @Mutation(()=> Product)
    async createProduct(@Arg('data', () => ProductInput) data: ProductInput){
        const product =  await Product.create(data).save();
        return product;     
    }

    @Query(()=> [Product])
    products(){
    return Product.find();
}

}