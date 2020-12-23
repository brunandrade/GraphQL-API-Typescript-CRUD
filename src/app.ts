import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {DefaultResolver} from './resolvers/Default'
import {buildSchema} from 'type-graphql'

const app = express();

export async function StartServer() {
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [DefaultResolver]
        })
    })

    server.applyMiddleware({app, path: '/graphql'});
    return app;
}


