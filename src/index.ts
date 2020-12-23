import 'reflect-metadata';
import {Connect} from './config/typeorm'
import {StartServer} from './app'

async function Server() {
    await Connect();
    const app = await StartServer();    
    app.listen(3000);
    console.log('Server on Port 3000')
}

Server() 