import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";
import { Table } from "antd";


export const PostTable = () => {

  const allPosts = useSelector((state) => state.post.posts);
  const filter = useSelector((state) => state.post.filter);  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: filter,
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
    },
    {
      title: "Descripcion",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "",
      key: "x",
      render: (record) => (
        <a onClick={() => deleteEvent(record.id)}>Eliminar</a>
      ),
    },
  ];

  const deleteEvent = async (postId) => {
    const response = await axios.delete(
      `http://localhost:3001/posts/${postId}`
    );
    if (response.status === 200){
      window.location.reload();
    }
    return;
  };

  return (
    <Table
      dataSource={allPosts}
      columns={columns}
    />
  )
}
export default PostTable;