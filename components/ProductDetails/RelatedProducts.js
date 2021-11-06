import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import QuickViewModal from '../Modals/QuickViewModal';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import SingleProductStyleTwo from '../Common/SingleProductStyleTwo';
import { addToCart } from '../../store/actions/cartActions';

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}

class RelatedProducts extends Component {

    _isMounted = false;
    state = {
        QuickViewModal: false,
        display: false,
        modalProduct: {},
        products: [],
    };

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ 
            display: true,
            products: this.props.products 
        }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    toggleModal = () => {
        this.setState({
            QuickViewModal: !this.state.QuickViewModal
        });
    }

    handleAddToCart = (id) => {
        this.props.addToCart(id); 
        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    passDataToModal = (product) => {
        this.setState({
            modalProduct: product
        });
    }

    render() {
        return (
            <div className="related-products">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Our Shop</span>
                        <h2>Related Products</h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                            className="products-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {this.state.products.slice(0,6).map((product, idx) => (
                                <SingleProductStyleTwo 
                                    product={product}
                                    key={idx}
                                    onHandleAddToCart={this.handleAddToCart}
                                    onhandleModalProduct={this.passDataToModal}
                                    ontoggleModal={this.toggleModal}
                                />
                            ))}
                    </OwlCarousel> : '' }
                    {/* Quick View Modal */}
                    <QuickViewModal
                        onClick={this.toggleModal} active={this.state.QuickViewModal ? 'active' : ''}
                        product={this.state.modalProduct}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filter( product => product.type == 'Women Clothes' )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

// export default RelatedProducts;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RelatedProducts);