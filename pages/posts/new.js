import Link from 'next/link'
import React from 'react';
import { useState } from 'react';
import { createPost } from '../../src/component/Gateway'

export default function NewPost() {
  const [post, setPost] = useState({
    title:'',
    body:''
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setPost ({
      ...post,
      [name]: value
    })
  }
  
  const onHandleSubmit = (event) => {
    event.preventDefault();
    createPost(post);
    setPost({
      title:'',
      body:''
    })

  };

  return (
    <>
      <Link href={`/`}
      >
      <a>Go to Home Page</a>
      </Link>
      <h1>Create New Post</h1>
      <form  onSubmit={onHandleSubmit}>
        <label>Title</label>
        <br/>
        <input 
          type='text' 
          name='title'
          value={post.title}
          onChange={onHandleChange}
        ></input>
        <br/>
        <br/>
        <textarea
          type='text'
          name='body' 
          value={post.body}
          onChange={onHandleChange}
          placeholder='Text of Post'
        ></textarea>
        
        <button type="submit">Create</button>
      </form>
    </>
  )
}
