import http from 'node:http';

const users =[];

const server = http.createServer (async(req, res)=>{
    const {method, url} = req;

    const buffers = [];

    for await (const chunk of req){
        buffers.push(chunk)
    }

    try{
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    }catch{
        req.body = null
    }

    console.log(req.body)

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