const http = require("http");
const pagina = require("./pagina_inicio.js");

const port = 3000;
const host = "127.0.0.1";

const servidor = http.createServer((peticion, respuesta) => {
  const url = new URL("http://localhost:3000" + peticion.url);
  console.log(url);
  console.log("hostname: " + url.hostname);
  console.log("port: " + url.port);

  url.searchParams.forEach((valor, dato) => {
    console.log(`Parametro: ${dato} => Valor: ${valor}`);
  });

  respuesta.writeHead(200, { "Content-Type": "text/html" });
  respuesta.write(pagina.pagina());
  respuesta.end();
});

servidor.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
