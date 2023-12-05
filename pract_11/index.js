const express = require("express");
const app = express();
const { info_cursos } = require("./data/cursos.js");

//routes
app.get("/", (request, response) => {
  response.send("Hola, desde el framework de Express");
});

app.get("/cursos", (req, res) => {
  res.send(JSON.stringify(info_cursos));
});

app.get("/cursos/matematicas", (req, res) => {
  res.send(JSON.stringify(info_cursos.matematicas));
});

app.get("/cursos/ingles", (req, res) => {
  res.send(JSON.stringify(info_cursos.ingles));
});

app.get("/cursos/ingles/:nivel", (req, res) => {
  let nivel_param = req.params.nivel;
  let resultado = info_cursos.ingles.filter(
    (curso) => curso.nivel === nivel_param
  );
  if (resultado.length === 0) {
    return res.status(404).send(`No hay cursos de nivel  ${nivel_param}`);
  }
  res.send(JSON.stringify(resultado));
});

app.get("/cursos/base_de_datos", (req, res) => {
  res.send(JSON.stringify(info_cursos.base_de_datos));
});

app.post("/", (req, res) => {
  response.send("Método POST");
});

const port = 3000;
app.listen(port, () => {
  console.log("El servidor web está escuchando....");
});
