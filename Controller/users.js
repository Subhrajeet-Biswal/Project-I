const client = require("../models/connection.js");
const { updateQuery, showQuery, showbyidquery,insertQuery,deleteQuery } = require("./query.js");

function showusers(req, res) {
  client.query(showQuery(), (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
    client.end;
  });
}

function getuserbyid(req, res) {
  // res.send(req.params.id);
  client.query(showbyidquery(req), (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
    client.end;
  });
}

function postuser(req, res) {
  // res.send(user);
  client.query(insertQuery(req), (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
}

function insertuser(req, res) {
  client.query(updateQuery(req), (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
}

function deleteuser(req, res) {
  client.query(deleteQuery(req), (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
}
module.exports = { showusers, getuserbyid, postuser, insertuser, deleteuser };
