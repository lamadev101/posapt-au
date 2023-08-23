import React, { FC } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import HeroSection from "@/sections/hero/HeroSection";

const TabletOrdering: FC = () => {
    const dispatch = useDispatch();

    const sectionData2 = [
        {
            title: `1. Tableside Ordering`,
            describe: `POSApt tablet ordering system enables your waitstaff to take orders directly at the table with the help of a tablet. This eliminates the need for customers to wait in line or for the waiter to take orders in the traditional way.`
        },
        {
            title: `2. Instant Order Notifications`,
            describe: `Wouldn’t it be super time-saving if all the orders were instantly notified to the kitchen or preparation area? This would reduce wait times and enable prompt order fulfilment. Well, that’s now possible with our tablet ordering system.`
        },
        {
            title: `3. Increased Efficiency`,
            describe: `No more screw-ups in taking orders. Since your waitstaff will be recording orders perfectly with the help of our ordering system via a tablet, you can rest assured that there will be zero errors. This leads to faster service, improved staff productivity, and enhanced overall efficiency.`
        },
        {
            title: `4. Enhanced Customer Satisfaction`,
            describe: `By providing a modern and interactive ordering experience, you can delight your customers and enhance their satisfaction levels. The ability to personalise orders, view product photos and descriptions, and receive real-time updates allows you to provide a positive customer experience.`
        },
        {
            title: `5. Language and Accessibility Options`,
            describe: `POSApt offers multiple language options and accessibility features. This allows your staff and customers from diverse locations to navigate the ordering process comfortably.`
        },
        {
            title: `6. Scalability and Flexibility`,
            describe: `This system is designed to cater to businesses of all sizes, from small cafes to large restaurants or franchises. It offers scalability to accommodate business growth and can be easily customised to meet specific needs and preferences.`
        }
    ];

    const sectionData3 = [
        {
            title: `Menu Display`,
            describe: `The system seamlessly integrates with your existing restaurant management system. Effortlessly sync your digital menu, order processing, and inventory management for a unified and efficient dining experience. Say goodbye to manual data entry and embrace a streamlined operation.`
        },
        {
            title: `QR Code`,
            describe: `Allow your customers to place their orders from their table without needing a waitstaff. By scanning a QR Code set at their table, your customers can browse your menu and place orders whenever they like.`
        },
        {
            title: `Mobile Payments`,
            describe: `Give your customers the luxury of getting their payments sorted from their tables. Customers do not have to wait in a queue at the counter just to clear their bills. This offers a range of payment options via their mobile wallets.`
        }
    ]

    const faqDatas = [
        {
            qus: `1. What is a Tablet Ordering System?`,
            ans: `A Tablet Ordering System is a technology-based solution that allows customers to place orders and interact with a restaurant or retail establishment through a tablet device. It is commonly used in various industries such as restaurants, cafes, bars, and retail stores to enhance the ordering process.`
        }, {
            qus: `2.What are the benefits of implementing a tablet ordering system for my business?`,
            ans: `The system offers several benefits for businesses such as: 
            <p>
            <ul class='ms-3'>
            <li type='circle'> Improved Efficiency</li>
            <li type='circle'>Convenience</li>
            <li type='circle'>Order Accuracy</li>
            <li type='circle'>Upselling Opportunities</li>
            <li type='circle'>Integration with POS and Kitchen Systems</li>
            <li type='circle'>Analytics and Customer Insights</li>
            </ul>
            </p>`
        },
        {
            qus: `3. Is it easy to integrate a tablet ordering system with my existing POS system?`,
            ans: `Yes, POSApt is designed to integrate seamlessly with existing POS systems. This integration ensures that orders placed through the tablet are seamlessly transmitted to the POS system. This helps in efficient order management, accurate inventory tracking, and synchronised reporting.`
        },
        {
            qus: `4. Can I customise the tablet ordering system to match my brand and menu?`,
            ans: `Yes, many tablet ordering systems and software provide customisation options to match your brand identity and menu offerings. You can typically customise the look and feel of the user interface, incorporate your brand colours and logo, and organise your menu items. This helps maintain consistency across your digital ordering platforms and reinforces your brand image.`
        }
    ];

    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "Tablet Ordering System",
        "description": "Long gone are the days of taking orders by scribbling down on a piece of paper. Infuse an advanced cloud-based Tablet Ordering System into your business and make ‘taking orders’ SUPER Simple & Intuitive.",
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
            "name": "Tablet Ordering System",
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
            "name": "What is a Tablet Ordering System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A Tablet Ordering System is a technology-based solution that allows customers to place orders and interact with a restaurant or retail establishment through a tablet device. It is commonly used in various industries such as restaurants, cafes, bars, and retail stores to enhance the ordering process."
            }
        }, {
            "@type": "Question",
            "name": "What are the benefits of implementing a tablet ordering system for my business?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `The system offers several benefits for businesses such as: 
        Improved Efficiency
        Convenience
        Order Accuracy
        Upselling Opportunities
        Integration with POS and Kitchen Systems
        Analytics and Customer Insights
        `
            }
        }, {
            "@type": "Question",
            "name": "Is it easy to integrate a tablet ordering system with my existing POS system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Yes, POSApt is designed to integrate seamlessly with existing POS systems. This integration ensures that orders placed through the tablet are seamlessly transmitted to the POS system. This helps in efficient order management, accurate inventory tracking, and synchronised reporting.`
            }
        }, {
            "@type": "Question",
            "name": "Can I customise the tablet ordering system to match my brand and menu?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, many tablet ordering systems and software provide customisation options to match your brand identity and menu offerings. You can typically customise the look and feel of the user interface, incorporate your brand colours and logo, and organise your menu items. This helps maintain consistency across your digital ordering platforms and reinforces your brand image."
            }
        }
        ]
    }

    return (
        <>
            <Head>
                <title> Tablet Ordering System | Tablet Menu Ordering Australia</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content=" Tablet Ordering System | Tablet Menu Ordering Australia"
                />
                <meta
                    name="description"
                    content="POSApt’s tablet ordering system will let you take customers' orders directly from your tablet. Instant orders, increased efficiency, and customer satisfaction."
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
                    content=" Tablet Ordering System | Tablet Menu Ordering Australia"
                />
                <meta
                    property="og:description"
                    content="POSApt’s tablet ordering system will let you take customers' orders directly from your tablet. Instant orders, increased efficiency, and customer satisfaction."
                />
                <meta property="og:url" content="https://posapt.au/assets/dist/image/orderingSystem/tablet.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/tablet.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au/assets/dist/image/orderingSystem/tablet.webp"
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
                    content=" Tablet Ordering System | Tablet Menu Ordering Australia"
                />
                <meta
                    name="twitter:description"
                    content="POSApt’s tablet ordering system will let you take customers' orders directly from your tablet. Instant orders, increased efficiency, and customer satisfaction."
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/tablet.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system/tablet-ordering" />
            </Head>

            <Layout>
                <>
                    <ScrollToTop />
                    <HeroSection
                        tagline="QR & Contactless Ordering with"
                        title="Tablet Ordering System"
                        desc="Long gone are the days of taking orders by scribbling down on a piece of paper. Infuse an advanced cloud-based Tablet Ordering System into your business and make ‘taking orders’ SUPER Simple & Intuitive."
                        imgUrl="/assets/dist/image/orderingSystem/tablet.webp"
                    />

                    <section className="pb-50 pt-50">
                        <div className=" text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="heading_s1 hs2 w-80 text-center">
                                        <h2 className="fw-bold text-capitalize">Let your customers order from your Tablet</h2>
                                    </div>
                                </div>

                                <div className="row g-4">
                                    {sectionData2.map((item, index) => (
                                        <div className="col-md-4">
                                            <div className="card h-100 service_box border-0 ">
                                                <div className="card-body ">
                                                    <div className="card_icon mx-auto">
                                                        <i className="fas fa-check"></i>
                                                    </div>
                                                    <h3 className="mb-2">{item.title}</h3>

                                                    <p className="text-center">{item.describe}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                    
                    <section className="">
                        <div className="container">
                            <div className="row bg-light p-2 p-md-5">
                                <div className="col-md-6 m-auto order-1 order-md-2 ">
                                    <div className="orderimg mt-3 mt-lg-0">
                                        <img src="/assets/dist/image/orderingSystem/t2.webp" className="img-fluid h-100" alt="Tablet Ordering System" title="Tablet Ordering System" />
                                    </div>
                                </div>
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="new-list ">
                                        <div className="heading_s1 hs2 w-80 text-start">
                                            <h2 className=" fw-bold text-capitalize mb-5">
                                                More Power To You With
                                                <span className="d-block text-theme">Tablet Ordering System </span>
                                            </h2>
                                        </div>
                                        {sectionData3.map((item, index) => (

                                            <div className="newitems">
                                                <span className="text-white fw-bold">{index + 1}</span>
                                                <h3 className="text-theme fw-bold">{item.title}</h3>
                                                <p>{item.describe}</p>
                                            </div>

                                        ))

                                        }

                                    </div>
                                    <p className="bg-warning mt-4 p-2 fw-blod">Don’t have a website?
                                        <span>
                                            No Problem. We’ll build you a Custom Website for absolutely FREE.
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="orderpos">
                                <img src="/assets/dist/image/posapt_ordering_system.webp" className="img-fluid" alt="POSApt Ordering System" title="POSApt Ordering System" />
                                <div className="heading_s1 text-center mt-4">
                                    <span className="sub_heading font_style1">
                                        <small>Start Getting Orders
                                            <h2 className="fw-bold text-capitalize">from your Online Website Today.</h2>
                                        </small>
                                    </span>
                                </div>

                                <div className="subpara mt-3">

                                    <p className="text-center"><span style={{ fontWeight: 400 }}>Try our Tablet Menu Ordering System with a 30-day free trial and explore all the benefits before you make a commitment. Get started and boost your online presence and revenue.</span></p>

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

                    <ContactFormSection
                        businessTitle="businesses"
                        price="119"
                    />


                    {/* <!-- faq --> */}
                    <section className="py-5 mb-lg-2 bg-custom">
                        <div className="container">
                            <div className="row py-2 py-md-4 py-lg-5">
                                <MailAndCall />
                                <div className="col-md-7 offset-xl-1">
                                    <div className="accordion" id="faq">

                                        {
                                            faqDatas.map((item, index) => (
                                                <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                                    <h3 className="accordion-header" id="q1-heading">
                                                        <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#q' + index} aria-expanded="false" aria-controls={'#q' + index}>
                                                            {item.qus}
                                                        </button>
                                                    </h3>
                                                    <div id={'q' + index} className="accordion-collapse collapse" aria-labelledby={'#q' + index + '-heading"'} data-bs-parent="#faq">
                                                        <div className="accordion-body fs-sm pt-0">
                                                            <div dangerouslySetInnerHTML={{ __html: item.ans }}></div>
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

export default TabletOrdering;