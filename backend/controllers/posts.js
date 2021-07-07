const PostMessage = require('../models/postMessage')
const mongoose = require('mongoose')

exports.getPosts = async (req,res) => {
    try {
        const posts = await PostMessage.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.createPosts = async (req,res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

exports.updatePosts = async (req,res) => {
    const {id:_id} = req.params
    const post = req.body

    if(!(mongoose.Types.ObjectId.isValid(_id))) return res.json(404).send('No post with that ID');

    const updatedPosts = await PostMessage.findByIdAndUpdate(_id,{...post,_id} ,{new:true})

    res.json(updatedPosts)
}

exports.deletePosts = async (req,res) => {
    const {id} = req.params

    if(!(mongoose.Types.ObjectId.isValid(id))) return res.json(404).send('No post with that ID');
    const post = await PostMessage.findById(id)
    
    await PostMessage.findByIdAndRemove(id)

    res.json({message:'Post deleted Successfully'})
}

exports.likePost  = async (req,res) => {
    const {id} = req.params

    if(!req.userId) return res.json({message:'Unauthenticated'})
    if(!(mongoose.Types.ObjectId.isValid(id))) return res.json(404).send('No post with that ID')

    const post = await PostMessage.findById(id)

    const index = await post.likes.findIndex((id) => id === String(req.userId));

    if(index === -1){
        post.likes.push(req.userId)
    }else{
        post.likes = post.likes.filter((id) => id!== String(req.userId))
    }
   
    const updatedPost = await PostMessage.findByIdAndUpdate(id,post,{new:true})

    res.json(updatedPost)
}