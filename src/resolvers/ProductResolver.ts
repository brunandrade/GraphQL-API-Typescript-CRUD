import {Resolver, Query, Mutation, InputType, Arg, Field, Int} from 'type-graphql'
import Product from '../models/Product'

// @InputType()
// class ProductUpdateInput{
//     @Field(() => String, {nullable: true})
//     Name?: string;

//     @Field(() => Int, {nullable: true})
//     Quantity?: number;

//     @Field(() => Int, {nullable: true})
//     Category?: number;
// }


@Resolver()
export class ProductResolver{

    @Mutation(() => String)
    async createProduct(
        @Arg('Name') Name: string,
        @Arg('Quantity', () => Int) Quantity: number,
        @Arg('CategoryId', () => Int) CategoryId: number
        ){
       
        await Product.create({Name, Quantity, CategoryId}).save();
        return "Produto inserido com Sucesso!!";     
    }

    @Mutation(() => String)
    async updateProduct(
        @Arg('Id', () => Int) Id: number,
        @Arg('Name') Name: string,
        @Arg('Quantity', () => Int) Quantity: number,
        @Arg('CategoryId', () => Int) CategoryId: number
        //@Arg('data', () => ProductUpdateInput) data: ProductUpdateInput
        ){       
        await Product.update({Id}, {Name, Quantity, CategoryId});
        return "Produto atualizado com Sucesso!!";     
    }

    @Mutation(() => String)
    async deleteProduct(@Arg('Id', () => Int) Id: number){
        await Product.delete({Id});
        return "Produto removido com Sucesso!!";     
    }

    @Query(() => [Product])
        products(){
        return Product.find();
    }

    // @Query(() => [Product])
    // productsByCategory( @Arg('CategoryId', () => Int) CategoryId: number,){
    // return Product.find({where: CategoryId.toString() });
    // }

}