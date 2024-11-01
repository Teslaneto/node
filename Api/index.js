const http = require('http');

http.createServer((request, response) =>{
    console.log(request.method);

    if(request.method === 'POST'){
        response.write('Hello, Geraldo');
        response.end();
    }else if(request.method === 'GET'){
        response.write('METODO GET');
        response.end();
    }
    
}).listen(3000)