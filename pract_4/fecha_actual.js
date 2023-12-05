var fecha_actual = new Date();
fecha_actual.setHours(0, 0, 0, 0);

var anioA = fecha_actual.getFullYear();
var mesA = fecha_actual.getMonth() + 1;
var diaA = fecha_actual.getDate();

module.exports.fecha_actual = fecha_actual;
module.exports.anioA = anioA;
module.exports.mesA = mesA;
module.exports.diaA = diaA;
