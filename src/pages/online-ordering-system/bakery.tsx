import React, { FC } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import { Antic_Slab } from "next/font/google";
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import OosPricingSection from "@/sections/OosPricingSection";
import HeroSection from "@/sections/hero/HeroSection";

const BakerySystem: FC = () => {
    const dispatch = useDispatch();
    const sectionData2 = [
        {
            title: `Centralised Order Management`,
            describe: `Our Bakery Online Ordering System allows owners to manage orders from various channels, whether it's through the website or a popular third-party delivery app. Streamline orders by consolidating all incoming orders into one centralised platform.`
        },
        {
            title: `Flexible Payment Options`,
            describe: `Customers' payment preferences are as varied as they are. POSApt allows customers to conveniently pay with credit cards, mobile wallets, or other digital payment methods. Get paid in cash with our cash-on-delivery feature.`
        },
        {
            title: `Deliver Without an In-house Delivery Team`,
            describe: `Integrate with third-party delivery apps and services to expand your delivery capabilities. With POSApt, you can select convenient delivery options and don’t have to worry about an in-house delivery team.`
        },
        {
            title: `Inventory Management`,
            describe: `Efficiently manage your bakery's inventory with our system's inventory management features. Keep track of ingredient quantities, receive automated alerts for low stock levels, and ensure you always have the ingredients needed to fulfil orders.`
        },
        {
            title: `Table Reservation`,
            describe: `Enhance the dining experience at your bakery by allowing customers to reserve tables in advance. With the table reservation feature, customers can book their preferred table at their desired date and time.`
        }
    ];

    const sectionData3 = [
        {
            title: `Takeaway`,
            describe: `Eliminate long waits in line for your customers. With our Ordering System, customers can conveniently place their orders from the comfort of their homes.`
        },
        {
            title: `Dine-in`,
            describe: `For customers who prefer to dine in, enhance their experience with QR. Allow them to browse your menu, place orders, and make payments effortlessly using their smartphones. When they arrive, your staff can guide them to their reserved table, ensuring a seamless and enjoyable dining experience.`
        },
        {
            title: `Menu Customization`,
            describe: `Stay flexible and responsive to changing customer preferences. Our bakery online ordering system allows you to update your menu items, prices, and descriptions easily. Showcase seasonal specialties, highlight limited-time offers, and accommodate dietary restrictions or preferences. Keep your menu fresh and exciting!`
        }
    ]

    const faqDatas = [
        {
            qus: `1. What is a bakery online ordering system?`,
            ans: `A bakery online ordering system is an online platform that allows customers to place online orders through a website or mobile app. It provides a convenient and efficient way for customers to browse bakery items, customise orders, and submit their orders online.`
        }, {
            qus: `2. How does a bakery's online ordering system work?`,
            ans: `When a customer accesses the bakery's online ordering system, they can view the bakery's menu, select their desired items, specify any customisations, and add them to their virtual cart. After completing the order and making a secure payment, the bakery receives the order details and prepares it accordingly. Customers can track the status of their orders and receive notification when it is ready for pickup.`
        },
        {
            qus: `3. What are the benefits of using a bakery ordering system?`,
            ans: `Using a bakery online ordering system offers several benefits, including:<p>
                  <ul>
                  <li type='circle'>Enhanced customer convenience and satisfaction.</li>
                  <li type='circle'>Streamlined order management and reduced errors.</li>
                  <li type='circle'>Efficient inventory control and stock management.</li>
                  <li type='circle'>Integration with loyalty programs to reward and retain customers.</li> 
                  <li type='circle'>Real-time order tracking and notifications for customers.</li>
                  </ul>
                  </p>`
        },
        {
            qus: `4. How can I implement a bakery online ordering system for my bakery?`,
            ans: `Implementing a bakery online ordering system involves the following steps:<p>
        <ul>
        <li type='circle'>Subscribe to POSApt’s online ordering system. </li>
        <li type='circle'>Customise your menu and item details, including descriptions and prices.</li>
        <li type='circle'>Configure order management processes, such as integration with your POS system or using a separate device to receive orders.</li>
        <li type='circle'>Enable secure online payment options to facilitate smooth transactions.</li>
        <li type='circle'>Market your online ordering system to attract customers and start receiving orders.</li>
        </ul>
        </p>`
        },
        {
            qus: `5. How much does it cost to implement a bakery online ordering system?`,
            ans: `The cost of implementing a bakery online ordering system can vary depending on factors such as the features, customization options, and the size of your bakery. Pricing models often involve a monthly subscription fee, which can range from $100 to $200. You can purchase POSApt’s bakery ordering system at just $119 per month.`
        },
    ];
    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "Bakery Online Ordering System",
        "description": "Bid farewell to long queues and outdated ordering processes! Our Bakery Online Ordering System brings your bakery into the digital age, offering a modern and convenient way for customers to place their orders. Streamline your operations, boost customer satisfaction, and take your bakery to new heights.",
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
            "name": "Bakery Online Ordering System",
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
            "name": "What is a bakery online ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A bakery online ordering system is an online platform that allows customers to place online orders through a website or mobile app. It provides a convenient and efficient way for customers to browse bakery items, customise orders, and submit their orders online."
            }
        }, {
            "@type": "Question",
            "name": "How does a bakery's online ordering system work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "When a customer accesses the bakery's online ordering system, they can view the bakery's menu, select their desired items, specify any customisations, and add them to their virtual cart. After completing the order and making a secure payment, the bakery receives the order details and prepares it accordingly. Customers can track the status of their orders and receive notification when it is ready for pickup."
            }
        }, {
            "@type": "Question",
            "name": "What are the benefits of using a bakery ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Using a bakery online ordering system offers several benefits, including:
                        Enhanced customer convenience and satisfaction.
                        Streamlined order management and reduced errors.
                        Efficient inventory control and stock management.
                        Integration with loyalty programs to reward and retain customers.
                        Real-time order tracking and notifications for customers.
                        `
            }
        }, {
            "@type": "Question",
            "name": "How can I implement a bakery online ordering system for my bakery?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Implementing a bakery online ordering system involves the following steps:
                        Subscribe to POSApt’s online ordering system. 
                        Customise your menu and item details, including descriptions and prices.
                        Configure order management processes, such as integration with your POS system or using a separate device to receive orders.
                        Enable secure online payment options to facilitate smooth transactions.
                        Market your online ordering system to attract customers and start receiving orders.
`
            }
        }
            , {
            "@type": "Question",
            "name": "How much does it cost to implement a bakery online ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `The cost of implementing a bakery online ordering system can vary depending on factors such as the features, customization options, and the size of your bakery. Pricing models often involve a monthly subscription fee, which can range from $100 to $200. You can purchase POSApt’s bakery ordering system at just $119 per month.`
            }
        }
        ]
    }

    return (
        <>
            <Head>
                <title>Bakery Online Ordering System for SMB Businesses</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content="Bakery Online Ordering System for SMB Businesses"
                />
                <meta
                    name="description"
                    content="Take your bakery store online with the best baker online ordering system across Australia. Order tracking, flexible payment, inventory management and more."
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
                    content="Bakery Online Ordering System for SMB Businesses"
                />
                <meta
                    property="og:description"
                    content="Take your bakery store online with the best baker online ordering system across Australia. Order tracking, flexible payment, inventory management and more."
                />
                <meta property="og:url" content="https://posapt.au/assets/dist/image/orderingSystem/bakery.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/bakery.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au/assets/dist/image/orderingSystem/bakery.webp"
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
                    content="Bakery Online Ordering System for SMB Businesses"
                />
                <meta
                    name="twitter:description"
                    content="Take your bakery store online with the best baker online ordering system across Australia. Order tracking, flexible payment, inventory management and more."
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/bakery.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system/bakery" />
            </Head>
            <Layout>
                <>
                    <ScrollToTop />
                    <HeroSection
                        tagline="Welcome to the Future of Ordering with Our"
                        title="Bakery Online Ordering System"
                        desc="Bid farewell to long queues and outdated ordering processes! Our Bakery Online Ordering System brings your bakery into the digital age, offering a modern and convenient way for customers to place their orders. Streamline your operations, boost customer satisfaction, and take your bakery to new heights."
                        imgUrl="/assets/dist/image/orderingSystem/bakery.webp"
                    />

                    <section className="pb-50 pt-50">
                        <div className=" text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="heading_s1 hs2 w-80 text-center">
                                        <h2 className=" fw-bold text-capitalize mb-5">
                                            Let's make your bakery the talk of the town,  <span className="d-block text-theme">one order at a time</span></h2>
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
                                            <h2 className=" fw-bold text-capitalize mb-5">More than Just Ordering:<span className="d-block text-theme">Enhancing the Bakery Experience</span> </h2>
                                        </div>
                                        {sectionData3.map((item, index) => (

                                            <div className="newitems">
                                                <span className="text-white fw-bold">{index + 1}</span>
                                                <p className="text-theme fw-bold">{item.title}</p>
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
                                        <img src="/assets/dist/image/orderingSystem/b9.webp" className="img-fluid h-100" alt="Bakery Online Ordering System" title="Bakery Online Ordering System" />
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
                                    <span className="sub_heading font_style1"><small>Take Your Bakery to the Next Level With Our</small>
                                    </span>
                                    <h2 className="fw-bold text-capitalize">Online Ordering System</h2>
                                </div>

                                <div className="subpara mt-3">

                                    <p className="text-center"><span style={{ fontWeight: 400 }}>We believe in the power of our online ordering system, and we want you to experience it firsthand. That's why we offer a 30-day free trial, allowing you to explore its features and benefits without any commitment. Try it out and see how it can transform your bakery operations.</span></p>

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
                                                <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
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

export default BakerySystem;