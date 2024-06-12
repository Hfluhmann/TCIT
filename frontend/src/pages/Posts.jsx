import React, { useEffect, useState } from 'react'
import axios from "axios";
import PostForm from '../components/PostForm';
import PostTable from '../components/PostTable';

const Posts = () => {
  const [posts, setPosts] = useState([])
    
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:3001/posts");
      setPosts(response.data.posts);
    }
    getPosts()
  }, [])



  return (
    <>
      <PostForm/>
      <PostTable
        posts={posts}
      />
    </>
  );

}

export default Posts;
