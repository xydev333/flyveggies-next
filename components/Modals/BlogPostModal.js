import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../firebase';
import { toast } from 'react-toastify';
import { getBlogsFromDB } from '../../store/actions/blogActions'
import { useAuth } from '../../context/AuthContext';

const BlogPostModal1 = (props) => {
    const initialstate = {
      modal: false,
      categories: [],
      imageUrl: '',
      title: '',
      categoryId: '1',
      userId: '',
      keyword: '',
      content: ''
    }
    const  [
      { modal, categoryId, imageUrl, title, keyword, content },
      setState
    ] = useState(initialstate)
    const [categories, setcategories] = useState([])
    const { currentUser } = useAuth()

    function resetForm() {
      setState({ ...initialstate });
    }

    function closeModal() {
        props.onClick(modal);
    }

    useEffect(() => {
      const db = firebase.firestore();
      const dbOrderRef = db.collection('categories');
      let categoriesArray = [];
      dbOrderRef.get()
      .then(res => {
          res.forEach(doc => {
              let categoriesObj = doc.data();
              categoriesObj.id = doc.id;
              categoriesArray.push(categoriesObj)
          });
          setcategories(categoriesArray)
      })
      .catch(err => {
          console.log('error', err)
      });
    }, [])

    function getCategoryId (name) {
        const db = firebase.firestore();
        db.collection('categories').where('name', '==', name)
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                setState(prevState => ({ ...prevState, [categoryId]: doc.id }));
            });
        })
    }

    function postBlog (e) {
        e.preventDefault();
        const blog = {
            imageUrl: imageUrl,
            title: title,
            keyword: keyword,
            categoryId: categoryId,
            content: content,
            views: 0,
            userId: currentUser.uid,
            updated: Date.now()
        };

        if(title != '' && content != '' && categoryId != -1){
            const db = firebase.firestore();
            const dbOrderRef = db.collection('blogs');
            dbOrderRef.add(blog).then(() => {
                toast.success('Blog has been created successfully.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                closeModal();
                resetForm()

                props.getBlogsFromDB()
            });
        } else {
            toast.error('Fillup the form', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }

    const onChange = e => {
      const { name, value } = e.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <React.Fragment>
            <div className={`blog-post-modal ${props.active}`}> 
                <div className="modal-innter-content">
                    <button type="button" className="close" onClick={closeModal}>
                        <span aria-hidden="true">
                            <i className='bx bx-x'></i>
                        </span>
                    </button>

                    <div className="modal-body">
                        <h3>Post Blog</h3>

                        <form onSubmit={postBlog}>
                            <div className="form-group">
                                <label>Upload your Blog image here</label>
                                <div className="upload-img">
                                    <span>
                                        <i className='bx bxs-image-add'></i>
                                        Click here or drop files to upload 
                                    </span>

                                    <input 
                                        type="file" 
                                        className="form-control-file"
                                        name="productImage"
                                        accept="image/*"
                                        // onChange={handleChange}
                                    />
                                </div>

                            </div>

                            <h4 className="title">Add your Blog description and necessary information from here</h4>
                            
                            <div className="form-group">
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={title}
                                    name='title'
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Keyword</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={keyword}
                                    name='keyword'
                                    onChange={onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Content</label>
                                <textarea 
                                    className="form-control" 
                                    value={content}
                                    name='content'
                                    onChange={onChange}
                                    rows="6"
                                />
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select 
                                    className="form-control" 
                                    onChange={e => getCategoryId(e.target.value)}
                                >
                                    {
                                        categories.length ? categories.map((category, idx) => (
                                            <option key={idx} value={category.name}>{category.name.toUpperCase()}</option>        
                                        )) : null
                                    }
                                </select>
                            </div>

                            <div className="modal-btn">
                                <div className="btn optional-btn float-left" onClick={closeModal}>Cancel</div>
                                <button className="btn default-btn float-right">Create Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBlogsFromDB: () => {dispatch(getBlogsFromDB())},
    }
}

export default connect(null, mapDispatchToProps)(BlogPostModal1);
