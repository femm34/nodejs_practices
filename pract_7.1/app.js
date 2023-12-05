const http = require("http");
const fs = require("fs/promises");
const err = require("./no_recurso.js");
const en_des = require("./en_desarrollo.js");
const { error } = require("console");

const host = "127.0.0.1";
const port = 3000;

const servidor = http.createServer((peticion, respuesta) => {
  const url = new URL("http://localhost:3000" + peticion.url);
  let ruta = "static" + url.pathname;
  if (ruta == "static/") {
    ruta = "static/index.html";
  }

  //Procesar las respuestas del servidor
  fs.stat(ruta)
    .then(() => {
      fs.readFile(ruta)
        .then((contenido) => {
          respuesta.writeHead(200, { "Content-Type": "text/html" });
          respuesta.write(contenido);
          respuesta.end();
        })
        .catch((error) => {
          respuesta.writeHead(500, { "Content-Type": "text/html" });
          respuesta.write(en_des.pagina_des());
          respuesta.end();
        });
    })
    .catch((error) => {
      respuesta.writeHead(404, { "Content-Type": "text/html" });
      respuesta.write(err.pagina_err());
      respuesta.end();
    });
});

servidor.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
