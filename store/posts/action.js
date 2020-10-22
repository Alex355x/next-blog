import axios from "axios"

export const postsActionTypes = {
  GET_POSTS: 'GET_POSTS',  
}

const baseUrl = 'https://simple-blog-api.crew.red/posts';

export const addPosts = () => async dispatch=>{
  const res = await axios.get(baseUrl)
  return dispatch({
    type: postsActionTypes.GET_POSTS,
    payload: res.data
  })
}



