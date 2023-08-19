import React, { FC } from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import OosPricingSection from "@/sections/OosPricingSection";

const TableOrdering: FC = () => {
    const dispatch = useDispatch();
    const sectionData2 = [
        {
            title: `Scan and Order`,
            describe: `Our Table Ordering System utilizes QRs placed on each table, allowing customers to scan and access the digital menu effortlessly. Allow your customers to browse through an extensive range of dishes and place orders with ease!`
        },
        {
            title: `Real-Time Updates`,
            describe: `Don’t let your customers keep wondering about the status of their orders. Our system provides real-time updates of each order, ensuring transparency and keeping customers informed every step of the way!.`
        },
        {
            title: `Customized Preferences`,
            describe: `We understand that everyone has different dietary preferences and restrictions. Whether your customers require vegan alternatives or specific ingredient exclusions, our system allows order customization to meet specific requirements.`
        },
        {
            title: `Seamless Payment Options`,
            describe: `Customers can now settle bills directly from their tables thanks to POSApt’s Table Side Ordering System. With our innovative system, your customers can now split the payment with their friends, add a tip, and complete the transaction securely and effortlessly.`
        },
        {
            title: `Efficient Customer Support`,
            describe: `Table Ordering provides efficient customer support to address queries or concerns that you may have. Whether it's a special request, clarification on menu items, or any other assistance, our dedicated support team is just a click away.`
        },
        {
            title: `Free Custom Website`,
            describe: `With a subscription to our Online Ordering System, we design and develop an appealing and custom website for your business.`
        }
    ];

    const sectionData3 = [
        {
            title: `Seamless Integration`,
            describe: `The system seamlessly integrates with your existing restaurant management system. Effortlessly sync your digital menu, order processing, and inventory management for a unified and efficient dining experience. Say goodbye to manual data entry and embrace a streamlined operation.`
        },
        {
            title: `Insights and Analytics`,
            describe: `Leverage the power of data to gain valuable insights into your customers' ordering patterns and preferences. The system provides comprehensive analytics and reporting tools that help in making data-driven decisions based on customer preferences.`
        },
        {
            title: `Secure and Reliable Solution`,
            describe: `Rest assured that personal information and payment details are secure with our online Ordering System. We prioritize data security and implement robust measures to protect your customer’s sensitive information.`
        }
    ]

    const faqDatas = [
        {
            qus: `1.  What is a table ordering system?`,
            ans: `A table ordering system is a digital platform that allows customers to place orders or book tables from anywhere. It aims at providing a seamless and efficient ordering experience for diners.`
        }, {
            qus: `2. How does a table ordering system work?`,
            ans: `It starts with signing up on the business’s custom website provided by POSApt. Once customers are signed up they can place orders of their favourite items directly from the website. Moreover, all the orders will be notified to the owner so that they can process ahead.`
        },
        {
            qus: `3. What are the benefits of using a table ordering system?`,
            ans: `Some benefits of using a table side ordering system include:<p>
<ul class='ms-3'>

<li type='circle'>Streamlined ordering</li>
<li type='circle'>Personalised preferences</li>
<li type='circle'>Convenient payment options</li>
<li type='circle'>Order history and favourites</li>
<li type='circle'>Efficient customer support</li>
</ul>
</p>`
        },
        {
            qus: `4. Can a table ordering system integrate with existing restaurant management systems?`,
            ans: `Yes, our system can integrate with various restaurant management systems, including point-of-sale (POS) systems and inventory management systems. This integration ensures seamless synchronization of menus, orders, and data, enhancing operational efficiency and accuracy.`
        }, {
            qus: `5. How much does it cost to implement a table-side ordering system?`,
            ans: `The cost may vary based on user requirements. But at POSApt, you can get it at just $119 per month.`
        }
    ];
    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "Table Ordering System Australia",
        "description": "Welcome to our Table Ordering System, a game-changing solution that transforms people’s dining experience as known before. With our intuitive system, your valuable customers will no more have to wait in lines or struggle to grab your attention. With POSApt, placing orders becomes effortless, ensuring a hassle-free and enjoyable dining experience for all your guests.",
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
            "name": "Table Ordering System",
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
            "name": "What is a table ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A table ordering system is a digital platform that allows customers to place orders or book tables from anywhere. It aims at providing a seamless and efficient ordering experience for diners."
            }
        }, {
            "@type": "Question",
            "name": "How does a table ordering system work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It starts with signing up on the business’s custom website provided by POSApt. Once customers are signed up they can place orders of their favourite items directly from the website. Moreover, all the orders will be notified to the owner so that they can process ahead."
            }
        }, {
            "@type": "Question",
            "name": "What are the benefits of using a table ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `Some benefits of using a table-side ordering system include:
            ·  Streamlined ordering
            ·  Personalised preferences
            ·  Convenient payment options
            ·  Order history and favourites
            ·  Efficient customer support`
            }
        }, {
            "@type": "Question",
            "name": "Can a table ordering system integrate with existing restaurant management systems?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our system can integrate with various restaurant management systems, including point-of-sale (POS) systems and inventory management systems. This integration ensures seamless synchronization of menus, orders, and data, enhancing operational efficiency and accuracy."
            }
        }, {
            "@type": "Question",
            "name": "How much does it cost to implement a table-side ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost may vary based on user requirements. But at POSApt, you can get it at just $119 per month."
            }
        }
        ]
    }

    return (
        <>
            <Head>
                <title> Table Ordering System | Table Reservation System</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content=" Table Ordering System | Table Reservation System"
                />
                <meta
                    name="description"
                    content="Online table ordering system by POSApt will transform your traditional table reservation process. Order online, reserve a table, easy payments, and more."
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
                    content=" Table Ordering System | Table Reservation System"
                />
                <meta
                    property="og:description"
                    content="Online table ordering system by POSApt will transform your traditional table reservation process. Order online, reserve a table, easy payments, and more."
                />
                <meta property="og:url" content="https://posapt.au/assets/dist/image/orderingSystem/table_ordering.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/table_ordering.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au/assets/dist/image/orderingSystem/table_ordering.webp"
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
                    content=" Table Ordering System | Table Reservation System"
                />
                <meta
                    name="twitter:description"
                    content="Online table ordering system by POSApt will transform your traditional table reservation process. Order online, reserve a table, easy payments, and more."
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/table_ordering.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system/table-ordering" />
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
                                            <span className="sub_heading font_style1"><small>Transform the Way Your Customers Dine with our</small>
                                            </span>
                                            <h1 className=" fw-bold text-capitalize">Table Ordering System Australia</h1>
                                        </div>
                                    </div>
                                    <div className="subpara mt-3">

                                        <p className="text-center"><span style={{ fontWeight: 400 }}>Welcome to our Table Ordering System, a game-changing solution that transforms people’s dining experience as known before. With our intuitive system, your valuable customers will no more have to wait in lines or struggle to grab your attention.</span></p>

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
                                        <img src="/assets/dist/image/orderingSystem/table_ordering.webp" className="img-fluid" alt="Table Ordering System" title="Table Ordering System" />
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
                                        <h2 className="fw-bold text-capitalize">Effortless Ordering Made Simple</h2>
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
                                <div className="col-md-6 m-auto order-1 order-md-2 ">
                                    <div className="orderimg mt-3 mt-lg-0">
                                        <img src="/assets/dist/image/orderingSystem/t2.webp" className="img-fluid h-100" alt="Table Ordering System" title="Table Ordering System" />
                                    </div>
                                </div>
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="new-list ">
                                        <div className="heading_s1 hs2 w-80 text-start">
                                            <h2 className=" fw-bold text-capitalize mb-5">
                                                Experience the Power of
                                                <span className="d-block text-theme"> Our Table Ordering System </span>
                                            </h2>
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
                                    <h5 className="bg-warning mt-4 p-2">Don’t have a website?
                                        <span>
                                            No Problem. We’ll build you a Custom Website for absolutely FREE.
                                        </span>
                                    </h5>
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
                                        <small>Get Started Today with
                                            <h2 className="fw-bold text-capitalize">POSApt’s Table Ordering System</h2>
                                        </small>
                                    </span>
                                </div>

                                <div className="subpara mt-3">

                                    <p className="text-center"><span style={{ fontWeight: 400 }}>Elevate your customer’s dining experience with POSApt. Whether you own a restaurant, café, or bar, our platform is designed to enhance efficiency, convenience, and customer satisfaction.</span></p>

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

export default TableOrdering;