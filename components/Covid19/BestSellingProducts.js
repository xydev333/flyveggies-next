import React, { Component } from 'react';
import QuickViewModal from '../Modals/QuickViewModal';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import SingleProduct from '../Common/SingleProduct';
import { addToCart } from '../../store/actions/cartActions';

class BestSellingProducts extends Component {
    
    state = {
        QuickViewModal: false,
        modalProduct: {},
        products: []
    };

    componentDidMount(){
        this.setState({
            products: this.props.products
        })
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
            <React.Fragment>
                <section className="products-area pb-70">
                    <ToastContainer />
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">See Our Collection</span>
                            <h2>Best Selling Products</h2>
                        </div>

                        <div className="row">
                            {!!this.state.products.length && this.state.products.map((product, idx) => (
                                <SingleProduct 
                                    styleCls="col-lg-4 col-sm-6"
                                    styleClsTwo="products-box"
                                    product={product}
                                    key={idx}
                                    onHandleAddToCart={this.handleAddToCart}
                                    onhandleModalProduct={this.passDataToModal}
                                    ontoggleModal={this.toggleModal}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quick View Modal */}
                <QuickViewModal
                    onClick={this.toggleModal} active={this.state.QuickViewModal ? 'active' : ''}
                    product={this.state.modalProduct}
                />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(BestSellingProducts);