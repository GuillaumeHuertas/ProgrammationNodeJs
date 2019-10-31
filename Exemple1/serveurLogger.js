var connect = require ("connect"); 
var fs = require("fs");
var app = connect(); 

 
app.use((req, res, next) => {
    var filename = "logs.txt"; 
    // Depuis la version 10 de node, il est nécessaire d'ajouter une fonction callback 
    // () => {}, à un fs.writefile()
    fs.writeFile(filename, req.url + "\r\n", { flag : "a+" }, () => {}); 
    console.log(filename + " " + req.url); 
    next(); 
});
app.use((req, res, next) => {
    res.setHeader("X-nom", "Eric"); 
    next(); 
}); 
app.use((req, res) => {
    res.end("Bonjour"); 
}); 

app.listen(3000); 
console.log("Serveur HTTP démarré sur le port 3000"); 
