var connect = require("connect"); 
// Utilise le module externe logger.js
var logger = require("./logger.js"); 
var app = connect(); 
// On donne le nom du fichier de logs qui sera créé si il n'existe pas 
app.use(logger("logs.txt")); 
app.use((req, res, next) => {
    res.setHeader("X-nom", "Eric"); 
    next(); 
}); 
app.use((req, res) => {
    res.end("Bonjour avec module de logg"); 
}); 

app.listen(3000); 
console.log("Serveur HTTP démarré sur le port 3000"); 