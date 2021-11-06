import React, { Component } from 'react';
import Link from 'next/link';
import { firebase } from '../../firebase';
import TopNavbar from '../../components/Admin/TopNavbar';
import LeftSidebar from '../../components/Admin/LeftSidebar';
import EditProductModal from '../../components/Admin/Modals/EditProductModal';
import ViewProductModal from '../../components/Admin/Modals/ViewProductModal';
import withAuth from '../../helpers/withAuth';

class Products extends Component {
    // Edit Product Modal
    state = {
        display: false,
        products: [],
        loading: true,
        modalProduct: {
            description: "Sunnyme Women's Ponchos",
            discount: false,
            discountOff: 0,
            id: "81tgigL0U2zUHoTj85Ht",
            imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
            imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
            newPrice: 200,
            newProduct: false,
            offer: true,
            oldPrice: 210,
            onSale: true,
            title: "Sunnyme Women's Ponchos",
            type: "Women Clothes"
        }
    };
    toggleEditProductModal = () => {
        this.setState({
            EditProductModal: !this.state.EditProductModal
        });
    }
    
    // View Product Modal
    toggleViewProductModal = () => {
        this.setState({
            ViewProductModal: !this.state.ViewProductModal
        });
    }
    dataModal = (product) => {
        this.setState({
            modalProduct: product
        });
        // console.log(product)
    }

    componentDidMount(){
        const db = firebase.firestore();
        const dbOrderRef = db.collection('products');
        let productsArray = [];
        dbOrderRef.get()
        .then(res => {
            // console.log(res)
            res.forEach(doc => {
                let productsObj = doc.data();
                productsObj.id = doc.id;
                productsArray.push(productsObj)
            });
            this.setState({
                products: productsArray
            })
            this.loading = false;
        })
        .catch(err => {
            console.log('error', err)
        });
    }

    render() {
        let { products } = this.state;
        return (
            <React.Fragment>
                <TopNavbar />
                <LeftSidebar />
 
                <div className="admin-main-content d-flex flex-column">
                    <div className="page-header">
                        <h2>Products</h2>
                    </div>

                    <div className="admin-products">
                        <div className="row">
                            {products.length ? products.map((product, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-products-box">
                                        <div className="products-image">
                                            <Link href="#viewproduct">
                                                <a onClick={this.toggleViewProductModal}>
                                                    <img src={product.imageUrl} className="main-image" alt="image" />
                                                    <img src={product.imageHoverUrl} className="hover-image" alt="image" />
                                                </a>
                                            </Link>
                                            
                                            {
                                                product.onSale ? (
                                                    <div className="sale-tag">Sale!</div>
                                                ) : null
                                            }

                                            {
                                                product.new ? (
                                                    <div className="new-tag">New!</div>
                                                ) : null
                                            }

                                            <div className="products-button">
                                                <ul>
                                                    <li>
                                                        <div className="wishlist-btn">
                                                            <Link href="#">
                                                                <a onClick={e => {
                                                                    e.preventDefault();
                                                                    this.toggleViewProductModal();
                                                                    this.dataModal(product);
                                                                }}>
                                                                    <i className='bx bx-search-alt'></i>
                                                                    <span className="tooltip-label">View</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="compare-btn">
                                                            <Link href="#">
                                                                <a onClick={this.toggleEditProductModal}>
                                                                    <i className='bx bx-edit'></i>
                                                                    <span className="tooltip-label">Edit</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="quick-view-btn">
                                                            <Link href="#">
                                                                <a>
                                                                    <i className='bx bx-x'></i>
                                                                    <span className="tooltip-label">Delete</span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="products-content">
                                            <h3>{product.title}</h3>
                                            <div className="price">
                                                {
                                                    product.offer ? (
                                                        <React.Fragment>
                                                            <span className="old-price">${product.oldPrice}</span>
                                                            <span className="new-price">${product.newPrice}</span>
                                                        </React.Fragment>
                                                    ) : (
                                                        <span className="new-price">${product.oldPrice}</span>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : null}
                            
                            {/* Pagination */}
                            {/* <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="pagination-area admin-pagi">
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
                                        <a className="next page-numbers">
                                            <i className='bx bx-chevron-right'></i>
                                        </a>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>

                   {/* Footer */}
                   <div className="flex-grow-1"></div>
                </div>

                {/* Sidebar Modal */}
                <EditProductModal 
                    onClick={this.toggleEditProductModal} 
                    active={this.state.EditProductModal ? 'active' : ''} 
                />
                <ViewProductModal 
                    onClick={this.toggleViewProductModal} 
                    active={this.state.ViewProductModal ? 'active' : ''}
                    product={this.state.modalProduct}
                />
            </React.Fragment>
        );
    }
}

export default withAuth(Products);