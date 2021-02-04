const { debug } = require('console');
const http = require('http');
const app = require('./app.js');
const server = http.createServer(app);
const { IS_DEV, PORT = 8000 } = require('./env');

server.listen(+PORT);

server.on('error', console.error);
server.on('listening', () => {
    if(IS_DEV)
    {
        debug(`Server is running on ${PORT} !!!`);
    }
});