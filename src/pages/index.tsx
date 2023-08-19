/** @format */

import Layout from "@/Components/Layout";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import OurHardwareSystem from "@/Components/OurHardwareSystem";
import Features from "@/Components/Features";
import MailAndCall from "@/Components/MailAndCall";
import SignUpSection from "@/sections/SignUpSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();

  const gtmTags = `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '10022972934381273');
      fbq('track', 'PageView');`;

  const breadCrumListSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Our Products",
      "item": "https://posapt.au/products"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Hospitality POS System",
      "item": "https://posapt.au/hospitality-pos-system"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Retails POS System",
      "item": "https://posapt.au/retail-pos-system"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "Login",
      "item": "https://app.posapt.au/login"
    }, {
      "@type": "ListItem",
      "position": 5,
      "name": "Online Ordering System",
      "item": "https://posapt.au/online-ordering-system"
    }, {
      "@type": "ListItem",
      "position": 6,
      "name": "Enquire Now",
      "item": "https://posapt.au/enquiry"
    }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is POS System Software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point of sale, or POS, refers to the place where a retail transaction such as buying or selling of goods takes place. While point-of-sale systems used to be your traditional cash register, they can now be found in a variety of forms, thanks to digital technologies. A POS system software typically records an item’s price, tracks sales, accepts payments and generates a receipt. POSApt can do these aforementioned tasks flawlessly and even help out with important business operations."
      }
    }, {
      "@type": "Question",
      "name": "What are the Key features of a POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key features of a Point of sale System software include: 1. Sales processing: Accepting cash, credit cards, and debit cards is a simple procedure. 2. Inventory management:  Manage or track items in stock, alert when stocks run low, and produce purchase orders. 3. Reporting: Tracks and records real-time data,  prepares sales reports and analyzes data to find trends. 4. Customer management: Track and manage customer information, purchasing history and preferences. 5. Employee management: Tracks and manages employee scheduling, time, commission and leaves."
      }
    }, {
      "@type": "Question",
      "name": "What are the components of a typical POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The components of a typical POS System include: 1. Hardware: Includes a computer/tablet, cash register, barcode scanner, and receipt printer.2. Software: A point-of-sale software runs on the hardware and manages the sales, inventory, reporting and many more features.3. Payment processing: Includes the ability to accept different payment methods such as cash, credit cards/debit cards or contactless payment.4. Inventory management: Includes tools for tracking inventory, generating purchase orders, and managing new inventory."
      }
    }, {
      "@type": "Question",
      "name": "Who uses POS software in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different businesses in Melbourne and across Australia like retail stores, restaurants, bars, grocery stores, hotels and pubs use POS software. And, if you’ve ever talked to owners of these businesses, they can attest to the fact that this system has proved to be a boon to their businesses. More often than not, a POS system brings a positive impact on a business’s operations, return on investments and returning customers."
      }
    }, {
      "@type": "Question",
      "name": "Where are POS systems used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Point of Sale systems are used in various industries in Australia, including retail stores, restaurants, cafes, bars, hotels, grocery stores and salons. It is used wherever goods or services are sold, and transactions need to be processed."
      }
    }]
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "POSApt",
    "image": "https://posapt.au/assets/dist/image/poslogo.png",
    "url": "https://posapt.au/",
    "telephone": "+61388024468",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "195 Wellington Rd, Clayton VIC",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "postalCode": "3168",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.9156711,
      "longitude": 145.1490949
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "POSApt",
    "url": "https://posapt.au/",
    "logo": "https://posapt.au/assets/dist/image/poslogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61388024468",
      "contactType": "technical support",
      "areaServed": "AU",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/posapt",
      "https://twitter.com/posapt_au",
      "https://www.instagram.com/posapt22/",
      "https://www.youtube.com/channel/UCEbnQMG4QHXB5rk2TzROApA",
      "https://www.linkedin.com/company/posapt-au"
    ]
  }

  return (
    <>
      <Head>
        <title>
          POS Systems Australia | Point of Sale Software - POSApt
        </title>
        <script dangerouslySetInnerHTML={{ __html: gtmTags }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        {/* <meta
          name="google-site-verification"
          content="PdcnZNlwp1J3-D_DX4N7_sEHvb9-r3kVWUcOWQq8sdk"
        /> */}
        <meta
          name="title"
          content="POS Systems Australia | Point of Sale Software - POSApt"
        />
        <meta
          name="google-site-verification"
          content="WhEwKP36VmQq_V_1z2CmWRDOv3bU1DWns7ethy_i2SY"
        />
        <meta
          name="description"
          content="Have a Small Business? Make it a revenue-generating machine with the best POS system in Australia by POSApt. Give Us a Call or Book a Free Demo!"
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
          content="Best POS System For Small & Medium Businesses"
        />
        <meta
          property="og:description"
          content="An insightful POS System Software that makes running your company easier. Simple to use, designed to deliver better insight and organize. 30-Days FREE Trial."
        />
        <meta property="og:url" content="https://posapt.au/" />
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
          content="Best POS System Software For Small & Medium Businesses- POSapt"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best POS System For Small & Medium Businesses"
        />
        <meta
          name="twitter:description"
          content="An insightful POS System Software that makes running your company easier. Simple to use, designed to deliver better insight and organize. 30-Days FREE Trial."
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/" />
      </Head>
      <Layout>
        {/* new restro */}
        {/* about us */}
        <div className="btn-group d-md-none fixed-bottom bg-white p-2 ">
          <div className="navbar-toolbar d-flex align-items-center order-lg-3 justify-content-center m-auto">
            <a
              href="https://app.posapt.au"
              target={"_blank"}
              className="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin"
            >
              <i className="fas fa-user me-2" />
              Login
            </a>
            <a
              className="btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin"
              onClick={() => {
                dispatch({
                  type: "OPEN_TRIAL_MODAL",
                });
              }}
            >
              Free Trial
            </a>
            <Link
              href={"/enquiry"}
              className="btn btn-raised  shadow my-button w-xs  me-2 homecart homelogin"
            >
              Enquire Now
            </Link>
          </div>
        </div>
        <section className=" pt-1 pt-md-5 pb-1">
          <div className="container  text-center">
            <div className="row align-items-center justify-content-center gy-5">
              <div className="col-md-5">
                <div className="row">
                  <div className="heading_s1">
                    <span className="sub_heading font_style1">
                      <small>Selling Made Simpler.</small>
                    </span>
                    <h1 className=" fw-bold text-capitalize">
                      The Perfect Point-of-Sale to Sell
                    </h1>
                  </div>
                </div>
                <div className="subpara mt-3">
                  <p className="text-center">
                    <span style={{ fontWeight: 400 }}>
                      An advanced POS system to enable hospitality and retail
                      businesses not just to sell their products and services
                      but also to make offline selling experiences simpler,
                      safer and better.
                    </span>
                  </p>
                  <div className="text-center">
                    <a
                      onClick={() => {
                        dispatch({
                          type: "OPEN_TRIAL_MODAL",
                        });
                      }}
                      className="btn btn-white btn-red fw-bold"
                      href="#"
                    >
                      Sign Up for a 30-Day Free Trial
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="serv_left">
                  <img
                    title="Best POS System Software"
                    src="/assets/dist/image/Best_POS_System_Software.webp"
                    className="img-fluid"
                    alt="Best POS System Software"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className=" text-center pb-5 pt-5"
          style={{
            background:
              "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)",
          }}
        >
          <div className="container mt-4">
            <div className="row">
              <div className="heading_s1 w-80 text-center">
                {/* <span class="sub_heading font_style1">How does it work?</span> */}
                <h2 className=" fw-bold text-capitalize text-theme ">
                  POS System Software to Streamline Your Business
                </h2>
                <p className="text-center">
                  POSApt is a game-changer for businesses looking to streamline
                  their operations and improve customer experience. With its
                  intuitive design, extensive features, and real-time reporting,
                  businesses can make data-driven decisions, increase revenue,
                  and ultimately achieve success.
                </p>
              </div>
            </div>
            <div className="position-relative rounded-3 overflow-hidden mb-lg-3">
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5 light-gallery"
                id="lightgallery"
              >
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=H2YXiMSWf7M&feature=youtu.be"
                  className="btn btn-video btn-icon btn-xl stretched-link bg-white image-tile"
                  data-abc="true"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35" />
              <img
                title="How POSApt POS System Works"
                src="/assets/dist/image/Homepage/How-POSApt-POS-System-Works.webp"
                alt="How POSApt POS System Works"
              />
            </div>
          </div>
        </section>
        {/* find store */}
        <section className="bg-light pt-50 pb-50">
          <div className="container">
            <div className="row text-center">
              <div className="heading_s1">
                <span className="sub_heading font_style1">
                  Perfect for Any Retail & Hospitality Business
                </span>
                <h2 className=" fw-bold text-capitalize">POS Systems We Have</h2>
              </div>
            </div>
            <div className="mytemplates">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-2 col-6 col-sm-4">
                  <Link href={"/restaurant-pos-system"}>
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="restaurant POS system software image"
                        src="assets/dist/image/Homepage/restaurant-POS-system-software-image.webp"
                        alt="restaurant POS system software image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Restaurants
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <Link href={"/bakery-pos-system"}>
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="bakery pos system image"
                        src="assets/dist/image/Homepage/bakery-pos-system-image.webp"
                        alt="bakery-pos-system-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Bakeries
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <Link href={"/flower-pos-system"}>
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="flower pos system image"
                        src="assets/dist/image/Homepage/flower-pos-system-image.webp"
                        alt="flower-pos-system-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Flower shops
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <Link href={"/grocery-pos-system"}>
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="grocery pos system image"
                        src="assets/dist/image/Homepage/grocery-pos-system-image.webp"
                        alt="grocery-pos-system-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Grocery stores
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-2 col-6 col-sm-4">
                  <Link href={"/beverages-pos-system"}>
                    <div className="border-gray p-15  bg-white text-center">
                      <img
                        title="beverages pos system image"
                        src="assets/dist/image/Homepage/beverages-pos-system-image.webp"
                        alt="beverages-pos-system-image"
                      />
                      <div className="alt-font text-extra-dark-gray fw-bold d-block">
                        Beverages
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features */}
        <Features />
        {/* end feature section */}

        <SignUpSection/>

        {/* About Us */}
        <section className="pt-50 pb-50">
          <div className="workprocess text-center">
            <div className="container">
              <div className="row">
                <div className="heading_s1 w-80">
                  {/* <span class="sub_heading font_style1">How does it work?</span> */}
                  <h3 className=" fw-bold text-capitalize">
                    POSApt: The Best POS System in Australia
                  </h3>
                  <p>
                    POSApt is capable of selling everything that is available in
                    your store via an online website. All you need is a phone or
                    a tablet to take full control of your online store and
                    you’ll be doubling your monthly sales. Whether you own a
                    restaurant, bakery, grocery, flower or liquor store, POSApt
                    will help you get online instantly. You will be able to
                    customize your online store as per your need and get
                    niche-specific tools to run your store smoothly.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="workprocess workprocess-main text-center position-relative">
                    <div className="workprocess-icon">
                      <img
                        width={114}
                        height={114}
                        src="assets/dist/image/Homepage/Unlimited-Orders-at-ZERO-Cost-Image.webp"
                        className="img-fluid"
                        alt="Unlimited Orders at ZERO Cost Image"
                        title="Unlimited Orders at ZERO Cost Image"
                        loading="lazy"
                        data-no-retina=""
                      />
                    </div>
                    <div className="workprocess-content">
                      <h4 className="mb-3 workprocess-title">
                        Unlimited Orders at <br /> ZERO Cost
                      </h4>
                      <p>
                        No commissions. No hidden fees. Get unlimited food
                        orders from your online customers and grow your
                        restaurant to its full potential.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="workprocess workprocess-main text-center position-relative">
                    <div className="workprocess-icon">
                      <img
                        width={114}
                        height={114}
                        src="assets/dist/image/Homepage/Supports-Franchised-Businesses-image.webp"
                        className="img-fluid"
                        alt="Supports Franchised Businesses image"
                        title="Supports Franchised Businesses image"
                        loading="lazy"
                        data-no-retina=""
                      />
                    </div>
                    <div className="workprocess-content">
                      <h4 className="mb-3 workprocess-title">
                        Supports Franchised Businesses
                      </h4>
                      <p>
                        POSApt Online Ordering System has the power to support
                        franchised businesses with multiple store locations and
                        a fragmented customer base.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div className="workprocess workprocess-main text-center position-relative">
                    <div className="workprocess-icon">
                      <img
                        width={114}
                        height={114}
                        src="assets/dist/image/Homepage/lock.webp"
                        className="img-fluid"
                        title="Make Payments Easier &amp; Secure"
                        alt="Make Payments Easier &amp; Secure"
                        loading="lazy"
                        data-no-retina=""
                      />
                    </div>
                    <div className="workprocess-content">
                      <h4 className="mb-3 workprocess-title">
                        {" "}
                        Make Payments Easier &amp; Secure
                      </h4>
                      <p>
                        Alongside EFTPOS integration, our omnichannel POS system also allows
                        your customers to pay via PayPal or Google Pay, allowing
                        multiple secure payment options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurHardwareSystem />

        {/* Key Features */}
        <section className="pb-10 pt-50">
          <div className="keyfeatures text-center">
            <div className="container">
              <div className="row">
                <div className="heading_s1 w-80">
                  <span className="sub_heading font_style1">
                    Why Choose Us?
                  </span>
                  <h3 className=" fw-bold text-capitalize">
                    We're here to help you GROW!
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="assets/dist/image/Homepage/Complete-POS-and-online-ordering-solution.webp"
                            className="img-fluid h-100"
                            alt="Complete POS and online ordering solution"
                            title="Complete POS and online ordering solution"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h4 className="mt-4 mb-3">
                          Complete POS Solution{" "}
                        </h4>
                      </div>
                      <p>
                        We'll take your business from 'no
                        online presence' to a thriving online business with our
                        cloud-based Point Of Sale and integrated Online Ordering
                        System.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="assets/dist/image/Homepage/POS-System-free-trial.webp"
                            className="img-fluid h-100"
                            alt="POS System free trial"
                            title="POS System free trial"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h4 className="mt-4 mb-3">30-Day Free Trial </h4>
                      </div>
                      <p>
                        We know you'll love our products for sure. So, we're
                        happy to give everyone free access to our products for
                        the first 30 days with no commitments at all.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="/assets/dist/image/Homepage/24-hours-online-support-for-POS-System-Software.webp"
                            className="img-fluid h-100"
                            alt="24 hours online support for POS System Software"
                            title="24 hours online support for POS System Software"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h4 className="mt-4 mb-3">24*7 Online Support </h4>
                      </div>
                      <p>
                        We're always available for our clients. Reach us any
                        time of the day and we'll get you connected with an
                        Expert to get your issue resolved within no time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* faq */}
        <section
          className=" py-5 mb-lg-2"
          style={{
            background:
              "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)",
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
                        What is POS System Software?
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
                          Point of sale, or POS, refers to the place where a
                          retail transaction such as buying or selling of goods
                          takes place. While point-of-sale systems used to be
                          your traditional cash register, they can now be found
                          in a variety of forms, thanks to digital technologies.
                        </p>
                        <p className="mb-0">
                          A POS system software typically records an item’s
                          price, tracks sales, accepts payments and generates a
                          receipt. POSApt can do these aforementioned tasks
                          flawlessly and even help out with important business
                          operations.
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
                        What are the Key features of a Point of Sale System?
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
                          Key features of a Point of sale System software
                          include:
                        </p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}
                        >
                          <li>
                            Sales processing: Accepting cash, credit cards, and
                            debit cards is a simple procedure.
                          </li>
                          <li>
                            Inventory management: Manage or track items in
                            stock, alert when stocks run low, and produce
                            purchase orders.
                          </li>
                          <li>
                            Reporting: Tracks and records real-time data,
                            prepares sales reports and analyzes data to find
                            trends.
                          </li>
                          <li>
                            Customer management: Track and manage customer
                            information, purchasing history and preferences.
                          </li>
                          <li>
                            Employee management: Tracks and manages employee
                            scheduling, time, commission and leaves.
                          </li>
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
                        What are the components of a typical POS System?
                      </button>
                    </h3>
                    <div
                      id="q3"
                      className="accordion-collapse collapse"
                      aria-labelledby="q3-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>The components of a typical POS System include:</p>
                        <ul
                          style={{
                            listStyleType: "disc",
                            paddingLeft: "20px",
                          }}
                        >
                          <li>
                            Hardware: Includes a computer/tablet, cash register,
                            barcode scanner, and receipt printer.
                          </li>
                          <li>
                            Software: A point-of-sale software runs on the
                            hardware and manages the sales, inventory, reporting
                            and many more features.
                          </li>
                          <li>
                            Payment processing: Includes the ability to accept
                            different payment methods such as cash, credit
                            cards/debit cards or contactless payment.
                          </li>
                          <li>
                            Inventory management: Includes tools for tracking
                            inventory, generating purchase orders, and managing
                            new inventory.
                          </li>
                        </ul>
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
                        Who uses POS software in Australia?
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
                          Different businesses across Australia
                          like retail stores, restaurants, bars, grocery stores,
                          hotels and pubs use POS software. And, if you’ve ever
                          talked to owners of these businesses, they can attest
                          to the fact that this system has proved to be a boon
                          to their businesses. More often than not, a POS system
                          brings a positive impact on a business’s operations,
                          return on investments and returning customers.
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
                        Where are POS systems used?
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
                          Point of Sale systems are used in various industries
                          in Australia, including retail stores, restaurants,
                          cafes, bars, hotels, grocery stores and salons. It is
                          used wherever goods or services are sold, and
                          transactions need to be processed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <noscript>
          <img height="1" width="1" style={{ display: "none", visibility: "hidden" }}
            src="https://www.facebook.com/tr?id=10022972934381273&ev=PageView&noscript=1"
          />
        </noscript>
      </Layout>
    </>
  );
}
