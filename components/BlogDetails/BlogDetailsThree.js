import React, { Component } from 'react';
import Link from 'next/link';
import CommentsList from './CommentsList';
import BlogSidebar from '../Blog/BlogSidebar';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
}

class BlogDetailsThree extends Component {

    _isMounted = false;
    state = {
        display: false,
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                {this.state.display ? <OwlCarousel 
                                    className="article-image-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div class="article-image">
                                        <img src={require("../../images/blog/blog-slider1.jpg")} alt="image" />
                                    </div>

                                    <div class="article-image">
                                        <img src={require("../../images/blog/blog-slider2.jpg")} alt="image" />
                                    </div>

                                    <div class="article-image">
                                        <img src={require("../../images/blog/blog-slider3.jpg")} alt="image" />
                                    </div>
                                </OwlCarousel> : ''}

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className='bx bx-folder-open'></i>
                                                <span>Category</span>
                                                <Link href="#">
                                                    <a>Fashion</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-group'></i>
                                                <span>View</span>
                                                <Link href="#">
                                                    <a>813,454</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                <span>Last Updated</span>
                                                <Link href="#">
                                                    <a>01/14/2019</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>The #1 eCommerce blog to grow your business</h3>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                    <blockquote>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>

                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={require("../../images/blog/blog1.jpg")} alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={require("../../images/blog/blog2.jpg")} alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={require("../../images/blog/blog3.jpg")} alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3>Four major elements that we offer:</h3>

                                    <ul className="features-list">
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            Scientific skills for getting a better result
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            Communication skills to getting in touch
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            A career overview opportunity available
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            A good work environment for work
                                        </li>
                                    </ul>

                                    <h3>Setting the mood with incense</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                    <h3>The rise of marketing and why you need it</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span>
                                            <i className='bx bx-purchase-tag'></i>
                                        </span>

                                        <Link href="#">
                                            <a>Fashion</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Games</a>
                                        </Link>
                                        <Link href="#">
                                            <a>Travel</a>
                                        </Link>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li>
                                                <Link href="#">
                                                    <a className="facebook" target="_blank">
                                                        <i className='bx bxl-facebook'></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a className="twitter" target="_blank">
                                                        <i className='bx bxl-twitter'></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a className="linkedin" target="_blank">
                                                        <i className='bx bxl-linkedin'></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a className="instagram" target="_blank">
                                                        <i className='bx bxl-instagram'></i>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="article-author">
                                    <div className="author-profile-header"></div>
                                    <div className="author-profile">
                                        <div className="author-profile-title">
                                            <img src={require("../../images/user1.jpg")} className="shadow-sm" alt="image" />

                                            <div className="author-profile-title-details d-flex justify-content-between">
                                                <div className="author-profile-details">
                                                    <h4>Chris Orwig</h4>
                                                    <span className="d-block">Photographer, Author, Writer</span>
                                                </div>

                                                <div className="author-profile-raque-profile">
                                                    <Link href="#">
                                                        <a className="d-inline-block">View profile on Livani</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Orwig is a celebrated photographer, author, and writer who brings passion to everything he does.</p>
                                    </div>
                                </div>

                                <div className="xton-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <Link href="#">
                                                <a>
                                                    <span className="image-prev">
                                                        <img src={require("../../images/blog/blog5.jpg")} alt="image" />
                                                        <span className="post-nav-title">Prev</span>
                                                    </span>
                
                                                    <span className="prev-link-info-wrapper">
                                                        <span className="prev-title">
                                                            Latest ecommerce trend: The rise of shoppable posts
                                                        </span>
                                                        <span className="meta-wrapper">
                                                            <span className="date-post">January 21, 2020</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
            
                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <Link href="#">
                                                <a>
                                                    <span className="next-link-info-wrapper">
                                                        <span className="next-title">
                                                            Building eCommerce wave: Social media shopping
                                                        </span>
                                                        <span className="meta-wrapper">
                                                            <span className="date-post">January 19, 2020</span>
                                                        </span>
                                                    </span>
                
                                                    <span className="image-next">
                                                        <img src={require("../../images/blog/blog6.jpg")} alt="image" />
                                                        <span className="post-nav-title">Next</span>
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments List */}
                                <CommentsList />
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

export default BlogDetailsThree;