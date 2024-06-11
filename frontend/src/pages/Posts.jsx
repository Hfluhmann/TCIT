import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Table } from "antd";

const Posts = () => {
  const [posts, setPosts] = useState([])
    
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:3001/posts");
      setPosts(response.data.posts);
    }
    getPosts()
  }, [])

  const deleteEvent = (event) => {
    console.log(event)
    return
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descripcion",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "",
      key: "x",
      render: (record) => <a onClick={() => deleteEvent(record.id)}>Delete</a>,
    },
  ];

  return (
    <Table
      dataSource={posts}
      columns={columns}
    />
  );

}

export default Posts;
