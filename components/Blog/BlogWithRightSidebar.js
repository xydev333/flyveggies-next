import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import { firebase } from '../../firebase';
import { connect } from 'react-redux';
import BlogPostModal from '../Modals/BlogPostModal';
import { getBlogsFromDB } from '../../store/actions/blogActions'
class BlogWithRightSidebar extends Component {
    state = {
        categories: [],
        categoryName: ''
    }

    componentDidMount(){
        this.props.getBlogsFromDB()
        
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
            this.setState({
                categories: categoriesArray
            })
            this.loading = false;
        })
        .catch(err => {
            console.log('error', err)
        });
    }

    dateToString = (formatedTime) => {
        const months = ['January', 'Feburary', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
        if(formatedTime) {
            const date = formatedTime?.split('T')[0];
            const dateParams = date.split('-');
            return months[parseInt(dateParams[1]) - 1] + ' ' + dateParams[2] + ', ' + dateParams[0];
        }
    }

    toggleModalBlogPost = () => {
        this.setState({
            BlogPostModal: !this.state.BlogPostModal
        });
    }

    render() {
        const { categories } = this.state;
        const { user } = this.props;
        const { blogs } = this.props;
        
        return (
            <section className="blog-area">
                <div className="container">
                    <div className="postbutton">
                        <li className="postBlog">
                        {
                            user &&
                            <Link href="#" activeClassName="active">
                                <a 
                                    className="nav-link" 
                                    onClick={e => {
                                        e.preventDefault();
                                        this.toggleModalBlogPost();
                                    }}
                                >
                                    New Post
                                </a>
                            </Link>
                        }
                        </li>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                {
                                    blogs.length ? blogs.map((blog, idx) => (
                                    <div key={idx} className="col-lg-6 col-md-6">
                                        <div className="single-blog-post">
                                            <div className="post-image">
                                                <Link href="/single-blog-1">
                                                    <a>
                                                        <img src={blog.imageUrl} alt="image" width="650" height="500"/>
                                                    </a>
                                                </Link>
                                                <div className="date">
                                                    <span>{this.dateToString((new Date(blog.updated)).toJSON())}</span>
                                                </div>
                                            </div>

                                            <div className="post-content">
                                                <span className="category">{
                                                    blog?.categoryId ? categories[blog.categoryId] : 'other'
                                                }</span>
                                                <h3>
                                                    <Link href="/single-blog-1">
                                                        <a>{blog?.title}</a>
                                                    </Link>
                                                </h3>

                                                <Link href="/single-blog-1">
                                                    <a className="details-btn">Read Story</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    )) : null 
                                }
                                        
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="pagination-area text-center">
                                        <Link href="#">
                                            <a className="prev page-numbers">
                                                <i className='bx bx-chevron-left'></i>
                                            </a>
                                        </Link>

                                        <span className="page-numbers current">1</span>

                                        <Link href="#">
                                            <a className="page-numbers">2</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">3</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">4</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="page-numbers">5</a>
                                        </Link>

                                        <Link href="#">
                                            <a className="next page-numbers">
                                                <i className='bx bx-chevron-right'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            {/* Blog Sidebar */}
                            <BlogSidebar />
                        </div>
                    </div>
                </div>

                {/* BlogPost Modal */}
                <BlogPostModal 
                    onClick={this.toggleModalBlogPost} 
                    active={this.state.BlogPostModal ? 'active' : ''} 
                />
            </section>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.cartReducer.login,
        blogs: state.blogReducer.blogs || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBlogsFromDB: () => {dispatch(getBlogsFromDB())},
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogWithRightSidebar);