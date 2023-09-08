import Layout from "@/Components/Layout"
import { BusinessFeatureList, CloudFeatureList, CustomerSection, FAQ, FeatureList, HeroSection } from "@/sections"
import Head from "next/head"

const CloudPos = () => {

  // Schema content
  const organizationSchema = {
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
  const webPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://posapt.au/cloud-pos/#webpage",
        "url": "https://posapt.au/cloud-pos/",
        "name": "Cloud POS | Point of Sale Software Australia",
        "description": "POSApt Offers cloud-based POS hardware & software solutions for small to medium-sized businesses across Australia.",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/cloud-pos/#breadcrumb",
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
            "item": "https://posapt.au/cloud-pos/",
            "name": "Cloud POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Cloud Based POS System",
        "description": "A cloud-based POS solution for hospitality and retail store owners to manage in-store and online sales.",
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
          "name": "Cloud POS System",
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
                "name": "Hospitality POS - 66 AUD per month inc. GST"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Retail POS - 99 AUD per month inc. GST"
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
      "name": "What is Cloud POS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Cloud POS system is just like a regular POS system but stores data on cloud storage and all sales transitions and operations occur over the internet. This enables a business owner to access their point-of-sale system from any device with an internet connection."
      }
    }, {
      "@type": "Question",
      "name": "How Does a Cloud-Based POS System Work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every time a sale is made, the details of the transaction are instantly processed and stored in the cloud. Depending upon the order and your business needs, the order is processed accordingly. Using this live data on the cloud storage, you also get a real-time overview of your key metrics right in the dashboard. POSApt’s cloud-based POS works on multiple platforms like web browsers, dedicated mobile app, or even a tablet."
      }
    }, {
      "@type": "Question",
      "name": "What are the Main Features of Cloud POS Software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Here are the main features of our Cloud POS software: Sales Management: Processing transactions, payments and printing receipts. Inventory Tracking: Monitoring stock levels and sending alerts when any stock item is running low. Multi-Location Support: Managing multiple stores or branches from a centralised application. 3rd Party Software Integration: Integrating with other business tools such as Xero and e-commerce systems."
      }
    }, {
      "@type": "Question",
      "name": "What are the Advantages of a Cloud POS System?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `The advantages of POSApt's Cloud POS system include:
  Accessible from anywhere around the globe
  Since all the data is stored in cloud storage, business owners can access it anytime, anywhere, facilitating remote management.
  Scalable as your business grows
  Unlike a traditional POS system that is constricted by the capacity of its local storage, cloud POS systems allow you to easily scale your system.
          Security & Backup
  Since the data is securely stored in the cloud.Moreover, you have the power to backup and recover whenever your physical store’s data gets corrupted or erased.
  Cost Effective
  Cloud- based POS systems also demand fewer hardware components to be installed on- site which reduces your on - site hardware and maintenance costs. `
      }
    }, {
      "@type": "Question",
      "name": "What Integration Options Does POSApt's Cloud POS Provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We understand that you may already be reliant on other tools and software that are crucial for your business’s functionality. That is why we offer 3rd party integration of accounting software, payment gateways and e-commerce or online ordering platforms. "
      }
    }, {
      "@type": "Question",
      "name": "How Much Does POSApt's Cloud-Based POS System Cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our cloud POS starts from $66/month. However, we have multiple pricing plans for different-sized businesses. "
      }
    }]
  }

  // Body content
  const featuresData = {
    title: "POSApt As Your Cloud Business Solution",
    desc: "Explore what a Cloud POS can do for your business.",
    featureList: [
      {
        title: "Accessibility Enabled by Cloud",
        desc: "Data from all your transactions, inventory, sales and accounting will be stored in the Cloud. Easily access it from anywhere, anytime.",
        imgSrc: "enabled-by-cloud"
      },
      {
        title: "Efficient Sales Management",
        desc: "Our intuitive design allows you to manage sales without fumbling the process of transactions, accepting payments or printing receipts.",
        imgSrc: "sales-management"
      },
      {
        title: "Mobile/Tablet App",
        desc: "Check and manage all orders, reports and transactions remotely through your Android phone or tablet. Don't worry, we'll set it up on your device.",
        imgSrc: "mobile-tablet-app"
      },
      {
        title: "3rd Party Software Integration",
        desc: "Tools such as Xero are integral for most businesses in the market today. So, we made it easy to integrate Xero and e-commerce systems with our Cloud POS.",
        imgSrc: "software-integration"
      },
      {
        title: "Safe & Secure Data Storage",
        desc: "Since our system is always connected to the internet, all data is constantly being saved in cloud storage. So, there's no risk of data loss.",
        imgSrc: "cloud-storage"
      },
      {
        title: "Advanced Inventory Tracking",
        desc: "Monitor stock levels right through our cloud POS’s web or mobile app. Set up automatic alerts for inventory whenever your stock needs refilling.",
        imgSrc: "inventory-tracking"
      },
    ]
  }
  const faqData = [
    {
      question: "What is a Cloud POS?",
      answer: `A Cloud POS system is just like a regular POS system but
      stores data on cloud storage and all sales transitions and
      operations occur over the internet. This enables a business
      owner to access their point-of-sale system from any device
      with an internet connection.`,
    },
    {
      question: "How Does a Cloud-Based POS System Work?",
      answer: `Every time a sale is made, the details of the transaction
      are instantly processed and stored in the cloud. Depending
      upon the order and your business needs, the order is
      processed accordingly. Using this live data on the cloud
      storage, you also get a real-time overview of your key
      metrics right in the dashboard. POSApt’s cloud-based POS
      works on multiple platforms like web browsers, dedicated
      mobile apps, or even a tablet.`,
    },

    {
      question: "What are the Main Features of Cloud POS Software?",
      answer: `<p>Here are the main features of our Cloud POS software:</p>
      <ul>
        <li>
          <strong> Sales Management:</strong> Processing
          transactions, payments and printing receipts.
        </li>
        <li>
          <strong>Inventory Tracking:</strong> Monitoring stock
          levels and sending alerts when any stock item is running
          low.
        </li>
        <li>
          <strong>Multi-Location Support:</strong> Managing multiple
          stores or branches from a centralised application.
        </li>
        <li>
          <strong>3rd Party Software Integration:</strong>
          Integrating with other business tools such as Xero and
          e-commerce systems.
        </li>
      </ul>`,
    },
    {
      question: "What are the Advantages of a Cloud POS System?",
      answer: ` <p>The advantages of POSApt's Cloud POS system include:</p>
      <ul>
        <li>
          <strong className="fw-bold d-block">
            a. Accessible from anywhere around the globe
          </strong>
          Since all the data is stored in cloud storage, business
          owners can access it anytime, anywhere, facilitating
          remote management.
        </li>
        <li>
          <strong className="fw-bold d-block">
            b. Scalable as your business grows
          </strong>
          Unlike a traditional POS system that is constricted by the
          capacity of its local storage, cloud POS systems allow you
          to easily scale your system.
        </li>
        <li>
          <strong className="fw-bold d-block">
            c. Security &amp; Backup
          </strong>
          Since the data is securely stored in the cloud. Moreover,
          you have the power to back up and recover whenever your
          physical store’s data gets corrupted or erased.
        </li>
        <li>
          <strong className="fw-bold d-block">d. Cost Effective</strong>
          Cloud-based POS systems also demand fewer hardware
          components to be installed on-site which reduces your
          on-site hardware and maintenance costs.
        </li>
      </ul>`,
    },
    {
      question: "What Integration Options Does POSApt's Cloud POS Provide?",
      answer: `We understand that you may already be reliant on other tools
      and software that are crucial for your business’s
      functionality. That is why we offer 3rd party integration of
      accounting software, payment gateways and e-commerce or
      online ordering platforms.`,
    },
    {
      question: "How Much Does POSApt's Cloud-Based POS System Cost?",
      answer: `<p className="mb-0">
      Our cloud POS starts from $66/month. However, we have
      multiple
      <a href="/pricing" className="text-primary">
        pricing plans
      </a>
      for different-sized businesses.
    </p>`,
    },

  ]
  
  return (
    <>
      <Head>
        <title>
          Cloud POS | Point of Sale Software Australia | POSApt
        </title>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <meta
          name="title"
          content="Cloud POS | Point of Sale Software Australia | POSApt"
        />
        <meta
          name="description"
          content="POSApt is a cloud-based POS system designed to streamline local stores in Australia. Get our tailor-made POS system for your store. Book a Demo!"
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
          content="Cloud POS | Point of Sale Software Australia | POSApt"
        />
        <meta
          property="og:description"
          content="POSApt is a cloud-based POS system designed to streamline local stores in Australia. Get our tailor-made POS system for your store. Book a Demo!"
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
          content="Cloud POS | Point of Sale Software Australia | POSApt"
        />
        <meta
          name="twitter:description"
          content="POSApt is a cloud-based POS system designed to streamline local stores in Australia. Get our tailor-made POS system for your store. Book a Demo!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/cloud-pos" />
      </Head>
      <Layout>
        <HeroSection
          title="Cloud <br /> Point of Sale System <br /> for Australian Businesses"
          desc="A cloud-based POS solution for hospitality and retail store owners to manage in-store and online sales."
          imgUrl="cloud-pos.webp"
          imgTitle="Cloud Pos"
        />
        {/* about us */}
        <section className="pt-50">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark">
                      Enjoy POS Outstanding Features All Inclusive!
                    </h2>
                  </div>
                  <ul className="newposlist text-dark fw-bold pt-3 fs-5">
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
                      Order Tracking
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
                      POS Mobile App
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
                      Inventory Notification
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
                      Set Up &amp; User Training
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
                      Products Upload Service
                    </li>
                  </ul>
                  <p className="fs-5 mt-2 mt-md-3">
                    Take your business to the next level with cloud-based technology
                    integrated with a robust POS system. Give your customers what they
                    want with simplified QR code tableside ordering, delivery,
                    takeaway, and contactless payments. Make data-driven decisions,
                    increase revenue, and achieve success with real-time reporting.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-end">
                <div className="homeimg_right mt-3 mt-md-0">
                  <img
                    src="assets/dist/image/cloud-pos-features.webp"
                    alt="Cloud Pos Features"
                    title="Cloud Pos Features"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BusinessFeatureList
          {...featuresData}
        />

        <CloudFeatureList/>

        <section className=" newstore pt-5 pb-5">
          <div className="container">
            <div className="heading_s1">
              <h2 className=" fw-bold text-capitalize text-dark text-center mb-4">
                We Support Small <br /> Businesses Anywhere Anytime
              </h2>
            </div>
            <div className="row g-4 flex-nowrap flex-md-wrap  mobile_flex1">
              <div className="col-md-4">
                <div className="card h-100 shadow rounded">
                  <img
                    src="/assets/dist/image/hardware-setup-support.webp"
                    className="card-img-top "
                    alt="Hardware To Support Your Sales"
                    title="Hardware To Support Your Sales"
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-theme fw-bold fs-20">
                      Hardware Set up Support
                    </h3>
                    <p className="card-text">
                      It is essential that your Point of Sale solution synchronises
                      well with all the hardware components that complement it. So, as
                      part of the POSApt setup, we provide you with all the hardware
                      necessary for a smooth and efficient sales action. Our hardware
                      package includes:
                    </p>
                    <ul className="row serlist">
                      <li className="fw-bold col-md-5 col-6">
                        <a>
                          <small>Tablet</small>
                        </a>
                      </li>
                      <li className="fw-bold col-md-7 col-6">
                        <a>
                          <small>Tablet Stand</small>
                        </a>
                      </li>
                      <li className="fw-bold col-md-5 col-6">
                        <a>
                          <small>Cash Drawer</small>
                        </a>
                      </li>
                      <li className="fw-bold  col-md-7 col-6">
                        <a>
                          <small>Kitchen Printer</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 rounded shadow">
                  <img
                    src="assets/dist/image/merchant-management.webp"
                    className="card-img-top "
                    alt="Hands-On Merchant Management Service"
                    title=" Hands-On Merchant Management Service"
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-theme fw-bold fs-20">
                      Merchant Management
                    </h3>
                    <p className="card-text fs-5">
                      POSApt provides you with a hands-on Merchant Management Service
                      that extends from the installation phase to day-to-day
                      maintenance. This Merchant service allows you to accept multiple
                      payment methods including credit cards from your customers via
                      EFTPOS machines. We're offering Merchant facilities at a very
                      competitive price.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 rounded shadow">
                  <img
                    src="/assets/dist/image/cash-flow-management.webp"
                    className="card-img-top "
                    alt="Short Term Cash Flow Boost"
                    title="Short Term Cash Flow Boost"
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-theme fw-bold fs-20">
                      Cash Flow Management
                    </h3>
                    <p className="card-text">
                      We want to power your business’s success. We’ve partnered with
                      LucaPay to offer you cash-flow support directly from our POS
                      system. You can get your invoices paid during tough financial
                      situations with just 1 click to mitigate your business’s
                      short-term cash flow issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-50 customer_section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize text-dark">
                    24/7 Customer Support
                  </h2>
                  <p className="fs-5">
                    We're always available for you. Contact us via email or phone at
                    any time of the day and we'll get you connected with an Expert to
                    get your issue resolved in no time.
                  </p>
                  <div className="subpara mt-3">
                    <ul>
                      <li className="fw-bold">Low Downtime</li>
                      <li className="fw-bold">Exceptional Customer Support</li>
                      <li className="fw-bold">$0 Charge for Customer Support</li>
                    </ul>
                    {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-end ">
                <div className="customer_img">
                  <img
                    src="assets/dist/image/cloud-customer-support.webp"
                    className="img-fluid rounded-3 w-80"
                    alt="Cloud Pos Customer Support"
                    title="Cloud Pos Customer Support"
                  />
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
  )
}

export default CloudPos