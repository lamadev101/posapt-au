import React from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import Head from 'next/head';
import Link from "next/link";
import MailAndCall from "@/Components/MailAndCall";
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection";

const OnlineOrderingSystem = () => {

    const managementSystemData = [
        {
            url: `/online-ordering-system/food-ordering`,
            image: `/assets/dist/image/orderingSystem/online_food_ordering.webp`,
            title: `Online Food Ordering System`,
            describe: `Manage and process all your food orders with one easy-to-use system.`
        }, {
            url: `/online-ordering-system/cafe-and-coffee-shop`,
            image: `/assets/dist/image/orderingSystem/coffee.webp`,
            title: `Coffee Shop Ordering System`,
            describe: `Time to take orders for your coffee shop from your online store.`
        }, {
            url: `/online-ordering-system/bakery`,
            image: `/assets/dist/image/orderingSystem/bakery.webp`,
            title: `Bakery Ordering System`,
            describe: `A complete ordering system for your bakery store to make it online.`
        },
        {
            url: `/online-ordering-system/qr-ordering`,
            image: `/assets/dist/image/orderingSystem/qr.webp`,
            title: `QR Ordering System`,
            describe: `Fast and efficient system to take orders and make payments with QR codes.`
        },
        {
            url: `/online-ordering-system/restaurant`,
            image: `/assets/dist/image/orderingSystem/restaurant_OOS.webp`,
            title: `Restaurant Online Ordering`,
            describe: `A robust online ordering system to manage all your restaurant orders.`
        },
        {
            url: `/online-ordering-system/table-ordering`,
            image: `/assets/dist/image/orderingSystem/table_ordering.webp`,
            title: `Table Ordering System`,
            describe: `Not only orders, it's time to manage table reservations with an integrated system.`
        },
        {
            url: `/online-ordering-system/b2b-ordering`,
            image: `/assets/dist/image/orderingSystem/B2B.webp`,
            title: `B2B Online Ordering System`,
            describe: `A Custom system designed especially for B2B businesses.`
        },
        {
            url: `/online-ordering-system/tablet-ordering`,
            image: `/assets/dist/image/orderingSystem/tablet.webp`,
            title: `Tablet Ordering System`,
            describe: `A tablet system that can manage and take orders with just a few clicks.`
        }

    ]
    const whyPosApt = [
        {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Better Inventory Managemen',
            describe: 'Our simple, precise and real-time inventory system keeps your business running smoothly. With accurate and up-to-date information about your inventory, you can make informed decisions to increase profitability and provide a better customer experience.'
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Safe & Secure Payment Methods',
            describe: 'Offer multiple payment options including PayPal, Google Pay, and Stripe through our Online Ordering System. This allows your customers to choose the most convenient payment method for them, increasing your sales and their happiness.'
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Get a FREE Custom Website',
            describe: 'We will design and build a custom website for you that is visually appealing, and fully functional. It will also allow your customers to purchase goods and services, all at no additional cost to you.'
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Direct Integration to POS',
            describe: 'Our Online Ordering System integrates seamlessly with our POS giving you access to all incoming orders from a single point-of-sale (POS) system to eliminate the need to switch between multiple applications for order and sales tracking.'
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Table Reservation',
            describe: `Don’t you agree that customers should be able to book a table for themselves or another party on your restaurant's website? Well, now you can with our Table Reservation feature. It allows them to pick their preferred date and time, and it also allows you to manage your bookings more effectively.`
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Supports Franchised Businesses',
            describe: 'Whether your business has multiple locations and outlets in cities far apart from each other, our online ordering system is capable of supporting all your franchised businesses. This allows businesses to streamline operations, improve efficiency, and provide a consistent customer experience across all locations.'
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Order Pending Reminders',
            describe: 'Tired of missing orders and angering your customers? No worries, now you won’t have any missed orders with our notification system. Receive notifications if any orders have not been processed or forgotten after a specified period of time.'
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: 'Affordable Online Ordering System',
            describe: 'POSApt Online Ordering System is a subscription-based online ordering system with no commission, no hidden fees, and no extra charges. So, you won’t have to pay high fees for getting your online orders managed.'
        }, {
            image: '/assets/dist/image/newImages/icon1.webp',
            title: '30 Days Free Trial',
            describe: 'Give our Online Ordering System a try to see your online sales go off the charts today. We’re giving out a 30-Day Free Trial so you know exactly what you’re getting before you subscribe to it.'
        }
    ]
    const faqDatas = [
        {
            qus: `1. How does an online ordering system work?`,
            ans: `The mechanism of how an online ordering system works is pretty straightforward. It allows businesses like yours to showcase their products and services and customers can place orders to either get them delivered or picked up. Your customers will be browsing through products via either a website or a mobile app. Once they place an order, you will get an instant notification on your admin app or email. To complete the order, your team will prepare the product as requested and send it via delivery service.`
        }, {
            qus: `2. How to set up an online ordering system?`,
            ans: `Setting up an online ordering system can vary depending on the provider, the type of your business and the complexity of the system. If it’s a very basic one, you might be able to set it up yourself following the guidelines provided by the service provider. However, if the system is complex, you might have to get a professional to set it up for you. At POSApt, we have partnered with a team of hardware professionals to set up the system at your business location.`
        },
        {
            qus: `3. What are the benefits of using an online ordering system?`,
            ans: `There are several benefits of using an order management system such as:
            <p>
            <ul class='ms-3'>
            <li type='circle'>Better inventory management</li>
            <li type='circle'>Faster and error-free transactions</li>
            <li type='circle'>Higher sales by reaching your online audience</li>
            <li type='circle'>Data tracking and analysis</li>
            <li type='circle'>Better customer engagement through discounts and loyalty programs </li>
            </ul>
            </p>
          
            `
        },
        {
            qus: `4. How much does it cost to implement an online ordering system?`,
            ans: `It can cost anywhere from $100 to $250 to implement an online ordering system in your business. However, POSApt’s online ordering system can be implemented at just $119 per month.`
        }
        ,
        {
            qus: `5. How can customers make payments?`,
            ans: `For the convenience of your customers, we have integrated various payment options including PayPal, Google Pay and Stripe. You can safely make online payments using credit/debit cards, digital wallets, or other available electronic payment methods.`
        },
        {
            qus: `6. Can someone modify or cancel their orders?`,
            ans: `Depending on the stage of the order, modifications or cancellations may be possible. However, if there’s no visible button to edit your order, customers will have to contact the business provider to modify or cancel their orders.`
        },
        {
            qus: `7. What if I encounter technical issues?`,
            ans: `If you experience any technical difficulties while using our Online Ordering System, please reach out to our technical support team via email or phone. They will promptly assist you in resolving any issues or answering your questions.`
        }
    ];
    const service =
    {
        "@context": "https://schema.org/",
        "@type": "Service",
        "serviceType": "POSApt Online Ordering System",
        "description": "From restaurants to retailers, from businesses to suppliers, POSApt empowers all types of businesses to effortlessly connect with their customers and simplify their ordering process. Embrace the future of online ordering with POSApt and let the fun begin!.",
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
            "name": "POSApt Online Ordering System",
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
                        "name": "119 AUD per month"
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
            "name": "How does an online ordering system work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The mechanism of how an online ordering system works is pretty straightforward. It allows businesses like yours to showcase their products and services and customers can place orders to either get them delivered or picked up. Your customers will be browsing through products via either a website or a mobile app. Once they place an order, you will get an instant notification on your admin app or email. To complete the order, your team will prepare the product as requested and send it via delivery service."
            }
        }, {
            "@type": "Question",
            "name": "How to set up an online ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Setting up an online ordering system can vary depending on the provider, the type of your business and the complexity of the system. If it’s a very basic one, you might be able to set it up yourself following the guidelines provided by the service provider. However, if the system is complex, you might have to get a professional to set it up for you. At POSApt, we have partnered with a team of hardware professionals to set up the system at your business location."
            }
        }, {
            "@type": "Question",
            "name": "What are the benefits of using an online ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": `There are several benefits of using an order management system such as:

       Better inventory management.
       Faster and error-free transactions.
       Higher sales by reaching your online audience.
       Data tracking and analysis.
       Better customer engagement through discounts and loyalty programs .
        `
            }
        }, {
            "@type": "Question",
            "name": " How much does it cost to implement an online ordering system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It can cost anywhere from $100 to $250 to implement an online ordering system in your business. However, POSApt’s online ordering system can be implemented at just $119 per month."
            }
        },
        {
            "@type": "Question",
            "name": "How can customers make payments?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For the convenience of your customers, we have integrated various payment options including PayPal, Google Pay and Stripe. You can safely make online payments using credit/debit cards, digital wallets, or other available electronic payment methods."
            }
        }, {
            "@type": "Question",
            "name": "Can someone modify or cancel their orders?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depending on the stage of the order, modifications or cancellations may be possible. However, if there’s no visible button to edit your order, customers will have to contact the business provider to modify or cancel their orders."
            }
        }, {
            "@type": "Question",
            "name": "What if I encounter technical issues?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you experience any technical difficulties while using our Online Ordering System, please reach out to our technical support team via email or phone. They will promptly assist you in resolving any issues or answering your questions."
            }
        }


        ]
    }

    return (
        <>
            <Head>
                <title>Online Ordering System | Order Management System</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content="Online Ordering System | Order Management System"
                />
                <meta
                    name="description"
                    content="Take orders directly from your website with POSApt’s online ordering system. Order management, table reservation, QR ordering, and more. Signup Now!"
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
                    content="Online Ordering System | Order Management System"
                />
                <meta
                    property="og:description"
                    content="Take orders directly from your website with POSApt’s online ordering system. Order management, table reservation, QR ordering, and more. Signup Now!"
                />
                <meta property="og:url" content="https://posapt.au/assets/dist/image/orderingSystem/online_order.webp" />
                <meta property="og:site_name" content="POSApt Australia" />
                <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
                <meta
                    property="og:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/online_order.webp"
                />
                <meta
                    property="og:image:secure_url"
                    content="https://posapt.au/assets/dist/image/orderingSystem/online_order.webp"
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
                    content="Online Ordering System | Order Management System"
                />
                <meta
                    name="twitter:description"
                    content="Take orders directly from your website with POSApt’s online ordering system. Order management, table reservation, QR ordering, and more. Signup Now!"
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/orderingSystem/online_order.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/online-ordering-system" />
            </Head>

            <Layout>
                <ScrollToTop />
                <PosSysHeroSection
                    tagline="Seamless ordering, superior convenience"
                    title="POSApt Online Ordering System"
                    desc="From restaurants to retailers, from businesses to suppliers, POSApt empowers all types of businesses to effortlessly connect with their customers and simplify their ordering process. Embrace the future of online ordering with POSApt and let the fun begin!"
                    imgUrl="/assets/dist/image/orderingSystem/online_order.webp"
                />

                {/* <!-- what is oos --> */}
                <section className="pb-50 pt-50">
                    <div className="keyfeatures text-center">
                        <div className="container">
                            <div className="row">
                                <div className="heading_s1 hs2 w-80">
                                    <h2 className=" fw-bold text-capitalize">What is an <span className="d-block text-theme">Online Ordering System?</span></h2>
                                    <p className="text-center">An online ordering system (OOS) is a digital platform that allows business owners to take orders through a website or mobile application. It provides an easy and efficient way for customers to search for products or services provided by the business. Services across industries, such as restaurants, retailers and service providers, use this system to process online orders with ease.
                                    </p>

                                </div>
                            </div>

                            <div className="row g-4">

                                {
                                    managementSystemData.map((item, index) => (
                                        <div className="col-md-3">
                                            <Link href={item.url}>
                                                <div className="card card-oos">
                                                    <div className="card-body">
                                                        <div className="position-relative">
                                                            <div className="oos_img">
                                                                <img src={item.image} alt={item.title} title={item.title} className="mb-3 img-fluid " />
                                                            </div>
                                                            <Link href={item.url} className="fs-6">{item.title}</Link>
                                                            <p className="text-center mt-3">{item.describe}
                                                            </p>
                                                            <div>
                                                                <Link href={item.url} className="btn btn-raised btntheme my-button w-xs  me-2 homecart  mt-auto align-self-start">More Details</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- why choose us --> */}
                <section>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">

                            <div className="col-md-12">
                                <div className="row text-center">
                                    <div className="heading_s1 hs2">
                                        {/* <!-- <span className="sub_heading font_style1">Point of Sale</span> --> */}
                                        <h2 className=" fw-bold text-capitalize"> Why Choose POSApt’s <span className="d-block text-theme">Online Ordering System?</span>

                                        </h2>
                                    </div>
                                </div>
                                <div className="subpara mt-3 productcard">
                                    <div className="row">

                                        {whyPosApt.map((item, index) => (
                                            <div className="col-md-4">
                                                <h3 className="">
                                                    <img src={item.image} className="img-fluid" title={item.title} alt={item.title} />
                                                    {item.title}
                                                </h3>
                                                <p>{item.describe}</p>
                                            </div>

                                        ))
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


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
            </Layout>
        </>
    );
}

export default OnlineOrderingSystem;