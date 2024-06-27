// src/components/BlogPostList.js
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getPosts, deletePost} from '../utils/mockAPI'
import {PostList, Post, DeleteButton} from '../styles/styledComponents'

const BlogPostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(getPosts())
  }, [])

  const handleDelete = id => {
    deletePost(id)
    setPosts(getPosts())
  }

  return (
    <PostList>
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post.id}>
            <h2>{post.title}</h2>
            <p>by {post.author}</p>
            <p>{post.content.substring(0, 100)}...</p> {/* Summary part */}
            <p>
              <small>{new Date(post.date).toLocaleDateString()}</small>
            </p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
            <DeleteButton onClick={() => handleDelete(post.id)}>
              Delete
            </DeleteButton>
          </Post>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </PostList>
  )
}

export default BlogPostList
