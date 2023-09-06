import React from "react";
import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';
import Link from "next/link";
import MailAndCall from "@/Components/MailAndCall";
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection";

const OnlineOrderingSystem = () => {
    const dispatch = useDispatch();

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
                {/* about us */}
                <section className=" pt-1 pt-md-5 pb-50 bg-home">
                    <div className="container  text-center">
                        <div className="row ">
                            <div className="col-md-7 d-flex align-items-center justify-content-start ">
                                <div className="heading_s1">
                                    <h1 className=" fs-61 text-white">
                                        Sell More
                                        <br /> with POSApt's
                                        <br /> Online Ordering System
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-5 ">
                                <div className="">
                                    <img
                                        src="assets/dist/image/online_order.webp"
                                        className="img-fluid "
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="subpara ">
                                    <p className="text-center fs-47 text-white">
                                        <span style={{ fontWeight: 400 }}>
                                            Connect with your customers online and simplify the ordering
                                            process.
                                        </span>
                                    </p>
                                    <div className="text-center newhome_btn">
                                        <a className="btn btn-white btn-red fs-6" href="#">
                                            Sign Up for Free Trial !
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="">
                                    <div className="heading_s1">
                                        <h2 className=" fw-bold text-capitalize text-dark">
                                            Simplified Online Sales
                                        </h2>
                                    </div>
                                    <ul className="newposlist text-dark fw-bold pt-4 fs-5">
                                        <li>
                                            <svg
                                                className="me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#00205b"
                                                height="24px"
                                                width="24px"
                                                version="1.1"
                                                id="Capa_1"
                                                viewBox="0 0 27.855 27.855"
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                                                    <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                </g>
                                            </svg>
                                            Free Consultation
                                        </li>
                                        <li>
                                            <svg
                                                className="me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#00205b"
                                                height="24px"
                                                width="24px"
                                                version="1.1"
                                                id="Capa_1"
                                                viewBox="0 0 27.855 27.855"
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                                                    <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                </g>
                                            </svg>
                                            Custom Website and Maintenance
                                        </li>
                                        <li>
                                            <svg
                                                className="me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#00205b"
                                                height="24px"
                                                width="24px"
                                                version="1.1"
                                                id="Capa_1"
                                                viewBox="0 0 27.855 27.855"
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                                                    <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                </g>
                                            </svg>
                                            Products Upload Included
                                        </li>
                                        <li>
                                            <svg
                                                className="me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#00205b"
                                                height="24px"
                                                width="24px"
                                                version="1.1"
                                                id="Capa_1"
                                                viewBox="0 0 27.855 27.855"
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                                                    <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                </g>
                                            </svg>
                                            Set Up, User Training Included
                                        </li>
                                        <li>
                                            <svg
                                                className="me-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                fill="#00205b"
                                                height="24px"
                                                width="24px"
                                                version="1.1"
                                                id="Capa_1"
                                                viewBox="0 0 27.855 27.855"
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                                                    <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                    <g></g>
                                                </g>
                                            </svg>
                                            Friendly Customer Services
                                        </li>
                                    </ul>
                                    <p className="fs-5 mt-2 mt-md-5">
                                        Elevate your business with POSApt Online Ordering. Seamlessly
                                        integrated with our POS system, it simplifies in-store and online
                                        sales. Streamline inventory, orders, and product info across all
                                        channels, saving time and boosting efficiency. Choose smarter
                                        business management today.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 text-end">
                                <div className="homeimg_right">
                                    <img
                                        src="assets/dist/image/6.png"
                                        alt=""
                                        className="img-fluid w-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-50 pb-50 customer_section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 ">
                                <div className="customer_img">
                                    <img
                                        src="assets/dist/image/7.png"
                                        className="img-fluid rounded-3 w-100"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="heading_s1">
                                    <h2 className=" fw-bold text-capitalize text-dark">
                                        Experience the Tailored Functions Developed Exclusively for Your
                                        Benefit.
                                    </h2>
                                    <p className="fs-5">
                                        POSApt Online Order is perfect for small retail shops and
                                        hospitality businesses. With just a phone or tablet, you can
                                        manage your online store effortlessly and boost sales. Whether you
                                        run a restaurant, cafe, or bakery you can quickly start online
                                        orders with our system. We handle the setup, and you can easily
                                        customize your store with niche-specific tools. Enjoy a tailored
                                        website that matches your preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" pt-50 pb-50">
                    <div className="container">
                        <div className="row text-center">
                            <div className="heading_s1">
                                <h2 className=" fw-bold text-capitalize text-dark">
                                    Online Ordering Features
                                </h2>
                                <p className="fs-5 text-center">
                                    An online ordering system (OOS) is a digital platform that allows
                                    business owners to take orders through a website or mobile
                                    application. It provides an easy and efficient way for customers to
                                    search for products or services provided by the business. Services
                                    across industries, such as restaurants, retailers and service
                                    providers, use this system to process online orders easily.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                                    <div className="card-body ">
                                        {/* badge */}
                                        <div className=" position-relative ">
                                            {/* img */}
                                            <div className="oos_img1">
                                                <img
                                                    src="assets/dist/image/oos1.png"
                                                    alt=" "
                                                    className="mb-3 w-100 img-fluid "
                                                />
                                            </div>
                                            {/* heading */}
                                            <h4 className="fw-bold text-theme fs-20 ">
                                                Accurate Order Management
                                            </h4>
                                            <p className="fs-5">
                                                Streamline the ordering process, reduce manual errors and
                                                minimise customer wait times with POSApt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                                    <div className="card-body ">
                                        {/* badge */}
                                        <div className=" position-relative ">
                                            {/* img */}
                                            <div className="oos_img1">
                                                <img
                                                    src="assets/dist/image/oos2.png"
                                                    alt=" "
                                                    className="mb-3 w-100 img-fluid "
                                                />
                                            </div>
                                            {/* heading */}
                                            <h4 className="fw-bold text-theme fs-20 ">Table Reservation</h4>
                                            <p className="fs-5">
                                                POSApt allows customers to pick their preferred date and time,
                                                and business can manage bookings more effectively.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                                    <div className="card-body ">
                                        {/* badge */}
                                        <div className=" position-relative ">
                                            {/* img */}
                                            <div className="oos_img1">
                                                <img
                                                    src="assets/dist/image/oos3.png"
                                                    alt=" "
                                                    className="mb-3 w-100 img-fluid "
                                                />
                                            </div>
                                            {/* heading */}
                                            <h4 className="fw-bold text-theme fs-20 ">
                                                Direct Integration to POS
                                            </h4>
                                            <p className="fs-5">
                                                Seamlessly integrate with our POS to eliminate the need to
                                                switch between apps for order and sales tracking.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                                    <div className="card-body ">
                                        {/* badge */}
                                        <div className=" position-relative ">
                                            {/* img */}
                                            <div className="oos_img1">
                                                <img
                                                    src="assets/dist/image/oos4.png"
                                                    alt=" "
                                                    className="mb-3 w-100 img-fluid "
                                                />
                                            </div>
                                            {/* heading */}
                                            <h4 className="fw-bold text-theme fs-20 ">
                                                Better Inventory Management
                                            </h4>
                                            <p className="fs-5">
                                                Accurately know what's in your inventory at all times and make
                                                restocking decisions accordingly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                                    <div className="card-body ">
                                        {/* badge */}
                                        <div className=" position-relative ">
                                            {/* img */}
                                            <div className="oos_img1">
                                                <img
                                                    src="assets/dist/image/oos5.png"
                                                    alt=" "
                                                    className="mb-3 w-100 img-fluid "
                                                />
                                            </div>
                                            {/* heading */}
                                            <h4 className="fw-bold text-theme fs-20 ">
                                                Franchised Business Support
                                            </h4>
                                            <p className="fs-5">
                                                Our Ordering System has the power to support businesses with
                                                multiple store locations with a single app.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                                    <div className="card-body ">
                                        {/* badge */}
                                        <div className=" position-relative ">
                                            {/* img */}
                                            <div className="oos_img1">
                                                <img
                                                    src="assets/dist/image/oos6.png"
                                                    alt=" "
                                                    className="mb-3 w-100 img-fluid "
                                                />
                                            </div>
                                            {/* heading */}
                                            <h4 className="fw-bold text-theme fs-20 ">
                                                Easier &amp; Secure Payments
                                            </h4>
                                            <p className="fs-5">
                                                Give you customers the luxury to choose their own payment
                                                method via Credit Cards, Debit Cards or Loyalty Points.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="ourservices topservices bg-overlay-black-90  pt-50 pb-50 position-relative "
                    style={{
                        background: "url(assets/dist/image/image3.png)",
                        backgroundPosition: "top center",
                        backgroundSize: "cover",
                        zIndex: 1
                    }}
                >
                    <div className="container">
                        <div className="services_card">
                            <div className="row text-center">
                                <div className="heading_s1">
                                    <h2 className=" fw-bold text-capitalize text-white">
                                        Find the Best Online Ordering for Your Business
                                    </h2>
                                    <p className="text-white fs-5 w-80">
                                        We're committed to improving daily business operations and
                                        lightening the load for owners. Discover our exclusive, tailored
                                        functions for your benefit.
                                    </p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/oos7.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">QR Ordering System</h4>
                                                <p className="fs-5 text-white">
                                                    Our simple, precise and real-time inventory system keeps
                                                    your business running smoothly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/oos10.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">
                                                    Coffee Shop, Cafe Ordering System
                                                </h4>
                                                <p className="fs-5 text-white">
                                                    Time to take orders for your coffee shop from your online
                                                    store.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/oos9.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">
                                                    Restraurant Online Ordering
                                                </h4>
                                                <p className="fs-5 text-white">
                                                    A robust online ordering system to manage all your
                                                    restaurant orders.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/oos8.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">
                                                    Online Food Ordering System
                                                </h4>
                                                <p className="fs-5 text-white">
                                                    Manage and process all your food orders with one easy-to-use
                                                    system.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/oos11.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">
                                                    Bakery Online Ordering System
                                                </h4>
                                                <p className="fs-5 text-white">
                                                    A complete ordering system for your bakery store to make it
                                                    online.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/oos13.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">Table Ordering System</h4>
                                                <p className="fs-5 text-white">
                                                    Not only orders, it's time to manage table reservations with
                                                    an integrated system.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/oos14.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">Tablet Ordering System</h4>
                                                <p className="fs-5 text-white">
                                                    A tablet system that can manage and take orders with just a
                                                    few clicks.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 pb-3">
                                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                                        <div className="card-body ">
                                            {/* badge */}
                                            <div className=" position-relative ">
                                                {/* img */}
                                                <div className="oos_img1">
                                                    <img
                                                        src="assets/dist/image/b2b.png"
                                                        alt=" "
                                                        className="mb-3 img-fluid w-100 "
                                                    />
                                                </div>
                                                {/* heading */}
                                                <h4 className="fw-bold text-white">B2B Ordering System</h4>
                                                <p className="fs-5 text-white">
                                                    A Custom system designed especially for B2B businesses.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div class="container-fluid">
      <img src="https://images.ctfassets.net/2d5q1td6cyxq/5YjIscSBApfmtZxBer3R2A/9a41fcd0716db506e91237eca6a00dea/PD03417_-_M_USEN_Ecommerce_software_frames.png?w=4000&h=1821&fm=avif&q=85&fit=scale" class="img-fluid" alt="">
  </div> */}
                {/* <section class=" pb-50 pt-50">
      <div class="container">
          <div class="row text-center">
              <div class="heading_s1">

                  <h2 class=" fw-bold text-capitalize text-dark">Why Choose POSApt’s <br> Online Ordering System?</h2>

              </div>
          </div>
          <div class="row g-4">
              <div class="col-md-4">
                  <div class="card h-100 shadow border-0 rounded p-4">
                      <div class="card-body">
                          <div class="feature-info-icon d-flex mb-3">
                              <i class="far fa-check-square"></i>
                              <h4 class="fw-bold text-theme ms-4 mb-0 ">Better Inventory Management
                              </h4>
                          </div>
                          <div class="feature-info-content">
                              <p class="mb-0">Our simple, precise and real-time inventory system keeps your business running smoothly. With accurate and up-to-date information about your inventory, you can make informed decisions to increase profitability and provide
                                  a better customer experience.</p>

                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card h-100 shadow border-0 rounded p-4">
                      <div class="card-body">
                          <div class="feature-info-icon d-flex mb-3">
                              <i class="far fa-check-square"></i>
                              <h4 class="fw-bold text-theme ms-4 mb-0 ">Safe & Secure Payment Methods
                              </h4>
                          </div>
                          <div class="feature-info-content">
                              <p class="mb-0">Offer multiple payment options including PayPal, Google Pay, and Stripe through our Online Ordering System. This allows your customers to choose the most convenient payment method for them, increasing your sales and
                                  their happiness.</p>

                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card h-100 shadow border-0 rounded p-4">
                      <div class="card-body">
                          <div class="feature-info-icon d-flex mb-3">
                              <i class="far fa-check-square"></i>
                              <h4 class="fw-bold text-theme ms-4 mb-0 ">Custom Website Inclusive
                              </h4>
                          </div>
                          <div class="feature-info-content">
                              <p class="mb-0">We will design and build a custom website for you that is visually appealing, and fully functional. It will also allow your customers to purchase goods and services, all at no additional cost to you.</p>

                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card h-100 shadow border-0 rounded p-4">
                      <div class="card-body">
                          <div class="feature-info-icon d-flex mb-3">
                              <i class="far fa-check-square"></i>
                              <h4 class="fw-bold text-theme ms-4 mb-0 ">Direct Integration to POS
                              </h4>
                          </div>
                          <div class="feature-info-content">
                              <p class="mb-0">Our Online Ordering System integrates seamlessly with our POS giving you access to all incoming orders from a single point-of-sale (POS) system to eliminate the need to switch between multiple applications for order
                                  and sales tracking.</p>

                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card h-100 shadow border-0 rounded p-4">
                      <div class="card-body">
                          <div class="feature-info-icon d-flex mb-3">
                              <i class="far fa-check-square"></i>
                              <h4 class="fw-bold text-theme ms-4 mb-0 ">Table Reservation
                              </h4>
                          </div>
                          <div class="feature-info-content">
                              <p class="mb-0">Don’t you agree that customers should be able to book a table for themselves or another party on your restaurant's website? Well, now you can with our Table Reservation feature. It allows them to pick their preferred
                                  date and time, and it also allows you to manage your bookings more effectively.</p>

                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card h-100 shadow border-0 rounded p-4">
                      <div class="card-body">
                          <div class="feature-info-icon d-flex mb-3">
                              <i class="far fa-check-square"></i>
                              <h4 class="fw-bold text-theme ms-4 mb-0 ">Order Pending Reminders
                              </h4>
                          </div>
                          <div class="feature-info-content">
                              <p class="mb-0">Tired of missing orders and angering your customers? No worries, now you won’t have any missed orders with our notification system. Receive notifications if any orders have not been processed or forgotten after a specified
                                  period of time.</p>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> */}
                <section className="pt-50 customer_section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="heading_s1">
                                    <h2 className=" fw-bold text-capitalize text-dark">
                                        Customer Support is Our 1st Priority
                                    </h2>
                                    <p className="fs-5">
                                        No matter what type of issue you run into, we’re always ready to
                                        help you out. Simply give us a call or leave us a message and
                                        we’ll get an expert connected to get your issue resolved as soon
                                        as possible.{" "}
                                    </p>
                                    <div className="subpara mt-3">
                                        <ul>
                                            <li className="fw-bold">
                                                <a>Technical issues that may arise</a>
                                            </li>
                                            <li className="fw-bold">
                                                <a>For any queries, you might have </a>
                                            </li>
                                            <li className="fw-bold">
                                                <a>For confusion on how to use the system</a>
                                            </li>
                                        </ul>
                                        {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="customer_img">
                                    <img
                                        src="assets/dist/image/ser.png"
                                        className="img-fluid rounded-3 w-100"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* new restro */}
                {/* faq */}
                <section className=" py-5  faqsec mt-5 bg-light ">
                    <div className="container">
                        <div className="row py-2 py-md-4 py-lg-5">
                            <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                                <div className="card cardbg py-4 border-0 shadow h-100">
                                    <div className="card-body">
                                        <h3 className="pb-3 mb-1 mb-lg-2 fs-47 ">
                                            We are happy <br /> to talk with you. Book a Free Consultation!
                                        </h3>
                                        <div className="subpara mt-3">
                                            <ul>
                                                <li className="d-flex">Speed Up Sales</li>
                                                <li className="d-flex">Manage Multiple Stores</li>
                                                <li className="d-flex">Real-Time Sales Reporting</li>
                                                <li className="d-flex">
                                                    Keep Track &amp; Prevent Stock Spoilage
                                                </li>
                                                <li className="d-flex">
                                                    Analyse &amp; Improve Business Profits
                                                </li>
                                            </ul>
                                            {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                                        </div>
                                        <div className="text-center newhome_btn newbtn1">
                                            <a href=""></a>
                                            <a className="btn btn-white btn-red fs-6" href="#">
                                                Book a Consultation
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 offset-xl-1">
                                <div className="heading_s1 mb-3">
                                    <h2 className=" fw-bold text-capitalize text-dark text-center">
                                        Frequently Asked Questions?
                                    </h2>
                                    {/* <p class="fs-2 text-center">Customers can order from anywhrere anytime</p> */}
                                </div>
                                <div className="accordion bg-white p-2" id="faq">
                                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                        <h2 className="accordion-header" id="q1-heading">
                                            <button
                                                className="accordion-button shadow-none rounded-3 collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#q1"
                                                aria-expanded="false"
                                                aria-controls="q1"
                                            >
                                                How to Setup POSApt's Online Ordering System?
                                            </button>
                                        </h2>
                                        <div
                                            id="q1"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="q1-heading"
                                            data-bs-parent="#faq"
                                        >
                                            <div className="accordion-body fs-sm pt-0">
                                                <p className="mb-0">
                                                    Setting up POSApt is super easy. All you have to do is sign
                                                    up for a free trial or a paid plan and log into your
                                                    account. Once you’re logged in, simply add your store,
                                                    categories, products, and prices. Once your online store
                                                    looks just how you want it to, you’re ready to start
                                                    selling.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                        <h2 className="accordion-header" id="q2-heading">
                                            <button
                                                className="accordion-button shadow-none rounded-3 collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#q2"
                                                aria-expanded="false"
                                                aria-controls="q2"
                                            >
                                                How Does Online Ordering System Work?
                                            </button>
                                        </h2>
                                        <div
                                            id="q2"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="q2-heading"
                                            data-bs-parent="#faq"
                                        >
                                            <div className="accordion-body fs-sm pt-0">
                                                <p className="mb-0">
                                                    The mechanism of how the system works is pretty
                                                    straightforward. It allows businesses to showcase their
                                                    products and services and customers can directly place their
                                                    orders. Your customers will be browsing through products via
                                                    either a website or a mobile app. Once they place an order,
                                                    you will get an instant notification on your admin app or
                                                    email. To complete the order, your team will prepare the
                                                    product as requested and send it via delivery service.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                        <h2 className="accordion-header" id="q3-heading">
                                            <button
                                                className="accordion-button shadow-none rounded-3 collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#q3"
                                                aria-expanded="false"
                                                aria-controls="q3"
                                            >
                                                How Much Does it Cost to Implement an Online Ordering
                                                Solution?
                                            </button>
                                        </h2>
                                        <div
                                            id="q3"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="q3-heading"
                                            data-bs-parent="#faq"
                                        >
                                            <div className="accordion-body fs-sm pt-0">
                                                <p className="mb-0">
                                                    POSApt can be implemented at just $119 per month for
                                                    hospitality businesses. Check out our complete{" "}
                                                    <a href="pricing.html" className="text-primary">
                                                        pricing plan
                                                    </a>{" "}
                                                    to learn more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                        <h2 className="accordion-header" id="q4-heading">
                                            <button
                                                className="accordion-button shadow-none rounded-3 collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#q4"
                                                aria-expanded="false"
                                                aria-controls="q4"
                                            >
                                                What If I Encounter a Technical Issue?
                                            </button>
                                        </h2>
                                        <div
                                            id="q4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="q4-heading"
                                            data-bs-parent="#faq"
                                        >
                                            <div className="accordion-body fs-sm pt-0">
                                                <p className="mb-0">
                                                    If you experience any technical difficulties while using our
                                                    Online Ordering System, please reach out to our technical
                                                    support team via email or phone. They will promptly assist
                                                    you in resolving any issues or answering your questions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                                        <h2 className="accordion-header" id="q5-heading">
                                            <button
                                                className="accordion-button shadow-none rounded-3 collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#q5"
                                                aria-expanded="false"
                                                aria-controls="q5"
                                            >
                                                Can someone modify or cancel their orders?
                                            </button>
                                        </h2>
                                        <div
                                            id="q5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="q5-heading"
                                            data-bs-parent="#faq"
                                        >
                                            <div className="accordion-body fs-sm pt-0">
                                                <p className="mb-0">
                                                    Depending on the stage of the order, modifications or
                                                    cancellations may be possible. However, if there’s no
                                                    visible button to edit your order, customers will have to
                                                    contact the business provider to modify or cancel their
                                                    orders.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-0 rounded-3 shadow-sm">
                                        <h2 className="accordion-header" id="q6-heading">
                                            <button
                                                className="accordion-button shadow-none rounded-3 collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#q6"
                                                aria-expanded="false"
                                                aria-controls="q6"
                                            >
                                                How can customers make payments?
                                            </button>
                                        </h2>
                                        <div
                                            id="q6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="q6-heading"
                                            data-bs-parent="#faq"
                                        >
                                            <div className="accordion-body fs-sm pt-0">
                                                <p className="mb-0">
                                                    For the convenience of your customers, we have integrated
                                                    various payment options including debit and credit cards,
                                                    gift cards, and loyalty points.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-hover bg-theme-green mt-2 py-2 rounded-3 border-0">
                                        <div className="card-body  d-flex d-mobile-block align-items-center justify-content-center text-center justify-content-md-between">
                                            <div>
                                                <p className="fs-4 mb-0 text-white">Connect with us</p>
                                            </div>
                                            <div className="social-links ">
                                                {" "}
                                                <a href="#" className="facebook">
                                                    <i className="fab fa-facebook" />
                                                </a>{" "}
                                                <a href="#" className="instagram">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
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