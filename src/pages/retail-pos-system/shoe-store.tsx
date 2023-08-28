import Layout from '@/Components/Layout'
import { ContactFormSection, RetailSignUpSection } from '@/sections'
import PosSysHeroSection from '@/sections/hero/PosSysHeroSection'
import { FirstSection, LastSection } from '@/sections/retail-pos'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const ShoeStore = () => {

  const firstSectionData = {
    firstTitle: "A Customised Point of",
    lastTitle: "Sale System for Shoe Stores",
    pageDesc: [
      "Even with so many choices available when buying a pair of sneakers, sometimes it’s just impossible to find the right fit for your feet. It’s the same when it comes to choosing the right POS system, especially for shoe store owners. The reality though, is that not all POS systems are designed in the same way and not all are tailored for shoe stores.",

      "That’s where POSApt slides in. It is designed specifically with shoe store owners in mind. It is a robust POS software tailored to command over your operational workflows and exceptional customer experiences.",

      "The landscape of footwear retail is characterized by its challenges. A mundane experience for a customer is no longer enough to compete with the rising competition. You need to start giving your customers the best shopping experience of their life. Moreover, you can give them incentives so that they come back to your store when they need a new pair of Air Jordans.",

      "Give POSApt a try and feel the difference for yourself! Sign up for a free trial today!"
    ],
    imgUrl: "shoe-business.webp",
    content: [
      {
        title: "All-in-one Sales Management",
        desc: "Imagine being able to control all aspects of your shoe store from one place. A shoe store POS system can help you do just that! It can keep track of your inventory, sales, and customer insights, so you can make sure everything is running smoothly."
      },
      {
        title: "Shoe-Store Specific Features",
        desc: "Like every shoe has its specialised sole, this system has unique features designed for footwear retailers. Features like product customisation for shoe sizes, colours and brand names are all unique and crucial to these stores."
      },
      {
        title: "Personalised Customer Experiences",
        desc: "In current trends, the sneaker shopping experience is more than just for wearing. Each customer has their own reasons to buy a pair of Nike or Yeezy. So, it has become adamant that even sellers understand the preferences of their customers. With a shoe store POS system, you're equipped with previous purchasing data to provide tailored experiences."
      },
      {
        title: "Real-Time Data & Reports",
        desc: "Whether to keep tabs on how your sneaker business is performing or to report it to a higher authority, a POS system can help you massively. Generate real-time data of your most selling products and download reports to make informed data-driven decisions."
      },
    ]
  }
  const lastSectionData = {
    firstTitle: "Why Choose POSApt for",
    lastTitle: "Your Store's Business Solution",
    imgUrl: "general7.webp",
    content: [
      {
        title: "E-Gift Cards & Loyalty Program",
        desc: "We know that it’s super tough to get your customers to shop again with you, especially in the sneaker business. That’s when you need to pull out your secret weapon powered by our shoe store POS; e-gift cards and loyalty program. You can use these features to keep your customers interested and coming back for more."
      },
      {
        title: "Can Accommodate 500+ SKUs",
        desc: "Managing an inventory that has a ton of items or units isn’t a small task. If your shoe store comprises numerous Stock Keeping Units (SKUs) across multiple stores, POSApt can help you out. Even our basic POS solution can accommodate up to 1,000 SKUs for your shoe store."
      },
      {
        title: "Multi-Platform Support",
        desc: `Upgrading to a new POS system doesn't mean you have to give up your old equipment. POSApt makes it easy to use our software with your current systems. You won't need to spend extra money on hardware that you already own. Our system also integrates with other 3rd party software solutions like Xero,  DoorDash and UberEats.`
      },
      {
        title: "Free Customer Support",
        desc: "And when you run into any issue or if you have any questions, just give us a call and we’ll get you connected with a professional as soon as possible. Don’t worry, we don’t charge a penny for our exceptional customer support in any regard."
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
        "@id": "https://posapt.au/retail-pos-system/shoe-store/#webpage",
        "url": "https://posapt.au/retail-pos-system/shoe-store/",
        "name": "Shoe Store POS | Footwear POS System & Software",
        "description": "POSApt’s Shoe Store POS system is designed for Shoe and Footwear retail shops across Australia. Inventory, billing, payment, e-commerce and more.",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/retail-pos-system/shoe-store/#breadcrumb",
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
            "item": "https://posapt.au/retail-pos-system/",
            "name": "Retail POS System"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": "https://posapt.au/retail-pos-system/shoe-store/",
            "name": "Shoe Store POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Shoe Store POS System",
        "description": "A customised point of sale system for Shoe & Footwear business. Inventory, billing, payment, e-commerce and more",
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
          "name": "Shoe Store POS System",
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
                "name": "Retail POS - 99 AUD per month inc. GST"
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
        <title>Shoe Store POS | Footwear POS System & Software</title>
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
        />
        <meta
          name="title"
          content="Shoe Store POS | Footwear POS System & Software"
        />
        <meta
          name="description"
          content="POSApt’s Shoe Store POS system is designed for Shoe and Footwear retail shops across Australia. Inventory, billing, payment, e-commerce and more."
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
          content="Shoe Store POS | Footwear POS System & Software"
        />
        <meta
          property="og:description"
          content="POSApt’s Shoe Store POS system is designed for Shoe and Footwear retail shops across Australia. Inventory, billing, payment, e-commerce and more."
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
          content="Shoe Store POS | Footwear POS System & Software"
        />
        <meta
          name="twitter:description"
          content="POSApt’s Shoe Store POS system is designed for Shoe and Footwear retail shops across Australia. Inventory, billing, payment, e-commerce and more."
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/retail-pos-system/shoe-store" />
      </Head>
      <Layout>
        <PosSysHeroSection
          tagline="Swag Up Your Fashion Store with our"
          title="Shoe Store POS System for Australian Retailers"
          desc="POSApt is the right fit for your footwear business. Give us a try and see how your sneaker store’s efficiency and flexibility grows."
          imgUrl="/assets/dist/image/posSys/retail/hero/clothing.webp"
        />
        <FirstSection
          {...firstSectionData}
        />
        <RetailSignUpSection />
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

export default ShoeStore