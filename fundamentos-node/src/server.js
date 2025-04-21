import http from 'node:http';

const users =[];

const server = http.createServer ((req, res)=>{
    const {method, url} = req;

    if (method === 'POST' && url === '/users'){
        users.push({
            name: "Fernando",
            email: "flgm0504@gmail.com",
        })
        return res.end("Usuario criado");
    }

    if (method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users));
    }
})

server.listen(3333);