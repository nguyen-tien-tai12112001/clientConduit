import {
  COMMENT, CREATE, DELETE, FETCH_ALL, FETCH_POST, LIKE, UPDATE
} from '../constants/actionTypes';

const postsReducer = (state = { isLoading: true, posts: [] }, action: any) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post: any) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post: any) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATE:
      console.log(action.payload);
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post: any) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post: any) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
export default postsReducer;
