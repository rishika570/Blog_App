const express=require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController } = require('../controllers/blogController')

//router object
const router=express.Router()

//routes
//get || all blogs
router.get('/all-blog',getAllBlogsController)

//post || create blog
router.post('/create-blog',createBlogController)

//put || update blog
router.put('/update-blog/:id',updateBlogController)

//get || single blog details
router.get('get-blog/:id',getBlogByIdController)

//delete || delete blog
router.delete('/delete-blog/:id',deleteBlogController)
module.exports=router