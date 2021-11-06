import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <div className="widget-area">
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className="bx bx-search-alt"></i>
                        </button>
                    </form>
                </div>

                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>June 10, 2020</span>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Top ecommerce conferences in 2020</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>June 21, 2020</span>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Introducing the 2020 bigCommerce partner</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <span>June 30, 2020</span>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Best platforms for selling your products</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>Design <span className="post-count">(03)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Lifestyle <span className="post-count">(05)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Script <span className="post-count">(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Device <span className="post-count">(08)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tips <span className="post-count">(01)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Livani Tags</h3>

                    <div className="tagcloud">
                        <Link href="#">
                            <a>Business <span className="tag-link-count"> (3)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Design <span className="tag-link-count"> (3)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Livani <span className="tag-link-count"> (2)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Fashion <span className="tag-link-count"> (2)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Travel <span className="tag-link-count"> (1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Smart <span className="tag-link-count"> (1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Marketing <span className="tag-link-count"> (1)</span></a>
                        </Link>

                        <Link href="#">
                            <a>Tips <span className="tag-link-count"> (2)</span></a>
                        </Link>
                    </div>
                </div>

                <div className="widget widget_instagram">
                    <h3 className="widget-title">Instagram</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a className="d-block">
                                    <img src={require("../../images/blog/blog1.jpg")} alt="image" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="d-block">
                                    <img src={require("../../images/blog/blog2.jpg")} alt="image" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="d-block">
                                    <img src={require("../../images/blog/blog3.jpg")} alt="image" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="d-block">
                                    <img src={require("../../images/blog/blog4.jpg")} alt="image" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="d-block">
                                    <img src={require("../../images/blog/blog5.jpg")} alt="image" />
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="d-block">
                                    <img src={require("../../images/blog/blog6.jpg")} alt="image" />
                                </a>
                            </Link>
                        </li>
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

export default BlogSidebar;