import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "StudyNodeJS",
});

// simple query
// connection.query("SELECT * FROM `users`", function (err, results, fields) {
//   const data = [];
//   results.map((row) =>
//     data.push({
//       id: row.id,
//       firstName: row.firstName,
//       lastName: row.lastName,
//       email: row.email,
//       address: row.address,
//     })
//   );
//   console.log(data);
// });

export default connection;
