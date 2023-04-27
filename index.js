const express = require('express');
const todoroutes = require('./routes/todoRoutes')
const userroutes = require('./routes/userRoute')
const cors = require('cors');
const connecttodb  = require("./controllers/db")
const app = express();


connecttodb();

app.use(cors());
app.use(express.json());
app.use('/user',userroutes);
app.use('/todo',todoroutes);


app.listen(8080,() => {
    console.log("The server is listening on http://localhost:8080")
})