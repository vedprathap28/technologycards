// src/utils/mockAPI.js

// Mock Data
let posts = [
  {
    id: 1,
    title: 'Post 1',
    author: 'Author 1',
    content: 'Content of the first post.',
    date: '2023-06-25',
  },
  {
    id: 2,
    title: 'Post 2',
    author: 'Author 2',
    content: 'Content of the second post.',
    date: '2023-06-26',
  },
]

// Fetch all posts
export const getPosts = () => {
  return posts
}

// Add a new post
export const addPost = post => {
  posts.push(post)
}

// Update an existing post
export const updatePost = updatedPost => {
  posts = posts.map(post => (post.id === updatedPost.id ? updatedPost : post))
}

// Delete a post
export const deletePost = id => {
  posts = posts.filter(post => post.id !== id)
}
