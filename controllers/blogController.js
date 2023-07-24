const blogModel=require('../models/blogModel')

//get all blogs
exports.getAllBlogsController=async(req,res)=>{
    try{
     const blogs=await blogModel.find({})
     if(!blogs){
       return res.status(200).send({
        success:false,
        message:'No Blogs Found'
       }) 
     }
     return res.status(200).send({
        success:true,
        BlogCount:blogs.length,
        message:'All Blogs lists',
        blogs
     })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:`error while getting blogs`,
            error
        })
    }
}

//create Blog
exports.createBlogController=async(req,res)=>{
    try{
     const {title,description,image}=req.body 
     //validation
     if(!title || !description || !image){
        return res.status(400).send({
            success:false,
            message:'Please provide all fields'
        })
     }
     const newBlog=new blogModel({title,description,image})
     await newBlog.save()
     return res.status(201).send({
        success:true,
        message:'Blog created',
        newBlog
     })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:'Error while creating Blog',
            error
        })
    }
}

//update blog
exports.updateBlogController=async(req,res)=>{
    try{
     const {id}=req.params
     const {title,description,image}=req.body 
     const blog=await blogModel.findByIdAndUpdate(id,{...req.body},{new:true})
     return res.status(200).send({
        success:true,
        message:'Blog updated',
        blog,
     })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:'Error while updating Blog',
            error
        })
    }
}

//single Blog
exports.getBlogByIdController=async(req,res)=>{
    try{
     const {id}=req.params
     const blog=await blogModel.findById(id)
     if(!blog){
     return res.status(404).send({
        success:true,
         message:'Blog not found with this id',
     })
    }
    return res.status(200).send({
        success:true,
        message:'Fetch single blog',
        blog,
    })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:'Error while getting single Blog',
            error
        })
    }
}

//delete Blog
exports.deleteBlogController=async(req,res)=>{
    try{
     await blogModel.findOneAndDelete(req.params.id)
    return res.status(200).send({
        success:true,
        message:'Blog deleted',
    })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:'Error while deleting Blog',
            error
        })
    }
}
