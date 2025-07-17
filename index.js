const express = require('express');
const server = express();

// http://localhost:3000/hello?nome=Diego&idade=23
// query params = ?nome=Diego&idade=23

server.get("/hello", (req, res) => {
    const { nome, idade } = req.query;

    return res.json({
        tittle: "Hello World!",
        message: `Olá ${nome}, tudo bem?`,
        idade: idade
    });
});

// http://localhost:3000/hello/Diego/23
// route params = /hello/:nome/:idade

server.get("/hello/:nome/:idade", (req, res) => {
    const nome = req.params;
    
    return res.json({
        tittle: "Hello World!",
        message: `Olá ${nome}, tudo bem?`,
        idade: idade
    });
})

server.listen(3000);