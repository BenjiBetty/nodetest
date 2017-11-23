//Création serveur avec nodeJS

let http = require('http')
let fs = require('fs')
let server = http.createServer();

server.on('request', (request, response) => {
    response.writeHead(200)
    console.log(request.url)
    response.end('Bonjour')

    // fs.readFile('index.html', (err, data) => {
    //     if (err) {
    //         response.writeHead(404)
    //         response.end("Ce fichier n'existe pas")
    //     } else {
    //         response.writeHead(200, {
    //             'content-type': 'text/html; charset=utf-8'
    //         })
    //     }
    //     response.end(data)
    // })
})

server.listen(8080)