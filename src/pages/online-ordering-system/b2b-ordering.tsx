import React, { FC } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import { Antic_Slab } from "next/font/google";
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import OosPricingSection from "@/sections/OosPricingSection";


const B2BOrderingSystem: FC = () => {
    const sectionData2 = [
        {
            title: `Centralized Order Processing`,
            describe: `Consolidate all your incoming orders from various channels into one central platform. Whether your clients prefer to order through your website or mobile app our B2B Ordering System ensures seamless order consolidation and processing.`
        },
        {
            title: `Customizable Catalogs and Pricing`,
            describe: `Tailor your product catalogue and pricing to meet the specific needs of each B2B customer. With our flexible system, you can create personalized catalogues, set customer-specific pricing, and implement volume-based discounts or promotions.`
        },
        {
            title: `Real-Time Inventory Tracking`,
            describe: `Say goodbye to stockouts and overselling. Our B2B system provides real-time inventory tracking, allowing you to monitor product availability and update stock levels instantly. This ensures accurate order fulfilment and eliminates the frustration of backorders.`
        },
        {
            title: `Order History and Quick Reordering`,
            describe: `Empower your B2B customers with easy access to their order history. Our system enables clients to view past orders, track deliveries, and conveniently reorder their favourite products. This streamlined reordering process saves time and enhances customer satisfaction.`
        },
        {
            title: `Effortless Communication`,
            describe: `Stay connected with your customers through our integrated messaging system. Respond to inquiries, provide updates on order status, and address any concerns promptly.`
        }
    ];
    
    const sectionData3 = [
        {
            title: `Seamless Integration`,
            describe: `Integrate our B2B Online Ordering System with your existing ERP or CRM software to create a unified business ecosystem. Sync customer data, inventory information, and order details effortlessly, eliminating data entry errors and streamlining your operations.`
        },
        {
            title: `Data Analytics and Reporting`,
            describe: `POSApt's B2B ordering software provides comprehensive analytics and reporting tools, allowing you to track key metrics, identify trends, and make data-driven decisions to optimize your business processes and maximize profitability.`
        },
        {
            title: `Secure and Scalable Solution`,
            describe: `Rest easy knowing that your business and customer data are protected with advanced security measures. Our B2B Online Ordering Software is built on a secure infrastructure, ensuring the confidentiality and integrity of your sensitive information.`
        }
    ]
    
    const faqDatas = [
        {
            qus: `1. What is a B2B online ordering system?`,
            ans: `A b2b online ordering system is a platform for b2b businesses to manage and process orders in a streamlined and efficient manner. With its use, b2b businesses can place orders, customise prices and track deliveries with ease.`
        }, {
            qus: `2. How does a B2B online ordering system work?`,
            ans: `A b2b online ordering system consolidates, processes, and fulfils orders once they are placed. It is generally integrated with a POS system to manage inventories, track orders and provide real-time reporting. Your business will have a website from where other businesses can purchase your products. All the processes will be tracked in a backend dashboard.`
        },
        {
            qus: `3. How much does it cost to implement a B2B online ordering system?`,
            ans: `The cost of implementing a B2B system can vary depending on the features, scalability, and customization requirements. But you can get POSApt’s custom online ordering system for your businesses at just $119 per month.`
        },
        {
            qus: `4. Can the B2B online ordering system integrate with existing business software?`,
            ans: `Yes, our B2B ordering software can be integrated with various business software including CRMs, ERPs, Accounting software, Point-of-Sale Systems and more.`
        }
    ];
    const dispatch = useDispatch();

    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "B2B Online Ordering System",
        "description": "Welcome to POSApt's new B2B Online Ordering System, the ideal solution for all businesses across Australia. Gone are the days of manual order management and tedious paperwork. With our user-friendly platform, you can now easily manage your B2B orders with a few clicks!.",
        "provider": {
            "@type": "LocalBusiness",
            "name": "POSApt"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Australia"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "B2B Online Ordering System",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "30-day free trial"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Basic Online Ordering System - $59 AUD per month"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Popular Online Ordering System - $119 AUD per month"
                    }
                },

            ]
        }
    }

    const faq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "What is a B2B online ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A b2b online ordering system is a platform for b2b businesses to manage and process orders in a streamlined and efficient manner. With its use, b2b businesses can place orders, customise prices and track deliveries with ease."
            }
        }, {
            "@type": "Question",
            "name": "How does a B2B online ordering system work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A b2b online ordering system consolidates, processes, and fulfils orders once they are placed. It is generally integrated with a POS system to manage inventories, track orders and provide real-time reporting. Your business will have a website from where other businesses can purchase your products. All the processes will be tracked in a backend dashboard."
            }
        }, {
            "@type": "Question",
            "name": "How much does it cost to implement a B2B online ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `The cost of implementing a B2B system can vary depending on the features, scalability, and customization requirements. But you can get POSApt’s custom online ordering system for your businesses at just $119 per month.`
            }
        }, {
            "@type": "Question",
            "name": " Can the B2B online ordering system integrate with existing business software?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes, our B2B ordering software can be integrated with various business software including CRMs, ERPs, Accounting software, Point-of-Sale Systems and more.`
            }
        }
        ]
    }

    return (
        <>
            <Head>
                <title>The Best B2B Online Ordering System in Australia</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content="The Best B2B Online Ordering System in Australia"
                />
                <meta
                    name="description"
                    content="Enhance your business-to-business ordering process with the best B2B online ordering system across Australia. Book a Demo Now!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="robots"
                    content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />
                <meta property="og:locale" content="en_AU" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="The Best B2B Online Ordering System in Australia"
                />
                <meta
                    property="og:description"
                    content="Enhance your business-to-business ordering process with the best B2B online ordering system across Australia. Book a Demo Now!"
                />
                <meta property="og:url" content="https://posapt.au/assets/dist/image/orderingSystem/B2B.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/B2B.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au/assets/dist/image/orderingSystem/B2B.webp"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="628" />
                <meta
                    property="og:image:alt"
                    content="Best Retail POS System in Australia"
                />
                <meta property="og:image:type" content="image/webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="The Best B2B Online Ordering System in Australia"
                />
                <meta
                    name="twitter:description"
                    content="Enhance your business-to-business ordering process with the best B2B online ordering system across Australia. Book a Demo Now!"
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/B2B.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system/b2b-ordering" />
            </Head>
            <Layout>
                <>
                    <ScrollToTop />
                    {/* <!-- about us --> */}
                    <section className=" pt-1 pt-md-5 pb-50">
                        <div className="container  text-center">
                            <div className="row align-items-center justify-content-center gy-5">
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className="heading_s1">
                                            <span className="sub_heading font_style1"><small>Streamline Your Business Operations with our</small>
                                            </span>
                                            <h1 className=" fw-bold text-capitalize">B2B Online Ordering System</h1>
                                        </div>
                                    </div>
                                    <div className="subpara mt-3">

                                        <p className="text-center"><span style={{ fontWeight: 400 }}>Welcome to POSApt's new B2B Online Ordering System, the ideal solution for all businesses across Australia. Gone are the days of manual order management and tedious paperwork. With our user-friendly platform, you can now easily manage your B2B orders with a few clicks!.</span></p>

                                        <div className="text-center">
                                            <a className="btn btn-white btn-red fw-bold" onClick={() => {
                                                dispatch({
                                                    type: "OPEN_TRIAL_MODAL",
                                                });
                                            }}>Sign Up for a 30-Day Free Trial</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="serv_left">
                                        <img src="/assets/dist/image/orderingSystem/B2B.webp" className="img-fluid" alt="B2B Online Ordering System" title="B2B Online Ordering System" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="pb-50 pt-50">
                        <div className=" text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="heading_s1 hs2 w-80 text-center">
                                        <h2 className="fw-bold text-capitalize"><span>Efficient Order Management Made Easy</span></h2>
                                    </div>
                                </div>

                                <div className="row g-4">
                                    {sectionData2.map((item, index) => (
                                        <div key={index} className="col-md-4">
                                            <div className="card h-100 service_box border-0 ">
                                                <div className="card-body ">
                                                    <div className="card_icon mx-auto">
                                                        <i className="fas fa-check"></i>
                                                    </div>
                                                    <h3 className="mb-2">{item.title}</h3>

                                                    <p className="text-center">{item.describe}.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                    <ContactFormSection
                        businessTitle="businesses"
                    />

                    <section className="">
                        <div className="container">
                            <div className="row bg-light p-2 p-md-5">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="new-list ">
                                        <div className="heading_s1 hs2 w-80 text-start">
                                            <h2 className=" fw-bold text-capitalize mb-5">Experience the Power of Our B2B Online Ordering System</h2>
                                        </div>
                                        {sectionData3.map((item, index) => (
                                            <div key={index} className="newitems">
                                                <span className="text-white fw-bold">{index + 1}</span>
                                                <h3 className="">{item.title}</h3>
                                                <p>{item.describe}</p>
                                            </div>
                                        ))
                                        }
                                    </div>
                                    <p className="bg-warning mt-4 p-2 fw-bold">Don’t have a website?
                                        <span>
                                            No Problem. We’ll build you a Custom Website for absolutely FREE.
                                        </span>
                                    </p>
                                </div>
                                <div className="col-md-6 m-auto order-1 order-md-2 ">
                                    <div className="orderimg mt-3 mt-lg-0">
                                        <img src="/assets/dist/image/orderingSystem/b9.webp" className="img-fluid h-100" alt="B2B Online Ordering System" title="B2B Online Ordering System" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="orderpos">
                                <img src="/assets/dist/image/posapt_ordering_system.webp" className="img-fluid" alt="B2B Online Ordering System" title="B2B Online Ordering System" />
                                <div className="heading_s1 text-center">
                                    <span className="sub_heading font_style1"><small>Get Started Today with Our B2B Online Ordering System</small>
                                    </span>
                                    <h2 className=" fw-bold text-capitalize">B2B Online Ordering System</h2>
                                </div>
                                <div className="subpara mt-3">
                                    <p className="text-center"><span style={{ fontWeight: 400 }}>Take your B2B operations to the next level with our powerful and user-friendly online order management system. We offer a range of customizable plans to suit businesses of all sizes. Contact us today to schedule a demo and start streamlining your B2B ordering processes.</span></p>

                                    <div className="text-center">
                                        <a className="btn btn-white btn-red fw-bold"
                                            onClick={() => {
                                                dispatch({
                                                    type: "OPEN_TRIAL_MODAL",
                                                });
                                            }}>Sign Up for a 30-Day Free Trial</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <OosPricingSection />
                    {/* <!-- faq --> */}
                    <section className="py-5 mb-lg-2 bg-custom">
                        <div className="container">
                            <div className="row py-2 py-md-4 py-lg-5">
                                <MailAndCall />
                                <div className="col-md-7 offset-xl-1">
                                    <div className="accordion" id="faq">

                                        {
                                            faqDatas.map((item, index) => (
                                                <div key={index} className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                                    <h3 className="accordion-header" id="q1-heading">
                                                        <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#q' + index} aria-expanded="false" aria-controls={'#q' + index}>
                                                            {item.qus}
                                                        </button>
                                                    </h3>
                                                    <div id={'q' + index} className="accordion-collapse collapse" aria-labelledby={'#q' + index + '-heading"'} data-bs-parent="#faq">
                                                        <div className="accordion-body fs-sm pt-0">
                                                            {item.ans}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </Layout>
        </>
    );
};

export default B2BOrderingSystem;