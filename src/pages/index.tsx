/** @format */
// import {MdOutlineCheckBox} from "react-icons/Md"
import Layout from "@/Components/Layout";
import { FAQ, FeatureList, HeroSection } from "@/sections";
import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  // SEO Schema
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
      "name": "Cloud POS",
      "item": "https://posapt.au/cloud-pos"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Online Ordering System",
      "item": "https://posapt.au/online-ordering-system"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "E-commerce",
      "item": "https://posapt.au/ecommerce"
    }, {
      "@type": "ListItem",
      "position": 4,
      "name": "Login",
      "item": "https://app.posapt.au/login"
    }, {
      "@type": "ListItem",
      "position": 5,
      "name": "Pricing",
      "item": "https://posapt.au/pricing"
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
        "text": "Point of sale, or POS, refers to the place where a retail transaction such as buying or selling of goods takes place. While point-of-sale systems used to be your traditional cash register, they can now be found in a variety of forms, thanks to digital technologies.  A POS system software typically records an item’s price, tracks sales, accepts payments and generates a receipt. POSApt can do these aforementioned tasks flawlessly and even help out with important business operations."
      }
    }, {
      "@type": "Question",
      "name": "What are the Key features of a POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Key features of a Point of sale System software include:
  1. Sales processing: Accepting cash, credit cards, and debit cards is a simple procedure.
  2. Inventory management:  Manage or track items in stock, alert when stocks run low, and produce purchase orders.
  3. Reporting: Tracks and records real-time data,  prepares sales reports and analyzes data to find trends.
  4. Customer management: Track and manage customer information, purchasing history and preferences.
  5. Employee management: Tracks and manages employee scheduling, time, commission and leaves.`
      }
    }, {
      "@type": "Question",
      "name": "What are the components of a typical POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The components of a typical POS System include:
  1. Hardware: Includes a computer/tablet, cash register, barcode scanner, and receipt printer.
  2. Software: A point-of-sale software runs on the hardware and manages the sales, inventory, reporting and many more features.
  3. Payment processing: Includes the ability to accept different payment methods such as cash, credit cards/debit cards or contactless payment.
  4. Inventory management: Includes tools for tracking inventory, generating purchase orders, and managing new inventory.`
      }
    }, {
      "@type": "Question",
      "name": "Who uses POS software in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different businesses across Australia like retail stores, restaurants, bars, grocery stores, hotels and pubs use POS software. And, if you’ve ever talked to owners of these businesses, they can attest to the fact that this system has proved to be a boon to their businesses. More often than not, a POS system brings a positive impact on a business’s operations, return on investments and returning customers."
      }
    }, {
      "@type": "Question",
      "name": "How to Set up POSApt's All-in-One POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you sign up for a paid plan with POSApt, we send a professional to get everything set up on your premises. You do not have to worry about what you need to do, our professional will set up all the hardware, and software. Moreover, our team will give you a hands-on tour of the system when we make it live. This way, you can confidently start making the most out of POSApt’s POS solution from the get-go. Even when you’re on a free trial, you can easily set up our POSApt with the help of our Tutorial Videos."
      }
    }, {
      "@type": "Question",
      "name": "How Much Does the POSApt's POS System Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get POSApt’s POS System for just $66 or $99 for hospitality or retail businesses respectively. Depending on your needs for additional features such as online ordering systems or dedicated mobile apps, the cost can change. Check out our complete pricing plan to learn more. "
      }
    }]
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "POSApt",
    "image": "https://posapt.au/assets/dist/image/poslogo.png",
    "url": "https://posapt.au/",
    "telephone": "+03 8802 4468",
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
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  }

  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "POSApt",
        "url": "https://posapt.au",
        "logo": "https://posapt.au/assets/dist/image/poslogo.png",
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

  // body contents
  const solutionList = [
    {
      title: "Cafe",
      link: "/pos-system-for-cafe",
      imgSrc: "cafe",
    },
    {
      title: "Florist",
      link: "/flower-pos-system",
      imgSrc: "florist",
    },
    {
      title: "Restaurant",
      link: "/restaurant-pos-system",
      imgSrc: "restaurant",
    },
    {
      title: "Fashion",
      link: "/retail-pos-system/clothing-store",
      imgSrc: "fashion",
    },
    {
      title: "Liquor",
      link: "/beverages-pos-system",
      imgSrc: "liquor",
    },
    {
      title: "Bakery",
      link: "/bakery-pos-system",
      imgSrc: "bakery",
    },

  ]
  const orderingList = [
    {
      title: "QR",
      link: "qr-ordering",
      imgSrc: "qr-ordering",
    },
    {
      title: "Tablet",
      link: "tablet-ordering",
      imgSrc: "tablet-ordering",
    },
    {
      title: "B to B",
      link: "b2b-ordering",
      imgSrc: "b2b-ordering",
    },
    {
      title: "Food",
      link: "food-ordering",
      imgSrc: "food-ordering",
    },
    {
      title: "Cafe",
      link: "cafe-and-coffee-shop",
      imgSrc: "cafe-ordering",
    },
    {
      title: "Table-side",
      link: "table-ordering",
      imgSrc: "table-side-ordering",
    },
  ]
  const featureListData = {
    title: `Why Choose POSApt's <br /> Point of Sale System?`,
    featureList: [
      {
        title: "Real-time Sales Report",
        desc: "Any transaction that goes through POSApt is recorded and can be viewed in real-time. Get an overview of your key metrics right on your dashboard when you log into your account. Take prompt actions based on real data to lead your business towards success.",
      },
      {
        title: "Efficient Order Tracking",
        desc: "Whether you’re a customer or the store owner, you’ll both have instances when you want to know the status of the order. That is where POSApt shines. The system allows you to precisely know exactly what the status of the order is.",
      },
      {
        title: "Secure Payment",
        desc: "It’s inevitable that businesses or service providers should be ready to accept different ways of payment. Our system allows you to accept multiple payment methods without having to put the payment details of your customers.",
      },
      {
        title: "Software Integration",
        desc: "Software tools such as Xero play an integral part in most businesses today. When switching to our system, you don’t have to let go of the tools you already rely upon. Seamlessly integrate third party tools and keep using them directly through POSApt",
      },
      {
        title: "Gift and Loyalty Points",
        desc: "Customer retention is one of, if not, the most difficult objective in any service or product-based industry. To help you with it, we offer multiple CRM features including e-gift cards, promotional discount vouchers and loyalty point systems.",
      },
      {
        title: "Affordable for All",
        desc: "Unlike other POS providers, you can subscribe to our POS system with a minimal monthly fee. Moreover, we have a transparent pricing plan with no hidden fees. We also offer customer support and software updates for no extra charge to you.",
      },
    ]
  }
  const faqData = [
    {
      question: "What is POS System Software?",
      answer: `Point of sale, or POS, refers to the place where a retail
      transaction such as buying or selling of goods takes place.
      While point-of-sale systems used to be your traditional cash
      register, they can now be found in a variety of forms,
      thanks to digital technologies.
      <br /> A POS system software typically records an item’s
      price, tracks sales, accepts payments and generates a
      receipt. POSApt can do these aforementioned tasks flawlessly
      and even help out with important business operations.`,
    },
    {
      question: "What are the Key Features of a Point of Sale Software?",
      answer: `<p>
      Key features of a Point of sale System software include:
    </p>
    <ul>
      <li>
        <strong>Sales processing:</strong> Accepting cash, credit
        cards, and debit cards is a simple procedure.
      </li>
      <li>
        <strong>Inventory management:</strong> Manage or track
        items in stock, alert when stocks run low, and produce
        purchase orders.
      </li>
      <li>
        <strong>Reporting:</strong> Tracks and records real-time
        data, prepares sales reports and analyzes data to find
        trends.
      </li>
      <li>
        <strong>Customer management:</strong> Track and manage
        customer information, purchasing history and preferences.
      </li>
    </ul>`,
    },
    {
      question: "What are the Components of a Typical POS System?",
      answer: `<p>The components of a typical POS System include:</p>
      <ul>
        <li>
          <strong> Hardware:</strong> A computer/tablet, cash
          register, barcode scanner, and receipt printer.
        </li>
        <li>
          <strong>Software:</strong> A point-of-sale software runs
          on the hardware and manages the sales, inventory,
          reporting and many more features.
        </li>
        <li>
          <strong>Payment processing:</strong> Ability to accept
          different payment methods such as cash, credit cards/debit
          cards or contactless payment.
        </li>
        <li>
          <strong>Inventory management:</strong> Tools for tracking
          inventory, generating purchase orders, and managing new
          inventory.
        </li>
      </ul>`,
    },
    {
      question: "Who Uses POS Software in Australia?",
      answer: `Different businesses across Australia like retail stores,
      restaurants, bars, grocery stores, hotels and pubs use POS
      software. And, if you’ve ever talked to owners of these
      businesses, they can attest to the fact that this system has
      proved to be a boon to their businesses. More often than
      not, a POS system brings a positive impact on a business’s
      operations, return on investments and returning customers.`,
    },
    {
      question: "How to Set up POSApt's All-in-One POS System?",
      answer: `When you sign up for a paid plan with POSApt, we send a
      professional to get everything set up on your premises. You
      do not have to worry about what you need to do, our
      professional will set up all the hardware, and software.
      Moreover, our team will give you a hands-on tour of the
      system when we make it live. This way, you can confidently
      start making the most out of POSApt’s POS solution from the
      get-go.`,
    },
    {
      question: "How Much Does the POSApt's Point of Sale Software Cost?",
      answer: `You can get POSApt’s POS Software for just $66 or $99 for
      hospitality or retail businesses respectively. Depending on
      your needs for additional features such as online ordering
      systems or dedicated mobile apps, the cost can change. Check
      out our complete
      <a href="/pricing" className="text-primary">
      <b><i>Pricing plan</i></b>
      </a>
      to learn more.`,
    },
  ]


  return (
    <>
      <Head>
        <title>
          POS Systems Australia | Point of Sale Software | POSApt
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
          content="POS Systems Australia | Point of Sale Software | POSApt"
        />
        <meta
          name="google-site-verification"
          content="WhEwKP36VmQq_V_1z2CmWRDOv3bU1DWns7ethy_i2SY"
        />
        <meta
          name="description"
          content="POSApt’s POS System manages operations for small businesses in Australia. The all-in-one system to help you scale and thrive. Book a Free Demo Today! "
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
        {/* Mobile view menu */}
        <div className="btn-group d-md-none fixed-bottom bg-white p-2 ">
          <div className="navbar-toolbar d-flex align-items-center order-lg-3 justify-content-center m-auto">
            <Link
              href="https://app.posapt.au"
              target={"_blank"}
              className="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin"
            >
              <i className="fas fa-user me-2" />
              Login
            </Link>
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

        <>
          <HeroSection
            title="All in One <br/> POS System <br/> Simplifies Your Business"
            desc="Manage both in-shop and online sales with a single POS system."
            imgUrl="all-in-one-pos-system.webp"
            imgTitle="All in One POS System"
            twoBtn
          />

          <section className="pt-50">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="">
                    <div className="heading_s1">
                      <h2 className=" fw-bold text-capitalize text-dark">
                        POSApt Streamlines Your Business as We Operate All
                      </h2>
                    </div>
                    <ul className="newposlist text-dark fw-bold pt-4 fs-5">
                      <li>
                        <Link href="/cloud-pos" className="text-theme">
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
                          Cloud POS System
                        </Link>
                      </li>
                      <li>
                        <Link href="/online-ordering-system" className="text-theme">
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
                          Online Ordering System
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecommerce" className="text-theme">
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
                          POSApt E-commerce System
                        </Link>
                      </li>
                    </ul>
                    <p className="fs-5 mt-2 mt-md-3">
                      POSApt: Your all-in-one solution. Effortlessly manage in-shop and
                      online sales with our user-friendly POS system integrated with
                      E-commerce. Streamline inventory, orders, and product info across
                      all channels, boosting efficiency. Elevate your business with
                      POSApt.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 text-end">
                  <div className="homeimg_right mt-4 mt-md-0">
                    <img
                      src="assets/dist/image/posapt-business-solution.webp"
                      alt="POSApt Business Solution"
                      title="POSApt Business Solution"
                      className="img-fluid w-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* new restro */}
          <section className="bg-light pt-50  pb-50 mt-5 ">
            <div className="container">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize text-dark">
                    Find the Best Solution for your Business
                  </h2>
                  <p className="fs-2 text-center">
                    We Serve Local Businesses in Australia
                  </p>
                  <p className="w-80">
                    Our unwavering focus remains on enhancing daily business operations
                    and alleviating the burdens of business owners. Join us today and
                    experience the tailored functions we've developed exclusively for
                    your benefit.
                  </p>
                </div>
              </div>
              <div className="recentstores">
                <div className="row align-items-center justify-content-center d-none d-md-flex">
                  {
                    solutionList.map((item, index) => (
                      <div key={index} className="col-lg-4  col-sm-4">
                        <div className=" p-15  text-center">
                          <Link href={item.link}>
                            <img src={`assets/dist/image/${item.imgSrc}.webp`} alt={item.title} title={item.title} />
                          </Link>
                          <div className="text-center newhome_btn store_btn">
                            <Link className="btn btn-white btn-red fs-6" href={item.link}>
                              {item.title}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>

                {/* mobile view */}
                <div>
                  <div className="d-md-none ">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                      {solutionList.map((item, index) => (
                        <Carousel.Item key={index} interval={1200}>
                          <div className=" p-15  text-center">
                            <Link href={item.link}>
                              <img src={`assets/dist/image/${item.imgSrc}.webp`} alt={item.title} title={item.title} />
                            </Link>
                            <div className="text-center newhome_btn store_btn">
                              <Link className="btn btn-white btn-red fs-6" href={item.link}>
                                {item.title}
                              </Link>
                            </div>
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>

              </div>
            </div>
          </section>


          <section className="pt-50 pb-50 customer_section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 ">
                  <div className="customer_img">
                    <img
                      src="assets/dist/image/happy-customer.webp"
                      className="img-fluid rounded-3 w-100"
                      alt="Happy Customer"
                      title="Happy Customer"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark">
                      Get Attention from more Customers
                    </h2>
                    <p className="fs-5">
                      Expand your business opportunities with our user friendly
                      E-Commerce website and various Online Ordering Systems. Today's
                      modern shoppers and diners are always seeking where to spend with
                      internet. You can't miss out these opportunities to sustain your
                      business longer. Engage more customers, maximise sales and grow
                      your business.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">
                          <a>Faster Transactions </a>
                        </li>
                        <li className="fw-bold">
                          <a>Engage More Customers </a>
                        </li>
                        <li className="fw-bold">
                          <a>Franchised Business Support </a>
                        </li>
                      </ul>
                      {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="ctabanner pt-5 pb-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="row text-start">
                    <div className="heading_s1">
                      <h2 className=" fw-bold text-capitalize text-white">
                        Our User Friendly Integrated{" "}
                        <span className="d-block">E-Commerce System</span>
                      </h2>
                      <p className="fs-20 text-start text-white">
                        Bussiness owners find all management solutions within POSApt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="localbusiness">
                    <img
                      src="assets/dist/image/posapt-ecommerce-system.webp"
                      className="img-fluid"
                      alt="POSApt Ecommerce System"
                      title="POSApt Ecommerce System"
                    />
                  </div>
                </div>
              </div>
              <hr className="bg-white" />
              <div className="business_details">
                <div className="row">
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Engage More Customers</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        No matter where customers are your business can sell and serve
                        anywhere anytime.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Conduct Smarter Desicions</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        Gain deeper insights into your E-com store through POSApt's
                        comprehensive real-time reports.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Improve Business Efficiency</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        Integrate with the POS system to simplify workflows and automate
                        tasks to streamline your business.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 subpara">
                    <div className="text-center newhome_btn">
                      <Link
                        className="btn btn-white btn-red fs-6 mb-2 w-auto"
                        href="/ecommerce"
                      >
                        Learn E-Commerce System More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* new restro */}
          <section className="bg-light pt-50 pt-3  pb-50 mt-3 mt-md-5 ">
            <div className="container">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize text-dark">
                    Online Ordering System
                  </h2>
                  <p className="fs-5 text-center  mb-2">
                    Allow your customers to order what you’re selling from wherever they
                    are and whenever they wish to. <br />
                    Take your store online with POSApt.
                  </p>
                  <div className="subpara ">
                    <div className="text-center newhome_btn mt-3 mt-md-0">
                      <Link className="btn bg-theme fs-6 mb-2 w-auto" href="/online-ordering-system">
                        Learn Online Ordering System More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recentstores">
                <div className="row align-items-center justify-content-center d-none d-md-flex">

                  {
                    orderingList.map((item, index) => (
                      <div key={index} className="col-lg-4  col-sm-4">
                        <div className=" p-15  text-center">
                          <Link href={`/online-ordering-system/${item.link}`}>
                            <img src={`assets/dist/image/${item.imgSrc}.webp`} alt={`${item.title} Ordering`} title={`${item.title} Ordering`} />
                          </Link>
                          <div className="text-center newhome_btn store_btn">
                            <Link className="btn btn-white btn-red fs-6" href={`/online-ordering-system/${item.link}`}>
                              {item.title} Ordering
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
                {/* mobile view */}
                <div>
                  <div className="d-md-none ">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                      {orderingList.map((item, index) => (
                        <Carousel.Item key={index} interval={1200}>
                          <div className=" p-15  text-center">
                            <Link href={`/online-ordering-system/${item.link}`}>
                              <img src={`assets/dist/image/${item.imgSrc}.webp`} alt={`${item.title} Ordering`} title={`${item.title} Ordering`} />
                            </Link>
                            <div className="text-center newhome_btn store_btn">
                              <Link className="btn btn-white btn-red fs-6" href={`/online-ordering-system/${item.link}`}>
                                {item.title} Ordering
                              </Link>
                            </div>
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <FeatureList
            {...featureListData}
          />

          <FAQ
            faqData={faqData}
          />
        </>
        <noscript>
          <img height="1" width="1" style={{ display: "none", visibility: "hidden" }}
            src="https://www.facebook.com/tr?id=10022972934381273&ev=PageView&noscript=1"
          />
        </noscript>
      </Layout>
    </>
  );
}
