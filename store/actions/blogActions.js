import firebase from 'firebase';
import {
  DISPLAY_BLOGS
} from './action-types/blog-actions';

export const getBlogsFromDB = () => (dispatch) => {
  const db = firebase.firestore();
  const blogRef = db.collection('blogs');
  let blogsArray = [];
  blogRef.get()
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