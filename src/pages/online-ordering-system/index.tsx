import React from "react";
import Layout from "@/Components/Layout";
import Head from 'next/head';
import { BestOosList, BusinessFeatureList, FAQ, HeroSection } from "@/sections";


const OnlineOrderingSystem = () => {

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

    // body content
    const bestOosListData = {
        title: "Find The Best Online Ordering For Your Business",
        desc: "We're committed to improving daily business operations and lightening the load for owners. Discover our exclusive, tailored functions for your benefit.",
        oosList: [
            {
                title: "QR Ordering System",
                desc: "Our simple, precise and real-time inventory system keeps your business running smoothly.",
                imgSrc: "qr-ordering-system",
                link: "qr-ordering",
            },
            {
                title: "Coffee Shop, Cafe Ordering System",
                desc: "Time to take orders for your coffee shop from your online store.",
                imgSrc: "cafe-coffee-shop",
                link: "cafe-and-coffee-shop",
            },
            {
                title: "Restraurant Online Ordering",
                desc: "A robust online ordering system to manage all your restaurant orders.",
                imgSrc: "restaurant-online-ordering",
                link: "restaurant",
            },
            {
                title: "Online Food Ordering System",
                desc: "Manage and process all your food orders with one easy-to-use system.",
                imgSrc: "online-food-ordering",
                link: "food-ordering",
            },
            {
                title: "Bakery Online Ordering System",
                desc: "A complete ordering system for your bakery store to make it online.",
                imgSrc: "bakery-online-ordering",
                link: "bakery",
            },
            {
                title: "Table Ordering System",
                desc: "Not only orders, it's time to manage table reservations with an integrated system.",
                imgSrc: "table-ordering-system",
                link: "table-ordering",
            },
            {
                title: "Tablet Ordering System",
                desc: "A tablet system that can manage and take orders with just a few clicks.",
                imgSrc: "tablet-ordering-system",
                link: "tablet-ordering",
            },
            {
                title: "B2B Ordering System",
                desc: "A Custom system designed especially for B2B businesses.",
                imgSrc: "b2b-ordering",
                link: "b2b-ordering",
            },
        ]
    }
    const featuresListData = {
        title: "Online Ordering Features",
        desc: "An online ordering system (OOS) is a digital platform that allows business owners to take orders through a website or mobile application. It provides an easy and efficient way for customers to search for products or services provided by the business. Services across industries, such as restaurants, retailers and service providers, use this system to process online orders easily.",
        featureList: [
            {
                title: "Accurate Order Management",
                desc: "Streamline the ordering process, reduce manual errors and minimise customer wait times with POSApt.",
                imgSrc: "order-management"
            },
            {
                title: "Table Reservation",
                desc: "POSApt allows customers to pick their preferred date and time, and business can manage bookings more effectively.",
                imgSrc: "table-reservation"
            },
            {
                title: "Direct Integration to POS",
                desc: "Seamlessly integrate with our POS to eliminate the need to switch between apps for order and sales tracking.",
                imgSrc: "direct-integration"
            },
            {
                title: "Better Inventory Management",
                desc: "Accurately know what's in your inventory at all times and make restocking decisions accordingly.",
                imgSrc: "inventory-management"
            },
            {
                title: "Franchised Business Support",
                desc: "Our Ordering System has the power to support businesses with multiple store locations with a single app",
                imgSrc: "franchised-business-support"
            },
            {
                title: "Easier & Secure Payments",
                desc: "Give you customers the luxury to choose their own payment method via Credit Cards, Debit Cards or Loyalty Points.",
                imgSrc: "easier-secure-payment"
            },
        ]
    }
    const faqData = [
        {
            question: "How to Setup POSApt's Online Ordering System?",
            answer: `Setting up POSApt is super easy. All you have to do is sign
            up for a free trial or a paid plan and log into your
            account. Once you’re logged in, simply add your store,
            categories, products, and prices. Once your online store
            looks just how you want it to, you’re ready to start
            selling.`
        },

        {
            question: "How Does Online Ordering System Work?",
            answer: `The mechanism of how the system works is pretty
            straightforward. It allows businesses to showcase their
            products and services and customers can directly place their
            orders. Your customers will be browsing through products via
            either a website or a mobile app. Once they place an order,
            you will get an instant notification on your admin app or
            email. To complete the order, your team will prepare the
            product as requested and send it via delivery service.`
        },
        {
            question: "How Much Does it Cost to Implement an Online Ordering Solution?",
            answer: `POSApt can be implemented at just $119 per month for
            hospitality businesses. Check out our complete
            <a href="pricing.html" className="text-primary">
                <b><i>Pricing plan</i></b>
            </a>
            to learn more.`
        },
        {
            question: "What If I Encounter a Technical Issue?",
            answer: `If you experience any technical difficulties while using our
            Online Ordering System, please reach out to our technical
            support team via email or phone. They will promptly assist
            you in resolving any issues or answering your questions.`
        },
        {
            question: "Can someone modify or cancel their orders?",
            answer: `Depending on the stage of the order, modifications or
            cancellations may be possible. However, if there’s no
            visible button to edit your order, customers will have to
            contact the business provider to modify or cancel their
            orders.`
        },
        {
            question: "How can customers make payments?",
            answer: `For the convenience of your customers, we have integrated
            various payment options including debit and credit cards,
            gift cards, and loyalty points.`
        },

    ]
    return (
        <>
            <Head>
                <title>Online Ordering System for Small Businesses | POSApt</title>
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
                />
                <script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
                />
                <meta
                    name="title"
                    content="Online Ordering System for Small Businesses | POSApt"
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
                    content="Online Ordering System for Small Businesses | POSApt"
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
                    content="Online Ordering System for Small Businesses | POSApt"
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
                <HeroSection
                    title="Sell More <br /> with POSApt's <br /> Online Ordering System"
                    desc="Connect with your customers online and simplify the ordering process."
                    imgUrl="online_order.webp"
                    imgTitle="Online Ordering System"
                />
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
                                        src="assets/dist/image/simplified-online-sales.webp"
                                        alt="Simplified Online Sales"
                                        title="Simplified Online Sales"
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
                            <div className="col-md-6 order-2 order-md-1 ">
                                <div className="customer_img">
                                    <img
                                        src="assets/dist/image/tailored-funciton-develop.webp"
                                        className="img-fluid rounded-3 w-100"
                                        alt="Tailored Functions Developed"
                                        title="Tailored Functions Developed"
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

                <BusinessFeatureList
                    {...featuresListData}
                />

                <BestOosList
                    {...bestOosListData}
                />

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
                                        src="assets/dist/image/customer-support2.webp"
                                        className="img-fluid rounded-3 w-100"
                                        alt="Online Ordering Customer Support"
                                        title="Online Ordering Customer Support"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* new restro */}

                <FAQ
                    faqData={faqData}
                />

            </Layout>
        </>
    );
}

export default OnlineOrderingSystem;