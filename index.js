const express = require('express');
const path = require('path');

// Serve para tornar o express.static() recursivo, ou seja, incluir todas as sub-pastas
const serveStatic = require('serve-static');

// dotenv
require("dotenv").config();

// Porta do heroku ou Vercel
const PORT = process.env.PORT;

// Caminho local
const local = __dirname

// Função principal 
function main() {

    // Instanciando o app
    const app = express();

    // Usando a biblioteca serve-static
    app.use(serveStatic(path.join(local, 'public')));

    // Página principal
    app.get("/", function (req, res) {

        // Resposta da requisição (Uma pasta)
        res.sendFile(path.join(local, 'public', 'index.html'));
    });

    // Ouvinte
    app.listen(PORT || 3000);

}

main()