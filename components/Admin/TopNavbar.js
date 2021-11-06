import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import { toast } from 'react-toastify';
import { auth } from '../../firebase';
import AddProductModal from './Modals/AddProductModal';

class TopNavbar extends Component {
    _isMounted = false;

    state = {
        display: false,
        layoutCls: true,
        collapsed: true
    };

    handleLogout = () => {
        auth.signOut().then(() => {
            setTimeout(function(){
                toast.success('You are signed out successfully!', {
                    position: "bottom-left",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            }, 1500);
        }).catch(function(error) {
            alert('OOps something went wrong check your console');
            // console.log(error);
        });
    }

    // Navbar 
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    // Add Product Modal
    toggleAddProductModal = () => {
        this.setState({
            AddProductModal: !this.state.AddProductModal
        });
    }
 
    //
    onToggleClass = () => {
        this.setState({
            layoutCls: !this.state.layoutCls
        });
        this.props.onChangeClass(this.state.layoutCls);
    }
 
    render() {
        const { collapsed } = this.state;
        const classNameOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';

        return (
            <React.Fragment>
                <div className="Toastify__toast-container Toastify__toast-container--bottom-center">
                    <div className="Toastify__toast Toastify__toast--warning"><div role="alert" className="Toastify__toast-body"><i className='bx bx-info-circle'></i> Some functions may not work because of storefront vulnerability!</div><div className="Toastify__progress-bar Toastify__progress-bar--controlled Toastify__progress-bar--warning" style={{animationDuration: "50000ms", animationPlayState: "paused", opacity: "1", transform: "scaleX(0)"}}></div></div>
                </div>
                <nav className="navbar navbar-expand admin-top-navbar">
                    <Link href="/admin/dashboard">
                        <a className="navbar-brand">
                            <img src={require("../../images/logo.png")} alt="logo" />
                        </a>
                    </Link>

                    {/* Burger menu */}
                    <div 
                        className="burger-menu x"
                        onClick={this.onToggleClass}
                    >
                        <span className="top-bar"></span>
                        <span className="middle-bar"></span>
                        <span className="bottom-bar"></span>
                    </div>

                    <div className={classNameOne} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item add-products">
                                <Link href="#" activeClassName="active">
                                    <a 
                                        className="nav-link" 
                                        onClick={e => {
                                            e.preventDefault();
                                            this.toggleAddProductModal()
                                        }}
                                    >
                                        Add Products
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item notification">
                                <Link href="#">
                                    <a className="nav-link">
                                        <div className="count-info">
                                            <i className='bx bx-bell'></i>
                                            <span className="circle">
                                                <span className="ripple"></span>
                                                <span className="ripple"></span>
                                                <span className="ripple"></span>
                                            </span>
                                        </div>
                                    </a>
                                </Link>

                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a className="nav-link">
                                                <span className="status">Delivery Successful</span> 
                                                <span className="time">- 3m ago</span>
                                                <p>Order #8985 had been placed</p>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a className="nav-link">
                                                <span className="status">Delivery Successful</span> 
                                                <span className="time">- 5m ago</span>
                                                <p>Order #8986 had been placed</p>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a className="nav-link">
                                                <span className="feeds">More Feeds</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item profile">
                                <Link href="#">
                                    <a className="nav-link">
                                        <img src={require("../../images/admin/admin.jpg")} alt="Image" />
                                    </a>
                                </Link>

                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a className="nav-link">Settings</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => {
                                                e.preventDefault();
                                                this.handleLogout();
                                            }} className="nav-link">Sign out</a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>


                {/* Sidebar Modal */}
                <AddProductModal 
                    onClick={this.toggleAddProductModal} 
                    active={this.state.AddProductModal ? 'active' : ''} 
                />
            </React.Fragment>
        );
    }
}


export default TopNavbar;