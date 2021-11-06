import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class ProductsDetailsAccordion extends Component {
    render() {
        return (
            <div className="products-details-accordion">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>Description</AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                                <p>Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.</p>

                                <ul>
                                    <li>Fabric 1: 100% Polyester</li>
                                    <li>Fabric 2: 100% Polyester, Lining: 100% Polyester</li>
                                    <li>Fabric 3: 75% Polyester, 20% Viscose, 5% Elastane</li>
                                </ul>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>Additional information</AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Color:</td>
                                            <td>Blue, Purple, White</td>
                                        </tr>
                                        <tr>
                                            <td>Size:</td>
                                            <td>20, 24</td>
                                        </tr>
                                        <tr>
                                            <td>Material:</td>
                                            <td>100% Polyester</td>
                                        </tr>
                                        <tr>
                                            <td>Height:</td>
                                            <td>180 cm - 5' 11”</td>
                                        </tr>
                                        <tr>
                                            <td>Bust:</td>
                                            <td>83 cm - 32”</td>
                                        </tr>
                                        <tr>
                                            <td>Waist:</td>
                                            <td>57 cm - 22”</td>
                                        </tr>
                                        <tr>
                                            <td>Hips:</td>
                                            <td>88 cm - 35</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping:</td>
                                            <td>Free</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>Reviews</AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                                <div className="products-review-form">
                                    <h3>Customer Reviews</h3>

                                    <div className="review-title">
                                        <div className="rating">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bx-star'></i>
                                        </div>
                                        <p>Based on 3 reviews</p>
                                        <a href="#" className="default-btn">Write a Review</a>
                                    </div>

                                    <div className="review-comments">
                                        <div className="review-item">
                                            <div className="rating">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <h3>Good</h3>
                                            <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        </div>

                                        <div className="review-item">
                                            <div className="rating">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <h3>Good</h3>
                                            <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        </div>

                                        <div className="review-item">
                                            <div className="rating">
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bx-star'></i>
                                            </div>
                                            <h3>Good</h3>
                                            <span><strong>Admin</strong> on <strong>Sep 21, 2019</strong></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        </div>
                                    </div>

                                    <div className="review-form">
                                        <h3>Write a Review</h3>

                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" id="name" name="name" placeholder="Enter your name" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" id="email" name="email" placeholder="Enter your email" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" id="review-title" name="review-title" placeholder="Enter your review a title" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <textarea name="review-body" id="review-body" cols="30" rows="6" placeholder="Write your comments here" className="form-control"></textarea>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12">
                                                    <button type="submit" className="default-btn">Submit Review</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        );
    }
}

export default ProductsDetailsAccordion;