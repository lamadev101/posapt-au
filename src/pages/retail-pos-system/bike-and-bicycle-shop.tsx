import Layout from "@/Components/Layout"
import { ContactFormSection, RetailSignUpSection } from "@/sections"
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection"
import { FirstSection, LastSection } from "@/sections/retail-pos"
import Head from "next/head"
import Script from "next/script"

const BikeBicycleShop = () => {
  const firstSectionData = {
    firstTitle: "Solving Australian POS Needs for",
    lastTitle: "Bike & Bicycle Shops",
    pageDesc: [
      "Gear up to transform how you manage your bike or bicycle shop. From pedalling through inventory control to cruising with multi-location support, we’re bringing you a feature-rich POS system for your shop.",

      "Navigating the intricate world of bike and bicycle retail can be a tough challenge. Whether you’re in the bike repair business or in the bicycle selling business, managing point-of-sale operations can be difficult. Especially when you are available in multiple locations or are selling from both online and offline stores.",

      "What you need is a reliable system capable of managing all your business operations without failure. And no matter how busy it gets, your system should always be ready to handle your transactions fluidly. That's where our robust POS system steps in, ready to untangle the web of complexities and streamline business processes.",

      "Elevate your bike or bicycle shop's performance and customer satisfaction with our POS System. With features such as advanced inventory control and fast payment processing, you will be steering your business into profits every day. Kickstart your 30-day free trial today!"

    ],
    imgUrl: "general2.webp",
    content: [
      {
        title: "Inventory Control",
        desc: "Manage your inventory like a pro-rider with POSApt’s Bike shop POS software. Accurately keep track of all items in your stock and set up automatic notifications wherever an item is running low. This makes sure that the shelves in your bike store are optimised for maximum sales. ",
      },
      {
        title: "Multi-Location Support",
        desc: "Expand your bike or bicycle empire across Australia without having to worry about changing your POS system. POSApt seamlessly integrates with all your branches for centralised management. Control inventory, sales, customer data and more across all your shop locations from one robust app.",
      },
      {
        title: "Robust Hardware",
        desc: "Our POS system is designed to withstand the demands of a busy bike shop. With durable hardware that includes touchscreen interfaces, barcode scanners, and receipt printers, our POS solution keeps your operations running smoothly.",
      },
      {
        title: "Fast Payment Processing",
        desc: "Shorten customer wait times and enhance their shopping experience with our lightning-fast payment processing. Accept a variety of payment methods, including credit cards, debit cards, gift cards and cash, all integrated seamlessly into our POS system.",
      },
    ]
  }
  const lastSectionData = {
    firstTitle: "Why Choose POSApt's Bike & Bicycle",
    lastTitle: "Shop POS Solution?",
    imgUrl: "general3.webp",
    content: [
      {
        title: "24/7 Dedicated Support:",
        desc: "At POSApt, we recognize that challenges can arise at any hour. Our commitment to your success doesn't clock out, which is why our dedicated support team is available round-the-clock. Whether you have questions, encounter technical issues, or seek guidance, our experts are just a call away. Your journey toward operational excellence is our top priority. Our support crew is here to ensure you keep pedalling ahead without any roadblocks",
      },
      {
        title: "30-Day Free Trial",
        desc: "Experience innovation with confidence through our 30-day free trial. We believe in the transformative power of our POS solution, and we invite you to witness it firsthand. Dive into the array of features tailored to enhance your shop's efficiency and management. This risk-free trial period allows you to explore the system's capabilities, making an informed decision about how it aligns with your business needs.",
      },
      {
        title: "Legacy Hardware Support",
        desc: "Getting a new POS system shouldn't mean you have to discard all of your existing hardware items. With POSApt, you can seamlessly integrate our solution with your legacy hardware systems. No need to worry about additional expenses or disruptions caused by hardware replacements. Our POS system's compatibility ensures a smooth transition, allowing you to continue using your trusted equipment.",
      },
      {
        title: "Works on Multiple Platforms",
        desc: "Just as mountain bikes adapt to various terrains, our POS system thrives across multiple platforms. Whether you're managing your shop from a laptop, tablet, or smartphone, our solution ensures a consistent and user-friendly experience. This adaptability guarantees that you can access essential data and perform transactions whenever you like.",
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
        "@id": "https://posapt.au/retail-pos-system/bike-and-bicycle-shop/#webpage",
        "url": "https://posapt.au/retail-pos-system/bike-and-bicycle-shop/",
        "name": "Bike & Bicycle Shop POS System & Software | POSApt",
        "description": "Optimise your retail bike and bicycle shop with POSApt’s advanced Point of Sale (POS) system and software. ",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/retail-pos-system/bike-and-bicycle-shop/#breadcrumb",
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
            "item": "https://posapt.au/retail-pos-system/bike-and-bicycle-shop",
            "name": "Bike Shop POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Bike & Bicycle Shop POS System",
        "description": "Gear up to transform how you manage your bike or bicycle shop. From pedalling through inventory control to cruising with multi-location support, we’re bringing you a feature-rich POS system for your shop.",
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
          "name": "Bike & Bicycle store POS System",
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
        <title>JBike & Bicycle Shop POS System & Software | POSApt</title>
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
        />
        <meta
          name="title"
          content="JBike & Bicycle Shop POS System & Software | POSApt"
        />
        <meta
          name="description"
          content="Optimise your retail bike and bicycle shop with POSApt’s advanced Point of Sale (POS) system and software. Try it for Free!"
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
          content="JBike & Bicycle Shop POS System & Software | POSApt"
        />
        <meta
          property="og:description"
          content="Optimise your retail bike and bicycle shop with POSApt’s advanced Point of Sale (POS) system and software. Try it for Free!"
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
          content="Bike & Bicycle Shop POS System & Software | POSApt"
        />
        <meta
          name="twitter:description"
          content="Optimise your retail bike and bicycle shop with POSApt’s advanced Point of Sale (POS) system and software. Try it for Free!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/retail-pos-system/bike-and-bicycle-shop" />
      </Head>
      <Layout>
        <PosSysHeroSection
          tagline="Ride the future"
          title="Solving Australian POS Needs for Bike & Bicycle Shops"
          desc="Gear up to transform how you manage your bike or bicycle shop. From pedalling through inventory control to cruising with multi-location support, we’re bringing you a feature-rich POS system for your shop."
          imgUrl="/assets/dist/image/posSys/retail/hero/bike-shop.webp"
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

export default BikeBicycleShop