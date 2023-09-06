/** @format */

import Head from 'next/head';
import { useSelector, useDispatch } from "react-redux";
import MailAndCall from "@/Components/MailAndCall";
import HeroSection from "@/sections/hero/HeroSection";
import { RootState } from '@/Redux/reducers';
import ScrollToTop from '@/Helpers/ScrollToTop';
import Layout from '@/Components/Layout';
import { StoreList } from '@/sections/pos-system';
import { ContactFormSection, SignUpSection } from '@/sections';


const RetailPosSystem = () => {

  const { price } = useSelector((state: RootState) => state.StateManager);
  const dispatch = useDispatch();

  const retailService = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Retail Point-of-Sale (POS) System",
    "description": "A retail POS system helps you automate business processes including inventory management, order management, customer data tracking, and sales reporting. Improve your monthly sales with better customer satisfaction by streamlining your business operations with Australia's #1 retail POS software",
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
      "name": "Retail POS",
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
            "name": "Basic POS - $66 AUD per month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Popular POS System - $185  AUD per month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pos with E-commerce - $299 AUD per month"
          }
        }
      ]
    }
  };

  const retailFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a retail POS system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A retail POS system, or point-of-sale system, is a software and hardware solution that helps retailers process transactions at the point of sale, record sales and manage inventory. The hardware components are usually a cash register, barcode scanner, android tablet and card reader, and software that allows you to manage everything."
      }
    }, {
      "@type": "Question",
      "name": "What are the benefits of a retail POS system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply put, a retail POS system can help retailers save time, money, and sanity. With a POS system, retailers can ring up sales faster than a cheetah on espresso, and track inventory levels more accurately than a bloodhound on a scent. And let's not forget the improved efficiency, streamlined operations, and overall business insights that a POS system can provide over a humane counterpart. So, whether you're a small business owner or a retail giant, a POS is a must-have tool for success."
      }
    }, {
      "@type": "Question",
      "name": "How much does a retail POS system cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of Retail POS Software varies depending on the provider, the features included and the hardware type. POSApt has a starting price of $66/month for the basic setup."
      }
    }, {
      "@type": "Question",
      "name": "Can retail POS systems integrate with other software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, POSApt can integrate with other software solutions such as accounting software, e-commerce platforms, and CMS systems as per your necessity."
      }
    }, {
      "@type": "Question",
      "name": "Can a Retail POS System help with employee management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Most POS systems currently available in the Australian market don’t have employee management features but POSApt wouldn’t let you down. We have added employee management features, such as time and attendance tracking, shift scheduling, and performance monitoring just for you."
      }
    }]
  }

  return (
    <>
      <Head>
        <title>Retail POS System | Retail Point of Sale Software</title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(retailService) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(retailFaq) }}
        />
        <meta
          name="title"
          content="Retail POS System | Retail Point of Sale Software"
        />
        <meta
          name="description"
          content=" Have a retail store? Automate your orders, manage your customers, and Increase monthly sales with POSApt’s Retail POS System. Book a Demo!"
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
          content="Retail POS System | Retail Point of Sale Software"
        />
        <meta
          property="og:description"
          content=" Have a retail store? Automate your orders, manage your customers, and Increase monthly sales with POSApt’s Retail POS System. Book a Demo!"
        />
        <meta property="og:url" content="https://posapt.au/retail-pos-system" />
        <meta property="og:site_name" content="POSApt Australia" />
        <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
        <meta
          property="og:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
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
          content="Retail POS System | Retail Point of Sale Software"
        />
        <meta
          name="twitter:description"
          content=" Have a retail store? Automate your orders, manage your customers, and Increase monthly sales with POSApt’s Retail POS System. Book a Demo!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/retail-pos-system" />
      </Head>
      <Layout>
        <main>
          {/* about us */}
          <section className=" pt-1 pt-md-5 pb-50 bg-home">
            <div className="container  text-center">
              <div className="row align-items-center ">
                <div className="col-md-7">
                  <div className="heading_s1">
                    <h1 className="text-capitalize fs-61 text-white">
                      POSApt
                      <br /> Retail POS System <br />
                      For Australian Businesses{" "}
                    </h1>
                  </div>
                </div>
                <div className="col-md-5 ">
                  <div className="">
                    <img
                      src="assets/dist/image/retailweb.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="subpara ">
                    <p className="text-center fs-47 text-white">
                      <span style={{ fontWeight: 400 }}>
                        Intuitive Point of Sale System for Retail Businesses
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
          <section className="bg-light pt-50 pb-50">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <img
                    className="img-fluid img-grayscale bigimg w-100 mt-lg-n5"
                    src="assets/dist/image/retailimg4.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5 pt-6">
                  <div className="dotted-overlay p-5">
                    <div className="z-index-1 position-relative">
                      <div className="heading_s1">
                        <h2 className=" fw-bold text-capitalize text-theme">
                          Don't Worry, <br /> We Set Up Everything For You
                        </h2>
                        <p className="fs-5">
                          POSApt is the user friendly POS system integrated E-commerce
                          platform. Business can manage both in shop and online sales
                          within single system. This synchronization simplifies
                          inventory management, order processing, and ensures consistent
                          product information across all channels. Manage business
                          smarter and save time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1">
                  <div className="bg-theme2 p-5 shadow border-radius mt-4 mt-lg-n6 position-relative">
                    <h3 className="fw-bold text-white">
                      Software To Streamline Your Business
                    </h3>
                    <p className="text-white">
                      A game-changer for businesses looking to streamline their
                      operations and improve customer experience.
                    </p>
                    <div className="subpara mt-3">
                      <ul className="text-white">
                        <li className="text-white d-flex"> Free Consultation</li>
                        <li className="text-white d-flex">
                          {" "}
                          Custom Website and Maintenance
                        </li>
                        <li className="text-white d-flex"> products Upload Included</li>
                        <li className="text-white d-flex"> User Training Included</li>
                        <li className="text-white d-flex">
                          {" "}
                          Friendly Customer Services
                        </li>
                      </ul>
                      {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* store */}
          <section className="pt-50">
            <div className="container">
              <div className="p-5 bg-light rounded-3">
                <div className="row text-center">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark">
                      Our Retail Store
                    </h2>
                  </div>
                </div>
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-9">
                    <div className="swiper" id="retail">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="row">
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Flower Shop</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Liquor Shop</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Fashion Store</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Jewellery Shop</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Gift Shop</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Shoe Shop</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="row">
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Vape Shop</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Salon</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Wholesale</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Electronics</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Furniture Store</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="retail_block col-lg-4 col-md-6 col-6">
                              <a href=""></a>
                              <div className="retail_block-inner">
                                <a href=""></a>
                                <div className="retail_block-upper">
                                  <a href="">
                                    <div className="retail_block-icon-box">
                                      <span className="retail_block-icon fas fa-store" />
                                    </div>
                                  </a>
                                  <h4 className="retail_block-heading">
                                    <a href="" />
                                    <a href="">Grocery</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* benefits */}
          <section className="pb-50 pt-50 ">
            <div className="container">
              <div className="ctabanner p-2 p-md-5 rounded-3 retail_box">
                <div className="heading_s1">
                  {/* <span class="sub_heading font_style1">Why Choose Us?</span> */}
                  <h2 className=" fw-bold text-capitalize text-center text-white mb-3 mb-md-5">
                    Benefits of a Retail Point of Sale Software
                  </h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="why_img ">
                      <div className="media-body">
                        <h6 className="mb-2">
                          <i className="fas fa-check-square me-3 d-md-none" /> Faster
                          Transactions{" "}
                        </h6>
                        <p>
                          {" "}
                          People these days have the patience of a goldfish and busy
                          hours in a retail store could mean long lines which ultimately
                          turn these people away. However, with a retail POS system, you
                          can process transactions quickly and efficiently, reducing
                          wait times for your customers. Happier customers = higher
                          sales.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/dist/image/retailimg1.png"
                      alt=""
                      className="d-none d-md-flex rounded"
                    />
                  </div>
                </div>
                <hr className="bg-white" />
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/dist/image/retailimg2.png"
                      alt=""
                      className="d-none d-md-flex rounded"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="why_img ">
                      <div className="media-body">
                        <h6 className="mb-2">
                          <i className="fas fa-check-square me-3 d-md-none" /> Accurate
                          Pricing
                        </h6>
                        <p>
                          {" "}
                          A Retail Point of sale system automatically calculates the
                          prices based on your product and discount settings, minimising
                          the risk of errors. This can help you to avoid overcharging or
                          undercharging your customers, ensuring a fair and transparent
                          pricing system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-white" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="why_img ">
                      <div className="media-body">
                        <h6 className="mb-2">
                          <i className="fas fa-check-square me-3 d-md-none" />
                          Better Customer Service
                        </h6>
                        <p>
                          {" "}
                          By automating sales processes, you can focus on providing
                          excellent customer service and creating a positive shopping
                          experience. You can also easily access customer data, such as
                          purchase history and preferences, and use this information to
                          personalise the customer’s experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/dist/image/retailimg3.png"
                      alt=""
                      className="d-none d-md-flex rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" pb-50 ">
            <div className="container">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize text-dark">
                    Features Of A <br /> Great Retail POS System
                  </h2>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-2">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-4 mb-0 fs-20 ">
                          Inventory Management
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          To be a great Point of Sale system, an inventory management
                          feature is a must. This allows you to track your inventory in
                          real time and quickly restock when needed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-2">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-4 mb-0 fs-20 ">
                          Sales Reporting
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          A good retail POS software must have an intuitive way to
                          provide insights into your business and generate meaningful
                          sales reports. This can help you to identify areas of
                          improvement and make data-driven decisions about pricing,
                          sales and offers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-2">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-4 mb-0 fs-20 ">
                          Mobile and Tablet-Based Solutions
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          Everyone today has a smartphone in their pocket and a great
                          POS system takes advantage of this by offering mobile and
                          tablet-based solutions. This offers convenience and mobility
                          for all types of businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-2">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-4 mb-0 fs-20 ">
                          Integration with Other Systems
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          Another vital feature would be to seamlessly integrate with
                          other software solutions such as accounting software,
                          e-commerce platforms, and customer relationship management
                          (CRM) software. This makes it easy to manage all aspects of
                          your business from one central location.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-2">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-4 mb-0 fs-20 ">
                          Customisable Settings
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          A good Retail POS system should offer customisable settings,
                          so you can tailor it to your business needs. For example, you
                          might need to set up automatic discounts, loyalty programs,
                          and special promotions or change tax settings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-2">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-4 mb-0 fs-20 ">
                          Multi-Payment Support
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          The system should have multi-payment support. Customers can
                          use credit cards, debit cards, or cash to pay for the products
                          they purchase. This enhances customer satisfaction and
                          ultimately more sales.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* reasons */}
          <section className="pt-50">
            <div className="container">
              <div className="whychoose">
                <div className="row text-center mb-3">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark">
                      5 Reasons to Choose <br />
                      POSApt Retail POS Software
                    </h2>
                  </div>
                </div>
                <div className="row align-items-center mb-3 ">
                  <div className="col-md-6">
                    <div className="chooseimg1">
                      <img
                        src="assets/dist/image/d1.webp"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3 fw-bold text-theme">
                        <span className="fs-61 text-theme">1.</span> User-Friendly
                        Interface{" "}
                      </h3>
                      <p>
                        POSApt Retail POS system is user-friendly and easy to navigate,
                        so you can get started right away without the need for extensive
                        training. Even still, we offer a ton of tutorial videos and a
                        hands-on training session at the time of setting up your retail
                        POS system.
                      </p>
                      <div className="subpara mt-3">
                        <ul>
                          <li className="fw-bold">
                            <a>Easy to use </a>
                          </li>
                          <li className="fw-bold">
                            <a>Free Training included</a>
                          </li>
                          <li className="fw-bold">
                            <a>Tutorial videos available </a>
                          </li>
                        </ul>
                        {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3 fw-bold text-theme">
                        <span className="fs-61 text-theme">2.</span> Affordable Pricing{" "}
                      </h3>
                      <p>
                        We understand that a POS system should be the saving grace of
                        your retail business, not the one that hogs your profits. That
                        is why we offer competitive pricing on our POS systems, with no
                        hidden fees or charges.
                      </p>
                      <div className="subpara mt-3">
                        <ul>
                          <li className="fw-bold">
                            <a>No customer service charges </a>
                          </li>
                          <li className="fw-bold">
                            <a>Try before you buy scheme </a>
                          </li>
                          <li className="fw-bold">
                            <a>Competitive pricing</a>
                          </li>
                        </ul>
                        {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg1">
                      <img
                        src="assets/dist/image/d2.webp"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-md-6">
                    <div className="chooseimg1">
                      <img
                        src="assets/dist/image/d3.webp"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3 fw-bold text-theme">
                        <span className="fs-61 text-theme">3.</span> Cloud-Based
                        Solution{" "}
                      </h3>
                      <p>
                        Everything’s cloud-based these days, so why not even your POS
                        system? POSApt's retail POS system is cloud-based, meaning you
                        can access your data from anywhere on your smartphone or tablet
                        with an internet connection and of course your account login
                        details.
                      </p>
                      <div className="subpara mt-3">
                        <ul>
                          <li className="fw-bold">
                            <a>Better than local storage </a>
                          </li>
                          <li className="fw-bold">
                            <a>Secure data storage </a>
                          </li>
                          <li className="fw-bold">
                            <a>Accessible from everywhere</a>
                          </li>
                        </ul>
                        {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3 fw-bold text-theme">
                        <span className="fs-61 text-theme">4.</span> Advanced features
                      </h3>
                      <p>
                        And when you need your POS to do a little extra, we have added a
                        few advanced features in our POS software, such as employee
                        management, multi-store support, and real-time inventory
                        tracking, to help you get the most out of your investment in the
                        best retail point of sale system in Australia.
                      </p>
                      <div className="subpara mt-3">
                        <ul>
                          <li className="fw-bold">
                            <a>Franchised Business Support </a>
                          </li>
                          <li className="fw-bold">
                            <a>Real-time updates </a>
                          </li>
                          <li className="fw-bold">
                            <a>Low stock alerts </a>
                          </li>
                        </ul>
                        {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg1">
                      <img
                        src="assets/dist/image/hs4.webp"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-md-6">
                    <div className="chooseimg1">
                      <img
                        src="assets/dist/image/d5.webp"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3 fw-bold text-theme">
                        <span className="fs-61 text-theme">5.</span> Customer Support
                        24/7{" "}
                      </h3>
                      <p>
                        Finally, we couldn’t call ourselves the best unless our
                        customers also share the same notion about our POS software. So,
                        to improve our customer satisfaction, we provide dedicated 24/7
                        support for all of our clients, so you can get help whenever you
                        need it.
                      </p>
                      <div className="subpara mt-3">
                        <ul>
                          <li className="fw-bold">
                            <a>Expert customer support </a>
                          </li>
                          <li className="fw-bold">
                            <a>Available round the clock </a>
                          </li>
                          <li className="fw-bold">
                            <a>Zero charge for customer support</a>
                          </li>
                        </ul>
                        {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                          Book Consultation
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
                  <div className="accordion" id="faq">
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h3 className="accordion-header" id="q1-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q1"
                          aria-expanded="false"
                          aria-controls="q1"
                        >
                          What is a retail POS system?
                        </button>
                      </h3>
                      <div
                        id="q1"
                        className="accordion-collapse collapse"
                        aria-labelledby="q1-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p>
                            A retail POS system, or point-of-sale system, is a software
                            and hardware solution that helps retailers process
                            transactions at the point of sale, record sales and manage
                            inventory. The hardware components are usually a cash
                            register, barcode scanner, android tablet and card reader,
                            and software that allows you to manage everything.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h3 className="accordion-header" id="q2-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q2"
                          aria-expanded="false"
                          aria-controls="q2"
                        >
                          What are the benefits of a retail POS system?
                        </button>
                      </h3>
                      <div
                        id="q2"
                        className="accordion-collapse collapse"
                        aria-labelledby="q2-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p>
                            Simply put, a retail POS system can help retailers save
                            time, money, and sanity. With a POS system, retailers can
                            ring up sales faster than a cheetah on espresso, and track
                            inventory levels more accurately than a bloodhound on a
                            scent. And let's not forget the improved efficiency,
                            streamlined operations, and overall business insights that a
                            POS system can provide over a humane counterpart. So,
                            whether you're a small business owner or a retail giant, a
                            POS is a must-have tool for success.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h3 className="accordion-header" id="q3-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q3"
                          aria-expanded="false"
                          aria-controls="q3"
                        >
                          How much does a retail POS system cost?
                        </button>
                      </h3>
                      <div
                        id="q3"
                        className="accordion-collapse collapse"
                        aria-labelledby="q3-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p>
                            {" "}
                            POSApt has a starting price of $99/month for the basic
                            setup. Check out our complete
                            <a href="pricing.html" className="text-primary">
                              pricing plan
                            </a>{" "}
                            to learn more.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h3 className="accordion-header" id="q4-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q4"
                          aria-expanded="false"
                          aria-controls="q4"
                        >
                          Can retail POS systems integrate with other software?
                        </button>
                      </h3>
                      <div
                        id="q4"
                        className="accordion-collapse collapse"
                        aria-labelledby="q4-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p>
                            Yes, POSApt can integrate with other software solutions such
                            as accounting software, e-commerce platforms, and CMS
                            systems as per your necessity.
                          </p>
                        </div>
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
          </section>
        </main>
      </Layout>
    </>
  );
};

export default RetailPosSystem;
