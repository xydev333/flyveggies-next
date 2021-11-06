import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box left-categories">
                            <img src={require("../../images/categories/grocery-category1.jpg")} alt="image" />

                            <div className="content">
                                <span>50% OFF</span>
                                <h3>Vegetables</h3>

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
                        <div className="single-categories-box left-categories">
                            <img src={require("../../images/categories/grocery-category2.jpg")} alt="image" />

                            <div className="content">
                                <span>40% OFF</span>
                                <h3>Meats</h3>
                                
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
                        <div className="single-categories-box left-categories">
                            <img src={require("../../images/categories/grocery-category3.jpg")} alt="image" />

                            <div className="content">
                                <span>30% OFF</span>
                                <h3>Fruits</h3>
                                
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
                        <div className="single-categories-box left-categories">
                            <img src={require("../../images/categories/grocery-category4.jpg")} alt="image" />

                            <div className="content">
                                <span>20% OFF</span>
                                <h3>Eggs</h3>
                                
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