import connection from "../configs/connectDB";

const getHomePage = async (req, res) => {
  //logic
  const data = [];
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    results.map((row) =>
      data.push({
        id: row.id,
        firstName: row.firstName,
        lastName: row.lastName,
        email: row.email,
        address: row.address,
      })
    );
    res.render("index.ejs", { dataUsers: JSON.stringify(data) });
  });
};

export { getHomePage };
