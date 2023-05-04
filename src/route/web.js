import express from "express";
import {
  getHomePage,
  getUserDetailPage,
  createUserPage,
} from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/user/:id", getUserDetailPage);

  router.post("/create-user", createUserPage);

  router.get("/about", (req, res) => {
    res.send("Hello Phuong Minh!");
  });

  return app.use("/", router);
};

export default initWebRoute;
