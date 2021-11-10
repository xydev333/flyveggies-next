import React from 'react';
import { connect } from 'react-redux';
import TopHeaderTwo from '../components/Layouts/TopHeader2';
import NavbarTwo from '../components/Layouts/Navbar';
import Banner from '../components/Covid19/Banner';
import RecentProducts from '../components/HomeOne/RecentProducts';
import OfferArea from '../components/Covid19/OfferArea';
import FacilitySlider from '../components/Common/FacilitySlider';
import ShopByBrand from '../components/Common/ShopByBrand';
import RecentBlogPost from '../components/Covid19/RecentBlogPost';
import InstagramFeed from '../components/Covid19/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import PopularProducts from '../components/HomeOne/PopularProducts';
import BestSellingProducts from '../components/HomeOne/BestSellingProducts';

const Index = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeaderTwo />
            <NavbarTwo />
            <Banner />
            <RecentProducts products={products.slice(0, 6)} />
            <OfferArea />
            <PopularProducts products={products.slice(6, 12)} />
            <FacilitySlider />
            <BestSellingProducts products={products.slice(9, 15)} />
            <ShopByBrand />
            <RecentBlogPost />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products.filter( product => product.type == 'Women Clothes' )
    }
}

export default connect(mapStateToProps)(Index);