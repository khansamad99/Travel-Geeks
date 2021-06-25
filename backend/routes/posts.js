const express = require('express')

const router = express.Router()
const {getPosts, createPosts,updatePosts,deletePosts,likePost} = require('../controllers/posts')

router.get('/',getPosts)
router.post('/',createPosts)
router.put('/:id',updatePosts)
router.delete('/:id',deletePosts)
router.put('/:id/likePost',likePost)


module.exports = router