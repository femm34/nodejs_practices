const http = require("http");
const fs = require("fs");
const error = require("./no_recurso");
const en_des = require("./en_desarrollo.js");

const port = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((peticion, respuesta) => {
  const url = new URL("http://localhost:3000" + peticion.url);
  let ruta = "static" + url.pathname;
  if (ruta == "static/") {
    ruta = "static/index.html";
  }
  fs.stat(ruta, (err) => {
    if (!err) {
      fs.readFile(ruta, (err, contenido) => {
        if (err) {
          respuesta.writeHead(500, { "Content-Type": "text/html" });
          respuesta.write(en_des.pagina_des());
          respuesta.end();
        } else {
          respuesta.writeHead(200, { "Content-Type": "text/html" });
          respuesta.write(contenido);
          respuesta.end();
        }
      });
    } else {
      respuesta.writeHead(404, { "Content-Type": "text/html" });
      respuesta.write(error.pagina_err());
      respuesta.end();
    }
  });
});

servidor.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
