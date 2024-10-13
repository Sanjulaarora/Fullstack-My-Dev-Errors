const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection Started")).catch((error) => console.log(error.message));