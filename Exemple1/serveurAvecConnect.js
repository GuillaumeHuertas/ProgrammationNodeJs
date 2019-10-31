var connect = require("connect"); 
var http = require("http"); 

var app = connect(); 

app.use((req, res) => {
    res.end('Hello from connect'); 
}); 

http.createServer(app).listen(3000); 
console.log("Serveur HTTP démarré sur le port 3000"); 

/** 
// Ancienne version ne fonctionne plus avec un node récent
var connect = require("connect"); 
var app = connect.createServer(function(req, res) {
    res.end("Bonjour"); 
); 
app.listen(3000); 
console.log("Serveur HTTP démarré sur le port 3000"); 
*/