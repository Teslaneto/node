const http = require('http');
const url = require('url');

http.createServer((request, response) =>{

    const parsedUrl = url.parse(request.url, true);
    const pathName = parsedUrl.pathname;
    const queryParams = parsedUrl.query;

    if(request.method === 'GET'){
        //PODE FAZER O TESTE COLOCANDO A BARRA '/'

        if(pathName === '/'){
            response.writeHead(404, {'content-type': 'text/plain; charset:uft-8'});
            response.write('Pagina Nao Encotrada');
            response.end();
            return;
        }else{
            response.writeHead(200, {'content-type': 'text/plain; charset:uft-8'});
            response.write("Seja Bem-vindo "+(queryParams.name || 'Visitante'));
            response.end();
        }
        
    }

}).listen(3000);



//response.write('A somar é ,'+ (Number(queryParams.num1) +  Number(queryParams.num2)) ); RETORNARA A SOMA 