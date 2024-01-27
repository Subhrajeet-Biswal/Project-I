const client = require('./models/connection.js')
const express = require('express');
const userrouter = require('./routes/user.js');

client.connect();
const app = express();

app.use(userrouter);
app.listen(3300, ()=>{
    console.log("Server is now listening at port 3300");
});
