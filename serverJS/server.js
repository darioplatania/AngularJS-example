var connect     = require('connect');
var serveStatic = require('serve-static');
var server = connect();

server.use(serveStatic('../../angularJS/esercizi/es3_myAmazon'));

console.log('Server On');   
server.listen(5000);