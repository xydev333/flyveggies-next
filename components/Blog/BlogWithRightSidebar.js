import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import { firebase } from '../../firebase';
import { connect } from 'react-redux';
import BlogPostModal from '../Modals/BlogPostModal';
import { getBlogsFromDB } from '../../store/actions/blogActions'
import Pagination from '../Common/Pagination';

const imgStyle = {
    width: "100%",
    height: "100%",
}

class BlogWithRightSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            categoryName: '',
            currentPage: 1,
            blogsPerPage: 5,
        }
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

    onChangePage = (pageOfItems, pager) => {
        let {currentPage, pageSize} = pager
        // update state with new page of items
        this.setState({ 
            pageOfItems, currentPage, pageSize
        });
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
        })
    }

    render() {
        const { categories, currentPage, blogsPerPage } = this.state;
        const { user, blogs } = this.props;
        const indexOfLastBlog = currentPage * blogsPerPage;
        const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
        const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
        
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
                                    currentBlogs.length ? currentBlogs.map((blog, idx) => (
                                    <div key={idx} className="col-lg-6 col-md-6">
                                        <div className="single-blog-post">
                                            <div className="post-image blogImage">
                                                <Link href="/single-blog-1">
                                                    <a>
                                                        <img src={blog.imageUrl} alt="image" style={imgStyle}/>
                                                        {/* <img src={require("../../images/blog/blog0.jpg")} alt="image" style={imgStyle} /> */}
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
                                    <div className="pagination-area">
                                    <Pagination 
                                        pageSize={blogsPerPage}
                                        items={blogs} 
                                        onChangePage={this.onChangePage}
                                    />
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