import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    filter: []
  },
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload
    },
    loadFilters: (state, _action) => {
      const uniquePostNames = new Set(state.posts.map(post => post.name))
      state.filter = Array.from(uniquePostNames).map(name => ({ text: name, value: name }))
    },
    pushPost: (state, action) => {
      const post = action.payload
      state.posts = [...state.posts, post]
    },
    removePost: (state, action) => {
      const postId = action.payload
      state.posts = state.posts.filter(post => post.id !== postId)
    }
  },
})

export const { loadPosts, loadFilters, pushPost, removePost } = postSlice.actions
export default postSlice.reducer
