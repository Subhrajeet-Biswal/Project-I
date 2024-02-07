const express = require("express");
const client = require("../models/connection.js");
const {
  showusers,
  getuserbyid,
  postuser,
  updateuser,
  deleteuser,
} = require("../Controller/users.controller.js");
// import { showusers, getuserbyid, postuser, putuser, deleteuser } from "../container/users.js";
// import { showusers,getuserbyid } from '../container/users.js';

const router = express.Router();
const bodyparser = require("body-parser");
router.use(bodyparser.json());

router.get("/", (req, res) => {
  res.send("Welcome to Home page");
});
router.get("/users", showusers);
router.get("/users/:id", getuserbyid);
router.post("/users", postuser);
router.put("/users/:id", updateuser);
router.delete("/users/:id", deleteuser);

module.exports = router;
