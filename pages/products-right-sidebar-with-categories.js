import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductsWithRightSidebar from '../components/Shop/ProductsWithRightSidebar';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import Category from '../components/Common/Category';

const ProductsRightSidebarWithCategories = ({products}) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Men's" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Products" 
            /> 
            <Category />
            <section className="products-area pb-70">
                <ProductsWithRightSidebar products={products} />
            </section>
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.products
    }
}

export default connect(mapStateToProps)(ProductsRightSidebarWithCategories);