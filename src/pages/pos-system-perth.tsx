import Layout from '@/Components/Layout';
import ScrollToTop from '@/Helpers/ScrollToTop';
import LocationHeroSection from '@/sections/hero/LocationHeroSection';
import SignUpSection from '@/sections/SignUpSection';
import Head from 'next/head';

const PosSystemPerth = () => {

  const featureDatas = [
    {
      title: `Light Up Your Brand`,
      describe: `Every business is a unique composition, and with POSApt, you get to compose your own masterpiece. Customise every colour, logo, item data and tax value to match your brand, preferences, and industry. Create a symphony that perfectly resonates with your customers and sets your business apart from the crowd.
      `
    },
    {
      title: `Conduct Your Business - Your Way
      `,
      describe: `Perth's business landscape is diverse, and we know that one size does not fit all. With POSApt, you're the controller of your own business. Whether you’re selling online from a website or from multiple on-site locations, you can manage all of them from a single application. Additionally, you can overlook how all of your business locations are doing without having to switch between multiple apps.
      `
    }, {
      title: `Happy Perthians and Even Happier Profit Curves
      `,
      describe: `With our advanced inventory management feature, you’ll never run ‘out-of-stock’ of the items that your customers love most. Get a real-time understanding of the status of your inventory and receive notifications whenever your stock is running low. This not only prevents overstocking and wastage but also makes sure you have enough of what’s popular at your store. Your customers get what they came for and your profits run high.
      `
    },
    {
      title: `Better Decisions with Real-Time Insights
      `,
      describe: `Unlock the power of data-driven decisions with real-time insights. Discover patterns, trends, and top-performing products that resonate with your customers. Your KPIs are also readily available for you to look at the dashboard as soon as you log into your POSApt account. Let the data guide you to making better decisions in how you shape your business going forward.`
    }
  ];

  const featureDatas2 = [
    {
      title: `30-Day Free Access - Confidence Guaranteed
      `,
      describe: `We believe in our system's capabilities, and we want you to as well. That's why we’re offering a risk-free 30-day trial. You don’t even have to put in your payment details to start using our system. Explore the full range of features, user-friendly interface, and integration capabilities before making your decision. A true example of the ‘try before you buy’ concept.
      `
    },
    {
      title: `24/7 Expert Support - No Extra Charges
      `,
      describe: `No matter what type of issue you are facing with the system, our customer support is always ready to help you out. Your success is our priority. Signing up for our paid plans gives you access to a dedicated team of support personnel, ready to support you at any hour. Say goodbye to downtime frustrations and hello to a team that cares about your success as much as you do.
      `
    },
    {
      title: `Easy Integration with Your Favourite Apps
      `,
      describe: `We understand that you might already be using a couple of other apps and software that are crucial to your business. No worries, you can easily connect these popular apps like Xero, QuickBooks, Uber Eats, DoorDash, and more with POSApt. No hassle at all!
      `
    }, {
      title: `Short-Term Cash Flow Boost
      `,
      describe: `We understand that running a business isn’t always a straight line. Sometimes you run into unforeseen problems that may send you into a tough financial position. That is why we’ve partnered with LucaPay to help you with clearing your pending invoices or bills.  Your business doesn’t have to stop even when you’re a little short on cash.
      `
    }
  ]

  const retailService = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "pos system perth",
    "description": "POS System Perth to Streamline Your Business Perth is full of opportunities, and with POSApt, you'll unlock your business's full potential. Experience the future of point-of-sale systems with our innovative features and unwavering support. Sign up for a 30-Day Free Access. Your Cloud-Based POS System in Perth It’s not easy to light your way to business success, even in this city of lights. Whether you’re in the food industry or in the retail business, one crucial step you cannot ignore is getting yourself a ‘POS System’. Perth is where the tempo is fast, and businesses need to stay in tune with the latest technology. The same concept trickles down to your Point of sale system as well. If everything in your business is on par with today’s technological standards but not your POS, means you are lacking behind. POSApt's cloud-based POS solution ensures your POS system is ready to accompany your business’s journey to the top of the chart. Experience the seamless operational performance, freeing your business from the shackles of outdated systems. Whether you're already using a POS system or exploring the possibilities, you can't afford to miss out on POSApt. It is a system tailored for all types of businesses in Perth. Try all our melody-making features free for 30 days, no commitments required! Light Up Your Brand Every business is a unique composition, and with POSApt, you get to compose your own masterpiece. Customise every colour, logo, item data and tax value to match your brand, preferences, and industry. Create a symphony that perfectly resonates with your customers and sets your business apart from the crowd. Conduct Your Business - Your Way Perth's business landscape is diverse, and we know that one size does not fit all. With POSApt, you're the controller of your own business. Whether you’re selling online from a website or from multiple on-site locations, you can manage all of them from a single application. Additionally, you can overlook how all of your business locations are doing without having to switch between multiple apps. Happy Perthians and Even Happier Profit Curves With our advanced inventory management feature, you’ll never run ‘out-of-stock’ of the items that your customers love most. Get a real-time understanding of the status of your inventory and receive notifications whenever your stock is running low. This not only prevents overstocking and wastage but also makes sure you have enough of what’s popular at your store. Your customers get what they came for and your profits run high. Better Decisions with Real-Time Insights Unlock the power of data-driven decisions with real-time insights. Discover patterns, trends, and top-performing products that resonate with your customers. Your KPIs are also readily available for you to look at the dashboard as soon as you log into your POSApt account. Let the data guide you to making better decisions in how you shape your business going forward. Why POSApt Over Others in Perth? 30-Day Free Access - Confidence Guaranteed We believe in our system's capabilities, and we want you to as well. That's why we’re offering a risk-free 30-day trial. You don’t even have to put in your payment details to start using our system. Explore the full range of features, user-friendly interface, and integration capabilities before making your decision. A true example of the ‘try before you buy’ concept. 24/7 Expert Support - No Extra Charges No matter what type of issue you are facing with the system, our customer support is always ready to help you out. Your success is our priority. Signing up for our paid plans gives you access to a dedicated team of support personnel, ready to support you at any hour. Say goodbye to downtime frustrations and hello to a team that cares about your success as much as you do. Easy Integration with Your Favourite Apps We understand that you might already be using a couple of other apps and software that are crucial to your business. No worries, you can easily connect these popular apps like Xero, QuickBooks, Uber Eats, DoorDash, and more with POSApt. No hassle at all! Short-Term Cash Flow Boost We understand that running a business isn’t always a straight line. Sometimes you run into unforeseen problems that may send you into a tough financial position. That is why we’ve partnered with LucaPay to help you with clearing your pending invoices or bills. Your business doesn’t have to stop even when you’re a little short on cash.",
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

  return (
    <>
      <Head>
        <title> POS System Perth | Software & Hardware Point of Sale</title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(retailService) }}
        />
        <meta
          name="title"
          content=" POS System Perth | Software & Hardware Point of Sale"
        />
        <meta
          name="description"
          content=" POSApt is the fastest-growing POS system provider in Perth, Australia. Designed to meet the needs of every hospitality and retail industry."
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
          content=" POS System Perth | Software & Hardware Point of Sale"
        />
        <meta
          property="og:description"
          content=" POSApt is the fastest-growing POS system provider in Perth, Australia. Designed to meet the needs of every hospitality and retail industry."
        />
        <meta property="og:url" content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp" />
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
          content=" POS System Perth | Software & Hardware Point of Sale"
        />
        <meta
          name="twitter:description"
          content=" POSApt is the fastest-growing POS system provider in Perth, Australia. Designed to meet the needs of every hospitality and retail industry."
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/pos-system-perth" />
      </Head>
      <Layout>
        <>
          <ScrollToTop />
          <LocationHeroSection
            title="POS System Perth To Streamline Your Business"
            desc="Experience the future of point-of-sale systems with our innovative features. Sign up for a 30-Day Free Access."
          />

          {/* <!-- start pos --> */}
          <section className="mt-5">
            <div className="container">
              <div className="row bg-light p-2 p-md-5">
                <div className="col-md-6">
                  <div className="new-list ">
                    <div className="heading_s1 hs2  text-start">
                      <h2 className="fw-bold text-capitalize mb-3">Your Cloud-Based POS System <br /><span className="text-theme">in Perth</span></h2>
                      <p>It's not easy to light your way to business success, even in this city of lights. Whether you’re in the food industry or in the retail business, one crucial step you cannot ignore is getting yourself a ‘POS System’.</p>
                      <p>Perth is where the tempo is fast, and businesses need to stay in tune with the latest technology. The same concept trickles down to your Point of sale system as well. If everything in your business is on par with today’s technological standards but not your POS, means you are lacking behind. </p>
                      <p>POSApt's cloud-based POS solution ensures your POS system is ready to accompany your business’s journey to the top of the chart. Experience the seamless operational performance, freeing your business from the shackles of outdated systems.</p>
                      <p>Whether you're already using a POS system or exploring the possibilities, you can't afford to miss out on POSApt. It is a system tailored for all types of businesses in Perth. Try all our melody-making features free for 30 days, no commitments required!</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 m-auto ">
                  <img src="/assets/dist/image/orderingSystem/qr4.webp" className="img-fluid h-40 w-100" alt="POS System for Perth" title="POS System for Perth" />
                </div>
                <hr />
                <div className="col-md-12">
                  <div className="subpara mt-3 productcard">
                    <div className="row">
                      {featureDatas.map((item, index) => (
                        <div key={index} className="col-md-6">
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

          <SignUpSection/>

          {/* <!-- start onlineordering --> */}
          <section className="mt-5">
            <div className="container">
              <div className="row bg-light p-2 p-md-5">
                <div className="col-md-6 m-auto ">
                  <img src="/assets/dist/image/location/1.webp" className="img-fluid h-100 w-100" alt="POS System for Perth" title="POS System for Perth" />
                </div>
                <div className="col-md-6">
                  <div className="new-list ">
                    <div className="heading_s1 hs2  text-start">
                      <h2 className=" fw-bold text-capitalize mb-3"> Why POSApt Over Others <br /><span className="text-theme">in Perth?</span></h2>

                      {featureDatas2.map((item, index) => (
                        <div className="ordercard mt-2" key={index}>
                          <h3 className="fw-bold text-capitalize text-theme">{item.title}</h3>
                          <p className="pt-1">
                            {item.describe}
                          </p>
                        </div>
                      ))}

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

        </>
      </Layout>
    </>
  )
}

export default PosSystemPerth