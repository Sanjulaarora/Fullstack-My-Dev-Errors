const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    title: {
        type: String,
        required: true
    },
    datetime: {
      type: Date,
      required: true
    },
    body: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Blogs = new mongoose.model("blogs", blogSchema);


module.exports = Blogs;
