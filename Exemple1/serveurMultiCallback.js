var connect = require("connect"); 

// var app = connect() 
// remplace 
// var app = connect.createServer()
var app = connect(); 

// Le paramètre next permet d'enchainer les callback
app.use((req, res, next) => {
    console.log("Appel callback 1"); 
    res.setHeader("X-nom", "Eric"); 
    next(); 
}); 

app.use((req, res) => {
    console.log("Appel callback 2"); 
    res.end("Double callback"); 
}); 

app.listen(3000); 
console.log("Serveur HTTP démarré sur le port 3000"); 
