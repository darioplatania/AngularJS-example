var connect     = require('connect');
var serveStatic = require('serve-static');
var server = connect();

server.use(serveStatic('AngularJS-example'));

console.log('Server On');
server.listen(5000);
