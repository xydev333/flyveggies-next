import {
  DISPLAY_BLOGS,
  DISPLAY_CATEGORIES,
  SET_CURRENT_CATEGORY_ID,
  SET_CURRENT_PAGE,
  SET_SEARCH_QUERY
} from '../actions/action-types/blog-actions'

const initState = {
  blogs: [],
  categories: [],
  currentCategoryId: '0',
  currentPage: 1,
  searchQuery: ''
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
  } else if (action.type == SET_CURRENT_CATEGORY_ID) {
    return {
      ...state,
      currentCategoryId: action.currentCategoryId
    }
  } else if (action.type == SET_CURRENT_PAGE) {
    return {
      ...state,
      currentPage: action.currentPage
    }
  } else if (action.type == SET_SEARCH_QUERY) {
    return {
      ...state,
      searchQuery: action.searchQuery
    }
  } else {
    return state;
  }
}

export default blogReducer