const express = require('express')
const blogModel = require('../models/blogSchema')
const authMiddleware = require('../middleware/authMiddleware')

// * Create a Router
const router = express.Router()

//* GET Blogs
router.get('/',  async (req, res) => {
   try {
       const blogs = await blogModel.find()
       res.status(200).json(blogs)
   } catch (error) {
       console.log(error)
   }
})

//* CREATE Blogs
router.post('/', async (req, res) => {
    const blogData = req.body // gets the data from the request
    console.log(blogData);
    try {
        const blogs = await blogModel.create(blogData) // create the todo in the db
        // send back the response
        res.status(201).json(blogs)
        // res.status(201).json({data: blogs})
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
})


//* GET TODO BY ID
router.get('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id

    try {
        const blogs = await blogModel.findById(id)
        res.status(200).json(blogs)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: 'Id not found'
        })
    }
})


//* UPDATE TODO BY ID
router.put('/:id',authMiddleware, async (req, res) => {
    const id = req.params.id
    const newBlogData = req.body
     try {
         //* find the todo by the id
         const blogs = await blogModel.findByIdAndUpdate(id, newblogData, {new: true})
         res.status(202).json(blogs)
     } catch (error) {
         console.log(error)
     }
})

//! DELETE A TODO
router.delete('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id

    try {
        const blogs = await blogModel.findByIdAndDelete(id)
        res.status(200).json({msg: 'Blog was deleted!'})
    } catch (error) {
        console.log(error);
    }
})

module.exports = router