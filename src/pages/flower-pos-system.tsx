/** @format */

import Layout from "@/Components/Layout";
import ScrollToTop from "@/Helpers/ScrollToTop";
import Head from 'next/head';
import PricingSection from "@/sections/PricingSection";
import ContactFormSection from "@/sections/ContactFormSection";
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection";

const Flower = () => {
  const featureDatas = [
    {
      title: `Fast & Effective Order Management`,
      describe: `POSApt allows florists to take orders, process payments and keep track of sales more effectively than a human front desk clerk would, saving time, money and resources.`
    }, {
      title: `Florist Delivery Tracking`,
      describe: `Track the status of your deliveries and make sure every order is delivered to the right place at the right time with our Florist Delivery Tracking POS software online.`
    }, {
      title: `Advanced Stock & Spoilage Management`,
      describe: `Keep tabs on every floral item in your stockpile and get notified when you’re running short or when your stock needs to be cleared urgently to avoid spoilage.`
    }, {
      title: `30 Days Free Trial`,
      describe: `Give our Floral POS system a try for absolutely ZERO cost for the first 30 days. No Commitments Required!`
    }
  ];
  const featureDatas2 = [
    {
      title: `Blossom in Business`,
      describe: `Say goodbye to manual calculations, writing down every sale, or keeping track of your inventory. A POS system can take care of all of this, better than a human would.`
    }, {
      title: `Less Spoiled Flowers`,
      describe: `Since POSApt is designed specifically for flower stores it knows that the items being sold (flowers) are delicate and spoil quicker than other items. It keeps track of inventory stocks, checks their lifespan, and alerts when it is time to replace them. `
    }, {
      title: `Boost Sales Performance Month After Month`,
      describe: `A POS system generates comprehensive monthly reports that shed light on your strengths and areas for improvement. This allows you to make data-driven decisions that have a real impact on your sales numbers. You also get notified if you’re running low on any item so you don’t have to return any customer empty-handed.`
    }, {
      title: `Up-Sell & Cross-Sell Opportunity`,
      describe: `Smart POS systems like POSApt also give you the opportunity to up-sell or cross-sell related products to what your customers are already buying. For instance; if a customer is buying an indoor plant, you could upsell them a cute flower pot as well.`
    }
  ]
  const faqDatas = [
    {
      qus: `1. What is a Floral POS System?`,
      ans: `A floral POS system or software is a point-of-sale system specifically tailored to fit the needs of a flower shop. It is a combination of software and hardware that facilitates the operations of a flower business.`
    }, {
      qus: `2. How does a Florist POS system work?`,
      ans: `A florist POS system functions by integrating various features to facilitate the operations of a flower business. It incorporates inventory management, processing of payments, tracking and recording customer information, and assigning deliveries. Moreover, it updates product availability, provides an estimated time of arrival (ETA), and performs other essential tasks typically handled by an employee in a physical flower shop. This comprehensive system streamlines operations and enhances the overall efficiency of the florist business.`
    },
    {
      qus: `3. What is the best POS system for a small flower shop?`,
      ans: `The best POS system for a small flower shop depends on various factors such as budget, specific business requirements, and personal preferences. However, some popular Flower POS systems that are commonly recommended for small flower shops include:
   <p>
   <ul class='ms-3'>
   <li type='circle'>POSApt: Tailored to florists in Australia, it offers all the basic and advanced features to efficiently run a flower business.</li>
   <li type='circle'>Floranext: A popular choice with features like order management, event proposals, marketing tools, and a built-in website solution.</li>
   <li type='circle'>Bloomerang: Designed specifically for florists, it offers features like POS, CRM, delivery management, and reporting capabilities.</li>
   <li type='circle'>Lightspeed Retail: A versatile POS system suitable for various retail businesses, including flower shops.</li>
   </ul>
   </p>`
    },
    {
      qus: `4. How much does a Florist POS system cost?`,
      ans: `The cost of a POS system for a flower shop can range from $60 to $1500 per month. At POSApt, we offer a basic plan starting at just $66 per month, delivering all the essential functions you need to efficiently run your flower shop.`
    }
  ];
  const service =
  {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Floral POS System",
    "description": `Let your flower shop bloom like a garden of dreams. Set up a custom POS System for your flower business that offers all the functionalities and features you need to grow your floral empire.`,
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
      "name": "Floral POS System",
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
      "name": "What is a Floral POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A floral POS system or software is a point-of-sale system specifically tailored to fit the needs of a flower shop. It is a combination of software and hardware that facilitates the operations of a flower business."
      }
    }, {
      "@type": "Question",
      "name": "How does a Florist POS system work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `A florist POS system functions by integrating various features to facilitate the operations of a flower business. It incorporates inventory management, processing of payments, tracking and recording customer information, and assigning deliveries. Moreover, it updates product availability, provides an estimated time of arrival (ETA), and performs other essential tasks typically handled by an employee in a physical flower shop. This comprehensive system streamlines operations and enhances the overall efficiency of the florist business.`
      }
    }, {
      "@type": "Question",
      "name": "What is the best POS system for a small flower shop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The best POS system for a small flower shop depends on various factors such as budget, specific business requirements, and personal preferences. However, some popular Flower POS systems that are commonly recommended for small flower shops include:

        POSApt: Tailored to florists in Australia, it offers all the basic and advanced features to efficiently run a flower business.
        Floranext: A popular choice with features like order management, event proposals, marketing tools, and a built-in website solution.
        Bloomerang: Designed specifically for florists, it offers features like POS, CRM, delivery management, and reporting capabilities.
        Lightspeed Retail: A versatile POS system suitable for various retail businesses, including flower shops.
        `
      }
    }
      , {
      "@type": "Question",
      "name": "How much does a Florist POS system cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The cost of a POS system for a flower shop can range from $60 to $1500 per month. At POSApt, we offer a basic plan starting at just $66 per month, delivering all the essential functions you need to efficiently run your flower shop.`
      }
    }
    ]
  }
  return (
    <>
      <Head>
        <title>Florist POS System | Flower Shop Point of Sale</title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
        <meta
          name="title"
          content="Florist POS System | Flower Shop Point of Sale"
        />
        <meta
          name="description"
          content="POSApt, the best florist POS system across Australia is a complete solution for your flower shop. Call us for a customized POS for your store!"
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
          content="Florist POS System | Flower Shop Point of Sale"
        />
        <meta
          property="og:description"
          content="POSApt, the best florist POS system across Australia is a complete solution for your flower shop. Call us for a customized POS for your store!"
        />
        <meta property="og:url" content="https://posapt.au/flower-pos-system" />
        <meta property="og:site_name" content="POSApt Australia" />
        <meta property="og:updated_time" content="2023-04-12T21:01:56+10:00" />
        <meta
          property="og:image"
          content="https://posapt.au/assets/dist/image/store/flower_pos.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://posapt.au/assets/dist/image/store/flower_pos.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta
          property="og:image:alt"
          content="Best Flower POS System in Australia"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Florist POS System | Flower Shop Point of Sale"
        />
        <meta
          name="twitter:description"
          content="POSApt, the best florist POS system across Australia is a complete solution for your flower shop. Call us for a customized POS for your store!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/store/flower_pos.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/flower-pos-system" />
      </Head>
      <Layout>
        <>
          <ScrollToTop />
          <PosSysHeroSection
            title="Grow Your Flower Business with Floral POS Software"
            desc="Let your flower shop bloom like a garden of dreams. Set up a custom POS System for your flower business that offers all the functionalities and features you need to grow your floral empire."
            imgUrl="/assets/dist/image/store/flower_pos.webp"
          />

          <ContactFormSection
            businessTitle="flower shop"
          />

          {/* <!-- start pos --> */}
          <section className="mt-5">
            <div className="container">
              <div className="row bg-light p-2 p-md-5">
                <div className="col-md-6">
                  <div className="heading_s1 hs2  text-start">
                    <h2 className="fw-bold text-capitalize mb-3">POS System For Flower Stores</h2>
                  </div>
                  <div className="new-list ">
                    <p className="pt-4">POSApt’s floral POS software is designed to cater to the specific needs of flower shops. We have integrated a range of florist-specific tools in our point-of-sale software to help florists effectively and effortlessly manage their stores.</p>
                    <p className="">In order to be called the best cloud based POS, it needs to;</p>
                    <ul className="subpara">
                      <li> take orders</li>
                      <li> process payments</li>
                      <li> keep track of deliveries</li>
                      <li> keep your customers happy</li>
                      <li> make sure your stock moves fast</li>
                      <li> and do all of these simultaneously without a hitch, even during the rush hours. </li>
                    </ul>
                    <p>
                    </p>
                    <p className="">There’s no better contender to take upon this role than POSApt. It’s just the best Floral POS software out right now on the Australian marketplace. It’s easy to set up, user-friendly and has a ton of unique features designed specifically for florists.</p>

                    <p className="">We say, ‘POSApt is best for small businesses’ but that doesn’t render it any less capable if you’re looking to get it for a medium or large business. POSApt can work for any sized flower store, even if you have multiple stores in multiple locations.</p>
                    {/* <!-- <a className="btn btn-white btn-red fw-bold py-3 px-2" href="#">Request a Demo</a> --> */}


                  </div>
                </div>
                <div className="col-md-6 m-auto ">
                  <div className="orderimg primg mt-3 mt-lg-0">
                    <img src="/assets/dist/image/store/flower_pos_2.webp" className="img-fluid h-100 w-100" alt="POS System For Flower Stores" title="POS System For Flower Stores" />
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
                  <img src="/assets/dist/image/store/flower_pos_1.webp" className="img-fluid h-100 w-100" alt="POS System For Flower Stores" title="POS System For Flower Stores" />
                  {/* </div> */}

                </div>
                <div className="col-md-6">
                  <div className="new-list ">
                    <div className="heading_s1 hs2  text-start">
                      <h2 className=" fw-bold text-capitalize mb-3"> Why choose POSApt’s Florist POS System?</h2>



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

          {/* pricing */}
          <PricingSection />

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

export default Flower;
