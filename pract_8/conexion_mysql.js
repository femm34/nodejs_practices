const conMysql = require("mysql");

const con = conMysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bd_utsh",
});

con.connect((error) => {
  if (error) {
    console.log("Error al conectar con Mysql");
  } else {
    console.log("Connection successfully to my Mysql");
  }
});
