import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions/cartActions';
import WishlistModal from '../Modals/WishlistModal';

class TopHeaderTwo extends Component {

    state = {
        WishlistModal: false
    };

    handleLogout = () => {
        this.props.userLogout();
        Router.push('/');
    }
    
    toggleModalWishlist = () => {
        this.setState({
            WishlistModal: !this.state.WishlistModal
        });
    }

    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <ul className="header-contact-info">
                                    <li>Welcome to Fly Veggies!</li>
                                    <li>Call:317-649-0110</li>

                                    <li>
                                        <div className="dropdown language-switcher d-inline-block">
                                            <button className="dropdown-toggle" type="button">
                                                <img src={require("../../images/us-flag.jpg")} alt="image" />
                                                <span>Eng <i className='bx bx-chevron-down'></i></span>
                                            </button>

                                            <div className="dropdown-menu">
                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/germany-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Ger</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/france-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Fre</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/spain-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Spa</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/russia-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Rus</span>
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="dropdown-item d-flex align-items-center">
                                                        <img src={require("../../images/italy-flag.jpg")} className="shadow-sm" alt="flag" />
                                                        <span>Ita</span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="top-header-discount-info">
                                    <p><strong>25% OFF</strong> Hazy Promo Items <Link href="#"><a>Discover Now!</a></Link></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <ul className="header-top-menu">
                                    <li>
                                        <Link href="/login">
                                            <a>
                                                <i className='bx bxs-user'></i> My Account
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#toggleModalWishlist">
                                            <a onClick={this.toggleModalWishlist}>
                                                <i className='bx bx-heart'></i> Wishlist
                                            </a>
                                        </Link>
                                    </li>

                                    <li>
                                        {user ? (
                                            <Link href="#">
                                                <a onClick={e => {e.preventDefault(); this.handleLogout();}}>
                                                    <i className='bx bx-log-in'></i> Logout
                                                </a>
                                            </Link>
                                        ) : (
                                            <Link href="/login">
                                                <a>
                                                    <i className='bx bx-log-in'></i> Login
                                                </a>
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wishlist Modal */}
                <WishlistModal 
                    onClick={this.toggleModalWishlist} 
                    active={this.state.WishlistModal ? 'active' : ''} 
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        user: state.cartReducer.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {dispatch(userLogout())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeaderTwo);