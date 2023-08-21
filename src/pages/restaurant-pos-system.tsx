/** @format */

import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import Head from 'next/head';
import PricingSection from "@/sections/PricingSection";
import ContactFormSection from "@/sections/ContactFormSection";
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection";

const Restuarant = () => {
  const featureDatas = [
    {
      title: `All Orders In 1 Single App`,
      describe: `Whether your orders come from the restaurant’s reception, customer table, online website or a third-party food delivery company such as Uber, control them all from a single mobile application.`
    }, {
      title: `Multiple Ways to Accept Payment`,
      describe: `Alongside EFTPOS integration, our POS system also allows your customers to pay via PayPal or Google Pay, allowing more payment options without any security risk.`
    }, {
      title: `Integrated with Xero, MYOB, and Quickbooks`,
      describe: `Keep your restaurant’s accounts in check with direct integration with Leading Accounting Software including Xero, MYOB, and Quickbooks.`
    }, {
      title: `30 Days Free Trial`,
      describe: `Give our Restaurant POS software a try for absolutely ZERO cost for the first 30 days. No Commitments Required!`
    }
  ];
  const featureDatas2 = [
    {
      title: `Streamlined Ordering Process`,
      describe: `A POS system designed for restaurants simplifies the order-taking process by allowing your waitstaff to input orders directly into the system. This eliminates the need for paper tickets or manual entry which is more prone to false data storage. POSApt reduces errors, improves order accuracy, and ensures efficient communication between the front-of-house and kitchen staff.`
    }, {
      title: `Faster Service + Happier Customers`,
      describe: `With our system, all your orders will be transmitted instantly to the kitchen, enabling faster preparation and serving of meals. This will reduce wait times and enhance the overall dining experience of your customers.`
    }, {
      title: `Integrated Payment Processing`,
      describe: `The restaurant POS system comes with integrated payment processing capabilities, allowing you to accept payments via multiple methods. Some popular ways are hand cash, credit/debit cards, or digital payment platforms. This streamlines the payment process, reduces errors, and improves transaction security.`
    }, {
      title: `Employee Performance Tracking`,
      describe: `Our POS system also has employee performance tracking capabilities. It keeps track of individual employee work schedules, hours worked and more. This data helps identify high-performing staff members, provide targeted training, and incentivize employees based on their performance metrics.`
    }
  ];
  const faqDatas = [
    {
      qus: `1. What is a POS system in a restaurant?`,
      ans: `A restaurant POS system is a combination of hardware and software used to effectively manage various operations of a restaurant. It serves as a central hub where all the transactions and data related to the restaurant's daily operations are recorded and processed.`
    }, {
      qus: `2. How to Use a POS System for a Restaurant?`,
      ans: `There are several steps to using a POS system. Especially if it’s in a restaurant, it can be quite confusing to navigate through without a one-on-one hands-on tutorial from a professional. That’s why here at POSApt, we provide you and your staff with a full training session so you know exactly how to operate and maintain your POS. But if you’re looking for a basic rundown on how to use a typical POS system for a restaurant, here are the steps:
<p>
<ol class="ms-3">
<li>Take the time to familiarise yourself with the system, and learn the layout, features, and functions.</li>
<li>Fill up your inventory, and menu items, including their names, descriptions, and prices.</li>
<li>Once your POS is ready to take orders, use the system to input customer orders and confirm the order.</li>
<li>Accept payment directly from the POS system via cash, credit cards, or other payment methods.</li>
<li>At the end of every month, analyse the data and reports to make informed business decisions and improve.</li>
</ol>
</p>`
    },
    {
      qus: `3. How does a restaurant POS system work?`,
      ans: `A restaurant POS system typically works in 6 aspects:
<p>
<ol class='ms-3'>
<li>Order Placement - When a customer places an order in person, the restaurant staff enters the order into the POS system. </li>
<li>Order Processing - Once the order is entered, the POS system processes the information, calculates the total amount due, and sends the order to the appropriate preparation areas such as the kitchen.</li>
<li>Payment Handling - When the customer is ready to pay, the system provides various payment options such as cash, credit/debit cards, or mobile payments. The system calculates the final bill and processes the payment securely. </li>
<li>Inventory Management - When setting up the system, you add the menu items, their images and prices. The system then tracks inventory levels in real-time and gives you notifications on low-stocked items.</li>
<li>Reporting and Analytics - the POS system then provides reports with sales trends, top-selling data and employee performance. </li>
<li>Integration with Other Systems - and finally, a POS system integrates with your accounting software or online ordering platform to give you a seamless experience across all your systems.</li>
</ol>
</p>`
    },
    {
      qus: `4. What is the best POS system for a small restaurant in Australia?`,
      ans: `You have countless options of POS systems to choose from but most of them are pretty expensive and come with limited features. That’s why, we came up with POSApt, the best POS system for small restaurants. We have all the features of these popular options and more, at even better prices.`
    },
    {
      qus: `5. How much does a restaurant POS system cost?`,
      ans: `A restaurant POS system’s cost depends on a number of factors such as the system provider, the features it may or may not have, etc. To put it in numbers, it can cost anywhere from $80 to $1500 a month. POSApt however starts at just $66 a month for the basic plan and offers all the basic functions to run a restaurant efficiently.`
    },
  ];
  const service =
  {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Restaurant POS System",
    "description": `Let your restaurant run smoother than a cube of butter down the pan. Give your restaurant the upgrade it deserves with an advanced POS system designed with restaurateurs like you in mind.`,
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
      "name": "Restaurant POS System",
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
            "name": "Basic plan - 66 AUD per month"
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
      "name": "What is a POS system in a restaurant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A restaurant POS system is a combination of hardware and software used to effectively manage various operations of a restaurant. It serves as a central hub where all the transactions and data related to the restaurant's daily operations are recorded and processed."
      }
    }, {
      "@type": "Question",
      "name": "How to Use a POS System for a Restaurant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `There are several steps to using a POS system. Especially if it’s in a restaurant, it can be quite confusing to navigate through without a one-on-one hands-on tutorial from a professional. That’s why here at POSApt, we provide you and your staff with a full training session so you know exactly how to operate and maintain your POS. But if you’re looking for a basic rundown on how to use a typical POS system for a restaurant, here are the steps:

Take the time to familiarise yourself with the system, and learn the layout, features, and functions.
Fill up your inventory, and menu items, including their names, descriptions, and prices.
Once your POS is ready to take orders, use the system to input customer orders and confirm the order.
Accept payment directly from the POS system via cash, credit cards, or other payment methods.
At the end of every month, analyse the data and reports to make informed business decisions and improve.
`
      }
    }, {
      "@type": "Question",
      "name": "How does a restaurant POS system work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `A restaurant POS system typically works in 6 aspects:

            Order Placement - When a customer places an order in person, the restaurant staff enters the order into the POS system. 
            Order Processing - Once the order is entered, the POS system processes the information, calculates the total amount due, and sends the order to the appropriate preparation areas such as the kitchen.
            Payment Handling - When the customer is ready to pay, the system provides various payment options such as cash, credit/debit cards, or mobile payments. The system calculates the final bill and processes the payment securely. 
            Inventory Management - When setting up the system, you add the menu items, their images and prices. The system then tracks inventory levels in real-time and gives you notifications on low-stocked items.
            Reporting and Analytics - the POS system then provides reports with sales trends, top-selling data and employee performance. 
            Integration with Other Systems - and finally, a POS system integrates with your accounting software or online ordering platform to give you a seamless experience across all your systems.`
      }
    }, {
      "@type": "Question",
      "name": "What is the best POS system for a small restaurant in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `You have countless options of POS systems to choose from but most of them are pretty expensive and come with limited features. That’s why, we came up with POSApt, the best POS system for small restaurants. We have all the features of these popular options and more, at even better prices.
`
      }
    }
      , {
      "@type": "Question",
      "name": "How much does a restaurant POS system cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `A restaurant POS system’s cost depends on a number of factors such as the system provider, the features it may or may not have, etc. To put it in numbers, it can cost anywhere from $80 to $1500 a month. POSApt however starts at just $66 a month for the basic plan and offers all the basic functions to run a restaurant efficiently.`
      }
    }
    ]
  }
  return (
    <>
      <Head>
        <title>Restaurant POS System | Point of Sale Software Australia</title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
        <meta
          name="title"
          content="Restaurant POS System | Point of Sale Software Australia"
        />
        <meta
          name="description"
          content="POSApt's restaurant POS system is a complete solution for every restaurant and cafe in Australia. Sign up and get a 30-day free trial today!"
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
          content="Restaurant POS System | Point of Sale Software Australia"
        />
        <meta
          property="og:description"
          content="POSApt's restaurant POS system is a complete solution for every restaurant and cafe in Australia. Sign up and get a 30-day free trial today!"
        />
        <meta property="og:url" content="https://posapt.au/restaurant-pos-system" />
        <meta property="og:site_name" content="POSApt Australia" />
        <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
        <meta
          property="og:image"
          content="https://posapt.au/assets/dist/image/store/restaurant_pos.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://posapt.au/assets/dist/image/store/restaurant_pos.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta
          property="og:image:alt"
          content="Best Restaurant POS System in Australia"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Restaurant POS System | Point of Sale Software Australia"
        />
        <meta
          name="twitter:description"
          content="POSApt's restaurant POS system is a complete solution for every restaurant and cafe in Australia. Sign up and get a 30-day free trial today!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/store/restaurant_pos.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/restaurant-pos-system" />
      </Head>
      <Layout>
        <>
          <ScrollToTop />
          <PosSysHeroSection
            title="The Best Restaurant POS System Across Australia"
            desc="Let your restaurant run smoother than a cube of butter down the pan. Give your restaurant the upgrade it deserves with an advanced POS system designed with restaurateurs like you in mind."
            imgUrl="/assets/dist/image/store/restaurant_pos.webp"
          />
          <ContactFormSection
            businessTitle="restaurants"
          />

          {/* <!-- start pos --> */}
          <section className="mt-5">
            <div className="container">
              <div className="row bg-light p-2 p-md-5">
                <div className="col-md-6">
                  <div className="new-list ">
                    <div className="heading_s1 hs2  text-start">
                      <h2 className="fw-bold text-capitalize mb-3">POS System for Restaurants</h2>

                      <p className=" pt-4">
                        Running a restaurant business smoothly is already a very tough job. Factor in the disastrous pandemic and the urgent need to adapt digital means in order to cater for customers in a safe way and the job gets even more difficult.
                      </p>
                      <p className=" ">
                        We understand your struggle and therefore we understand your needs. What you need is a reliable, easy-to-use and affordable POS solution to integrate with your restaurant business. A reputable restaurant POS software that enables you to not just sustain but grow your business is what we’re offering.
                      </p>
                      <p className=" ">
                        No matter the size of your restaurant, POSApt is the best restaurant POS system across Australia. Whether you have a single restaurant or a franchise of restaurants in multiple locations, POSApt can seamlessly control all points of transactions in a single mobile platform and gives you real-time reports.

                      </p>
                      {/* <!-- <a className="btn btn-white btn-red fw-bold py-3 px-2" href="#">Request a Demo</a> --> */}
                    </div>

                  </div>
                </div>
                <div className="col-md-6 m-auto ">
                  <div className="orderimg primg mt-3 mt-lg-0">
                    <img src="/assets/dist/image/store/restaurant_pos_2.webp" className="img-fluid h-100 w-100" alt="POS System for Restaurants" title="POS System for Restaurants" />
                  </div>

                </div>
                <hr />
                <div className="col-md-12">
                  <div className="subpara mt-3 productcard">
                    <div className="row">
                      {featureDatas.map((item, index) => (
                        <div className="col-md-6">
                          <h3 className="text-theme">
                            <img src="assets/dist/image/icon1.png" className="img-fluid" alt={item.title} title={item.title} /> {item.title}</h3>
                          <p>{item.describe}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* <!-- start onlineordering --> */}
          <section className="mt-5">
            <div className="container">
              <div className="row bg-light p-2 p-md-5">
                <div className="col-md-6 m-auto ">
                  {/* <div className="orderimg primg mt-3 mt-lg-0"> */}
                  <img src="/assets/dist/image/store/restaurant_pos_1.webp" className="img-fluid h-100 w-100" alt="POS System for Restaurants" title="POS System for Restaurants" />
                  {/* </div> */}

                </div>
                <div className="col-md-6">
                  <div className="new-list ">
                    <div className="heading_s1 hs2  text-start">
                      <h2 className=" fw-bold text-capitalize mb-3"> Benefits of POSApt’s Restaurant POS System</h2>



                      {featureDatas2.map((item, index) => (
                        <div className="ordercard mt-2">
                          <h3 className="fw-bold text-capitalize text-theme">{item.title}</h3>
                          <p className="pt-1">
                            {item.describe}
                          </p>
                        </div>
                      ))}
                      {/* <!-- <a className="btn btn-white btn-red fw-bold py-3 px-2" href="#">Request a Demo</a> --> */}
                      <p className="bg-warning mt-4 p-2 fw-bold">Don’t have a website?
                        <span>
                          No Problem. We’ll build you a Custom Website for absolutely FREE. <a href="#" className="text-decoration-underline"> Get A Website Now!</a>
                        </span>
                      </p>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </section>


          <PricingSection/>

          {/* <!-- faq --> */}
          <section className="py-5 mb-lg-2 bg-custom">
            <div className="container">
              <div className="row py-2 py-md-4 py-lg-5">
                <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                  <h2 className="pb-3 mb-1 mb-lg-3">Any questions? <br className="d-none d-md-inline" />Check out the FAQs</h2>
                  <p className="fs-lg pb-3 mb-2 mb-lg-3">Still have unanswered questions and need to get in touch?</p>
                  <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
                    <div className="col">
                      <div className="card card-hover">
                        <div className="card-body pb-3">
                          <i className="fas fa-phone-volume d-block fs-2 text-danger mb-2 py-1"></i>
                          <p className="fs-sm mb-2">Still have questions?</p>
                          <a href="#" className="btn btn-link stretched-link px-0 text-danger">
                            Call us
                            <i className="fas fa-arrow-right fs-xl ms-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-hover">
                        <div className="card-body pb-3">
                          <i className="far fa-comment-dots d-block fs-2 text-success mb-2 py-1"></i>
                          <p className="fs-sm mb-2">Still have questions?</p>
                          <a href="#" className="btn btn-link text-success stretched-link px-0">
                            Chat with us
                            <i className="fas fa-arrow-right fs-xl ms-2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 offset-xl-1">
                  <div className="accordion" id="faq">

                    {
                      faqDatas.map((item, index) => (
                        <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                          <h2 className="accordion-header" id="q1-heading">
                            <button className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#q' + index} aria-expanded="false" aria-controls={'#q' + index}>
                              {item.qus}
                            </button>
                          </h2>
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

export default Restuarant;
