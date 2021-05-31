const PostMessage = require('../models/postMessage')


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