const express = require('express')

const router = express.Router()
const {getPosts, createPosts,updatePosts,deletePosts,likePost} = require('../controllers/posts')
const { auth } = require('../middleware/auth')

router.get('/',getPosts)
router.post('/',auth,createPosts)
router.put('/:id',auth,updatePosts)
router.delete('/:id',auth,deletePosts)
router.put('/:id/likePost',auth,likePost)


module.exports = router