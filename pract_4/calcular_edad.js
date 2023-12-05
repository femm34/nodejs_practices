const dateA = require("./fecha_actual.js");
const dateM = require("./fecha_nacimiento.js");

function edad(dateA, dateM) {
  var edad =
    dateA.fecha_actual.getFullYear() - dateM.fecha_nacimiento.getFullYear();

  if (
    dateM.fecha_nacimiento.getMonth() > dateA.fecha_actual.getMonth() ||
    (dateM.fecha_nacimiento.getMonth() === dateA.fecha_actual.getMonth() &&
      dateM.fecha_nacimiento.getDate() > dateA.fecha_actual.getDate())
  ) {
    edad--;
  }

  return edad;
}

function mes(dateA, dateM) {
  var meses = dateA.fecha_actual.getMonth() - dateM.fecha_nacimiento.getMonth();

  if (dateA.fecha_actual.getDate() >= dateM.fecha_nacimiento.getDate()) {
    meses++;
  } else if (dateM.fecha_nacimiento.getDate() < dateA.fecha_actual.getDate()) {
    meses--;
  }

  return meses;
}

var dias = dateA.fecha_actual.getDate() - dateM.fecha_nacimiento.getDate();
var diasVividos = Math.floor(dias / (1000 * 60 * 60 * 24));

module.exports.diasVividos = diasVividos;
module.exports.edad = edad;
module.exports.mes = mes;

module.exports.dateA = dateA;
module.exports.dateM = dateM;
