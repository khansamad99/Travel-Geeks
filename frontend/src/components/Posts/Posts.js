import React from 'react'
import useStyle from './style'
import {useSelector} from 'react-redux'
import Post from './Post/Post'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyle()
    return (
        <div>
            Posts
        </div>
    )
}

export default Posts
