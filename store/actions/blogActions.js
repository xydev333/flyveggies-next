import firebase from 'firebase';
import {
  DISPLAY_BLOGS,
  DISPLAY_CATEGORIES
} from './action-types/blog-actions';

export const getBlogsFromDB = () => (dispatch) => {
  const db = firebase.firestore();
  const blogRef = db.collection('blogs');
  let blogsArray = [];
  blogRef.orderBy('updated', 'desc').get()
  .then(res => {
      res.forEach(doc => {
          let blogsObj = doc.data();
          blogsObj.id = doc.id;
          blogsArray.push(blogsObj)
      });
      dispatch({
        type: DISPLAY_BLOGS,
        blogs: blogsArray
      })
  })
  .catch(err => {
      console.log('error', err)
  });
}

export const getCategoriesFromDB = () => (dispatch) => {
    const db = firebase.firestore();
    const categoryRef = db.collection('categories');
    let categoriesArray = [];
    categoryRef.get()
    .then(res => {
        res.forEach(doc => {
            let categoriesObj = doc.data();
            categoriesObj.id = doc.id;
            categoriesArray[categoriesObj.id] = categoriesObj.name;
        });
        dispatch({
          type: DISPLAY_CATEGORIES,
          categories: categoriesArray
        })
    })
    .catch(err => {
        console.log('error', err)
    });
}