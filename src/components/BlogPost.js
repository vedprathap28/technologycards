// src/components/BlogPost.js
import React from 'react'
import {useParams} from 'react-router-dom'
import {getPosts} from '../utils/mockAPI'
import {PostContainer} from '../styles/styledComponents'

const BlogPost = () => {
  const {id} = useParams()
  const posts = getPosts()
  const post = posts.find(post => post.id === parseInt(id))

  if (!post) return <p>Post not found</p>

  return (
    <PostContainer>
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.content}</p>
      <p>
        <small>{new Date(post.date).toLocaleDateString()}</small>
      </p>
    </PostContainer>
  )
}

export default BlogPost
