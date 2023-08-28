import Layout from '@/Components/Layout'
import { ContactFormSection, SignUpSection } from '@/sections'
import PosSysHeroSection from '@/sections/hero/PosSysHeroSection'
import { FirstSection, LastSection } from '@/sections/retail-pos'
import Head from 'next/head'
import Script from 'next/script'

const QuickServiceRestaurantPos = () => {

  const firstSectionData = {
    firstTitle: "Quick Service Restaurant",
    lastTitle: "(QSR) POS System",
    pageDesc: [
      "Quick Service Restaurants (QSRs) and fast food chains are ever-evolving with a mix of challenges and opportunities at every turn. But no matter how much things change, the competition only grows tougher. To help your QSR business thrive in all of this, what you need is a QSR point of sale (POS) system. It helps your fast food chains take orders smoothly and keep track of everything in stock. It essentially makes your QSR run better and customers happier.",

      "A feature-rich POS system not only facilitates smooth transactions but also integrates with delivery platforms, optimising order flow from multiple sources. It empowers you to adapt to changing customer demands and keep your menu always new and fresh. And it can do even more! It gives you real-time data analytics so that you know exactly how well your products are performing. Plus, it can help keep customers coming back by integrating loyalty programs or special promotional offers.",

      "And guess what? You can give all these features a try for absolutely free with POSApt. Just sign up and try our QSR POS System for the first 30 days at $0."
    ],
    imgUrl: "quick-service-res.webp",
    content: [
      {
        title: `Fast & Easy Order Management`,
        desc: `As the name of the business suggests, quick service restaurants and fast-food chains have an obligation to serve customers as quickly as possible. That is why POSApt’s QSR POS system offers fast and easy order management thanks to its intuitive structure and easy to use interface.
        `
      },
      {
        title: `Manage Inventory in Real Time`,
        desc: `With orders that need to be fulfilled at the moment, QSRs need to manage their inventory very frequently. POSApt empowers you to monitor your inventory in real-time. This capability enables you to efficiently handle stock levels, avoid stockouts, and streamline your procurement and restocking procedures.`
      },
      {
        title: `Customise Your Menu To Current Trends`,
        desc: `Fast food trends change frequently. And if you want to keep your sales high every day, your menu should adapt accordingly. Our system offers you to easily modify your menu items. Moreover, it also allows customers to make customisations to their orders with toppings, modifiers, and sides. This ensures precision and adaptability in every order you fulfil.`
      },
      {
        title: `Efficient Multi-Channel Order Handling`,
        desc: `POSApt enables you to seamlessly accept online orders from various channels concurrently. This includes your website, mobile application, as well as popular third-party delivery platforms like DoorDash and Uber Eats. Manage all orders from one single platform without having to switch between apps constantly.`
      },
    ]
  }
  const lastSectionData = {
    firstTitle: "Why Use a QSR",
    lastTitle: "Pos System",
    imgUrl: "quick-service-restaurant.webp",
    content: [
      {
        title: `Smooth Transaction Management`,
        desc: `Experiencing the steady rhythm of transactions on the billing machine is truly satisfying. QSRs cater to a significant influx of customers and their diverse orders. As a result,  a resilient and user-friendly QSR POS system like POSApt is indispensable. Effortless transaction management facilitates accurate orders and seamless payments.`
      },
      {
        title: `Swift Order Processing`,
        desc: `What good is a fast food joint that doesn’t even process an order fast enough, right? A quick solution, such as rapid order processing facilitated by a POS system, makes your QSR the talk of the town. It also mitigates the frustration of prolonged queues for order placement. Consequently, your customers grow happier alongside your sales.`
      },
      {
        title: `Acceptance of Various Payment Methods`,
        desc: `Our QSR POS grants your customers the convenience of paying through various means: cash, debit cards, credit cards, and other online platforms. This not only helps customers monitor their expenses but also enables restaurants to maintain accurate records of customers, their orders, and expenditures.`
      },
      {
        title: `Intelligent Customer Relationship Management (CRM)`,
        desc: `Content customers are the ones who become regular patrons. Often, contented customers act as informal promoters, attracting more business to your establishment through word-of-mouth. With POSApt, you can leverage tools such as loyalty points and gift cards to encourage customers to come again. You can also leverage customer details to run targeted marketing campaigns.`
      },
    ]
  }

  // Schema for SEO
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
  const webpage = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://posapt.au/quick-service-restaurant-pos/#webpage",
        "url": "https://posapt.au/quick-service-restaurant-pos/",
        "name": "Quick Service Restaurant (QSR) POS System & Software | POSApt",
        "description": "POSApt’s quick service restaurant POS helps you manage orders fast and easily. A modern POS system for Australian QSRs.",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/quick-service-restaurant-pos/#breadcrumb",
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
            "item": "https://posapt.au/quick-service-restaurant-pos/",
            "name": "QSR POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "QSR POS System",
        "description": "Serve your cuisines faster than ever before with an advanced QSR based POS solution. From fast ordering to fast serving, our pos system handles it all.",
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
          "name": "QSR POS System",
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
            }
          ]
        }
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Quick Service Restaurant (QSR) POS System & Software</title>
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
        />
        <meta
          name="title"
          content="Quick Service Restaurant (QSR) POS System & Software"
        />
        <meta
          name="description"
          content="POSApt’s quick service restaurant POS helps you manage orders fast and easily. A modern POS system for Australian QSRs. Enquire Now!"
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
          content="Quick Service Restaurant (QSR) POS System & Software"
        />
        <meta
          property="og:description"
          content="POSApt’s quick service restaurant POS helps you manage orders fast and easily. A modern POS system for Australian QSRs. Enquire Now!"
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
          content="Quick Service Restaurant (QSR) POS System & Software"
        />
        <meta
          name="twitter:description"
          content="POSApt’s quick service restaurant POS helps you manage orders fast and easily. A modern POS system for Australian QSRs. Enquire Now!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/quick-service-restaurant-pos" />
      </Head>
      <Layout>
        <PosSysHeroSection
          tagline="Simply Quicker"
          title="Point of Sale System for Quick Service Restaurants (QSRs) Across Australia"
          desc="Selling made quicker. Serve your cuisines faster than ever before with an advanced QSR based POS solution. From fast ordering to fast serving, our pos system handles it all. Try it for free!"
          imgUrl="/assets/dist/image/store/restaurant_pos.webp"
        />
        <FirstSection
          {...firstSectionData}
        />
        <SignUpSection />
        <LastSection
          {...lastSectionData}
        />
        <ContactFormSection
          businessTitle=""
        />
      </Layout>
    </>
  )
}

export default QuickServiceRestaurantPos