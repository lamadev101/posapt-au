import React, { FC } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import { Antic_Slab } from "next/font/google";
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import OosPricingSection from "@/sections/OosPricingSection";

const FoodOrdering: FC = () => {
    const dispatch = useDispatch();
    const sectionData2 = [
        {
            title: `1. Efficient Order Fulfilment`,
            describe: `Our Online Food Ordering System streamlines your order fulfilment process, making sure all your orders are sent accurately to the kitchen or preparation area, reducing errors and improving efficiency.`
        },
        {
            title: `2. Multi-Channel Order Management`,
            describe: `POSApt allows you to accept online orders from multiple channels, simultaneously, including your website, mobile app, and third-party delivery platforms such as DoorDash and Uber Eats.`
        },
        {
            title: `3. Real-Time Inventory Management`,
            describe: `POSApt allows you to keep track of your inventory in real-time. This gives you the power to efficiently manage stock levels, avoid out-of-stock situations, and optimise your purchasing and restocking processes.`
        },
        {
            title: `4. Customisable Menu`,
            describe: `The system also allows you to easily manage and customise your menu items, modifiers, and pricing, ensuring accuracy and flexibility in each of your orders.`
        },
        {
            title: `5. Secure Payment Processing`,
            describe: `POSApt’s online food ordering provides multiple secure payment processing options for your customers. This allows you to accept cash, credit card payments and other popular payment methods, ensuring a seamless and secure checkout experience for your customers.`
        }
        , {
            title: `6. Analytics and Reporting`,
            describe: `The system also tracks your business performance through sales, and trends, and identifies opportunities for growth. You’ll be making data-driven decisions to drive your food business towards success.`
        }
    ];

    const sectionData3 = [
        {
            title: `Takeaway`,
            describe: `Offer your food clients the luxury of ordering their food needs while they’re still at home and visit you just when their order is ready. You’ll no longer have long queues of customers waiting hours just to place their orders.`
        },
        {
            title: `Delivery`,
            describe: `What about when a customer wants an item delivered to them? Yes, our 3rd Party Delivery integration allows you to integrate with your preferred choice of delivery services. Get your food items delivered to your customers wherever they like.`
        },
        {
            title: `Dine-in`,
            describe: `Finally, if your customers prefer to satisfy their food cravings at your retail space, you can offer them a more advanced and comfortable experience with POSApt. Make their shopping experience easier so they are tempted to come back for more.`
        }
    ]

    const faqDatas = [
        {
            qus: `1. What is an Online Food Ordering System?`,
            ans: `An online food ordering system is a digital platform that allows customers to order food online from food businesses such as restaurants, bakeries, cafes, etc. This is usually through a website or a mobile app where customers can browse menus, select food items, customise their orders, and make payments online. The system then relays the order to the food business for completion of the order.`
        }, {
            qus: `2. What are the advantages of online food ordering?`,
            ans: `Some of the main advantages of Online Food Ordering are: <p>
            <ol class='ms-3'>
            <li>Adds the convenience of being able to order food from anywhere and whenever you like.</li>
            <li>Saves time by streamlining the entire process, reducing waiting times for customers and minimising errors in taking orders.</li>
            <li>Increases sales by catering to a larger audience online.</li>
            <li>Reduces misunderstandings and order mistakes.</li>
            <li>This opens up the opportunity for newer marketing approaches such as online promotions, gift cards and discounts, and loyalty programs.</li>
            </ol>
            </p>`
        },
        {
            qus: `3. What is a fast food ordering system?`,
            ans: `A fast food ordering system is a customised version of a regular food ordering system for fast food businesses. It aims to streamline the ordering process for quick-service establishments, allowing customers to place their orders rapidly and efficiently.`
        },
        {
            qus: `4. What are the functions of an online food ordering system?`,
            ans: `An online foodie ordering system typically has all the features that you would need to efficiently manage your food service establishment. Nevertheless, here are 6 key functions that you look out for when buying an online food ordering system:<p>
            <ol class='ms-3'>
            <li>Online Order Placement - either a website or a mobile app</li>
            <li>Easy & Efficient Order Management</li>
            <li>Secure Payment Processing</li>
            <li>Delivery Tracking</li>
            <li>Integration with Third-Party Delivery Platforms</li>
            <li>Analytics and Reporting</li>
            
 </ol>
</p>`
        },
        {
            qus: `5. How much does an online food ordering system cost?`,
            ans: `The cost of an online food ordering system can vary depending on the features that business owners would like to opt for. Typically, it can cost anywhere from $100 to $200 a month. However, you can purchase it at just $119 at POSApt.`
        },
    ];
    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "Online Food Ordering System",
        "description": "Have a food service establishment that’s not yet online? Time to expand your customer base and start catering to your online audience with the best Online Food Ordering System across Australia. Reach a bigger audience, get more orders and generate higher sales. ",
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
            "name": "Online Food Ordering System",
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
            "name": "What is an Online Food Ordering System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "An online food ordering system is a digital platform that allows customers to order food online from food businesses such as restaurants, bakeries, cafes, etc. This is usually through a website or a mobile app where customers can browse menus, select food items, customise their orders, and make payments online. The system then relays the order to the food business for completion of the order."
            }
        }, {
            "@type": "Question",
            "name": "What are the advantages of online food ordering?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Some of the main advantages of Online Food Ordering are:
        Adds the convenience of being able to order food from anywhere and whenever you like.
        Saves time by streamlining the entire process, reducing waiting times for customers and minimising errors in taking orders.
        Increases sales by catering to a larger audience online.
        Reduces misunderstandings and order mistakes.
        This opens up the opportunity for newer marketing approaches such as online promotions, gift cards and discounts, and loyalty programs.
        `
            }
        }, {
            "@type": "Question",
            "name": "What is a fast food ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `A fast food ordering system is a customised version of a regular food ordering system for fast food businesses. It aims to streamline the ordering process for quick-service establishments, allowing customers to place their orders rapidly and efficiently.`
            }
        }, {
            "@type": "Question",
            "name": "What are the functions of an online food ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `An online foodie ordering system typically has all the features that you would need to efficiently manage your food service establishment. Nevertheless, here are 6 key functions that you look out for when buying an online food ordering system:

        Online Order Placement - either a website or a mobile app
        Easy & Efficient Order Management
        Secure Payment Processing
        Delivery Tracking
        Integration with Third-Party Delivery Platforms
        Analytics and Reporting
        `
            }
        }, {
            "@type": "Question",
            "name": "How much does an online food ordering system cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost of an online food ordering system can vary depending on the features that business owners would like to opt for. Typically, it can cost anywhere from $100 to $200 a month. However, you can purchase it at just $119 at POSApt."
            }
        }
        ]
    }

    return (
        <>
            <Head>
                <title>Online Food Ordering System for Food Businesses</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content="Online Food Ordering System for Food Businesses"
                />
                <meta
                    name="description"
                    content="Get the best online food ordering system across Australia by POSApt. Take food orders online through your website and deliver with ease. Signup Now!"
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
                    content="Online Food Ordering System for Food Businesses"
                />
                <meta
                    property="og:description"
                    content="Get the best online food ordering system across Australia by POSApt. Take food orders online through your website and deliver with ease. Signup Now!"
                />
                <meta property="og:url" content="https://posapt.au//assets/dist/image/orderingSystem/online_food_ordering.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au//assets/dist/image/orderingSystem/online_food_ordering.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au//assets/dist/image/orderingSystem/online_food_ordering.webp"
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
                    content="Online Food Ordering System for Food Businesses"
                />
                <meta
                    name="twitter:description"
                    content="Get the best online food ordering system across Australia by POSApt. Take food orders online through your website and deliver with ease. Signup Now!"
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au//assets/dist/image/orderingSystem/online_food_ordering.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system/food-ordering" />
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
                                            <span className="sub_heading font_style1"><small>Exquisite dining made effortless with</small>
                                            </span>
                                            <h1 className=" fw-bold text-capitalize">Online Food Ordering System</h1>
                                        </div>
                                    </div>
                                    <div className="subpara mt-3">

                                        <p className="text-center"><span style={{ fontWeight: 400 }}>Have a food service establishment that’s not yet online? Time to expand your customer base and start catering to your online audience with the best Online Food Ordering System across Australia. Reach a bigger audience, get more orders and generate higher sales.</span></p>

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
                                        <img src="/assets/dist/image/orderingSystem/online_food_ordering.webp" className="img-fluid" alt="Food Online Ordering System" title="Food Online Ordering System" />
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
                                        <h2 className="fw-bold text-capitalize">Experience the future of food retail,<span className="d-block text-theme"> one order at a time.</span></h2>
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
                                            <h2 className=" fw-bold text-capitalize mb-5">
                                                More Power To You With POSApt’s <span className="d-block text-theme">Online Food Ordering System </span></h2>
                                        </div>
                                        {sectionData3.map((item, index) => (
                                            <div className="newitems">
                                                <span className="text-white fw-bold">{index + 1}</span>
                                                <h5 className="text-theme fw-bold">{item.title}</h5>
                                                <p>{item.describe}</p>
                                            </div>
                                        ))
                                        }
                                    </div>
                                    <h5 className="bg-warning mt-4 p-2">Don’t have a website?
                                        <span>
                                            No Problem. We’ll build you a Custom Website for absolutely FREE.
                                        </span>
                                    </h5>
                                </div>
                                <div className="col-md-6 m-auto order-1 order-md-2 ">
                                    <div className="orderimg mt-3 mt-lg-0">
                                        <img src="/assets/dist/image/orderingSystem/of5.webp" className="img-fluid h-100" alt="Online Food Ordering System" title="Online Food Ordering System" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="orderpos">
                                <img src="/assets/dist/image/posapt_ordering_system.webp" className="img-fluid" alt="POSApt Ordering System" title="POSApt Ordering System" />
                                <div className="heading_s1 text-center">
                                    <span className="sub_heading font_style1"><small>Start Getting More Orders</small>
                                    </span>
                                    <h2 className=" fw-bold text-capitalize">From Your Website</h2>
                                </div>

                                <div className="subpara mt-3">

                                    <p className="text-center"><span style={{ fontWeight: 400 }}>You don’t have to commit fully before you give us a try. We’re offering a 30 Day Free Trial so you can try before you buy. Let’s explore POSApt’s Online Food Ordering System for Australia today!</span></p>

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
                    
                    <OosPricingSection/>

                    {/* <!-- faq --> */}
                    <section className="py-5 mb-lg-2 bg-custom">
                        <div className="container">
                            <div className="row py-2 py-md-4 py-lg-5">
                                <MailAndCall/>
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

export default FoodOrdering;