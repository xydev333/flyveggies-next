import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductsFullWidth from '../components/Shop/ProductsFullWidth';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

const ProductsLeftSidebarFullWidth = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Women's" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Products" 
            /> 
            <section className="products-area products-collections-area pt-100 pb-70">
                <ProductsFullWidth products={products} />
            </section>
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsLeftSidebarFullWidth);