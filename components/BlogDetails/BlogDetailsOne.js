import React, { Component } from 'react';
import Link from 'next/link';
import CommentsList from './CommentsList';
import BlogSidebar from '../Blog/BlogSidebar';
import { getBlogsFromDB, getCategoriesFromDB } from '../../store/actions/blogActions'
import { connect } from 'react-redux';

class BlogDetailsOne extends Component {
    componentDidMount() {
        let isMounted = true;
        if(isMounted) {
            Promise.all([
                this.props.getBlogsFromDB(),
                this.props.getCategoriesFromDB()
            ])
        }
        return () => { isMounted = false; }
    }

    dateToString = (formatedTime) => {
        if(formatedTime) {
            const date = formatedTime?.split('T')[0];
            const dateParams = date.split('-');
            return parseInt(dateParams[1]) + '/' + dateParams[2] + '/' + dateParams[0];
        }
    }

    render() {
        const { id, blogs, categories } = this.props;
        const currentBlog = blogs.filter(blog => blog.id == id);

        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    {
                                        currentBlog[0]?.imageUrl &&
                                        <img src={currentBlog[0]?.imageUrl} alt="image"/>
                                    }
                                </div>
                                
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className='bx bx-folder-open'></i>
                                                <span>Category</span>
                                                <a>{categories[currentBlog[0]?.categoryId]}</a>
                                            </li>
                                            <li>
                                                <i className='bx bx-group'></i>
                                                <span>View</span>
                                                <a>{currentBlog[0]?.views}</a>
                                            </li>
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                <span>Last Updated</span>
                                                <a>{this.dateToString((new Date(currentBlog[0]?.updated)).toJSON())}</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h1>{currentBlog[0]?.title}</h1>
                                    <div dangerouslySetInnerHTML={{__html: currentBlog[0]?.content}}></div>
                                </div>

                                {/* Comments List */}
                                <CommentsList />
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div> */}
                    </div>
                </div>
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
)(BlogDetailsOne);
