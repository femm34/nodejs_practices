const express = require("express");
const app = express();
const { info_productos } = require("./data/productos.js");

//routes
app.get("/", (request, response) => {
  response.send("Hola, desde el framework Express");
});

app.get("/productos", (req, res) => {
  res.send(JSON.stringify(info_productos));
});

app.get("/productos/papeleria", (req, res) => {
  res.send(JSON.stringify(info_productos.papeleria));
});

app.get("/productos/abarrotes", (req, res) => {
  res.send(JSON.stringify(info_productos.abarrotes));
});

app.post("/", (req, res) => {
  res.send("Método POST");
});

const port = 4000;
app.listen(port, () => {
  console.log("El servidor web está escuchando...");
});
