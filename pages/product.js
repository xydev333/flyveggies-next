import React from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductDetailsStyleOne from '../components/ProductDetails/ProductDetailsStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import { firebase } from '../firebase';

const Product = ({product}) => {
    console.log(product)
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Long Sleeve Leopard T-Shirt" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Long Sleeve Leopard T-Shirt" 
            /> 
            <ProductDetailsStyleOne product={product} />
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

Product.getInitialProps = async ({ query: {id} }) => {
    console.log(id)
    const db = firebase.firestore();
    let response = await db.collection("products").doc(id).get();
    // console.log(response.data())
   
    return {
        product: response.data()
    }
}

export default Product;