/** @format */

import Layout from "../Components/Layout";
import Head from 'next/head';
import { useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import {  FAQ, FeatureList, HeroSection } from "@/sections";
import Link from "next/link";


const HospitalityPosSystem = () => {
  const { price } = useSelector((state: RootState) => state.StateManager);

  // SEO schemas
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
  const hospitalityService = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://posapt.au/hospitality-pos-system/#webpage",
        "url": "https://posapt.au/hospitality-pos-system/",
        "name": "POSApt Hospitality POS System for Australian Businesses",
        "description": "Improved revenue. Streamlined operations. Customer satisfaction. Make your hospitality business more efficient with a Hospitality POS system ",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/hospitality-pos-system/#breadcrumb",
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
            "item": "https://posapt.au/hospitality-pos-system/",
            "name": "Hospitality POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Retail POS System",
        "description": "A POSApt Hospitality POS solution for the Hospitality industry of Australia.",
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
          "name": "Hospitality Point of Sale Software",
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
                "name": "Hospitality POS Software- 66 AUD per month inc. GST"
              }
            }
          ]
        }
      }
    ]
  }
  const hospitalityFaq ={
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a Hospitality POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Hospitality Point of Sale System is a business solution that helps businesses manage their sales transactions and inventory efficiently. It is the combination of both hardware and software that streamlines business operations."
      }
    },{
      "@type": "Question",
      "name": "What are the benefits of using a hospitality POS system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some benefits of using a Hospitality POS Solution include: Improved efficiency in managing sales transactions and inventory Real-time reporting and analytics Better accuracy in order taking Reducing manual errors Accepts various forms of payment"
      }
    },{
      "@type": "Question",
      "name": "How much does a hospitality POS software cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POSApt has a starting price of $66/month for the basic setup. Check out our complete pricing plan to learn more."
      }
    },{
      "@type": "Question",
      "name": "How long does it take to set up a POS system for my hospitality business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Normally, the setup time is around 1 - 2 hours. Given that you already have the hardware system ready. If not, the time will be consumed to purchase dedicated hardware based on your needs. However, cloud-based systems such as POSApt can be set up quickly as compared to on-premise systems."
      }
    },{
      "@type": "Question",
      "name": "What type of customer support is provided by POSApt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At POSApt, we offer all kinds of customer including hardware and software customer support. Moreover, we provide our service absolutely free and almost instantly. You can reach out to our technical team through a call or a message whenever you need assistance. We are happy to help you out. "
      }
    }]
  }

  // Body Content
  const benefitsData = {
    title: "Benefits Of A Hospitality Point Of Sale Software",
    imgUrl: "/assets/dist/image/orderingSystem/of5.webp",
    content: [
      {
        imgUrl: "/assets/dist/image/orderingSystem/of5.webp",
        title: "Improved Customer Service",
        desc: "The right POS software enables your hospitality business to take orders quickly, process payments efficiently, and manage tables effectively. It also enables your business to offer more personalised services and rewards to your customers letting them know that you care about them.",
      },
      {
        imgUrl: "/assets/dist/image/orderingSystem/of5.webp",
        title: "Streamlined Operations",
        desc: "The right POS software enables your hospitality business to take orders quickly, process payments efficiently, and manage tables effectively. It also enables your business to offer more personalised services and rewards to your customers letting them know that you care about them.",
      },
      {
        imgUrl: "/assets/dist/image/orderingSystem/of5.webp",
        title: "Accurate Pricing",
        desc: "The primary difference you'll notice when you install the right Hospitality POS system is that there are fewer manual errors and most of the business processes are achieved quicker than ever. That is the beauty of getting a cloud-based POS system for your hospitality business.",
      },
    ]
  }
  const whyChooseData = {
    title: "Why Choose POSapt's E-Commerce System?",
    content: [
      {
        title: "Better Inventory Management",
        desc: "Our simple, precise and real-time inventory system keeps your business running smoothly. With accurate and up-to-date information about your inventory, you can make informed decisions to increase profitability and provide a better customer experience.",
      },
      {
        title: "Direct Integration to POS",
        desc: "Direct Integration to POS Our E-Commerce System integrates seamlessly with our POS giving you access to all incoming orders from a single point-of-sale (POS) system to eliminate the need to switch between multiple applications for order and sales tracking.",
      },
      {
        title: "Safe & Secure Payment Methods",
        desc: "Offer multiple payment options including PayPal, Google Pay, and Stripe through our Online Ordering System. This allows your customers to choose the most convenient payment method for them, increasing your sales and their happiness.",
      },
      {
        title: "Custom Website Inclusive",
        desc: "Custom Website Inclusive We will design and build a custom website for you that is visually appealing, and fully functional. It will also allow your customers to purchase goods and services, all at no additional cost to you.",
      },
      {
        title: "E-Gift Card",
        desc: "Keep your customers interested, happy and tied to you with the help of POSApt-enabled gift cards, vouchers and loyalty points.",
      },
      {
        title: "Loyalty and Marketing",
        desc: "Our E-Commerce System can keep your customers interested, happy and tied to you with the help of POSApt vouchers and loyalty points.",
      },
    ]
  }
  const reasonToChooseData = {
    firstTitle: "5 Reasons To Choose",
    lastTitle: "POSApt Hospitality POS Software",
    content: [
      {
        imgUrl: "d6.webp",
        title: "Simple & Intuitive",
        desc: "POSApt offers an easy-to-use interface that requires minimal training but doesn’t lack anything in the features department. The interface is designed to simplify transactions and minimize errors, allowing staff to focus on providing excellent customer service.",
        list: [
          "Speed Up Sales",
          "Manage Multiple Stores",
          "Speed Up Sales",
        ]
      },
      {
        imgUrl: "d2.webp",
        title: "Tailored To Hospitality’s Needs",
        desc: "POSApt is custom-built with Hospitality businesses in mind. You can easily customize menus, and item options, update prices, take or manage orders, and even print orders directly to a dedicated kitchen printer. And the best part; everything happens in real-time.",
        list: [
          "Speed Up Sales",
          "Manage Multiple Stores",
          "Speed Up Sales",
        ]
      },
      {
        imgUrl: "d6.webp",
        title: "Integrated with Hospitality-Specific Systems",
        desc: "POSApt is designed to integrate seamlessly with essential systems such as Xero and MYOB accounting software, inventory management, online ordering system, and customer relationship management (CRM) tools.",
        list: [
          "Speed Up Sales",
          "Manage Multiple Stores",
          "Speed Up Sales",
        ]
      },
      {
        imgUrl: "d4.webp",
        title: "Real-Time Reporting",
        desc: "POSApt provides real-time reporting on sales, inventory, and other key metrics, allowing you to make informed business decisions on the go. This feature is particularly useful for hospitality businesses that need to make quick decisions based on real-time data.",
        list: [
          "Speed Up Sales",
          "Manage Multiple Stores",
          "Speed Up Sales",
        ]
      },
      {
        imgUrl: "d5.webp",
        title: "Franchise Business Support",
        desc: "No matter the number of outlets your hospitality business has, POSApt has the power to support and manage all franchised businesses without the need for a separate software application for each of your outlets.",
        list: [
          "Speed Up Sales",
          "Manage Multiple Stores",
          "Speed Up Sales",
        ]
      },
    ]
  }
  const featureListData = {
    title: `Features Of A <br /> Great Hospitality POS System`,
    featureList: [
      {
        title: "User-Friendly Interface",
        desc: "A POS system for hospitality businesses should be easy to use. A simple and intuitive interface enables quick transactions and reduces the risk of errors. Less manual errors mean more productivity.",
      },
      {
        title: "Customisable Menus and Items",
        desc: "Your POS system should allow you to easily customise menus and item options to meet your specific needs and preferences. A customised menu based on customers' purchase history increases revenue.",
      },
      {
        title: "Integration with Other Systems",
        desc: "There’s more to a hospitality business than just what happens at the counter. So, a good POS should be able to integrate with other systems such as accounting software, inventory management, and online ordering systems",
      },
      {
        title: "Real-Time Reporting",
        desc: "Hospitality Point of Sale systems should provide real-time reports on sales, inventory, and other key metrics. This enables you to make informed business decisions and tactical future plans.",
      },
      {
        title: "Security and Compliance",
        desc: "A great POS system should be secure and compliant with industry standards. Protecting your business and customer data is key and you should thoroughly examine this feature before finalising a POS.",
      },
      {
        title: "Omnichannel Support",
        desc: "An advanced POS system for the hospitality business should come with omnichannel support. This will help you manage online and offline sales with one robust system. Moreover, you will have accurate reporting for both",
      },

    ]
  }
  const faqData = [
    {
      question: "What is a Hospitality POS System?",
      answer: "A Hospitality point-of-sale system is a business solution that helps businesses manage their sales transactions and inventory efficiently. It is the combination of both hardware and software that streamlines business operations.",
    },
    {
      question: "What are the benefits of using a hospitality POS solution?",
      answer: `
        <div>Some benefits of using a Hospitality POS Solution include:</div>
        <ol>
        <li>Improved efficiency in managing sales transactions and inventory
        <li>Real-time reporting and analytics</li>
        <li>Better accuracy in order taking</li>
        <li>Reducing manual errors</li>
        <li>Accepts various forms of payment</li>
        </ol>
      `,
    },
    {
      question: "How much does a hospitality POS software cost?",
      answer: `POSApt has a starting price of $66/month for the basic setup. Check out our complete <a href="/pricing">pricing plan</a> to learn more.`,
    },
    {
      question: "How long does it take to set up a POS system for my hospitality business?",
      answer: "Normally, the setup time is around 1 - 2 hours. Given that you already have the hardware system ready. If not, the time will be consumed to purchase dedicated hardware based on your needs. However, cloud-based systems such as POSApt can be set up quickly as compared to on-premise systems.",
    },
    {
      question: "What type of customer support is provided by POSApt?",
      answer: "At POSApt, we offer all kinds of support including hardware and software customer support. Moreover, we provide our service absolutely free and almost instantly. You can reach out to our technical team through a call or a message whenever you need assistance. We are happy to help you out. ",
    },
  ]
  const storeList = [
    {
      name: "Restaurant",
      link: "/restaurant-pos-system",
    },
    {
      name: "Cafe",
      link: "/pos-system-for-cafe",
    },
    {
      name: "Bakery",
      link: "/bakery-pos-system",
    },
    {
      name: "Coffee Shop",
      link: "/coffee-shop-pos-system",
    },
    {
      name: "Bar",
      link: "/pos-system-for-bar",
    },
    {
      name: "Pizza Shop",
      link: "/pizza-pos",
    },
  ]
  return (
    <>
      <Head>
        <title>Hospitality POS System | Point of Sale Software | POSApt</title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalityService) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalityFaq) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <meta
          name="title"
          content="Hospitality POS System | Point of Sale Software | POSApt"
        />
        <meta
          name="description"
          content="Improved revenue. Streamlined operations. Make your hospitality business more streamlined with a Hospitality POS system by POSApt. Book a Demo!"
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
          content="Hospitality POS System | Point of Sale Software | POSApt"
        />
        <meta
          property="og:description"
          content=" Improved revenue. Streamlined operations. Make your hospitality business more streamlined with a Hospitality POS system by POSApt. Book a Demo!"
        />
        <meta property="og:url" content="https://posapt.au/hospitality-pos-system" />
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
          content="Best Hospitality POS System in Australia"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hospitality POS System | Point of Sale Software | POSApt"
        />
        <meta
          name="twitter:description"
          content=" Improved revenue. Streamlined operations. Make your hospitality business more streamlined with a Hospitality POS system by POSApt. Book a Demo!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/hospitality-pos-system" />
      </Head>
      <Layout>
        <HeroSection
          title="POSApt <br/> Hospitality POS System <br/> For Australian Businesses"
          desc="A Hospitality-centric POS system delivering flexibility and scalability."
          imgUrl="hospitality web.webp"
        />
        {/* about us */}
        <section className="bg-light pt-50 pb-50">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <img
                  className="img-fluid img-grayscale bigimg w-100 mt-lg-n5"
                  src="assets/dist/image/hosban.webp"
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
                        POSApt is the user friendly POS system integrated online
                        ordering platform. Business can manage both in shop and online
                        sales within single system. This synchronization simplifies
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
                    We Serve Hospitality Industry
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
                <h2 className=" fw-bold text-capitalize text-white mb-3 mb-md-5 text-center">
                  Benefits of a Hospitality Point of Sale Software
                </h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="why_img ">
                    <div className="media-body">
                      <h3 className="mb-2 text-white fs-20 fw-bold">
                        <i className="fas fa-check-square me-3 d-md-none" /> Happier
                        Customers{" "}
                      </h3>
                      <p>
                        {" "}
                        The right POS software enables your hospitality business to
                        take orders quickly, process payments efficiently, and manage
                        tables effectively. It also enables your business to offer
                        more personalised services and rewards to your customers. This
                        lets customers know that you care about them.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/dist/image/h4.webp"
                    alt=""
                    className="d-none d-md-flex rounded"
                  />
                </div>
              </div>
              <hr className="bg-white" />
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="assets/dist/image/h3.webp"
                    alt=""
                    className="d-none d-md-flex rounded"
                  />
                </div>
                <div className="col-md-6">
                  <div className="why_img ">
                    <div className="media-body">
                      <h3 className="mb-2 text-white fs-20 fw-bold">
                        <i className="fas fa-check-square me-3 d-md-none" /> Increased
                        Revenue
                      </h3>
                      <p>
                        {" "}
                        An efficient Point of Sale software helps your business to
                        save time and resources. As your business operations are now
                        managed you can focus on more productive tasks. Moreover, the
                        system also helps upsell and cross-sell your products to
                        generate more revenue.
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
                      <h3 className="mb-2 text-white fs-20 fw-bold">
                        <i className="fas fa-check-square me-3 d-md-none" />
                        Streamlined Operations
                      </h3>
                      <p>
                        {" "}
                        The primary difference you’ll notice after the installation of
                        a POS system is that there are fewer manual errors. You will
                        also notice that business processes are achieved quicker than
                        ever. That is the beauty of getting a cloud-based POS system
                        for your hospitality business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src="assets/dist/image/h1.webp"
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
                    Why Choose <br />
                    POSApt Hospitality POS Software?
                  </h2>
                </div>
              </div>
              <div className="row align-items-center mb-3 ">
                <div className="col-md-6">
                  <div className="chooseimg1">
                    <img
                      src="assets/dist/image/hos1.webp"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose_para ser_inner">
                    <h3 className="mt-4 mb-3 fw-bold text-theme">
                      <span className="fs-61 text-theme">1.</span> Simple &amp;
                      Intuitive{" "}
                    </h3>
                    <p>
                      POSApt offers an easy-to-use interface that requires minimal
                      training but doesn’t lack anything in the features department.
                      The interface is designed to simplify transactions and minimise
                      errors. This allows staff to focus on providing excellent
                      customer service.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">
                          <a>Simple but powerful </a>
                        </li>
                        <li className="fw-bold">
                          <a>Intuitive navigation </a>
                        </li>
                        <li className="fw-bold">
                          <a>Minimal training required</a>
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
                      <span className="fs-61 text-theme">2.</span> Tailored To
                      Hospitality’s Needs{" "}
                    </h3>
                    <p>
                      POSApt is custom-built with Hospitality businesses in mind. You
                      can easily customise menus, update prices, manage orders, and
                      send orders directly to a dedicated kitchen printer. The best
                      part is everything happens in real time.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">
                          <a>Customisable menu </a>
                        </li>
                        <li className="fw-bold">
                          <a>Easy integration of kitchen printer</a>
                        </li>
                        <li className="fw-bold">
                          <a>Features best suited for hospitality industry</a>
                        </li>
                      </ul>
                      {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-first order-md-last">
                  <div className="chooseimg1">
                    <img
                      src="assets/dist/image/hos2.webp"
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
                      src="assets/dist/image/hos3.webp"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose_para ser_inner">
                    <h3 className="mt-4 mb-3 fw-bold text-theme">
                      <span className="fs-61 text-theme">3.</span> Integrated with
                      Hospitality-Specific Systems{" "}
                    </h3>
                    <p>
                      POSApt is designed to integrate seamlessly with essential
                      systems such as Xero. Moreover, you can also integrate 3rd party
                      software like accounting software, online ordering system, and
                      CRM tools.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">
                          <a>Access Xero within POSApt </a>
                        </li>
                        <li className="fw-bold">
                          <a>Manage customer relationships </a>
                        </li>
                        <li className="fw-bold">
                          <a>Get real-time inventory details</a>
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
                      <span className="fs-61 text-theme">4.</span> Real-Time Reporting
                    </h3>
                    <p>
                      POSApt provides real-time reporting on sales, inventory, and
                      other key metrics, allowing you to make tactical business
                      decisions. This feature is particularly useful for hospitality
                      businesses that need to make quick decisions based on real-time
                      data.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">
                          <a>View KPIs in dashboard </a>
                        </li>
                        <li className="fw-bold">
                          <a>Explore monthly reports </a>
                        </li>
                        <li className="fw-bold">
                          <a>Make data-driven decisions</a>
                        </li>
                      </ul>
                      {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-first order-md-last">
                  <div className="chooseimg1">
                    <img
                      src="assets/dist/image/hos6.webp"
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
                      src="assets/dist/image/hos5.webp"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose_para ser_inner">
                    <h3 className="mt-4 mb-3 fw-bold text-theme">
                      <span className="fs-61 text-theme">5.</span> Franchise Business
                      Support{" "}
                    </h3>
                    <p>
                      No matter the number of outlets your hospitality business has,
                      POSApt can easily manage all your franchised businesses. And you
                      do not have to install a separate software application for each
                      of your outlets.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">
                          <a>Manage multiple outlets </a>
                        </li>
                        <li className="fw-bold">
                          <a>View store performance </a>
                        </li>
                        <li className="fw-bold">
                          <a>Customise menu for all</a>
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
                      <span className="fs-61 text-theme">6.</span> Excellent Customer
                      Support
                    </h3>
                    <p>
                      Trouble-free operation in your business is what we’re looking
                      for. That is why, we’re offering 24*7 dedicated support for both
                      hardware and software issues.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">
                          <a>Expert customer support</a>
                        </li>
                        <li className="fw-bold">
                          <a>Available all the time</a>
                        </li>
                        <li className="fw-bold">
                          <a>Zero charge </a>
                        </li>
                      </ul>
                      {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-first order-md-last">
                  <div className="chooseimg1">
                    <img
                      src="assets/dist/image/cs1.webp"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          faqData={faqData}
        />
      </Layout>
    </>
  );
};

export default HospitalityPosSystem;
