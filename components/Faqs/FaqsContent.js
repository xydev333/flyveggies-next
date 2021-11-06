import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

class FaqsContent extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="faq-area ptb-100">
                <div className="container">
                    <div className="tab faq-accordion-tab">
                        {/* Tab nav */}
                        <ul className="tabs d-flex flex-wrap justify-content-center">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className='bx bx-flag'></i> 
                                <span>Getting Started</span>
                            </li>
                            
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <i className='bx bxs-badge-dollar'></i> 
                                <span>Pricing & Plans</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <i className='bx bx-shopping-bag'></i> 
                                <span>Sales Question</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                <i className='bx bx-book-open'></i> 
                                <span>Usage Guides</span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                <i className='bx bx-info-circle'></i> 
                                <span>General Guide</span>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="tab1" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What shipping methods are available?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What are shipping times and costs?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can I use my own domain name?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What kind of customer service do you offer?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>

                            <div id="tab2" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What shipping methods are available?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What are shipping times and costs?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can I use my own domain name?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What kind of customer service do you offer?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>

                            <div id="tab3" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What shipping methods are available?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What are shipping times and costs?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can I use my own domain name?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What kind of customer service do you offer?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>

                            <div id="tab4" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What shipping methods are available?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What are shipping times and costs?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can I use my own domain name?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What kind of customer service do you offer?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>

                            <div id="tab5" className="tabs-item">
                                <div className="faq-accordion">
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What shipping methods are available?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What are shipping times and costs?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What payment methods can I use?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <div className="accordion-content">
                                                    <ul>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                        <li>Comero features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                                                        <li>PayPal: Shop easily online without having to enter your credit card details on the website. Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                                                        <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                                                    </ul>
                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Can I use my own domain name?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Absolutely! Simply point your domain directly to your new Xton. You do not need to use a subdomain or any other temporary domain name placeholder.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    What kind of customer service do you offer?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>Our ecommerce consultants are here to answer your questions. In addition to FREE phone support, you can contact our consultants via email or live chat.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqsContent;