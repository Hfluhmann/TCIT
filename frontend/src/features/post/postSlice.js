import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    filter: []
  },
  reducers: {
    loadPosts: (state, action) => {
      const allPosts = action.payload
      const postsFilter = new Array();

      (allPosts).forEach((item) => {
        const name = item.name
        const filteritem = {
          text: name,
          value: name
        }
        if (!postsFilter.includes(filteritem)) {
          postsFilter.push(filteritem);
        }
      });
      return {
        posts: allPosts,
        filter: postsFilter
      }
    },
  },
})

export const { loadPosts } = postSlice.actions
export default postSlice.reducer