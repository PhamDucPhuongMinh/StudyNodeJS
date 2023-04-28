import connection from "../configs/connectDB";

const getHomePage = async (req, res) => {
  //logic
  const [rows, fields] = await connection.execute("SELECT * FROM users");
  res.render("index.ejs", { dataUsers: rows });
};

const getUserDetailPage = async (req, res) => {
  //logic
  const { id } = req.params;
  const [rows, fields] = await connection.execute(
    "SELECT * FROM users where id=?",
    [id]
  );
  console.log(rows);
  res.render("userDetail.ejs", { dataUser: rows[0] });
};

export { getHomePage, getUserDetailPage };
