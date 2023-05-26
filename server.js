import express from 'express';
import { WebSocketServer } from 'ws';
import {createServer} from 'http';
import routes from './routes.js';
const app = express();

// const server = new WebSocket.Server({ noServer: true });
const port = 3000;

const httpServer = createServer(app);
const server = new WebSocketServer({ server: httpServer });
app.use(express.static('public'));
app.use('/', routes);
server.on('connection', (ws, request) => {
    ws.on('message', message => {
        console.log('Received Message: %s', message);
    });

    ws.send('Hello Client!');
});

app.on('upgrade', (request, socket, head) => {
    server.handleUpgrade(request, socket, head, ws => {
        server.emit('connection', ws, request);
    });
});

app.listen(port, () => console.log(`Server Started on port : ${port}!`));






