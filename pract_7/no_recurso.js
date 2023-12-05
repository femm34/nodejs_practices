function pagina_err() {
  return `<!doctype html>             
                <html>
        
                <head>
                    <meta charset="utf-8">
                    <title>Página de error</title>
                </head>
                <body>
                    <h1>Error 404</h1>
                    <h1>No se encuentra el contenido</h1>
                </body>
                </html>`;
}

module.exports.pagina_err = pagina_err;
