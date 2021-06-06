const express = require('express')

const router = express.Router()
const {getPosts, createPosts,updatePosts} = require('../controllers/posts')

router.get('/',getPosts)
router.post('/',createPosts)
router.put('/:id',updatePosts)


module.exports = router