import Link from 'next/link';

const CategoryBanner = () => {
    return(
        <section className="categories-banner-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-categories-box hover-active">
                            <img src={require("../../images/categories/furniture-category1.jpg")} alt="image" />

                            <div className="content text-white">
                                <span>Don’t Miss Today</span>
                                <h3>50% OFF</h3>

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
                        <div className="single-categories-box hover-active">
                            <img src={require("../../images/categories/furniture-category2.jpg")} alt="image" />

                            <div className="content">
                                <span>New Collection</span>
                                <h3>Need Now</h3>
                                
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
                        <div className="single-categories-box hover-active">
                            <img src={require("../../images/categories/furniture-category3.jpg")} alt="image" />

                            <div className="content">
                                <span>Your Looks</span>
                                <h3>Must Haves</h3>
                                
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
                        <div className="single-categories-box hover-active">
                            <img src={require("../../images/categories/furniture-category4.jpg")} alt="image" />

                            <div className="content text-white">
                                <span>Take 20% OFF</span>
                                <h3>Winter Spring!</h3>
                                
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