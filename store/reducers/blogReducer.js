import {
  DISPLAY_BLOGS,
  DISPLAY_CATEGORIES
} from '../actions/action-types/blog-actions'

const initState = {
  blogs: [],
  categories: [],
}

const blogReducer = (state = initState, action) => {
  if (action.type == DISPLAY_BLOGS) {
    return {
      ...state,
      blogs: action.blogs
    }
  } else if (action.type == DISPLAY_CATEGORIES) {
    return {
      ...state,
      categories: action.categories
    }
  } else {
    return state;
  }
}

export default blogReducer