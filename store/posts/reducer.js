import { postsActionTypes } from './action';

const postsInitialState = {
  posts: [],
}

export default function reducer(state = postsInitialState, action) {
  switch (action.type) {
      case postsActionTypes.GET_POSTS:
        return {
          ...state,
          posts: action.payload,
        }
      default: 
      return state
  }
}


