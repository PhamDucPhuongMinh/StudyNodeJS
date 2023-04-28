import express from "express";
import { getHomePage, getUserDetailPage } from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", getHomePage);

  router.get("/user/:id", getUserDetailPage);

  router.get("/about", (req, res) => {
    res.send("Hello Phuong Minh!");
  });

  return app.use("/", router);
};

export default initWebRoute;
