import {
  DISPLAY_BLOGS,
} from '../actions/action-types/blog-actions'

const initState = {
  blogs: []
}

const blogReducer = (state = initState, action) => {
  if (action.type == DISPLAY_BLOGS) {
    return {
      ...state,
      blogs: action.blogs
    }
  } else {
    return state;
  }
}

export default blogReducer