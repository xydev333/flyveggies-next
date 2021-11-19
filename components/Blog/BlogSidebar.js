import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getBlogsFromDB, getCategoriesFromDB } from '../../store/actions/blogActions'

class BlogSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
    }

    componentDidMount() {
        this.props.getBlogsFromDB();
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

    onCategoryChange = (value) => {
        this.props.onChangeCategory('' + value);
    }

    onSearchQueryChange = (event) => {
        event.preventDefault();
        this.setState({
            searchQuery: event.target.value
        })
        if (event.target.value == '') {
            this.props.onChangeSearchQuery('');    
        }
    }

    onClickSearch = (e) => {
        e.preventDefault();
        this.props.onChangeSearchQuery(this.state.searchQuery);
    }

    render() {
        const { blogs, categories } = this.props;
        const popblogs = blogs.sort(
            function compare(a, b) {
                return b.views - a.views;
            }
        ).slice(0, 9);

        return (
            <div className="widget-area">
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input 
                                type="search"
                                className="search-field"
                                placeholder="Search..."
                                onChange={this.onSearchQueryChange}
                            />
                        </label>
                        <button onClick={this.onClickSearch}>
                            <i className="bx bx-search-alt"></i>
                        </button>
                    </form>
                </div>

                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>
                    {
                        popblogs[0] &&
                        <article className="item">
                            <Link href="#">
                                <a className="thumb">
                                    <span className="fullimage cover" role="img">
                                        <img src={popblogs[0].imageUrl} alt="image"/>
                                    </span>
                                </a>
                            </Link>

                            <div className="info">
                                <span>{this.dateToString((new Date(popblogs[0].updated)).toJSON())}</span>
                                <h4 className="title usmall">
                                    <Link href="#">
                                        <a>{popblogs[0].title}</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    }

                    {
                        popblogs[1] &&
                        <article className="item">
                            <Link href="#">
                                <a className="thumb">
                                    <span className="fullimage cover" role="img">
                                        <img src={popblogs[1].imageUrl} alt="image"/>
                                    </span>
                                </a>
                            </Link>

                            <div className="info">
                                <span>{this.dateToString((new Date(popblogs[1].updated)).toJSON())}</span>
                                <h4 className="title usmall">
                                    <Link href="#">
                                        <a>{popblogs[1].title}</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    }
                    
                    {
                        popblogs[2] &&
                        <article className="item">
                            <Link href="#">
                                <a className="thumb">
                                    <span className="fullimage cover" role="img">
                                        <img src={popblogs[2].imageUrl} alt="image"/>
                                    </span>
                                </a>
                            </Link>

                            <div className="info">
                                <span>{this.dateToString((new Date(popblogs[2].updated)).toJSON())}</span>
                                <h4 className="title usmall">
                                    <Link href="#">
                                        <a>{popblogs[2].title}</a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    }
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li key='0' onClick={this.onCategoryChange.bind(this, 0)}>
                            <Link href="#">
                                <a>
                                    All
                                    <span className="post-count">
                                        ({blogs.length})
                                    </span>
                                </a>
                            </Link>
                        </li>
                        {
                            categories.length ? categories.map((category, idx) => (
                                <li key={idx} value={idx} onClick={this.onCategoryChange.bind(this, idx)}>
                                    <Link href="#">
                                        <a >
                                            {category}
                                            <span className="post-count">
                                                ({blogs.filter(blog => blog.categoryId == idx).length})
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            )) : null
                        }
                    </ul>
                </div>

                <div className="widget widget_contact">
                    <div className="text">
                        <div className="icon">
                            <i className='bx bx-phone-call'></i>
                        </div>
                        <span>Emergency</span>
                        <h4>0987-9876-8753</h4>
                    </div>
                </div>
            </div>
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
)(BlogSidebar);