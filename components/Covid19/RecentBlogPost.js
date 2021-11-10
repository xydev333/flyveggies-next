import React, { Component } from 'react';
import Link from 'next/link';

class RecentBlogPost extends Component {
    render() {
        return (
            <section className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Recent Story</span>
                        <h2>From The Fly Veggies Blog</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a>
                                            <img src={require("../../images/flyimages/blog9.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>November 25, 2021</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">Mister Nice Guy Bud</span>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>A chat over Mister Nice Guy</a>
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
                                            <img src={require("../../images/flyimages/blog10Recent.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>November 25, 2021</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">Buds For Life</span>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>A chat over Mister Nice Guy</a>
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
                                            <img src={require("../../images/flyimages/blog11.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <span>November 25, 2021</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <span className="category">Baba Ganush</span>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>The Giving Bud</a>
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