/** @format */

import React from "react";
import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import Head from 'next/head';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/reducers";
import MailAndCall from "@/Components/MailAndCall";
import ContactFormSection from "@/sections/ContactFormSection";
import SignUpSection from "@/sections/SignUpSection";
import HeroSection from "@/sections/hero/HeroSection";


const HospitalityPosSystem = () => {
  const { price } = useSelector((state: RootState) => state.StateManager);
  const dispatch = useDispatch();
  const hospitalityService =
  {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Hospitality Point-of-Sale (POS) System",
    "description": "The Choice of Top Hospitality EstablishmentsPOSApt’s Hospitality POS SystemComprehensive yet intuitive point-of-sale system for hospitality businessesA Hospitality-centric cloud-based POS system delivering flexibility and scalability for 2023’s business needs. Manage sales, orders, inventories, payments, customer relationships & employee relationships with one complete system.Benefits of a Hospitality Point of Sale Software1. Happier CustomersThe right POS software enables your hospitality business to take orders quickly, process payments efficiently, and manage tables effectively. It also enables your business to offer more personalised services and rewards to your customers. This lets customers know that you care about them.2. Streamlined OperationsThe primary difference you’ll notice after the installation of a POS system is that there are fewer manual errors. You will also notice that business processes are achieved quicker than ever. That is the beauty of getting a cloud-based POS system for your hospitality business.3. Increased RevenueAn efficient Point of Sale software helps your business to save time and resources. As your business operations are now managed you can focus on more productive tasks. Moreover, the system also helps upsell and cross-sell your products to generate more revenue. 6 Must-Have Features of a Hospitality Point of Sale SystemUser-Friendly InterfaceA POS system for hospitality businesses should be easy to use. A simple and intuitive interface enables quick transactions and reduces the risk of errors. Less manual errors mean more productivity.Customisable Menus and ItemsYour POS system should allow you to easily customise menus and item options to meet your specific needs and preferences. A customised menu based on customers' purchase history increases revenue. Integration with Other SystemsThere’s more to a hospitality business than just what happens at the counter. So, a good POS  should be able to integrate with other systems such as accounting software, inventory management, and online ordering systems.Real-Time ReportingHospitality Point of Sale systems should provide real-time reports on sales, inventory, and other key metrics. This enables you to make informed business decisions and tactical future plans.  Security and ComplianceA great POS system should be secure and compliant with industry standards. Protecting your business and customer data is key and you should thoroughly examine this feature before finalising a POS.Omnichannel SupportAn advanced POS system for the hospitality business should come with omnichannel support. This will help you manage online and offline sales with one robust system. Moreover, you will have accurate reporting for both. 5 Reasons to ChoosePOSApt Hospitality POS SoftwareSimple & IntuitivePOSApt offers an easy-to-use interface that requires minimal training but doesn’t lack anything in the features department. The interface is designed to simplify transactions and minimise errors. This allows staff to focus on providing excellent customer service.The system is also multi-platform compatible. This means you can use the system on desktop systems, laptops, tablets, or even smartphones. Tailored To Hospitality’s NeedsPOSApt is custom-built with Hospitality businesses in mind. You can easily customise menus, update prices, manage orders, and send orders directly to a dedicated kitchen printer. The best part is everything happens in real time. Any time a customer places an order, the order is instantaneously transferred to those who prepare the order. Your staff will be able to manage multiple tables much quicker and with precision.Integrated with Hospitality-Specific SystemsPOSApt is designed to integrate seamlessly with essential systems such as Xero and MYOB. Moreover, you can also integrate 3rd party software like accounting software, online ordering system, and CRM tools. You won’t have to stop using the systems that you’re already familiar with and love. All the data can be seamlessly synchronised to our POS system with relative ease.Real-Time ReportingPOSApt provides real-time reporting on sales, inventory, and other key metrics, allowing you to make tactical business decisions. This feature is particularly useful for hospitality businesses that need to make quick decisions based on real-time data.All key metrics are visible on the dashboard of our POS system as soon as you log into it. You can also download daily, weekly or monthly reports to explore them even further.Franchise Business SupportNo matter the number of outlets your hospitality business has, POSApt can easily manage all your franchised businesses. And you do not have to install a separate software application for each of your outlets.The system will be installed on all your outlets but the will be managed by a centralised server. You can look at the performance of all the outlets with one single app. Excellent Customer SupportTrouble-free operation in your business is what we’re looking for. That is why, we’re offering 24*7 dedicated support for both hardware and software issues. And, unlike other POS providers who tend to charge hefty fees, we don’t charge you any extra penny. So, don’t shy away from reaching out to us whenever you run into an issue with POSApt.FAQsWhat is a Hospitality POS System?A Hospitality Point of Sale System is a business solution that helps businesses manage their sales transactions and inventory efficiently. It is the combination of both hardware and software that streamlines business operations. What are the benefits of using a Hospitality POS System?Some benefits of using a Hospitality POS Solution include:Improved efficiency in managing sales transactions and inventoryReal-time reporting and analyticsBetter accuracy in order takingReducing manual errorsAccepts various forms of paymentHow much does Hospitality POS Software cost?The cost of hospitality POS software ranges anywhere between $60 to $300, depending upon the business need. POSApt has a starting price of $66/month for the basic setup. How long does it take to set up a Hospitality POS System?Normally, the setup time is around 1 - 2 hours. Given that you already have the hardware system ready. If not, the time will be consumed to purchase dedicated hardware based on your need. However, cloud-based systems such as POSApt can be set up quickly as compared to on-premise systems.What type of support is available for Hospitality POS Systems?Most Hospitality POS System providers offer various types of support, including phone and email support. Some providers may also offer additional support services, such as hardware repair and software customization. For POSApt, we offer all the above-mentioned support services almost instantly when you need us the most. Because we understand even the smallest of delays can have a massive impact on your business.",
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
      "name": "Hospitality POS",
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
            "name": "Basic Plan - " + price.basic + " AUD per month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Plan - " + price.online + " AUD per month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Popular Plan - " + price.popular + " AUD per month"
          }
        }
      ]
    }
  }
  const hospitalityFaq =
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a Hospitality POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Hospitality POS (Point of Sale) System, like POSApt, is a software and hardware solution that helps businesses in the hospitality industry, such as restaurants and hotels, manage their sales transactions and inventory efficiently."
      }
    }, {
      "@type": "Question",
      "name": "What are the benefits of using a Hospitality POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some benefits of using a Hospitality POS System include improved efficiency in managing sales transactions and inventory, real-time reporting and analytics, better accuracy in order taking and reducing manual errors, and the ability to accept various forms of payment."
      }
    }, {
      "@type": "Question",
      "name": "Can POSApt be integrated with Xero or MYOB software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, POSApt can be integrated with accounting software like Xero and MYOB. On top of that, POSApt can also be integrated with multiple other essential systems such as an online ordering system, marketing tools, etc."
      }
    }, {
      "@type": "Question",
      "name": "How much does Hospitality POS Software cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of POS Software varies depending on the provider, the features included, and the hardware type. POSApt has a starting price of " + price.basic + "/month for the basic setup."
      }
    }, {
      "@type": "Question",
      "name": "Can a Hospitality POS System help with inventory management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Hospitality POS Systems including POSApt can help you with inventory management by tracking inventory levels in real-time and providing detailed reports on food and labour costs. You can also set notifications for when you want to be notified when your inventory is running low."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take to set up a Hospitality POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time it takes to set up a POS System for your hospitality business varies on a number of factors such as the system provider, the complexity of the system and the number of locations you want to set it up, for instance; in a franchised business. Cloud-based systems such as POSApt can be set up quickly, while on-premises systems may take longer to install and configure."
      }
    }, {
      "@type": "Question",
      "name": "Can a Hospitality POS System help with employee management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While most POS systems in the Australian market don’t have employee management features, POSApt has built-in features for employee management. Attendance tracking, shift scheduling, performance monitoring, etc. are some of the common features of POSApt."
      }
    }, {
      "@type": "Question",
      "name": "What type of support is available for Hospitality POS Systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Hospitality POS System providers offer various types of support, including phone and email support, online documentation and tutorials, and on-site training. Some providers may also offer additional support services, such as hardware repair and software customization. For POSApt, we offer all the above-mentioned support services almost instantly when you need us the most. Because we understand even the smallest of delays can have a massive impact on your business."
      }
    }]
  }
  return (
    <>
      <Head>
        <title>Hospitality POS System | Hospitality Point of Sale Software</title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalityService) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalityFaq) }}
        />
        <meta
          name="title"
          content="Hospitality POS System | Hospitality Point of Sale Software"
        />
        <meta
          name="description"
          content="Improved revenue. Streamlined operations. Customer satisfaction. Make your hospitality business more efficient with a Hospitality POS system. Book a Demo!"
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
          content="Hospitality POS System | Hospitality Point of Sale Software"
        />
        <meta
          property="og:description"
          content=" Improved revenue. Streamlined operations. Customer satisfaction. Make your hospitality business more efficient with a Hospitality POS system. Book a Demo!"
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
          content="Hospitality POS System | Hospitality Point of Sale Software"
        />
        <meta
          name="twitter:description"
          content=" Improved revenue. Streamlined operations. Customer satisfaction. Make your hospitality business more efficient with a Hospitality POS system. Book a Demo!"
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
        <>
          <ScrollToTop />
          <HeroSection
            tagline="The Choice of Top Hospitality Establishments"
            title="POSApt’s Hospitality POS System"
            desc="A Hospitality-centric cloud-based POS system delivering flexibility and scalability for 2023’s business needs. Manage sales, orders, inventories, payments, customer relationships & employee relationships with one complete system."
            imgUrl="assets/dist/image/ServicesImages/hospitality.webp"
          />

          {/* benefits */}
          <section className="pb-50 pt-50 bg-gradient1 ">
            <div className="keyfeatures text-center  ">
              <div className="container">
                <div className="row ">
                  <div className="heading_s1 w-80 poshead">
                    {/* <span class="sub_heading font_style1">Why Choose Us?</span> */}
                    <h2 className=" fw-bold text-capitalize">
                      Benefits of a{" "}
                      <span className="text-theme">
                        Hospitality Point of Sale Software
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-4">
                    <div className="card border-0  rounded-xs h-100">
                      <div className="card-body service_item">
                        <div className="ser_inner ">
                          <div className="ser_img">
                            <img
                              src="assets/dist/posicons/hospitality/customer_service.png"
                              className="img-fluid h-100"
                              alt="Improved Customer Service"
                              title="Improved Customer Service"
                              data-pagespeed-url-hash={1416024010}
                            />
                          </div>
                          <h3 className="mt-4 mb-3">Happier Customers</h3>
                        </div>
                        <p>
                          The right POS software enables your hospitality business to take orders quickly, process payments efficiently, and manage tables effectively. It also enables your business to offer more personalised services and rewards to your customers. This lets customers know that you care about them.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-0  rounded-xs h-100">
                      <div className="card-body service_item">
                        <div className="ser_inner ">
                          <div className="ser_img">
                            <img
                              src="assets/dist/posicons/hospitality/operation.png"
                              className="img-fluid h-100"
                              alt="Streamlined Operations"
                              title="Streamlined Operations"
                              data-pagespeed-url-hash={1416024010}
                            />
                          </div>
                          <h3 className="mt-4 mb-3">Streamlined Operations </h3>
                        </div>
                        <p>
                          The primary difference you’ll notice after the installation of a POS system is that there are fewer manual errors. You will also notice that business processes are achieved quicker than ever. That is the beauty of getting a cloud-based POS system for your hospitality business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border-0  rounded-xs h-100">
                      <div className="card-body service_item">
                        <div className="ser_inner ">
                          <div className="ser_img">
                            <img
                              src="assets/dist/posicons/hospitality/revenue.png"
                              className="img-fluid h-100"
                              alt="Increased Revenue"
                              title="Increased Revenue"
                              data-pagespeed-url-hash={1416024010}
                            />
                          </div>
                          <h3 className="mt-4 mb-3">Increased Revenue </h3>
                        </div>
                        <p>
                          An efficient Point of Sale software helps your business to save time and resources. As your business operations are now managed you can focus on more productive tasks. Moreover, the system also helps upsell and cross-sell your products to generate more revenue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* features */}
          <section className="pt-50 pb-50 bg-light">
            <div className="container">
              <div className="row text-center">
                <div className="heading_s1 w-80 poshead text-center">
                  <h2 className=" fw-bold text-capitalize">
                    6 Must-Have Features of a{" "}
                    <span className="text-theme">
                      Hospitality Point of Sale System
                    </span>
                  </h2>
                </div>
              </div>
              <div className="row g-4 row-cols-xl-3 row-cols-lg-4 row-cols-1 row-cols-md-2 mt-2">
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-universal-access"></i>
                      </div>
                      <h3 className="mb-2">User-Friendly Interface</h3>
                      <p>
                        A POS system for hospitality businesses should be easy to use. A simple and intuitive interface enables quick transactions and reduces the risk of errors. Less manual errors mean more productivity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-list"></i>
                      </div>
                      <h3 className="mb-2">Customisable Menus and Items</h3>
                      <p>
                        Your POS system should allow you to easily customise menus and item options to meet your specific needs and preferences. A customised menu based on customers' purchase history increases revenue.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-desktop" />
                      </div>
                      <h3 className="mb-2">Integration with Other Systems</h3>
                      <p>
                        There’s more to a hospitality business than just what happens at the counter. So, a good POS  should be able to integrate with other systems such as accounting software, inventory management, and online ordering systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-file-invoice" />
                      </div>
                      <h3 className="mb-2">Real-Time Reporting</h3>
                      <p>
                        Hospitality Point of Sale systems should provide real-time reports on sales, inventory, and other key metrics. This enables you to make informed business decisions and tactical future plans.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-unlock" />
                      </div>
                      <h3 className="mb-2">Security and Compliance</h3>
                      <p>
                        A great POS system should be secure and compliant with industry standards. Protecting your business and customer data is key and you should thoroughly examine this feature before finalising a POS.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-credit-card" />
                      </div>
                      <h3 className="mb-2">Omnichannel Support</h3>
                      <p>
                        An advanced POS system for the hospitality business should come with omnichannel support. This will help you manage online and offline sales with one robust system. Moreover, you will have accurate reporting for both.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SignUpSection />

          {/* reasons */}
          <section>
            <div className="container">
              <div className="whychoose">
                <div className="row text-center">
                  <div className="heading_s1 w-80 poshead text-center">
                    {/* <span class="sub_heading font_style1">Why Choose Us?</span> */}
                    <h2 className=" fw-bold text-capitalize">
                      6 Reasons to Choose{" "}
                      <span className="text-theme">
                        POSApt Hospitality POS Software
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="chooseimg">
                      <img
                        src="assets/dist/image/reason/hospitality/simple_intuitive.png"
                        className="img-fluid"
                        alt="1. Simple and Intuitive"
                        title="1. Simple and Intuitive"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">1. Simple &amp; Intuitive </h3>
                      <p>
                        POSApt offers an easy-to-use interface that requires minimal training but doesn’t lack anything in the features department. The interface is designed to simplify transactions and minimise errors. This allows staff to focus on providing excellent customer service.
                      </p>
                      <p>
                        The system is also multi-platform compatible. This means you can use the system on desktop systems, laptops, tablets, or even smartphones.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">2. Tailored To Hospitality’s Needs</h3>
                      <p>
                        POSApt is custom-built with Hospitality businesses in mind. You can easily customise menus, update prices, manage orders, and send orders directly to a dedicated kitchen printer. The best part is everything happens in real time.
                      </p>
                      <p>
                        Any time a customer places an order, the order is instantaneously transferred to those who prepare the order. Your staff will be able to manage multiple tables much quicker and with precision.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg">
                      <img
                        src="assets/dist/image/reason/hospitality/tailored.png"
                        className="img-fluid"
                        alt="2. Tailored To Hospitality’s Needs"
                        title="2. Tailored To Hospitality’s Needs"
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="chooseimg">
                      <img
                        src="assets/dist/image/reason/hospitality/integration.png"
                        className="img-fluid"
                        alt="3. Integrated with Hospitality-Specific Systems"
                        title="3. Integrated with Hospitality-Specific Systems"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">
                        3. Integrated with Hospitality-Specific Systems
                      </h3>
                      <p>
                        POSApt is designed to integrate seamlessly with essential systems such as Xero and MYOB. Moreover, you can also integrate 3rd party software like accounting software, online ordering system, and CRM tools.
                      </p>
                      <p>
                        You won’t have to stop using the systems that you’re already familiar with and love. All the data can be seamlessly synchronised to our POS system with relative ease.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">4. Real-Time Reporting</h3>
                      <p>
                        POSApt provides real-time reporting on sales, inventory, and other key metrics, allowing you to make tactical business decisions. This feature is particularly useful for hospitality businesses that need to make quick decisions based on real-time data.
                      </p>
                      <p>
                        All key metrics are visible on the dashboard of our POS system as soon as you log into it. You can also download daily, weekly or monthly reports to explore them even further.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg">
                      <img
                        src="assets/dist/image/reason/hospitality/realtime.png"
                        className="img-fluid"
                        alt="4. Real-Time Reporting"
                        title="4. Real-Time Reporting"
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="chooseimg">
                      <img
                        src="assets/dist/image/reason/hospitality/business.png"
                        className="img-fluid"
                        alt="5. Franchise Business Support"
                        title="5. Franchise Business Support"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">5. Franchise Business Support</h3>
                      <p>
                        No matter the number of outlets your hospitality business has, POSApt can easily manage all your franchised businesses. And you do not have to install a separate software application for each of your outlets.
                      </p>
                      <p>
                        The system will be installed on all your outlets but the will be managed by a centralised server. You can look at the performance of all the outlets with one single app.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">6. Excellent Customer Support</h3>
                      <p>
                        Trouble-free operation in your business is what we’re looking for. That is why, we’re offering 24*7 dedicated support for both hardware and software issues.
                      </p>
                      <p>
                        And, unlike other POS providers who tend to charge hefty fees, we don’t charge you any extra penny. So, don’t shy away from reaching out to us whenever you run into an issue with POSApt.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg">
                      <img
                        src="assets/dist/image/reason/retail/customer_support.png"
                        className="img-fluid"
                        alt="Excellent Customer Support"
                        title="Excellent Customer Support"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <ContactFormSection
            businessTitle="hospitality"
          />

          {/* faq */}
          <section
            className=" pb-5 pt-0"
            style={{
              background:
                "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)"
            }}
          >
            <div className="container">
              <div className="row py-2 py-md-4 py-lg-5">
                <MailAndCall />
                <div className="col-md-7 offset-xl-1">
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
                          What is a Hospitality POS System?
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
                            A Hospitality Point of Sale System is a business solution that helps businesses manage their sales transactions and inventory efficiently. It is the combination of both hardware and software that streamlines business operations.
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
                          What are the benefits of using a Hospitality POS System?
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
                            Some benefits of using a Hospitality POS Solution include:
                          </p>
                          <ul
                            style={{
                              listStyleType: "disc",
                              paddingLeft: "20px",
                            }}
                          >
                            <li>Improved efficiency in managing sales transactions and inventory</li>
                            <li>Real-time reporting and analytics</li>
                            <li>Better accuracy in order taking</li>
                            <li>Reducing manual errors</li>
                            <li>Accepts various forms of payment</li>
                          </ul>
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
                          How much does Hospitality POS Software cost?
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
                            The cost of hospitality POS software ranges anywhere between $60 to $300, depending upon the business need. POSApt has a starting price of $66/month for the basic setup.
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
                          How long does it take to set up a Hospitality POS System?
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
                            Normally, the setup time is around 1 - 2 hours. Given that you already have the hardware system ready. If not, the time will be consumed to purchase dedicated hardware based on your need. However, cloud-based systems such as POSApt can be set up quickly as compared to on-premise systems.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h3 className="accordion-header" id="q5-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q5"
                          aria-expanded="false"
                          aria-controls="q5"
                        >
                          What type of support is available for Hospitality POS Systems?
                        </button>
                      </h3>
                      <div
                        id="q5"
                        className="accordion-collapse collapse"
                        aria-labelledby="q5-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p>
                            Most Hospitality POS System providers offer various types of support, including phone and email support. Some providers may also offer additional support services, such as hardware repair and software customization. For POSApt, we offer all the above-mentioned support services almost instantly when you need us the most. Because we understand even the smallest of delays can have a massive impact on your business.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item border-0 rounded-3 shadow-sm">
                      <h3 className="accordion-header" id="q6-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q6"
                          aria-expanded="false"
                          aria-controls="q6"
                        >
                          How long does it take to set up a Hospitality POS System?
                        </button>
                      </h3>
                      <div
                        id="q6"
                        className="accordion-collapse collapse"
                        aria-labelledby="q6-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p>
                            The time it takes to set up a POS System for your hospitality business varies on a number of factors such as the system provider, the complexity of the system and the number of locations you want to set it up, for instance; in a franchised business. Cloud-based systems such as POSApt can be set up quickly, while on-premises systems may take longer to install and configure.
                          </p>
                        </div>
                      </div>
                    </div> */}
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

export default HospitalityPosSystem;
