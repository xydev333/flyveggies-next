import React, { Component } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart, addQuantityWithNumber } from '../../store/actions/cartActions';
import ProductDetailsTab from './ProductDetailsTab';
import RelatedProducts from './RelatedProducts';
import ProductImage from './ProductImage';

const hookClass = (props) => {
    const router = useRouter();
    return <ProductDetailsStyleOne {...props} router={router} />
}

class ProductDetailsStyleOne extends Component {
    state = {
        qty: 1,
        max: 10,
        min: 1
    };

    handleAddToCart = () => {
        let { id } = this.props.router.query;
        let { qty } = this.state;
        this.props.addQuantityWithNumber(id, qty);  

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    incrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    decreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    render() {
        // let { id } = this.props.router.query;
        let { title, offer, oldPrice, newPrice, imageUrl } = this.props.product;
        // console.log()
        // let data = products.filter((product) => product.id == id);
        return (
            <section className="product-details-area pt-100 pb-70">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <ProductImage imageUrl={imageUrl} />
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>{title}</h3>

                                <div className="price">
                                {
                                    offer ? (
                                        <React.Fragment>
                                            <span className="old-price">${oldPrice}</span>
                                            <span className="new-price">${newPrice}</span>
                                        </React.Fragment>
                                    ) : (
                                        <span className="new-price">${oldPrice}</span>
                                    )
                                }
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                        <i className='bx bx-star'></i>
                                    </div>

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="rating-count">3 reviews</a>
                                    </Link>
                                </div>

                                <ul className="products-info">
                                    <li>
                                        <span>Vendor:</span> 
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>Lereve</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Availability:</span> 
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>In stock (7 items)</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <span>Products Type:</span> 
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()}>T-Shirt</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="products-color-switch">
                                    <span>Color:</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} title="Black" className="color-black"></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} title="White" className="color-white"></a>
                                            </Link>
                                        </li>
                                        
                                        <li className="active">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} title="Green" className="color-green"></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} title="Yellow Green" className="color-yellowgreen"></a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()} title="Teal" className="color-teal"></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-size-wrapper">
                                    <span>Size:</span>

                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()}>XS</a>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()}>S</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()}>M</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()}>XL</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a onClick={e => e.preventDefault()}>XXL</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="products-info-btn">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} data-toggle="modal" data-target="#sizeGuideModal">
                                            <i className='bx bx-crop'></i> 
                                            Size guide
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} data-toggle="modal" data-target="#productsShippingModal">
                                            <i className='bx bxs-truck'></i> 
                                            Shipping
                                        </a>
                                    </Link>

                                    <Link href="/contact">
                                        <a onClick={e => e.preventDefault()}>
                                            <i className='bx bx-envelope'></i> 
                                            Ask about this products
                                        </a>
                                    </Link>
                                </div>

                                <div className="products-add-to-cart">
                                    <div className="input-counter">
                                        <span 
                                            className="minus-btn"
                                            onClick={this.decreaseItem}
                                        >
                                            <i className='bx bx-minus'></i>
                                        </span>

                                        <input 
                                            type="text" 
                                            value={this.state.qty}
                                            min={this.state.min}
                                            max={this.state.max}
                                            onChange={e => this.setState({ qty: e.target.value })}
                                        />

                                        <span 
                                            className="plus-btn"
                                            onClick={this.incrementItem}
                                        >
                                            <i className='bx bx-plus'></i>
                                        </span>
                                    </div>

                                    <button 
                                        className="default-btn"
                                        onClick={this.handleAddToCart}
                                    >
                                        <i className="fas fa-cart-plus"></i> 
                                        Add to Cart
                                    </button>
                                </div>

                                <div className="wishlist-compare-btn">
                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="optional-btn">
                                            <i className='bx bx-heart'></i> 
                                            Add to Wishlist
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a onClick={e => e.preventDefault()} className="optional-btn">
                                            <i className='bx bx-refresh'></i> 
                                            Add to Compare
                                        </a>
                                    </Link>
                                </div>

                                <div className="buy-checkbox-btn">
                                    <div className="item">
                                        <input className="inp-cbx" id="cbx" type="checkbox" />
                                        <label className="cbx" htmlFor="cbx">
                                            <span>
                                                <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                </svg>
                                            </span>
                                            <span>I agree with the terms and conditions</span>
                                        </label>
                                    </div>

                                    <div className="item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="default-btn">Buy it now!</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Tab */}
                    <ProductDetailsTab />
                </div>

                {/* Related Products */}
                <RelatedProducts />
            </section>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))},
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(hookClass);