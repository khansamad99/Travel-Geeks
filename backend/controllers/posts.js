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

exports.updatePosts = async (req,res) => {
    const {id:_id} = req.params
    const post = req.body

    if(!(mongoose.Types.ObjectId.isValid(_id))) return res.json(404).send('No post with that ID');

    const updatedPosts = await PostMessage.findByIdAndUpdate(_id,post,{new:true})

    res.json(updatedPosts)
}