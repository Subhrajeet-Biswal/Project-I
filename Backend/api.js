const client = require('./models/connection.js')
const express = require('express');
const userrouter = require('./routes/user.js');
const cors= require('cors')
client.connect();
const app = express();

app.use(cors())
// app.use(express.json());
app.use(userrouter);
app.listen(3000, ()=>{
    console.log("Server is now listening at port 3000");
});
