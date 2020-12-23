import {createConnection} from 'typeorm'

export async function Connect() {
    await createConnection().then (() => console.log("Database Connection Success!"));
    // console.log("Database Connection Success!");
}