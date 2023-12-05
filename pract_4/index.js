const app = require("./calcular_edad.js");
const { fecha_actual } = require("./fecha_actual.js");
const { fecha_nacimiento } = require("./fecha_nacimiento.js");

var EdadTotal = app.edad(
  { fecha_actual: fecha_actual },
  { fecha_nacimiento: fecha_nacimiento }
);
var MesesTot = app.mes(
  { fecha_actual: fecha_actual },
  { fecha_nacimiento: fecha_nacimiento }
);

if (
  app.dateM.fecha_nacimiento.getFullYear() <=
  app.dateA.fecha_actual.getFullYear()
) {
  console.log(
    `Su edad es ${EdadTotal} años, con ${MesesTot} meses y ${app.diasVividos}`
  );
} else {
  console.log("Fecha invalidos");
}
