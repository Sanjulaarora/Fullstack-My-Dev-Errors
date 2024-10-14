require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const Blogs = require("./models/blogSchema");
const cors = require("cors");
const router = require("./routes/router");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 8003;

//-------------------Deployment----------------------//
    app.use(express.static(path.join(__dirname, "client/build")));
//-------------------Deployment----------------------//

app.listen(port,() => {
    console.log(`server is started at port number ${port}`);
})