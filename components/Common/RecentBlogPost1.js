import React, { Component } from 'react';
import Link from 'next/link';

class RecentBlogPost extends Component {
    render() {
        return (
            <section className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Recent Story</span>
                        <h2>From The Livani Blog</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
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
                    </div>
                </div>
            </section>
        );
    }
}

export default RecentBlogPost;