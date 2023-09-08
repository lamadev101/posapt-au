/** @format */

import Head from 'next/head';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '@/Redux/reducers';
import Layout from '@/Components/Layout';
import { FAQ, FeatureList, HeroSection } from '@/sections';
import Link from 'next/link';


const RetailPosSystem = () => {

  const { price } = useSelector((state: RootState) => state.StateManager);
  const dispatch = useDispatch();

  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "POSApt",
        "url": "https://posapt.au",
        "logo": "https://posapt.au/assets/dist/image/poslogo.webp",
        "description": "POSApt launched in 2021 with a goal of providing an all-in-one POS solution. Our point-of-sale systems, software, online ordering system and ecommerce websites are tailored for hospitality and retail businesses. Since day one, we have been committed to providing easy-to-use and reliable cloud-based software applications to businesses across Australia. ",
        "foundingDate": "2021",
        "founders": [
          {
            "@type": "Person",
            "name": "Sam Timalsina"
          },
          {
            "@type": "Person",
            "name": "Ram Prasad Gajurel"
          }

        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Building 4, Suite 30/195 Wellington Rd.",
          "addressLocality": "Clayton",
          "postalCode": "3168",
          "addressRegion": "VIC",
          "addressCountry": "AU"
        },
        "areaServed": "Australia",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+03 8802 4468",
            "contactType": "technical support",
            "areaServed": "AU",
            "availableLanguage": "en"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/posapt",
          "https://twitter.com/posapt_au",
          "https://www.instagram.com/posapt22/",
          "https://www.youtube.com/channel/UCEbnQMG4QHXB5rk2TzROApA",
          "https://www.linkedin.com/company/posapt-au",
          "https://posapt.au"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://posapt.au/#website",
        "url": "https://posapt.au/",
        "name": "POSApt",
        "description": "POSApt offers POS systems, Online Ordering Systems, and E-commerce websites for small to medium-sized businesses to streamline their business operations.",
        "publisher": {
          "@id": "https://posapt.au/#organization"
        },
        "inLanguage": "en-AU"
      }
    ]
  }
  const retailService = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://posapt.au/retail-pos-system/#webpage",
        "url": "https://posapt.au/retail-pos-system/",
        "name": "POSApt Retail POS System for Australian Businesses",
        "description": "Have a retail store? Automate your orders, manage your customers, and Increase monthly sales with POSApt’s Retail POS System. ",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/ecommerce/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": "https://posapt.au/",
            "name": "Home"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": "https://posapt.au/retail-pos-system/",
            "name": "Retail POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Retail POS System",
        "description": "A POSApt retail POS solution for the retail industry of Australia.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "POSApt",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Clayton, Melbourne",
            "addressRegion": "VIC",
            "streetAddress": "Suite 30/195 Wellington Rd"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "Australia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Retail Point of Sale Software",
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
                "name": "Retail POS Software- 99 AUD per month inc. GST"
              }
            }
          ]
        }
      }
    ]
  }

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
      "name": "What are the benefits of a Retail POS Solution?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply put, a retail POS solution can help retailers save time, money, and sanity. With a POS system, retailers can ring up sales faster than a cheetah on espresso, and track inventory levels more accurately than a bloodhound on a scent. And let's not forget the improved efficiency, streamlined operations, and overall business insights that a POS system can provide over a humane counterpart. So, whether you're a small business owner or a retail giant, a POS is a must-have tool for success."
      }
    }, {
      "@type": "Question",
      "name": "How much does a retail POS software Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POSApt has a starting price of $99/month for the basic setup. Check out our complete pricing plan to learn more."
      }
    }, {
      "@type": "Question",
      "name": "Can POSApt’s retail solution integrate with other software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, POSApt can integrate with other software solutions such as accounting software, e-commerce platforms, and CMS systems as per your necessity."
      }
    }, {
      "@type": "Question",
      "name": "How can I set up a POS System for My retail Store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To POS solution for your retail store, you just have to fill up our enquire form. One of our technicians will contact you within 24 hours. Afterwards, we will schedule a demo with you on how our Point of Sale System works. Depending on your need and the size of your retail store, we will suggest a monthly pricing plan. If all goes well, our team will come to your store location and will set up both hardware and software for you. "
      }
    }]
  }
  // body content
  const featureListData = {
    title: `Features Of A <br/> Great Retail POS System`,
    featureList: [
      {
        title: "Inventory Management",
        desc: "To be a great Point of Sale system, an inventory management feature is a must. This allows you to track your inventory in real time and quickly restock when needed.",
      },
      {
        title: "Sales Reporting",
        desc: "A good retail POS software must have an intuitive way to provide insights into your business and generate meaningful sales reports. This can help you to identify areas of improvement and make data-driven decisions about pricing, sales and offers.",
      },
      {
        title: "Mobile and Tablet-Based Solutions",
        desc: "Everyone today has a smartphone in their pocket and a great POS system takes advantage of this by offering mobile and tablet-based solutions. This offers convenience and mobility for all types of businesses.",
      },
      {
        title: "Integration with Other Systems",
        desc: "Another vital feature would be to seamlessly integrate with other software solutions such as accounting software, e-commerce platforms, and customer relationship management (CRM) software. This makes it easy to manage all aspects of your business from one central location.",
      },
      {
        title: "Customisable Settings",
        desc: "A good Retail POS system should offer customisable settings, so you can tailor it to your business needs. For example, you might need to set up automatic discounts, loyalty programs, and special promotions or change tax setting",
      },
      {
        title: "Multi-Payment Support",
        desc: "The system should have multi-payment support. Customers can use credit cards, debit cards, or cash to pay for the products they purchase. This enhances customer satisfaction and ultimately more sales",
      },
    ]
  }
  const faqData = [
    {
      question: "What is a Retail POS System?",
      answer: "A retail POS system, or point-of-sale system, is a software and hardware solution that helps retailers process transactions at the point of sale, record sales and manage inventory. The hardware components are usually a cash register, barcode scanner, Android tablet and card reader, and software that allows you to manage everything."
    },
    {
      question: "What are the benefits of a Retail POS Solution?",
      answer: "Simply put, a retail POS solution can help retailers save time, money, and sanity. With a POS system, retailers can ring up sales faster than a cheetah on espresso, and track inventory levels more accurately than a bloodhound on a scent. And let's not forget the improved efficiency, streamlined operations, and overall business insights that a POS system can provide over a humane counterpart. So, whether you're a small business owner or a retail giant, a POS is a must-have tool for success."
    },
    {
      question: "How much does a retail POS software Cost?",
      answer: "POSApt has a starting price of $99/month for the basic setup. Check out our complete pricing plan to learn more."
    },
    {
      question: "Can POSApt’s retail solution integrate with other software?",
      answer: "Yes, POSApt can integrate with other software solutions such as accounting software, e-commerce platforms, and CMS systems as per your necessity."
    },
    {
      question: "How can I set up a POS System for My retail Store?",
      answer: "To POS solution for your retail store, you just have to fill up our enquiry form. One of our technicians will contact you within 24 hours. Afterwards, we will schedule a demo with you on how our Point of Sale System works. Depending on your need and the size of your retail store, we will suggest a monthly pricing plan. If all goes well, our team will come to your store location and will set up both hardware and software for you."
    },
  ]
  const storeList = [
    {
      name: "Flower Shop",
      link: "/flower-pos-system"
    },
    {
      name: "Liquor Shop",
      link: "/beverages-pos-system"
    },
    {
      name: "Fashion Store",
      link: "/retail-pos-system/clothing-store"
    },
    {
      name: "Jewellery Shop",
      link: "/retail-pos-system/jewellery-store"
    },
    {
      name: "Gift Shop",
      link: "/retail-pos-system/gift-and-toy-shop"
    },
    {
      name: "Grocery Shop",
      link: "/grocery-pos-system"
    },

  ]
  return (
    <>
      <Head>
        <title>Retail POS System | Retail Point of Sale | POSApt</title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(retailService) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(retailFaq) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <meta
          name="title"
          content="Retail POS System | Retail Point of Sale | POSApt"
        />
        <meta
          name="description"
          content="Have a retail store in Australia? Automate orders, manage customers and Increase monthly sales with POSApt’s Retail POS System. Book a Demo!"
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
          content="Retail POS System | Retail Point of Sale | POSApt"
        />
        <meta
          property="og:description"
          content="Have a retail store in Australia? Automate orders, manage customers and Increase monthly sales with POSApt’s Retail POS System. Book a Demo!"
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
          content="Retail POS System | Retail Point of Sale | POSApt"
        />
        <meta
          name="twitter:description"
          content="Have a retail store in Australia? Automate orders, manage customers and Increase monthly sales with POSApt’s Retail POS System. Book a Demo!"
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
        <>
          <HeroSection
            title="POSApt
          <br /> Retail POS System <br />
          For Australian Businesses"
            desc="Intuitive Point of Sale System for Retail Businesses"
            imgUrl="retailweb.webp"
          />
          <section className="bg-light pt-50 pb-50">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <img
                    className="img-fluid img-grayscale bigimg w-100 mt-lg-n5"
                    src="assets/dist/image/retailimg4.webp"
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
              <div className="p-2 p-md-5 bg-light rounded-3">
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
                            {
                              storeList.map((item, index) => (
                                <div key={index} className="retail_block col-lg-4 col-md-6 col-6">
                                  <Link href={item.link}>
                                    <div className="retail_block-inner">
                                      <div className="retail_block-upper">
                                        <div className="retail_block-icon-box">
                                          <span className="retail_block-icon fas fa-store" />
                                        </div>
                                        <p className="retail_block-heading">
                                          <Link href={item.link}>
                                            {item.name}
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))
                            }
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
                      src="assets/dist/image/retailimg1.webp"
                      alt=""
                      className="d-none d-md-flex rounded"
                    />
                  </div>
                </div>
                <hr className="bg-white" />
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/dist/image/retailimg2.webp"
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
                      src="assets/dist/image/retailimg3.webp"
                      alt=""
                      className="d-none d-md-flex rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FeatureList
            {...featureListData}
          />
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
                        src="assets/dist/image/d4.webp"
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

          <FAQ
            faqData={faqData}
          />
        </>
      </Layout>
    </>
  );
};

export default RetailPosSystem;
