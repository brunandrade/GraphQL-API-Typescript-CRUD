import {Query, Resolver} from 'type-graphql'

@Resolver()
export class DefaultResolver{
    @Query(() => String)
    default(){
        return "Success Connection!"
    }
}
