import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from "./pages/Posts";
import PostForm from './components/PostForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Posts />
  </React.StrictMode>
);