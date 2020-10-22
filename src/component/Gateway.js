const axios = require('axios')

const baseUrl = 'https://simple-blog-api.crew.red/posts'

export const createPost = (param) =>{
  axios({
    method: 'post',
    url: baseUrl,
    data: param,
 }) 
	.then( res => {
		console.log(res);
	})
	.catch( error => console.log( error ) );
}
