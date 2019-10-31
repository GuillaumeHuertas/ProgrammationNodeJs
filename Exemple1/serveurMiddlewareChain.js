var connect = require("connect"); 
var logger = require("./logger.js"); 
var app = connect(); 

app.use(logger("logs.txt"))
.use((req, res, next) => {
    res.setHeader("X-nom", "Eric"); 
    next(); 
})
.use((req, res) => {
    res.end("Bonjour avec modules et fonctions chainées"); 
})
.listen(3000); 
console.log("Serveur HTTP démarré sur le port 3000"); 