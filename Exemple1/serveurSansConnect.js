var http = require("http"); 
var server = http.createServer(); 

server.on("request", function(req, res) {
    res.setHeader("X-nom", "Eric"); 
});

server.on("request", function(req, res){
    res.end("Bonjour"); 
}); 

server.listen(3000); 