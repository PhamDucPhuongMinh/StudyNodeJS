import pool from "../configs/connectDB";

const getHomePage = async (req, res) => {
  //logic
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  res.render("index.ejs", { dataUsers: rows });
};

const getUserDetailPage = async (req, res) => {
  //logic
  const { id } = req.params;
  const [rows, fields] = await pool.execute("SELECT * FROM users where id=?", [
    id,
  ]);
  res.render("userDetail.ejs", { dataUser: rows[0] });
};

const createUserPage = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, address } = req.body;
  const [rows, fields] = await pool.execute(
    "INSERT INTO users(firstName, lastName, email, address) VALUES (?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

export { getHomePage, getUserDetailPage, createUserPage };
