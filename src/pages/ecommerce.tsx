import Layout from "@/Components/Layout"
import { FAQ, FeatureList, HeroSection } from "@/sections"
import Head from "next/head"

const ecommerce = () => {

  // Schema content

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
  const webPage = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://posapt.au/ecommerce/#webpage",
        "url": "https://posapt.au/ecommerce/",
        "name": "POSApt E-Commerce For Small Businesses in Australia",
        "description": "Build a strong online presence with POSApt’s e-commerce platform. Build a stunning online store without coding. ",
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
            "item": "https://posapt.au/ecommerce/",
            "name": "POSApt Ecommerce"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "POSApt Ecommerce",
        "description": "A POSApt Ecommerce solution for small retail businesses across Australia.",
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
          "name": "POSApt Ecommerce",
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
                "name": "POSApt Ecommerce - 199 AUD per month inc. GST"
              }
            }
          ]
        }
      }
    ]
  }
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How to Use POSApt E-commerce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POSApt E-commerce is intuitive and super easy to use. Once you've signed up, you can easily navigate through our platform. You can add products, set prices, and manage your inventory effortlessly. We offer a range of customisation options to tailor your store's appearance and functionality. You can also find feature-specific tutorials when you first navigate through the system. We also offer free hands-on training at the start of your subscription so you know all the ins and outs of our e-commerce platform."
      }
    }, {
      "@type": "Question",
      "name": "What is the best E-commerce platform for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POSApt E-commerce is the ideal choice for small and medium-sized retail businesses in Australia. What most other e-commerce platforms lack is the seamless integration between their online store and their physical store. To combat this, we have developed our own POS system which seamlessly integrates with our e-commerce platform. The platform also offers a suite of tools designed to enhance your online presence, streamline operations, and boost sales."
      }
    }, {
      "@type": "Question",
      "name": "How to Set Up a POSApt E-commerce Store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can simply sign up for one of our paid plans and one of our team members will guide you through the whole process. Once the store is ready, you can add your products, organise them into categories, set up your pricing, and configure shipping options. Should you need any assistance, our support personnel are available to help you every step of the way."
      }
    }, {
      "@type": "Question",
      "name": "How Much Does an E-commerce Website Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our e-commerce solution costs $199 per month for retail businesses in Australia. However, depending on your specific requirements, the size of the business, and the scale of the product required, the cost can change. View our complete pricing plan or Contact us to get a personalised quote based on your business needs."
      }
    }, {
      "@type": "Question",
      "name": "How Can I Contact You If I Need Any Support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have a team of support personnel available to assist you or answer your queries 7 days a week. There are several ways to reach us. You can visit our Contact Page on our website or reach us directly through email or phone. We're here to ensure that your experience with our E-Commerce is smooth and successful."
      }
    }]
  }
  // body content
  const faqData = [
    {
      question: "How to Use POSApt E-commerce?",
      answer: "POSApt E-commerce is intuitive and super easy to use. Once you've signed up, you can easily navigate through our platform. You can add products, set prices, and manage your inventory effortlessly. We offer a range of customisation options to tailor your store's appearance and functionality. You can also find feature-specific tutorials when you first navigate through the system. We also offer free hands-on training at the start of your subscription so you know all the ins and outs of our e-commerce platform.",
    },
    {
      question: "What is the best E-commerce platform for small businesses?",
      answer: "POSApt E-commerce is the ideal choice for small and medium-sized retail businesses in Australia. What most other e-commerce platforms lack is the seamless integration between their online store and their physical store. To combat this, we have developed our own POS system which seamlessly integrates with our e-commerce platform. The platform also offers a suite of tools designed to enhance your online presence, streamline operations, and boost sales.",
    },
    {
      question: "How to Set Up a POSApt E-commerce Store?",
      answer: "You can simply sign up for one of our paid plans and one of our team members will guide you through the whole process. Once the store is ready, you can add your products, organise them into categories, set up your pricing, and configure shipping options. Should you need any assistance, our support personnel are available to help you every step of the way.",
    },
    {
      question: "How Much Does an E-commerce Website Cost?",
      answer: "Our e-commerce solution costs $199 per month for retail businesses in Australia. However, depending on your specific requirements, the size of the business, and the scale of the product required, the cost can change. View our complete pricing plan or Contact us to get a personalised quote based on your business needs.",
    },
    {
      question: "How Can I Contact You If I Need Any Support?",
      answer: "We have a team of support personnel available to assist you or answer your queries 7 days a week. There are several ways to reach us. You can visit our Contact Page on our website or reach us directly through email or phone. We're here to ensure that your experience with our E-Commerce is smooth and successful.",
    }
  ]
  const featureListData = {
    title: "Why Choose POSApt’s <br /> E-Commerce System?",
    featureList: [
      {
        title: "Better Inventory Management",
        desc: "Our simple, precise and real-time inventory system keeps your business running smoothly. With accurate and up-to-date information about your inventory, make informed decisions to increase profitability and provide a better customer experience.",
      },
      {
        title: "Direct Integration to POS",
        desc: "Our E-Commerce System integrates seamlessly with our POS solution giving you access to all incoming orders from a single robust system. Eliminate the need to switch between multiple applications for order and sales tracking.",
      },
      {
        title: "Safe & Secure Payment Methods",
        desc: "Offer multiple payment options including Cash, Credit Cards, and Debit Cards to your online customers. This allows your customers to choose the most convenient payment method for them, increasing your sales and their happiness.",
      },
      {
        title: "Custom Website Included",
        desc: "We will design and build a custom website for you that is visually appealing, and fully functional. It will also allow your customers to purchase goods and services, all at no additional cost. Sell online what your business is known for.",
      },
      {
        title: "E-Gift Card & Loyalty Program",
        desc: "Keep your customers interested, happy and tied to you with the help of our E-gift cards, vouchers and loyalty points. Improve customer retention and increase engagement with your online store.",
      },
      {
        title: "Inbuilt Marketing Tools",
        desc: "In this competitive market where every retail store has its own e-commerce page on Google, how you promote yours makes all the difference. That’s why we’ve included features like email marketing and discounts right on our system itself.",
      },
    ]
  }
  return (
    <>
      <Head>
        <title>
          E-Commerce For Small Businesses in Australia | POSApt
        </title>

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        /> 
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
          />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <meta
          name="title"
          content="E-Commerce For Small Businesses in Australia | POSApt"
        />
        <meta
          name="google-site-verification"
          content="WhEwKP36VmQq_V_1z2CmWRDOv3bU1DWns7ethy_i2SY"
        />
        <meta
          name="description"
          content="POSApt e-commerce to empower your business. Start a new store or grow the existing one with a powerful e-commerce website. Book a Demo!"
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
          content="E-Commerce For Small Businesses in Australia | POSApt"
        />
        <meta
          property="og:description"
          content="POSApt e-commerce to empower your business. Start a new store or grow the existing one with a powerful e-commerce website. Book a Demo!"
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
          content="E-Commerce For Small Businesses in Australia | POSApt"
        />
        <meta
          name="twitter:description"
          content="POSApt e-commerce to empower your business. Start a new store or grow the existing one with a powerful e-commerce website. Book a Demo!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/ecommerce" />
      </Head>
      <Layout>
        <>
          <HeroSection
            title="Your Business's <br /> E-Commerce Website <br /> is Just a Click Away"
            desc="Turn clicks into sales and visitors into returning customers with POSApt"
            imgUrl="ecommerceban.webp"
            imgTitle="POSApt Ecommerce"
          />

          <section className="pt-50">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <div className="heading_s1">
                      <h2 className=" fw-bold text-capitalize text-dark">
                        Don't Worry, We Set Up Everything For You
                      </h2>
                    </div>
                    <ul className="newposlist text-dark fw-bold pt-4 fs-5">
                      <li>
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
                        Free Consultation
                      </li>
                      <li>
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
                        Products Upload Included
                      </li>
                      <li>
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
                        Set Up, User Training Included
                      </li>
                      <li>
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
                        Customer Can Leave Review
                      </li>
                      <li>
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
                        Custom Mobile App Option
                      </li>
                      <li>
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
                        Custom Website &amp; Maintenance
                      </li>
                    </ul>
                    <p className="fs-5 mt-2 mt-md-5">
                      POSApt E-Commerce effortlessly merges with our POS, offering
                      user-friendly integration. Whether you prefer a standalone online
                      store or a combined in-store and online setup, our system handles
                      both seamlessly. This synchronization streamlines inventory,
                      orders, and product information, enhancing efficiency and saving
                      time. We also provide a customized mobile app option for each
                      business.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="homeimg_right mt-3 mt-md-0">
                    <img
                      src="assets/dist/image/local-business.webp"
                      alt="Local Business"
                      title="Local Business"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-50 pb-50 customer_section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-2 order-md-1 ">
                  <div className="customer_img">
                    <img
                      src="assets/dist/image/ecom-business.webp"
                      className="img-fluid rounded-3"
                      alt="Ecommerce Business"
                      title="Ecommerce Business"
                    />
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark mb-2">
                      E-commerce Simplified. Engage with More <br /> Customers
                    </h2>
                    <p className="fs-5">
                      POSApt E-Commerce system proves versatile for various retail
                      niches including fashion, liquor, flowers, and groceries. With the
                      ability for diverse product offerings and customer reviews, your
                      business gains a seamless selling platform. Upon receiving our
                      system, instant selling is possible as we handle the setup.{" "}
                    </p>
                    <p className=" mt-4">
                      Tailoring your online store to your preferences becomes
                      effortless, bolstered by specialized tools for niche operations.
                      Complementing this, our package encompasses personalized website
                      design services curated to match your distinct aesthetic.
                    </p>
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
                        An E-commerce Platform for
                        <span className="d-block">Small Businesses in Australia</span>
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
                      alt="POSApt Ecommerce for Small Business"
                      title="POSApt Ecommerce for Small Business"
                    />
                  </div>
                </div>
              </div>
              <hr className="bg-white" />
              <div className="business_details">
                <div className="row">
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Engage more Customers</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        No matter where your customers are, enable your business to sell
                        and serve anywhere, anytime.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Make Smarter Desicions</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        Get real-time insights on your business with a robust data
                        reporting system. Understand what sells the most and what doesn’t.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Improve Business Efficiency</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        Experience streamlined workflows and automated tasks through the
                        integrated POS system, optimising your business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-white" />
              <div className="heading_s1">
                <h2 className=" fw-bold text-capitalize text-white text-start mb-4">
                  Sell Anything. Anytime.
                </h2>
              </div>
              <div className="row g-4 flex-nowrap flex-md-wrap  mobile_flex ">
                <div className="col-md-4">
                  <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                    <div className="card-body ">
                      {/* badge */}
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img1">
                          <img
                            src="assets/dist/image/retail-ecom.webp"
                            alt="Retail Ecommerce"
                            title="Retail Ecommerce"
                            className="mb-3 w-100 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h4 className="fw-bold text-theme ">
                          Retail Stores <br />
                          E-Commerce System
                        </h4>
                        <p className="fs-5">
                          Establish credibility and provide similar experiences customers
                          expect in person.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                    <div className="card-body ">
                      {/* badge */}
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img1">
                          <img
                            src="assets/dist/image/grocery-ecom.webp"
                            alt="Grocery Ecommerce "
                            title="Grocery Ecommerce"
                            className="mb-3 w-100 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h4 className="fw-bold text-theme ">
                          {" "}
                          Grocery Stores <br /> E-Commerce System
                        </h4>
                        <p className="fs-5">
                          Provide excellent customer experiences with flexible consumer
                          behaviour and interaction.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                    <div className="card-body ">
                      {/* badge */}
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img1">
                          <img
                            src="assets/dist/image/fashion-ecom.webp"
                            alt="Fashion Ecommerce"
                            title="Fashion Ecommerce"
                            className="mb-3 w-100 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h4 className="fw-bold text-theme ">
                          Fashion Stores <br /> E-Commerce System
                        </h4>
                        <p className="fs-5">
                          Expand and run your business smoothly with our simple precise
                          commerce system.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <FeatureList
            {...featureListData}
          />

          <section className="pt-50 customer_section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark">
                      More Sales. Less Overhead. <br /> 24*7 Support.
                    </h2>
                    <p className="fs-5 mt-2">
                      Our 24/7 online support is available for any client. Reach us any
                      time of the day and we'll get you connected with an Expert to get
                      your issue resolved as soon as possible.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold fs-20">Faster Issue Resolving</li>
                        <li className="fw-bold fs-20">Fewer Sales Hiccups</li>
                        <li className="fw-bold fs-20">Soaring Profits</li>
                      </ul>
                      {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="customer_img">
                    <img
                      src="assets/dist/image/customer-support.webp"
                      className="img-fluid rounded-3 w-100"
                      alt="Customer Support"
                      title="Customer Support"
                    />
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
  )
}

export default ecommerce