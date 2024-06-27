// src/components/AddEditPost.js
import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getPosts, addPost, updatePost} from '../utils/mockAPI'
import {Form, Input, TextArea} from '../styles/styledComponents'

const AddEditPost = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState({
    title: '',
    author: '',
    content: '',
    date: '',
  })

  useEffect(() => {
    if (id) {
      const existingPost = getPosts().find(p => p.id === parseInt(id))
      if (existingPost) setPost(existingPost)
    }
  }, [id])

  const handleChange = e => {
    const {name, value} = e.target
    setPost({...post, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (id) {
      updatePost({...post, id: parseInt(id)})
    } else {
      addPost({...post, id: Date.now()})
    }
    navigate('/')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <Input
        type="text"
        name="author"
        value={post.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <TextArea
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <Input
        type="date"
        name="date"
        value={post.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </Form>
  )
}

export default AddEditPost
