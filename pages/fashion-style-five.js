import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/HomeFive/Banner';
import Categories from '../components/HomeFive/Categories';
import RecentProducts from '../components/HomeFive/RecentProducts';
import Offer from '../components/HomeFive/Offer';
import PopularProducts from '../components/HomeFive/PopularProducts';
import FacilitySlider from '../components/Common/FacilitySlider';
import BestSellingProducts from '../components/HomeFive/BestSellingProducts';
import Partner from '../components/Common/Partner';
import RecentBlogPost from '../components/Common/RecentBlogPost';

const HomeFive = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <Banner />
            <Categories />
            <RecentProducts products={products.slice(0, 4)} />
            <Offer />
            <PopularProducts products={products.slice(0, 4)} />
            <FacilitySlider />
            <BestSellingProducts products={products.slice(0, 4)} />
            <Partner />
            <RecentBlogPost />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.cartReducer.products.filter( product => product.type == 'Women Clothes' )
    }
}

export default connect(mapStateToProps)(HomeFive);