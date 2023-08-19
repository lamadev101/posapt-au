import React, { FC } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import { Antic_Slab } from "next/font/google";
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import OosPricingSection from "@/sections/OosPricingSection";

const ResaturantSystem: FC = () => {
    const dispatch = useDispatch();
    const sectionData2 = [
        {
            title: `Accept All Online Orders`,
            describe: `Whether your customer wants to order from your website or from a third-party delivery app, accept all orders from one centralised platform.`
        },
        {
            title: `Make Payments Easier & Secure`,
            describe: `Customers want to pay via credit cards. No worries! Want to accept payments via PayPal? That’s possible too.`
        },
        {
            title: `Deliver Without An Inhouse Delivery Guy`,
            describe: `Now you can integrate third-party delivery apps to get your food orders delivered to the doorstep of your customers.`
        },
        {
            title: `HR Management System`,
            describe: `Save time with HR management tools such as employee shift tracking and automatic report generation.`
        },
        {
            title: `Table Reservation`,
            describe: `Let your customers book their own tables at their preferred date and time with POSApt’s Restaurant Ordering System.`
        },
        {
            title: `Free Custom Website`,
            describe: `With a subscription to our Online Ordering System, we design and develop an appealing and custom website for your business.`
        }
    ];

    const sectionData3 = [
        {
            title: `Takeaway`,
            describe: `No more long waits in the queue just to make an order. Give your customers the luxury of ordering their favourite dishes from the comfort of their homes.`
        },
        {
            title: `Delivery`,
            describe: `And when your customers don’t have the time to drive down to your restaurant, give them the option to get their food needs delivered to their doorstep. There’s no better sound than the doorbell with your favourite meal.`
        },
        {
            title: `Dine-in`,
            describe: `The classic option of dining in your restaurant is always there but enhance this experience with QR code ordering. All your staff has to do is show your customers to their reserved table when they arrive.`
        }
    ]

    const faqDatas = [
        {
            qus: `1. What is an online ordering system for restaurants?`,
            ans: `An online ordering system for restaurants refers to a digital platform, website, or application that enables customers to place orders online. It provides a convenient and fast way for customers to browse menus, view product photos and descriptions, and submit their orders electronically through the Internet.`
        }, {
            qus: `2. How to implement an online ordering system for a Restaurant in Australia?`,
            ans: `Let’s go through the step-by-step process of implementing an online ordering system in your restaurant: 
            <p>
            <ol class='ms-3'>
            <li><strong>Choose the right online ordering system provider:</strong> Look for a reputable provider that offers features and functionalities suitable for your restaurant's needs. Consider factors such as menu customisation, integration with your POS system, payment processing, and customer support.</li>
            <li><strong>Set up your menu and item details:</strong> Work with the online ordering system provider to create and customize your digital menu. Include relevant information such as descriptions, prices, and high-quality food images.</li>
            <li><strong>Configure order management:</strong> Determine how orders will be received and processed. This may involve integrating the online ordering system with your existing POS system or using a separate tablet or device to receive orders.</li>
            <li><strong>Enable online payments:</strong> Set up secure payment options, such as credit card processing or integration with popular payment gateways, to facilitate smooth transactions.</li>
            <li><strong>Start fulfilling orders:</strong> Do a little bit of marketing to get your website in front of your customers and start getting orders.</li> 
            </ol>
            </p>`
        },
        {
            qus: `3. What is the advantage of an online ordering system to a fast food restaurant?`,
            ans: `Fast food restaurants can benefit significantly from an online ordering system. Some advantages include:
                    <p>
                    <ul class='ms-3'>
                    <li type='circle'>Increased revenue by selling to a broader audience.</li>
                    <li type='circle'>Improved efficiency by streamlining the order-taking process, reducing the need for manual input and minimizing errors.</li>
                    <li type='circle'>Enhanced customer experience with the convenience of being able to browse menus, customize their orders, and make payments online.</li>
                    <li type='circle'>Upselling and cross-selling opportunities.</li>
                    </ul>
                    </p>`
        },
        {
            qus: `4. How Does a Restaurant Online Ordering System Work?`,
            ans: `The working mechanism of a restaurant's online ordering system can be explained in these steps:<p>
            <ol class='ms-3'>
            <li>Customer places an order via your website or mobile application.</li>
            <li>Order is submitted and payment is made.</li>
            <li>Order is confirmed and displayed on your dashboard or kitchen screen.</li>
            <li>The order is fulfilled and waiting for delivery or pickup.</li>
            <li>Order is tracked and updated to the customer.</li>
            <li>Customer feedback and reviews are collected.</li>
            </ol>
            </p>`
        },
        {
            qus: `5. What are the benefits of using an online restaurant ordering system?`,
            ans: `Here are the 10 benefits of using an online restaurant ordering system:
            <p>
            <ol class='ms-3'>
            <li>Increased revenue and customer base</li>
            <li>Improved operational efficiency</li>
            <li>Enhanced customer experience</li>
            <li>Data-driven insights</li>
            <li>Improved order accuracy</li>
            <li>Upselling and cross-selling opportunities</li>
            <li>Better resource management</li>
            <li>Integration with other systems</li>
            <li>Increased visibility and marketing opportunities</li>
            <li>Competitive advantage</li>
            </ol>
            </p>`
        }, {
            qus: `6. How much does it cost to implement the best online ordering system for restaurants?`,
            ans: `An online ordering system for restaurants can cost anywhere between $100 to $300 per month based on user requirements. However, you can POSApt’s ordering system at just $119 per month.`
        }
    ];
    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "Restaurant Online Ordering System",
        "description": "Time to use your secret ingredient and draw in hungry customers to your restaurant. Say goodbye to the days of scribbled orders and long phone calls. With our Online Ordering System for Restaurants, your customers can now satisfy their cravings with a few clicks on their smartphones.",
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
            "name": "Restaurant Online Ordering System",
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
            "name": "What is an online ordering system for restaurants?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "An online ordering system for restaurants refers to a digital platform, website, or application that enables customers to place orders online. It provides a convenient and fast way for customers to browse menus, view product photos and descriptions, and submit their orders electronically through the Internet."
            }
        }, {
            "@type": "Question",
            "name": "How to implement an online ordering system for a Restaurant in Australia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Let’s go through the step-by-step process of implementing an online ordering system in your restaurant: 
        Choose the right online ordering system provider: Look for a reputable provider that offers features and functionalities suitable for your restaurant's needs. Consider factors such as menu customisation, integration with your POS system, payment processing, and customer support.
        Set up your menu and item details: Work with the online ordering system provider to create and customize your digital menu. Include relevant information such as descriptions, prices, and high-quality food images.
        Configure order management: Determine how orders will be received and processed. This may involve integrating the online ordering system with your existing POS system or using a separate tablet or device to receive orders.
        Enable online payments: Set up secure payment options, such as credit card processing or integration with popular payment gateways, to facilitate smooth transactions.
        Start fulfilling orders: Do a little bit of marketing to get your website in front of your customers and start getting orders. 
        `
            }
        }, {
            "@type": "Question",
            "name": "What is the advantage of an online ordering system to a fast food restaurant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Fast food restaurants can benefit significantly from an online ordering system. Some advantages include:
        Increased revenue by selling to a broader audience.
        Improved efficiency by streamlining the order-taking process, reducing the need for manual input and minimizing errors.
        Enhanced customer experience with the convenience of being able to browse menus, customize their orders, and make payments online.
        Upselling and cross-selling opportunities.
        `
            }
        }, {
            "@type": "Question",
            "name": "How Does a Restaurant Online Ordering System Work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `The working mechanism of a restaurant's online ordering system can be explained in these steps:
        Customer places an order via your website or mobile application.
        Order is submitted and payment is made.
        Order is confirmed and displayed on your dashboard or kitchen screen.
        The order is fulfilled and waiting for delivery or pickup.
        Order is tracked and updated to the customer.
        Customer feedback and reviews are collected.
        `
            }
        }, {
            "@type": "Question",
            "name": "What are the benefits of using an online restaurant ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Here are the 10 benefits of using an online restaurant ordering system:

        Increased revenue and customer base
        Improved operational efficiency
        Enhanced customer experience
        Data-driven insights
        Improved order accuracy
        Upselling and cross-selling opportunities
        Better resource management
        Integration with other systems
        Increased visibility and marketing opportunities
        Competitive advantage
        `}
        }, {
            "@type": "Question",
            "name": "How much does it cost to implement the best online ordering system for restaurants?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `An online ordering system for restaurants can cost anywhere between $100 to $300 per month based on user requirements. However, you can POSApt’s ordering system at just $119 per month.`
            }
        }
        ]
    }

    return (
        <>
            <Head>
                <title>Restaurant Online Ordering System by POSApt</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content="Restaurant Online Ordering System by POSApt"
                />
                <meta
                    name="description"
                    content="Have a restaurant? Get the best restaurant online ordering system across Australia and improve your monthly sales. Book a Demo!"
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
                    content="Restaurant Online Ordering System by POSApt"
                />
                <meta
                    property="og:description"
                    content="Have a restaurant? Get the best restaurant online ordering system across Australia and improve your monthly sales. Book a Demo!"
                />
                <meta property="og:url" content="https://posapt.au/assets/dist/image/orderingSystem/restaurant_OOS.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/restaurant_OOS.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au/assets/dist/image/orderingSystem/restaurant_OOS.webp"
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
                    content="Restaurant Online Ordering System by POSApt"
                />
                <meta
                    name="twitter:description"
                    content="Have a restaurant? Get the best restaurant online ordering system across Australia and improve your monthly sales. Book a Demo!"
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/restaurant_OOS.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system/restaurant" />
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
                                            <span className="sub_heading font_style1"><small>Deliver deliciousness with our</small>
                                            </span>
                                            <h1 className=" fw-bold text-capitalize">The Best Online Ordering System for Restaurants</h1>
                                        </div>
                                    </div>
                                    <div className="subpara mt-3">
                                        <p className="text-center">
                                            <span style={{ fontWeight: 400 }}>
                                                Time to use your secret ingredient and draw in hungry customers to your restaurant. Say goodbye to the days of scribbled orders and long phone calls. With our Online Ordering System for Restaurants, your customers can now satisfy their cravings with a few clicks on their smartphones.
                                            </span>
                                        </p>
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
                                        <img src="/assets/dist/image/orderingSystem/restaurant_OOS.webp" className="img-fluid" alt="Resaurants Online Ordering System" title="Resaurants Online Ordering System" />
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
                                        <h2 className="fw-bold text-capitalize">Let's make your restaurant the talk of the town,
                                            <span className="d-block text-theme">
                                                one delicious order at a time.
                                            </span>
                                        </h2>
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
                                                More Power To You With:<span className="d-block text-theme">Restaurant Online Ordering System </span></h2>
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
                                    <p className="bg-warning mt-4 p-2 fw-bold">Don’t have a website?
                                        <span>
                                            No Problem. We’ll build you a Custom Website for absolutely FREE.
                                        </span>
                                    </p>
                                </div>
                                <div className="col-md-6 m-auto order-1 order-md-2 ">
                                    <div className="orderimg mt-3 mt-lg-0">
                                        <img src="/assets/dist/image/orderingSystem/r7.webp" className="img-fluid h-100" alt="Coffee Shop POS System" title="Coffee Shop POS System" />
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
                                    <span className="sub_heading font_style1">
                                        <small>Start Getting Orders From</small>
                                    </span>
                                    <h2 className="fw-bold text-capitalize">Your Online Website Today!</h2>
                                </div>
                                <div className="subpara mt-3">
                                    <p className="text-center">
                                        <span style={{ fontWeight: 400 }}>
                                            You don’t have to commit fully before you give us a try. We’re offering a 30 Day Free Trial so you can try before you buy. Let’s explore POSApt’s Restaurant Online Ordering System today!
                                        </span>
                                    </p>
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

export default ResaturantSystem;