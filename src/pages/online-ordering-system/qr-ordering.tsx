import React, { FC } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import { Antic_Slab } from "next/font/google";
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import OosPricingSection from "@/sections/OosPricingSection";

const QROrdering: FC = () => {
    const dispatch = useDispatch();
    const sectionData2 = [
        {
            title: `1. New-Gen Order Management`,
            describe: `Give your customers the experience of next-gen ordering techniques with our QR-code powered ordering system. All your customers have to do is scan the QR placed on their table and order up their favourite meals, right from their smartphone.`
        },
        {
            title: `2. Less in-person Contacts`,
            describe: `With the option to self-serve via their smartphones, you limit the amount of in-person contact. This can prove to bring health benefits in times such as a pandemic. Also means you don’t have to employ as many waitstaff, saving you a bit of money.`
        },
        {
            title: `3. Improved Efficiency`,
            describe: `Once your customers start using smartphones to send their orders, the chances that you run into mistake is highly unlikely. Less human errors and thanks to this, the efficiency of your business skyrockets.`
        },
        {
            title: `4. Flexible and Customisable Menu`,
            describe: `With our QR Ordering System, you can easily manage and customise your menu items, modifiers, and pricing, unlike a printout. This flexibility ensures accuracy and caters to the unique preferences of each order and to the ever-changing cultures.`
        },
        {
            title: `5. Secure and Seamless Payment Processing`,
            describe: `POSApt offers multiple secure payment processing options for your customers. Whether it's cash, credit card payments, or other popular payment methods, our system ensures a seamless and secure checkout experience.`
        },
        {
            title: `6. Actionable Analytics and Reporting`,
            describe: `Stay on top of your business’s performance with our system's robust analytics and reporting features. Gain valuable insights into business transactions, sales numbers, and trends, allowing you to make data-driven decisions to drive your business towards success.`
        }
    ];

    const sectionData3 = [
        {
            title: `Dine-In`,
            describe: `Transform dining or shopping in your establishment into a luxurious experience with our QR Ordering System. Take orders more efficiently, eliminate errors, and make smarter choices with real-time sales tracking.`
        },
        {
            title: `Takeaway`,
            describe: `Allow your customers to order their favourite items from anywhere they like and conveniently pick them up at your counter. Whether they choose to order in advance or upon arrival, our system ensures a seamless takeaway experience.`
        },
        {
            title: `Delivery`,
            describe: `Expand your services by offering delivery options to your customers. If you don't have a delivery system in place, simply integrate a third-party delivery service with POSApt.`
        }
    ];

    const faqDatas = [
        {
            qus: `What is a QR Code Ordering System?`,
            ans: `A QR Ordering System is an online platform that enables customers, typically a diner, to scan a QR code and browse through available menu items, select food and drinks, and place orders directly from their own smartphones. The staff then receives the order, prepares the items, and completes the order process.`
        }, {
            qus: `Can I customise my orders through the QR Ordering System?`,
            ans: `Yes, most QR Ordering Systems, including POSApt, allow users to customise their orders based on preferences. Users can add or remove items, select available options, choose portion sizes, or make specific requests.`
        },
        {
            qus: `How long does it take to receive the food after placing an order through the QR Ordering System?`,
            ans: `As soon as the order has been placed from a customer via their smartphone, the order is received by the staff. The approx. time is around 20-40 minutes depending upon the number of orders and available kitchen staffs.`
        },
        {
            qus: `Can I track the status of my order through the QR Ordering System?`,
            ans: `Yes, POSApt's QR Ordering System offers order tracking features to keep users informed about the status of their orders. Users can track their orders in real-time, from the moment the order is confirmed to when it is being prepared, out for delivery, or ready for pickup.`
        },
        {
            qus: `How much does it cost to implement a QR Code Ordering System?`,
            ans: `Depending upon the various features and service providers, it might cost you around $100 to $200 per month. At POSApt, you can get it at just $119 per month.`
        },
    ];

    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "QR Ordering System",
        "description": "Make your customers have a personal look into your restaurant's food items with POSApt’s QR code ordering system. It is just the tip of the iceberg of the possibilities a QR can bring to businesses. Let’s explore!.",
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
            "name": "QR Ordering System",
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
            "name": "What is a QR Code Ordering System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A QR Ordering System is an online platform that enables customers, typically a diner, to scan a QR code and browse through available menu items, select food and drinks, and place orders directly from their own smartphones. The staff then receives the order, prepares the items, and completes the order process."
            }
        }, {
            "@type": "Question",
            "name": "Can I customise my orders through the QR Ordering System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, most QR Ordering Systems, including POSApt, allow users to customise their orders based on preferences. Users can add or remove items, select available options, choose portion sizes, or make specific requests."
            }
        }, {
            "@type": "Question",
            "name": "How long does it take to receive the food after placing an order through the QR Ordering System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `As soon as the order has been placed from a customer via their smartphone, the order is received by the staff. The approx. time is around 20-40 minutes depending upon the number of orders and available kitchen staffs.`
            }
        }, {
            "@type": "Question",
            "name": "Can I track the status of my order through the QR Ordering System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, POSApt's QR Ordering System offers order tracking features to keep users informed about the status of their orders. Users can track their orders in real-time, from the moment the order is confirmed to when it is being prepared, out for delivery, or ready for pickup."
            }
        }, {
            "@type": "Question",
            "name": "How much does it cost to implement a QR Code Ordering System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depending upon the various features and service providers, it might cost you around $100 to $200 per month. At POSApt, you can get it at just $119 per month."
            }
        }
        ]
    }

    return (
        <>
            <Head>
                <title>QR Code Ordering System for Australian Businesses</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content="QR Code Ordering System for Australian Businesses"
                />
                <meta
                    name="description"
                    content="Automate your daily orders with the best QR code ordering system across Australia. Take orders, book tables, and pay directly with POSApt. Book a Demo!"
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
                    content="QR Code Ordering System for Australian Businesses"
                />
                <meta
                    property="og:description"
                    content="Automate your daily orders with the best QR code ordering system across Australia. Take orders, book tables, and pay directly with POSApt. Book a Demo!"
                />
                <meta property="og:url" content="https://posapt.au/assets/dist/image/orderingSystem/qr.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/qr.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au/assets/dist/image/orderingSystem/qr.webp"
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
                    content="QR Code Ordering System for Australian Businesses"
                />
                <meta
                    name="twitter:description"
                    content="Automate your daily orders with the best QR code ordering system across Australia. Take orders, book tables, and pay directly with POSApt. Book a Demo!"
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/qr.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system/qr-ordering" />
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
                                            <span className="sub_heading font_style1"><small>Simple Yet Revolutionary</small>
                                            </span>
                                            <h1 className=" fw-bold text-capitalize">QR Ordering System</h1>
                                        </div>
                                    </div>
                                    <div className="subpara mt-3">

                                        <p className="text-center"><span style={{ fontWeight: 400 }}>Make your customers have a personal look into your restaurant's food items with POSApt’s QR code ordering system. It is just the tip of the iceberg of the possibilities a QR can bring to businesses. Let’s explore!</span></p>

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
                                        <img src="/assets/dist/image/orderingSystem/qr.webp" className="img-fluid" alt="QR Ordering Online System" title="QR Ordering Online System" />
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
                                        <h2 className="fw-bold text-capitalize">Explore the possibilities of QR
                                            <span className="d-block text-theme">
                                                In a business like yours.
                                            </span></h2>
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
                                                More than Just Ordering: <span className="d-block text-theme">Enhancing the Coffee Shop Experience </span></h2>
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
                                        <img src="/assets/dist/image/orderingSystem/qr4.webp" className="img-fluid h-100" alt="QR Ordering System" title="QR Ordering System" />
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
                                        <small>Start Accepting Online Orders Today!</small>
                                    </span>
                                </div>
                                <div className="subpara mt-3">
                                    <p className="text-center">
                                        <span style={{ fontWeight: 400 }}>
                                            Ready to receive orders through your website? Start your journey with our 30-day free trial, no commitments are required. Witness the difference for yourself and explore the capabilities of POSApt's QR Ordering System today!
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

export default QROrdering;