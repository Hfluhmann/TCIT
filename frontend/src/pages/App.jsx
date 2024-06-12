import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "../components/PostForm";
import PostTable from "../components/PostTable";
import { useDispatch } from "react-redux";
import { loadPosts, loadFilters } from "../features/post/postSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:3001/posts");
      if (response.status === 200) {
        console.log(response.data.posts)
        dispatch(loadPosts(response.data.posts.map((post) => ({ ...post, key: post.id }))));
        dispatch(loadFilters());
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <PostForm />
      <PostTable />
    </>
  );
};

export default App;
