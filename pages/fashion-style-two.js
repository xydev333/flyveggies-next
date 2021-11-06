import React from 'react';
import { connect } from 'react-redux';
import TopHeaderTwo from '../components/Layouts/TopHeaderTwo';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Banner from '../components/HomeTwo/Banner';
import Footer from '../components/Layouts/Footer';
import CategoriesBanner from '../components/HomeTwo/CategoriesBanner';
import RecentProducts from '../components/HomeTwo/RecentProducts';
import OfferArea from '../components/HomeTwo/OfferArea';
import PopularProducts from '../components/HomeTwo/PopularProducts';
import FacilitySlider from '../components/Common/FacilitySlider';
import BestSellingProducts from '../components/HomeTwo/BestSellingProducts';
import ShopByBrand from '../components/Common/ShopByBrand';
import RecentBlogPost from '../components/Common/RecentBlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';

const HomeTwo = ({ products }) => {
    return(
        <React.Fragment>
            <TopHeaderTwo />
            <NavbarTwo />
            <Banner />
            <CategoriesBanner />
            <RecentProducts products={products} />
            <OfferArea />
            <PopularProducts products={products} />
            <FacilitySlider />
            <BestSellingProducts products={products} />
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

export default connect(mapStateToProps)(HomeTwo);