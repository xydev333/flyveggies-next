import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import SingleProduct from '../Common/SingleProduct';
import { addToCart } from '../../store/actions/cartActions';
import QuickViewModal from '../Modals/QuickViewModal';
import Pagination from '../Common/Pagination';

class ProductsNoSidebar extends Component {
    state = {
        QuickViewModal: false,
        modalProduct: {},
        products: [],
        pageOfItems: [], 
        currentPage: 0,
        pageSize: 0
    };

    componentDidMount(){
        this.setState({
            products: this.props.products
        })
    }

    onChangePage = (pageOfItems, pager) => {
        let {currentPage, pageSize} = pager
        // update state with new page of items
        this.setState({
            pageOfItems, currentPage, pageSize
        });
        window.scrollTo({
            top: 0,
            left: 100,
            behavior: 'smooth'
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
        let {currentPage, pageSize, products} = this.state
        return (
            <div className="container">
                <ToastContainer />
                <div className="products-filter-options">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <p>
                                Showing {currentPage == 1 ? currentPage : ((currentPage - 1) * pageSize) + 1} – {currentPage * pageSize}
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <p className="text-right">
                                Total {products.length} Products
                            </p>
                            {/* <div className="products-ordering-list">
                                <select className="form-control">
                                    <option>Sort by Price: Low to High</option>
                                    <option>Default Sorting</option>
                                    <option>Sort by Popularity</option>
                                    <option>Sort by Average Rating</option>
                                    <option>Sort by Latest</option>
                                    <option>Sort by Price: High to Low</option>
                                </select>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div id="products-collections-filter" className="row">
                    {this.state.pageOfItems.map((product, idx) => (
                        <SingleProduct 
                            styleCls="col-lg-4 col-md-6 col-sm-6 products-col-item"
                            product={product}
                            key={idx}
                            onHandleAddToCart={this.handleAddToCart}
                            onhandleModalProduct={this.passDataToModal}
                            ontoggleModal={this.toggleModal}
                        />
                    ))}
                </div>

                {/* Quick View Modal */}
                <QuickViewModal
                    onClick={this.toggleModal} active={this.state.QuickViewModal ? 'active' : ''}
                    product={this.state.modalProduct}
                />

                {/* Pagination */}
                <Pagination 
                    pageSize={9}
                    items={this.state.products} 
                    onChangePage={this.onChangePage}
                />
            </div>
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
)(ProductsNoSidebar);