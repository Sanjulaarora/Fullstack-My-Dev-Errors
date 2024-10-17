require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const Blogs = require("./models/blogSchema");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);

const port = 8003;

app.listen(port,() => {
    console.log(`server is started at port number ${port}`);
});