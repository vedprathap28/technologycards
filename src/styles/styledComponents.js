// src/styles/styledComponents.js
import styled from 'styled-components'

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`

export const Post = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  position: relative;
`

export const PostContainer = styled.div`
  padding: 20px;
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 200px;
`
