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
  const { firstName, lastName, email, address } = req.body;
  const [rows, fields] = await pool.execute(
    "INSERT INTO users(firstName, lastName, email, address) VALUES (?,?,?,?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

const deleteUserPage = async (req, res) => {
  const { id } = req.body;
  const [rows, fields] = await pool.execute("DELETE FROM users WHERE id=?", [
    id,
  ]);
  return res.redirect("/");
};

const getUpdateUserPage = async (req, res) => {
  const { id } = req.params;
  const [rows, fields] = await pool.execute("SELECT * FROM users where id=?", [
    id,
  ]);
  res.render("updateUser.ejs", { dataUser: rows[0] });
};

const editUserPage = async (req, res) => {
  const { id, firstName, lastName, email, address } = req.body;
  const [rows, fields] = await pool.execute(
    "UPDATE users SET firstName=?, lastName=?, email=?, address=? WHERE id=?",
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

export {
  getHomePage,
  getUserDetailPage,
  createUserPage,
  deleteUserPage,
  getUpdateUserPage,
  editUserPage,
};
