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
                                            <img src={require("../../images/blog/blog9.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>January 25, 2020</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">COVID</span>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Over 80 million Americans under virtual lockdown</a>
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
                                            <img src={require("../../images/blog/blog10.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>January 26, 2020</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">ADJUST</span>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>People worldwide adjust to new life amid COVID-19</a>
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
                                            <img src={require("../../images/blog/blog11.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>January 27, 2020</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">CORONAVIRUS</span>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Coronavirus stimulus checks: What you need to know</a>
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