const http = require("http");
const pagina = require("./pagina.js");

const port = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((peticion, respuesta) => {
  respuesta.writeHead(200, { "Content-Type": "text/html" });
  respuesta.write(pagina.pagina());
  respuesta.end();
});

servidor.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
