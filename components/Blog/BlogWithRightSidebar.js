import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';
import { connect } from 'react-redux';
import BlogPostModal from '../Modals/BlogPostModal';
import { getBlogsFromDB, getCategoriesFromDB } from '../../store/actions/blogActions'
import Pagination from '../Common/Pagination';

const imgStyle = {
    width: "100%",
    height: "100%",
}

// const showfollowbtn = {
//     display: "none"
// }

// const hidefollowbtn = {
//     display: "block"
// }

class BlogWithRightSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: '',
            currentPage: 1,
            blogsPerPage: 6,
            following: false,
            categoryId: '0',
            currentCategoryId: '0',
            searchQuery: '',
        }
    }

    componentDidMount(){
        this.props.getBlogsFromDB()
        this.props.getCategoriesFromDB()
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

    scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
        })
    }

    onChangePage = (pageOfItems, pager) => {
        let {currentPage, pageSize} = pager
        // update state with new page of items
        this.setState({ 
            pageOfItems, currentPage, pageSize
        });
        this.scrollUp();
    }

    followBlog = () => {
        this.setState({following: true})
    }

    changeCategoryId = (id) => {
        this.setState({
            currentCategoryId: id
        });
        this.scrollUp()
    }

    changeSearchQuery = (query) => {
        this.setState({
            searchQuery: query
        })
        this.scrollUp()
    }

    render() {
        const { currentPage, blogsPerPage, following, currentCategoryId, searchQuery } = this.state;
        const { user, blogs, categories } = this.props;
        const indexOfLastBlog = currentPage * blogsPerPage;
        const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
        //Blog Array for the selected Category
        let filteredBlogsByCategory = [{}];
        filteredBlogsByCategory = currentCategoryId != '0' ?
            blogs.filter(blog => blog.categoryId == currentCategoryId).sort(
                function compare(a, b) {
                    return b.updated - a.updated;
                }
            ) :
            blogs.sort(
                function compare(a, b) {
                    return b.updated - a.updated;
                }
            )
        
        //Filter blogs if there is search query.
        const filteredBlogs = searchQuery ?
            filteredBlogsByCategory.filter(blog => blog.title.includes(searchQuery)) :
            filteredBlogsByCategory

        //Blog Array to show in current page
        const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)

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
                                                <Link 
                                                    href={{ pathname: '/single-blog-1', query: { id: blog.id } }}
                                                >
                                                    <a>
                                                        <img src={blog.imageUrl} alt="image" style={imgStyle}/>
                                                    </a>
                                                </Link>
                                                <div className="date">
                                                    <span>{this.dateToString((new Date(blog.updated)).toJSON())}</span>
                                                </div>
                                            </div>

                                            <div className="post-content">
                                                <span className="category spanblog">
                                                    { blog?.categoryId ? categories[blog.categoryId] : 'other' }
                                                </span>
                                                
                                                <div className="titlediv">
                                                    <h3>
                                                        <Link 
                                                            href={{ pathname: '/single-blog-1', query: { id: blog.id } }}
                                                        >
                                                            <a>
                                                                {blog?.title}
                                                            </a>
                                                        </Link>
                                                    </h3>
                                                    {/* <button class="cf ly lz ma ek mb mc ry r me mf followbtn" onClick={this.followBlog}>
                                                        <div style={following ? showfollowbtn : hidefollowbtn}>
                                                            <svg width="25" height="25" viewBox="0 0 25 25" aria-label="clap">
                                                                <g fill-rule="evenodd">
                                                                    <path d="M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div style={following ? hidefollowbtn : showfollowbtn}>
                                                            <svg width="25" height="25" aria-label="clap">
                                                                <g fill-rule="evenodd">
                                                                    <path d="M11.74 0l.76 2.97.76-2.97zM16.63 1.22L15.2.75l-.4 3.03zM9.79.75l-1.43.47 1.84 2.56zM22.47 13.3L19.45 8c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M12.58 9.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z">
                                                                    </path>
                                                                    <path d="M15.81 9.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.72.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L7.2 6.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L3.8 7.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L2.58 14.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z">
                                                                    </path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </button> */}
                                                </div>

                                                {/* <Link href="/single-blog-1">
                                                    <a className="details-btn">Read Story</a>
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                    )) : null 
                                }
                                
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="pagination-area">
                                    <Pagination 
                                        pageSize={blogsPerPage}
                                        items={filteredBlogs} 
                                        onChangePage={this.onChangePage}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar
                                onChangeCategory={this.changeCategoryId}
                                onChangeSearchQuery={this.changeSearchQuery}
                            />
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
        categories: state.blogReducer.categories || [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBlogsFromDB: () => {dispatch(getBlogsFromDB())},
        getCategoriesFromDB: () => {dispatch(getCategoriesFromDB())},
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogWithRightSidebar);