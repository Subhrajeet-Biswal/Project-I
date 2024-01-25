const client = require("../models/connection.js");

function showusers(req, res) {
  client.query(`Select * from public."user"`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
    client.end;
  });
}

function getuserbyid(req, res) {
  // res.send(req.params.id);
  client.query(
    `Select * from public."user" where id=${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
      client.end;
    }
  );
}

function postuser(req, res) {
  const user = req.body;
  // res.send(user);
  let insertQuery = `insert into public."user"(id, firstname, lastname, location) 
                       values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
}

function putuser(req, res) {
  let user = req.body;
  // res.send(user);
  let updateQuery = `UPDATE public."user"
	SET firstname='${user.firstname}', lastname='${user.lastname}', location='${user.location}'
	WHERE id=${req.params.id}`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
}

function deleteuser(req, res) {
  let insertQuery = `delete from public."user" where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
}
module.exports = { showusers, getuserbyid, postuser, putuser,deleteuser };
