
const baseUrl = 'https://simple-blog-api.crew.red/posts';

export const createPost = post => {
  // console.log('fetch', post)
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
})
  .then(function(response) { 
      return response.json(); 
    }) 
  .then(function(data) { 
      if(data.success) {
        return data;
        } else {
          throw new Error('Failed to create post'); 
          } 
        })
    .catch(function(e) {
      console.log(e);
    });
  }


  

// export const createPost = (data) => async dispatch=>{
//   const res = await axios.post(baseUrl, data)

//   // return dispatch({
//   //   type: postsActionTypes.GET_POSTS,
//   //   payload: res.data
//   //})
// }