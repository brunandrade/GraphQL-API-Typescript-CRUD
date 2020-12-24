import 'reflect-metadata';
import {Connect} from './config/typeorm'
import {StartServer} from './app'

async function Server() {
    await Connect();
    const app = await StartServer();    
    app.listen(3333);
    console.log('Server on Port 3333')
}

Server() 