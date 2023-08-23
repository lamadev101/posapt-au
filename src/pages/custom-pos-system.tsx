/** @format */

import React from "react";
import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import Head from 'next/head';
import { useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import ContactFormSection from "@/sections/ContactFormSection";
import SignUpSection from "@/sections/SignUpSection";
import MailAndCall from "@/Components/MailAndCall";
import HeroSection from "@/sections/hero/HeroSection";

const CustomPosSystem = () => {
  const { price } = useSelector((state: RootState) => state.StateManager);
  const customService =
  {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Custom Point-of-Sale (POS) System",
    "description": "Why settle for an off-the-shelf solution when you can have a custom point-of-sale system that's perfectly suited to your needs? Whether you're in the hospitality industry or the retail side of things,  POSApt's custom point-of-sale system can help you run your business more efficiently.",
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
      "name": "Custom POS",
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
  const customFaq =
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a custom POS system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "needs of a business, with a highly customizable interface and features that can be tailored to specific workflows and processes."
      }
    }, {
      "@type": "Question",
      "name": "How much does a custom POS system cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POSApt’s custom POS system only costs $" + price.basic + " per month for the basic plan. For the standard plan, it is " + price.online + " per month and " + price.popular + " per month respectively."
      }
    }, {
      "@type": "Question",
      "name": "How long does it take to implement a custom POS system?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time it takes to implement a POS system varies depending on the complexity of the system and the size of the business. However, POSApt's custom POS system can be implemented within a few days with minimal disruption to your business."
      }
    }, {
      "@type": "Question",
      "name": "Can a custom POS system be integrated with other business tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Custom POS Software can be integrated with other business tools, such as accounting software, CRM systems, and online ordering platforms."
      }
    }]
  }
  return (
    <>
      <Head>
        <title>Custom POS System | Custom Point of Sale Software</title>

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(customService) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(customFaq) }}
        />
        <meta
          name="title"
          content="Custom POS System | Custom Point of Sale Software"
        />
        <meta
          name="description"
          content="A perfect custom point-of-sale system for your business. POSApt lets you customise features based on your business requirements. Shop Now!"
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
          content="Custom POS System | Custom Point of Sale Software"
        />
        <meta
          property="og:description"
          content="A perfect custom point-of-sale system for your business. POSApt lets you customise features based on your business requirements. Shop Now!"
        />
        <meta property="og:url" content="https://posapt.au/custom-pos-system" />
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
          content="Best Custom POS System in Australia"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom POS System | Custom Point of Sale Software"
        />
        <meta
          name="twitter:description"
          content="A perfect custom point-of-sale system for your business. POSApt lets you customise features based on your business requirements. Shop Now!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/custom-pos-system" />
      </Head>
      <Layout>
        <>
          <ScrollToTop />
          <HeroSection
            tagline="Tailored To You"
            title="POSApt Custom POS System"
            desc="Why settle for an off-the-shelf solution when you can have a custom point-of-sale system that's perfectly suited to your needs? Whether you're in the hospitality industry or the retail side of things,  POSApt's custom point-of-sale system can help you run your business more efficiently."
            imgUrl="/assets/dist/image/ServicesImages/custom.webp"
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
                        Custom POS System
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
                              src="assets/dist/posicons/custom/tailored.png"
                              className="img-fluid h-100"
                              alt="Tailored to You"
                              title="Tailored to You"
                              data-pagespeed-url-hash={1416024010}
                            />
                          </div>
                          <h3 className="mt-4 mb-3">Tailored to You</h3>
                        </div>
                        <p>
                          As the name suggests, a custom POS system can be tailored to your specific business needs. This ensures that you have all the features and tools you need to run your business smoothly.
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
                              src="assets/dist/posicons/custom/efficiency.png"
                              className="img-fluid h-100"
                              alt="Increased Efficiency"
                              title="Increased Efficiency"
                              data-pagespeed-url-hash={1416024010}
                            />
                          </div>
                          <h3 className="mt-4 mb-3">Increased Efficiency</h3>
                        </div>
                        <p>
                          Since it is a custom system designed with your personalised needs and requirements, it can help you to make the most out of your business. It can streamline your operations and increase efficiency, saving you both time and money.
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
                              src="assets/dist/posicons/custom/reporting.png"
                              className="img-fluid h-100"
                              alt="Advanced Reporting"
                              title="Advanced Reporting"
                              data-pagespeed-url-hash={1416024010}
                            />
                          </div>
                          <h3 className="mt-4 mb-3">Advanced Reporting</h3>
                        </div>
                        <p>
                          With all the data of your customer’s journey from buying an item to their payment preferences, this system generates detailed reports on sales, inventory, and customer behaviour to make informed business decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* features */}
          <section className="pt-50 pb-50 bg-light mt-5">
            <div className="container">
              <div className="row text-center">
                <div className="heading_s1 w-80 poshead text-center">
                  {/* <span class="sub_heading font_style1">Why Choose Us?</span> */}
                  <h2 className=" fw-bold text-capitalize">
                    6 Must-Have Features of a
                    <span className="text-theme">Custom POS System</span>
                  </h2>
                </div>
              </div>
              <div className="row g-4 row-cols-xl-3 row-cols-lg-4 row-cols-1 row-cols-md-2 mt-2">
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-headset" />
                      </div>
                      <h3 className="mb-2">24/7 Support</h3>
                      <p>
                        Support is at the top of this list because when a system is customised to your needs, it sometimes can be difficult to find solutions to your unique problems. That is why, a custom POS should offer 24/7 customer support to ensure that any issues are promptly resolved.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-cogs" />
                      </div>
                      <h3 className="mb-2">Integration</h3>
                      <p>
                        Custom POS software should be able to integrate with all your business tools. This may include accounting software, CRM systems, and online ordering systems, to streamline operations and manage data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-users" />
                      </div>
                      <h3 className="mb-2">Customer Management</h3>
                      <p>
                        At the end of the day, what matters most is the satisfaction of your customers. So, this system should allow for customer management, including loyalty programs, personalised offers, and targeted promotions.
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
                      <h3 className="mb-2">Payment Processing</h3>
                      <p>
                        Customers in different businesses and locations have their own preferences for payment options. So your POS system should support multiple payment methods, including credit cards, mobile payments, and gift cards, with secure and efficient payment processing.
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
                      <h3 className="mb-2">Customisable Interface</h3>
                      <p>
                        A POS system should be as easy as pie to make it your own. It should have a user-friendly interface that can be tailored to your specific business needs, such as adding your logo, colours, and branding.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card h-100 service_box border-0 ">
                    <div className="card-body ">
                      <div className="card_icon ">
                        <i className="fas fa-chart-line" />
                      </div>
                      <h3 className="mb-2">Scalability</h3>
                      <p>
                        And finally, when it’s time to scale up your business, this system should grow together with your business needs without hindering ongoing operations. The system should be flexible enough to adjust to your business processes and workflows, as you grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SignUpSection/>

          {/* reasons */}
          <section>
            <div className="container">
              <div className="whychoose">
                <div className="row text-center">
                  <div className="heading_s1 w-80 poshead text-center">
                    {/* <span class="sub_heading font_style1">Why Choose Us?</span> */}
                    <h2 className=" fw-bold text-capitalize">
                      6 Reasons to Choose
                      <span>POSApt Custom POS Software</span>
                    </h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="chooseimg">
                      <img
                        src="/assets/dist/image/reason/custom/tailored.png"
                        className="img-fluid"
                        alt="Tailored to Your Business Needs"
                        title="Tailored to Your Business Needs"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">1. Tailored to Your Business Needs </h3>
                      <p>
                        Our custom POS system is specifically designed to meet the unique needs of your business. The system offers the highest amount of customizability and features that can be tailored to your workflows and processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">2. Improved Efficiency </h3>
                      <p>
                        With features like real-time inventory tracking, automated reorder, and advanced reporting, POSapt's custom point-of-sale can help improve your business efficiency, reduce manual errors, and optimize your operations.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg">
                      <img
                        src="/assets/dist/image/reason/custom/improved_efficiency.png"
                        className="img-fluid"
                        alt="Improved Efficiency"
                        title="Improved Efficiency"
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="chooseimg">
                      <img
                        src="/assets/dist/image/reason/custom/better_customer_experience.png"
                        className="img-fluid"
                        alt="Better Customer Experience"
                        title="Better Customer Experience"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">
                        3. Better Customer Experience
                      </h3>
                      <p>
                        As per your business’s needs, our system can include various customer management features. Some of these are loyalty programs and targeted promotions, to enhance customers' experience and drive sales and profits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">4. Seamless Integration</h3>
                      <p>
                        We understand that you might already have a few different types of systems in your business right now. So, our system can integrate with other business tools, such as accounting software and online ordering systems, to provide a seamless experience.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg">
                      <img
                        src="/assets/dist/image/reason/custom/seamless_integration.png"
                        className="img-fluid"
                        alt="Seamless Integration"
                        title="Seamless Integration"
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="chooseimg">
                      <img
                        src="/assets/dist/image/reason/custom/scalability.png"
                        className="img-fluid"
                        alt="Scalability"
                        title="Scalability"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">5. Scalability</h3>
                      <p>
                        One of the key advantages of POSApt's custom POS software is its scalability. The software is designed to handle high transaction volumes, so as a business grows, the software can handle the increased traffic without any performance issues.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="choose_para ser_inner">
                      <h3 className="mt-4 mb-3">6. Dedicated Support</h3>
                      <p>
                        We have dedicated and experienced professionals ready to provide unparalleled support to our clients. We provide 24/7 assistance to ensure that any issues are resolved promptly.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 order-first order-md-last">
                    <div className="chooseimg">
                      <img
                        src="/assets/dist/image/reason/custom/dedicated.png"
                        className="img-fluid"
                        alt="Dedicated Support"
                        title="Dedicated Support"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ContactFormSection
            businessTitle="custom"
          />

          {/* faq */}
          <section
            className=" py-5 "
            style={{
              background:
                "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)"
            }}
          >
            <div className="container">
              <div className="row py-2 py-md-4 py-lg-5">
                <MailAndCall/>
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
                          What is a custom POS system?
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
                            A custom POS system is a point-of-sale system that is specifically designed to meet the unique needs of a business, with a highly customizable interface and features that can be tailored to specific workflows and processes.
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
                          How much does a custom POS system cost?
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
                            POSApt’s custom POS system only costs ${price.basic} per month for the basic plan. For the standard plan, it is ${price.online} per month and ${price.popular} per month respectively.
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
                          How long does it take to implement a custom POS system?
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
                            The time it takes to implement a POS system varies depending on the complexity of the system and the size of the business. However, POSApt's custom POS system can be implemented within a few days with minimal disruption to your business.
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
                          Can a custom POS system be integrated with other business tools?
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
                            Yes, Custom POS Software can be integrated with other business tools, such as accounting software, CRM systems, and online ordering platforms.
                          </p>
                        </div>
                      </div>
                    </div>
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

export default CustomPosSystem;