import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import CategoriesBanner from '../components/HomeOne/CategoriesBanner';
import RecentProducts from '../components/HomeOne/RecentProducts';
import OfferStyleOne from '../components/Common/OfferStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import Partner from '../components/Common/Partner';
import RecentBlogPost from '../components/Common/RecentBlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import PopularProducts from '../components/HomeOne/PopularProducts';
import BestSellingProducts from '../components/HomeOne/BestSellingProducts';

const Index = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <MainBanner />
            <CategoriesBanner />
            <RecentProducts products={products} />
            <OfferStyleOne />
            <PopularProducts products={products} />
            <FacilitySlider />
            <BestSellingProducts products={products} />
            <Partner />
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