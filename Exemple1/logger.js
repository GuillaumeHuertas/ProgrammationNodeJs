var fs = require("fs");
let n = 0; 
// La fonction logger prend en paramètre le nom du fichier
function logger(filename) {
    return function (req, res, next) {
        var filename = "logs.txt"; 
        fs.writeFile(filename, req.url + "\r\n", { flag : "a+" }, () => {}); 
        // A chauqe appel la variable n prend +1
        n++; 
        console.log(filename + " requête URL : " + req.url + " nombre d'appels : " + n); 
        next(); 
    };
}
// Déclare le logger.js en tant que module externe 
module.exports = logger; 