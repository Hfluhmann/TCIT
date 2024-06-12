import React, { useEffect, useState } from 'react'
import axios from "axios";
import PostForm from '../components/PostForm';
import PostTable from '../components/PostTable';
import { useDispatch } from "react-redux";
import { loadPosts } from '../features/post/postSlice';

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:3001/posts");
      dispatch(loadPosts(response.data.posts))
    }
    getPosts()
  }, [])

  return (
    <>
      <PostForm/>
      <PostTable/>
    </>
  );

}

export default App;
