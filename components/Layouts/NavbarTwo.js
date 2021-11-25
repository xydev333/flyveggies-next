import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import SearchModal from '../Modals/SearchModal';
import ShoppingCartModal from '../Modals/ShoppingCartModal';
import SidebarModal from '../Modals/SidebarModal';

class NavbarTwo extends Component {
    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    // Sidebar Modal
    toggleModalSidebar = () => {
        this.setState({
            SidebarModal: !this.state.SidebarModal
        });
    }
    
    // Shopping Cart Modal
    toggleModalCart = () => {
        this.setState({
            ShoppingCartModal: !this.state.ShoppingCartModal
        });
    }

    // Search Modal
    toggleModalSearch = () => {
        this.setState({
            SearchModal: !this.state.SearchModal
        });
    }
 
    render() {

        const { products } = this.props;
        const { user } = this.props;
        const { collapsed } = this.state;
        const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classNameTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area">
                    <div className="main-nav">
                        <div className="container-fluid bg-success shadow-lg">
                            <nav className="navbar navbar-expand-md navbar-dark">
                                <h4 className="display 4 text-white">Fly Veggies</h4>
                                <Link href="/">
                                    <a className="navbar-brand ml-3">
                                        <img src={require("../../images/flyimages/flyveggieslogo.png")} alt="logo" height="50px" width="50px" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classNameTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classNameOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item ">
                                            <Link href="/">
                                                <a className="nav-link text-white">
                                                    Home 
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/" activeClassName="active">
                                                        <a className="nav-link">Fashion Style One</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/fashion-style-two" activeClassName="active">
                                                        <a className="nav-link">Fashion Style Two</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/fashion-style-three" activeClassName="active">
                                                        <a className="nav-link">Fashion Style Three</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/fashion-style-four" activeClassName="active">
                                                        <a className="nav-link">Fashion Style Four</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/fashion-style-five" activeClassName="active">
                                                        <a className="nav-link">Fashion Style Five</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/covid19" activeClassName="active">
                                                        <a className="nav-link">
                                                            Home
                                                            <span>New</span>
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/grocery" activeClassName="active">
                                                        <a className="nav-link">
                                                            Grocery Store
                                                            <span>New</span>
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/electronics" activeClassName="active">
                                                        <a className="nav-link">
                                                            Electronics Store
                                                            <span>New</span>
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/furniture" activeClassName="active">
                                                        <a className="nav-link">
                                                            Furniture Store
                                                            <span>New</span>
                                                        </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/jewelry" activeClassName="active">
                                                        <a className="nav-link">
                                                            Jewelry Store
                                                            <span>New</span>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item ">
                                            <Link href="#">
                                                <a className="nav-link text-white">
                                                    Shop <i className='bx bx-chevron-down'></i>
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col">
                                                                <ul className="megamenu-submenu">
                                                                    <li>
                                                                        <Link href="/cart" activeClassName="active">
                                                                            <a>Store</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/cart" activeClassName="active">
                                                                            <a>Cart</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/checkout" activeClassName="active">
                                                                            <a>Checkout</a>
                                                                        </Link>
                                                                    </li>

                                                                    <li>
                                                                        <Link href="/login" activeClassName="active">
                                                                            <a>My Account</a>
                                                                        </Link>
                                                                    </li>
                                                                    
                                                                   
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                       <li className="nav-item megamenu">
                                            <Link href="/about">
                                                <a className="nav-link text-white">
                                                    About Us 
                                                </a>
                                            </Link>
{/*delete start*/} 
                                        </li>

                                        <li className="nav-item megamenu">
                                            <Link href="/contact">
                                                <a className="nav-link text-white">
                                                    Contact Us 
                                                </a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="#">
                                                <a className="nav-link text-white">
                                                    Blog 
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/blog-1" activeClassName="active">
                                                        <a className="nav-link">Grid (2 in Row)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-2" activeClassName="active">
                                                        <a className="nav-link">Grid (3 in Row)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-3" activeClassName="active">
                                                        <a className="nav-link">Grid (4 in Row)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-4" activeClassName="active">
                                                        <a className="nav-link">Grid (Full Width)</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/blog-5" activeClassName="active">
                                                        <a className="nav-link">Right Sidebar</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="#">
                                                        <a className="nav-link">
                                                            Single Post <i className='bx bx-chevron-right'></i>
                                                        </a>
                                                    </Link>

                                                    <ul className="dropdown-menu">
                                                        <li className="nav-item">
                                                            <Link href="/single-blog-1" activeClassName="active">
                                                                <a className="nav-link">Default</a>
                                                            </Link>
                                                        </li>
                
                                                        <li className="nav-item">
                                                            <Link href="/single-blog-2" activeClassName="active">
                                                                <a className="nav-link">With Video</a>
                                                            </Link>
                                                        </li>
                
                                                        <li className="nav-item">
                                                            <Link href="/single-blog-3" activeClassName="active">
                                                                <a className="nav-link">With Image Slider</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <div className="others-option">
                                        <div className="option-item">
                                            <div className="search-btn-box" onClick={this.toggleModalSearch}>
                                                <i className="search-btn bx bx-search-alt"></i>
                                            </div>
                                        </div>

                                        {
                                            user && 
                                            <div className="option-item">
                                                <div className="cart-btn">
                                                    <Link href="#toggleModalCart">
                                                        <a onClick={ e => {
                                                            e.preventDefault();
                                                            this.toggleModalCart();
                                                        }}>
                                                            <i className='bx bx-shopping-bag'></i>
                                                            <span>{products.length}</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        }

                                        <div className="option-item">
                                            <div className="burger-menu" onClick={this.toggleModalSidebar}>
                                                <span className="top-bar"></span>
                                                <span className="middle-bar"></span>
                                                <span className="bottom-bar"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                
                {/* Search Modal */}
                <SearchModal 
                    onClick={this.toggleModalSearch} 
                    active={this.state.SearchModal ? 'active' : ''} 
                />

                {/* Shopping Cart Modal */}
                <ShoppingCartModal 
                    onClick={this.toggleModalCart} 
                    active={this.state.ShoppingCartModal ? 'active' : ''} 
                />

                {/* Sidebar Modal */}
                <SidebarModal 
                    onClick={this.toggleModalSidebar} 
                    active={this.state.SidebarModal ? 'active' : ''} 
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.cartReducer.addedItems,
        user: state.cartReducer.login
    }
}

export default connect(mapStateToProps)(NavbarTwo);