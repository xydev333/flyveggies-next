import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeThree/Banner';
import RecentProducts from '../components/HomeThree/RecentProducts';
import FacilitySliderTwo from '../components/Common/FacilitySliderTwo';
import TrendingProducts from '../components/HomeThree/TrendingProducts';
import Categories from '../components/HomeThree/Categories';
import BestSellerProducts from '../components/HomeThree/BestSellerProducts';
import ShopByBrandTwo from '../components/Common/ShopByBrandTwo';
import RecentBlogPost from '../components/Common/RecentBlogPost';

const HomeThree = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <Banner />
            <section className="all-products-area ptb-100 bg-f5f5f5">
                <div className="container">
                    <RecentProducts products={products} />
                    <FacilitySliderTwo />
                    <TrendingProducts products={products} />
                    <Categories />
                    <BestSellerProducts products={products} />
                    <ShopByBrandTwo />
                </div>
            </section>
            <RecentBlogPost />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.products.filter( product => product.type == 'T-Shirt' )
    }
}

export default connect(mapStateToProps)(HomeThree);