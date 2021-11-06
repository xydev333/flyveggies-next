import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active">
                            <img src={require("../../images/categories/jewelry-category1.jpg")} alt="image" />

                            <div className="content">
                                <span>50% OFF</span>
                                <h3>Rings</h3>

                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>

                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active overly">
                            <img src={require("../../images/categories/jewelry-category2.jpg")} alt="image" />

                            <div className="content text-white">
                                <span>40% OFF</span>
                                <h3>Earrings</h3>
                                
                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>
                            
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active overly">
                            <img src={require("../../images/categories/jewelry-category3.jpg")} alt="image" />

                            <div className="content text-white">
                                <span>30% OFF</span>
                                <h3>Necklaces</h3>
                                
                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>
                            
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories hover-active">
                            <img src={require("../../images/categories/jewelry-category4.jpg")} alt="image" />

                            <div className="content text-white">
                                <span>20% OFF</span>
                                <h3>Bracelets</h3>
                                
                                <Link href="#">
                                    <a className="default-btn">Shop Now</a>
                                </Link>
                            </div>
                            
                            <Link href="#">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoryBanner;