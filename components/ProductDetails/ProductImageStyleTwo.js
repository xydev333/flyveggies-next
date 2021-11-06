import React, { Component } from 'react';

class ProductImageStyleTwo extends Component {
    render() {
        return (
            <div className="products-details-image">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="single-products-details-image">
                            <img src={require("../../images/products/img1.jpg")} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="single-products-details-image">
                            <img src={require("../../images/products/img2.jpg")}alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="single-products-details-image">
                            <img src={require("../../images/products/img5.jpg")} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="single-products-details-image">
                            <img src={require("../../images/products/img6.jpg")} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="single-products-details-image">
                            <img src={require("../../images/products/img9.jpg")} alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="single-products-details-image">
                            <img src={require("../../images/products/img10.jpg")} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductImageStyleTwo;
