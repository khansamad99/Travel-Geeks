const express = require('express')

const router = express.Router()
const {getPosts, createPosts,updatePosts,deletePosts} = require('../controllers/posts')

router.get('/',getPosts)
router.post('/',createPosts)
router.put('/:id',updatePosts)
router.delete('/:id',deletePosts)


module.exports = router