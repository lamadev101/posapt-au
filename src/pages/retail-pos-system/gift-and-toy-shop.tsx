import Layout from "@/Components/Layout"
import ContactFormSection from "@/sections/ContactFormSection"
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection"
import { FirstSection, LastSection } from "@/sections/retail-pos"
import SignUpSection from "@/sections/SignUpSection"
import Head from "next/head"
import Script from "next/script"

const GiftToyShop = () => {
  const firstSectionData = {
    firstTitle: "An Advanced Gift & Toy Shop",
    lastTitle: "POS For Australian Businesses",
    pageDesc: [
      "Whether you run a gift shop, toy store, or souvenir shop, managing your store can be a challenge. This is especially true if you have multiple locations or sell online and in-person.",

      "You need a reliable system that can handle all of your business tasks, even during peak times. That's where POSApt's Gift & Toy Shop POS System comes in. It's designed to simplify operations, even during busy shopping periods. It brings order to the ever-changing world of gift and toy retail.",

      "Embark on a new era of gift and toy retail. From seamless operations to enhanced customer experiences, we're ready to empower your business like never before. Take the first step and start your journey with our 30-day trial today. Embrace the future of gift and toy store management."
    ],
    imgUrl: "gift1.webp",
    content: [
      {
        title: `Barcode Scanning`,
        desc: `POSApt allows you to easily scan barcodes on toys and gifts with a barcode scanner for quick and accurate checkout. This reduces the chances of pricing errors and speeds up the transaction process. Your customers will no longer have to wait in long queues to surprise their loved ones with lovely gifts.`
      },
      {
        title: `Split Payments`,
        desc: `We’ve all been there when a group of friends wanted to collectively pay for one massive gift. It was simpler to split bills when we used to carry around cash but we usually only have cards today. With POSApt, you can easily accommodate split payments and allow your customers to share the cost of gift items together.`
      },
      {
        title: `Smart Inventory Management`,
        desc: `Stay on top of your gift and toy inventory effortlessly. POSApt lets you easily track and manage your products. It sends real-time notifications for low-stock items and ensures you consistently fill the inventory. This helps you avoid stockouts of the best-selling items and optimise your sales potential.
        `
      },
      {
        title: `Effortless Multi-Store Management`,
        desc: `Expand your gift or toy business without the hassle of complex system changes. Whether you have stores in different areas or even different regions, our system links all your stores. You can monitor inventory, sales, and customer data across every location. As your business grows, our system grows with you, maintaining seamlessness in your business.`
      },
    ]
  }
  const lastSectionData = {
    firstTitle: "Why Choose POSApt's",
    lastTitle: "Jewellery Pos System",
    imgUrl: "gift2.webp",
    content: [
      {
        title: `Sturdy and Reliable Equipment`,
        desc: `In a busy gift and toy shop, your checkout process should be efficient. Our solution includes robust hardware – user-friendly touchscreens, swift barcode scanners, and dependable receipt printers. Just like quality materials make quality toys, our hardware ensures your store functions smoothly, regardless of how bustling it gets.`
      },
      {
        title: `24/7 Customer Support at No Extra Cost`,
        desc: `Issues can arise at any time, even in a toy or gift shop. Our support team is available 24/7 to assist your success. Whether you have questions about features, or technical difficulties, or need advice, our experts are just a call away. We commit to guiding your journey to success, without any additional charges.`
      },
      {
        title: `Try POSApt for 30 Days at No Cost`,
        desc: `Explore the benefits of POSApt with our free 30-day trial. We believe in the positive impact our system can have. Delve into the features designed to enhance your gift or toy shop. During this risk-free period, explore our system's potential and decide if it suits your business needs. No obligations are required!`
      },
      {
        title: `Seamless Online Integration`,
        desc: `People tend to research online what toys and gifts to buy for their loved ones. That is why, having an online store for your shop is critical to target a wider audience. For this, what you need is an online ordering platform for your store. We offer not only an online ordering platform but also offer seamless integration with your physical store.  This omnichannel support will sync inventory, orders, and customer data in real time. This ensures a consistent shopping experience whether customers visit your store or shop online. `
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
        "@id": "https://posapt.au/retail-pos-system/gift-and-toy-shop/#webpage",
        "url": "https://posapt.au/retail-pos-system/gift-and-toy-shop/",
        "name": "Gift and Toy Shop POS System & Software | POSApt",
        "description": "Optimise retail gift & toy shop business operations. POSApt now provides POS systems for gift and toy shops all over Australia.",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/retail-pos-system/gift-and-toy-shop/#breadcrumb",
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
            "item": "https://posapt.au/retail-pos-system/gift-and-toy-shop",
            "name": "Gift Shop POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Gift & Toy Shop POS System",
        "description": "Big or small, gift or souvenir, enhance the charm of your shop and make selling simpler with POSApt. And no matter how many locations you want to capitalise, our POS system can handle it all.",
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
          "name": "Gift & Toy Shop POS System",
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
        <title>Gift and Toy Shop POS System & Software | POSApt</title>
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
        />
        <meta
          name="title"
          content="Gift and Toy Shop POS System & Software | POSApt"
        />
        <meta
          name="description"
          content="Optimise retail gift & toy shop business operations. POSApt now provides POS systems for gift and toy shops all over Australia. Try it Now!"
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
          content="Gift and Toy Shop POS System & Software | POSApt"
        />
        <meta
          property="og:description"
          content="Optimise retail gift & toy shop business operations. POSApt now provides POS systems for gift and toy shops all over Australia. Try it Now!"
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
          content="Gift and Toy Shop POS System & Software | POSApt"
        />
        <meta
          name="twitter:description"
          content="Optimise retail gift & toy shop business operations. POSApt now provides POS systems for gift and toy shops all over Australia. Try it Now!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/retail-pos-system/gift-and-toy-shop" />
      </Head>
      <Layout>
        <PosSysHeroSection
          tagline="The Gift of Streamlined Operations with our"
          title="Sell Smarter with Gift & Toy Shop POS System"
          desc="Big or small, gift or souvenir, enhance the charm of your shop and make selling simpler with POSApt. And no matter how many locations you want to capitalise, our POS system can handle it all. Try today!"
          imgUrl="/assets/dist/image/posSys/retail/hero/gift.webp"
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

export default GiftToyShop