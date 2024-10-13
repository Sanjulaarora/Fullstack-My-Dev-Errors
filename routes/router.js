const express = require("express");
const router = express.Router();
const Blogs = require("../models/blogSchema");


// adding new blog
router.post("/postblog", async(req, res) => {
    const {id, title, datetime, body, solution, category} = req.body;

    if(!id || !title || !datetime || !body || !solution || !category) {
        res.status(404).json({error:"Please fill required data"});
    }

    try {
        const preblog = await Blogs.findOne({id:id});

        if(preblog) {
            res.status(404).json({error:"This blog is already present"});
        } else {
            const addBlog = new Blogs({
                id, title, datetime: new Date(datetime), body, solution, category
            });

            const storeData = await addBlog.save();
            console.log(storeData);
            res.status(201).json(storeData);
            
        }

    } catch (error) {
        console.log("error" + error.message)
    }
});


//getting all blogs
router.get("/getblogs", async(req, res) => {
    try {
        const blogdata = await Blogs.find();
        res.status(201).json(blogdata);
        console.log(blogdata);
    } catch(error) {
        res.status(404).json(error);
    }
});


//updating blogs
router.put("/editblog/:id", async(req, res) => {
    try {
       const { id } = req.params;
       const editedBlog = await Blogs.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
       });
       if(!editedBlog) {
        return res.status(404).json({ error: "Blog not found" });
       }
       console.log(editedBlog);
       res.status(201).json(editedBlog);
    } catch(error) {
      res.status(422).json(error);
    }
});


//deleting blogs
router.delete("/deleteblog/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deletedblog = await Blogs.findByIdAndDelete({_id:id});
        
        res.status(201).json(deletedblog);
    } catch (error) {
        res.status(422).json(error);
    }
});

module.exports = router;