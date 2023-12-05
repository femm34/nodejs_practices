var fecha_nacimiento = new Date("2004-07-30");
fecha_nacimiento.setHours(0, 0, 0, 0);

var anioM = fecha_nacimiento.getFullYear();
var mesM = fecha_nacimiento.getMonth() + 1;
var diaM = fecha_nacimiento.getDate();

module.exports.fecha_nacimiento = fecha_nacimiento;

module.exports.anioM = anioM;
module.exports.mesM = mesM;
module.exports.diaM = diaM;
