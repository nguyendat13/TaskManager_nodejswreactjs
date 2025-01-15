var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "taskmanager",
  charset: 'utf8mb4'  // Đảm bảo sử dụng utf8mb4 để hỗ trợ tiếng Việt
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected Success");
  });
  
module.exports = con;