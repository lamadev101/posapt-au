import Layout from '@/Components/Layout'
import { ContactFormSection, RetailSignUpSection } from '@/sections'
import PosSysHeroSection from '@/sections/hero/PosSysHeroSection'
import { FirstSection, LastSection } from '@/sections/retail-pos'
import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

const ClothingStore = () => {

  const firstSectionData = {
    firstTitle: "Cloud-Based Clothing",
    lastTitle: "Store POS",
    pageDesc: [
      "Whether you have a clothing retail, a boutique or an apparel store, running a clothing business can be complicated. It gets even more complicated if you have many stores or a mix of online and physical sales.",

      "What you really need is a reliable system that can easily handle all your business tasks, even during busy times. That's where our Clothing Store POS System from POSApt comes in. It's designed to make things simple, even when lots of people are shopping. It helps bring order to the ever-changing fashion world.",

      "Embark on a new era of fashion retail. From a seamless operational tapestry to elevated customer encounters, we stand prepared to arm your fashion enterprise with unparalleled empowerment. Take the stage – catalyze your journey with our 30-day trial and embrace the future of fashion retail management today."
    ],
    imgUrl: "general4.webp",
    content: [
      {
        title: `Level Up Your Fashion Business`,
        desc: `Imagine a world where keeping track of your clothes in the store is as easy as draping fabric smoothly. With our Clothing POS software, you can manage your clothes like an expert stylist. Easily find each piece of clothing and get notified when things are running low with easy inventory management. Every item you sell, you make money and our system makes sure you don't miss anything.`
      },
      {
        title: `Managing Multiple Stores Made Easy`,
        desc: `Grow your fashion business without dealing with complicated changes to your system. Whether you have stores in different cities or even different countries, our system connects all your stores. You can see what you have, what you've sold, and who your customers are at every store. And as you expand, our system grows with you, making things organized and smooth.`
      },
      {
        title: `Strong and Reliable Hardware`,
        desc: `In a busy clothing/apparel store, your checkout system needs to handle a lot. Our solution includes strong hardware – easy-to-use touchscreens, quick barcode scanners, and reliable receipt printers. Just like good fabric makes good clothes, our hardware keeps your store running smoothly, no matter how busy it gets.`
      },
      {
        title: `Easy and Fast Payments`,
        desc: `Don't make your customers wait in line too long – make their shopping experience great with fast payments. Our system lets customers pay in lots of ways, like credit cards, gift cards, and cash. Checking out will be as easy as picking the perfect outfit, and your customers will love how quick and smooth it is.`
      },
    ]
  }
  const lastSectionData = {
    firstTitle: "Why Choose POSApt for ",
    lastTitle: "Your Clothing Business?",
    imgUrl: "general5.webp",
    content: [
      {
        title: `Round-the-Clock Customer Support at $0`,
        desc: `Problems can happen anytime, even in a fashion store. Our support team is always ready to help you succeed, 24/7. Whether you have questions about features, need technical help, or want advice, our experts are just a call away. We promise to make sure your journey to success is always on track. And unlike other POS providers, we don’t even charge you for this support service.`
      },
      {
        title: `Try Our POSApt for 30 Days at $0`,
        desc: `Try out POSApt for absolutely free with our 30-day trial. We believe in the positive change our system can bring. Explore all the features designed to make your clothing shop better. During this risk-free time, you can explore what our system can do and decide if it fits your business needs. No commitments are required!`
      },
      {
        title: `Upgrade Without Losing What You Have`,
        desc: `Upgrading to a new POS system doesn't mean you have to give up your old equipment. POSApt makes it easy to use our software with your current systems. You won't need to spend extra money on hardware that you already own. Our system also integrates with other 3rd party software solutions like Xero,  DoorDash and UberEats.`
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
        "@id": "https://posapt.au/retail-pos-system/clothing-store/#webpage",
        "url": "https://posapt.au/retail-pos-system/clothing-store/",
        "name": "Clothing & Apparel Store POS System & Software | POSApt",
        "description": "An advanced POS solution for Australian retail clothing store businesses. Inventory, sales and customer management with one system.",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/retail-pos-system/clothing-store/#breadcrumb",
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
            "item": "https://posapt.au/retail-pos-system/clothing-store/",
            "name": "Clothing Store POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Gift & Toy Shop POS System",
        "description": "Elevate the elegance of your clothing store with POSApt. From trend-conscious inventory management to the seamless coordination of multi-location setups, we're poised to redefine the landscape of fashion business management.",
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
          "name": "Clothing Store POS System",
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
        <title>Clothing & Apparel Store POS System & Software | POSApt</title>
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
        />
        <meta
          name="title"
          content="Clothing & Apparel Store POS System & Software | POSApt"
        />
        <meta
          name="description"
          content="An advanced POS solution for Australian retail clothing store businesses. Inventory, sales and customer management with one system. Try it Now!"
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
          content="Clothing & Apparel Store POS System & Software | POSApt"
        />
        <meta
          property="og:description"
          content="An advanced POS solution for Australian retail clothing store businesses. Inventory, sales and customer management with one system. Try it Now!"
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
          content="Clothing & Apparel Store POS System & Software | POSApt"
        />
        <meta
          name="twitter:description"
          content="An advanced POS solution for Australian retail clothing store businesses. Inventory, sales and customer management with one system. Try it Now!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/retail-pos-system/clothing-store" />
      </Head>
      <Layout>
        <PosSysHeroSection
          tagline="Swag Up Your Fashion Store with our"
          title="Sell More with Clothing & Apparel Store POS System"
          desc="Elevate the elegance of your clothing store with POSApt. From trend-conscious inventory management to the seamless coordination of multi-location setups, we're poised to redefine the landscape of fashion business management."
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

export default ClothingStore