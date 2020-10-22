import axios from "axios"

export const postsActionTypes = {
  GET_POSTS: 'GET_POSTS',  
}

const baseUrl = 'https://simple-blog-api.crew.red/posts';


export const addPosts = () => async dispatch=>{
  const res = await axios.get(baseUrl)
  console.log(res.data)
  return dispatch({
    type: postsActionTypes.GET_POSTS,
    payload: res.data
  })
}




// export const createPost = (post) => async dispatch=>{
//   params = post;
//   const res = await axios.post(baseUrl, params)

//   return dispatch({
//     type: postsActionTypes.CREATE_POSTS,
//     payload: res.data
//   })
// }

// export const createTask = taskData => {
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;utc-8'
//     },
//     body: JSON.stringify(taskData),
// }).then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to create task'); 
//     }
// });
// }