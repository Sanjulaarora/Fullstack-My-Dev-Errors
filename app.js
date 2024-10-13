require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const Blogs = require("./models/blogSchema");
const cors = require("cors");
const router = require("./routes/router");
const path = require("path");

const port = process.env.PORT || 8003;

app.use(express.json());
app.use(cors());
app.use(router);

//-------------------Deployment----------------------//
const __dirname1 = path.resolve();
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "client/build")));
}
//-------------------Deployment----------------------//

app.listen(port,() => {
    console.log(`server is started at port number ${port}`);
})