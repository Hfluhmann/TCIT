import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from "antd";


export const PostTable = ({posts}) => {

  const [filterItems, setFilterItems] = useState([])
  
  useEffect(() => {
    const filterCandidates = []
    posts.forEach((item) => {
      const filteritem = {
        text: item.name,
        value: item.name
      }
      if (!filterCandidates.includes(filteritem)) {
        filterCandidates.push(filteritem);
      }
    });
    setFilterItems(filterCandidates);
    return
    
  }, [posts])
  


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: filterItems,
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
    console.log(response);
    window.location.reload();
    return;
  };

  return (
    <Table
      dataSource={posts}
      columns={columns}
    />
  )
}
export default PostTable;