import React from 'react';
import { connect } from 'react-redux';
import TopHeaderTwo from '../components/Layouts/TopHeaderTwo';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Banner from '../components/Covid19/Banner';
import Footer from '../components/Layouts/Footer';
import RecentProducts from '../components/Covid19/RecentProducts';
import OfferArea from '../components/Covid19/OfferArea';
import PopularProducts from '../components/Covid19/PopularProducts';
import FacilitySlider from '../components/Common/FacilitySlider';
import BestSellingProducts from '../components/Covid19/BestSellingProducts';
import ShopByBrand from '../components/Common/ShopByBrand';
import RecentBlogPost from '../components/Covid19/RecentBlogPost';
import InstagramFeed from '../components/Covid19/InstagramFeed';

const Covid19 = ({ products }) => {
    return(
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
        products: state.products.filter( product => product.type == 'medical' )
    }
}

export default connect(mapStateToProps)(Covid19)