import React, { Component } from 'react';
import Link from 'next/link';
import BlogSidebar from './BlogSidebar';

class BlogWithRightSidebar extends Component {
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog1.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 29, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Ideas</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>The #1 eCommerce blog to grow your business</a>
                                                </Link>
                                            </h3>

                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog2.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 29, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Advice</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>Latest ecommerce trend: The rise of shoppable posts</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog3.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 29, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Social</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>Building eCommerce wave: Social media shopping</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog4.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 29, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Boy</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>The best eCommerce blogs for online retailers</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog5.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 29, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Platform</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>The best ecommerce platform for growing sales</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog6.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 29, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Shipping</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>Shipping impacts your customer’s experience</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog7.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 30, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Shipping</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>Discount shipping: faster and cheaper than ever</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/single-blog-1">
                                                <a>
                                                    <img src={require("../../images/blog/blog8.jpg")} alt="image" />
                                                </a>
                                            </Link>
                                            <div className="date">
                                                <span>January 31, 2020</span>
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <span className="category">Shipping</span>
                                            <h3>
                                                <Link href="/single-blog-1">
                                                    <a>A green brand finding roots in sustainability</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/single-blog-1">
                                                <a className="details-btn">Read Story</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
        
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
            </section>
        );
    }
}

export default BlogWithRightSidebar;