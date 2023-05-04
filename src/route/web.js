import express from "express";
import {
  getHomePage,
  getUserDetailPage,
  createUserPage,
  deleteUserPage,
  getUpdateUserPage,
  editUserPage,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/user/:id", getUserDetailPage);

  router.get("/update/:id", getUpdateUserPage);

  router.post("/edit", editUserPage);

  router.post("/create-user", createUserPage);

  router.post("/delete-user", deleteUserPage);

  router.get("/about", (req, res) => {
    res.send("Hello Phuong Minh!");
  });

  return app.use("/", router);
};

export default initWebRoute;
