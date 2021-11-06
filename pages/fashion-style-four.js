import React from 'react';
import { connect } from 'react-redux';
import TopHeaderTwo from '../components/Layouts/TopHeaderTwo';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Banner from '../components/HomeFour/Banner';
import Footer from '../components/Layouts/Footer';
import Categories from '../components/HomeFour/Categories';
import RecentProducts from '../components/HomeFour/RecentProducts';
import OfferProducts from '../components/HomeFour/OfferProducts';
import PopularProducts from '../components/HomeFour/PopularProducts';
import FacilitySlider from '../components/Common/FacilitySlider';
import BestSellingProducts from '../components/HomeFour/BestSellingProducts';
import ShopByBrand from '../components/Common/ShopByBrand';
import RecentBlogPost from '../components/Common/RecentBlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';

const HomeFour = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeaderTwo />
            <NavbarTwo />
            <Banner />
            <Categories />
            <RecentProducts products={products} />
            <OfferProducts />
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

export default connect(mapStateToProps)(HomeFour);