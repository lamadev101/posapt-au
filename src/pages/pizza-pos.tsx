import Layout from '@/Components/Layout'
import PosSysHeroSection from '@/sections/hero/PosSysHeroSection'
import { FirstSection, LastSection } from '@/sections/retail-pos'
import { ContactFormSection, SignUpSection } from "@/sections";
import Head from 'next/head'
import Script from 'next/script'

const PizzaPos = () => {

  const firstSectionData = {
    firstTitle: "Cloud-Based POS System",
    lastTitle: "For Pizza Shops",
    pageDesc: [
      "Running a pizzeria in Australia is no piece of cake (no pun intended). It involves a number of tedious and time-consuming tasks such as managing orders, inventory, and customer satisfaction. It becomes even more complex when you’ve got multiple stores in multiple locations to take care of.",

      "To make life easier, what you need is a point-of-sale system that can effortlessly handle all your business operations. That's where our Pizza POS System from POSApt comes into play. It's designed to simplify your tasks even in the busiest time. Bring more orders to the fast-paced world of pizza making.",

      "From streamlining operations to enhancing customer experiences, we are ready to empower your pizza enterprise. Seize the opportunity – start your journey with our 30-day trial today."
    ],
    imgUrl: "Pizza-s.webp",
    content: [
      {
        title: `Customisable Menu`,
        desc: 'Crafting a beautiful menu that aligns with the food trends and what your eatery offers has never been easier. You can effortlessly create, customise, and manage your menu offerings with just a few clicks. Also, add delectable pictures that make your customers want to give all the items on your menu a taste. Our system also allows customers to customise their orders with toppings and side ingredients.'
      },
      {
        title: `Real-Time Kitchen Communication`,
        desc: `Minimise communication gaps between your kitchen staff and wait staff. Our Pizza POS system allows you to instantly send orders from the customer’s table to the kitchen and print them. This means your kitchen staff won’t miss an order and your customers get their orders fulfilled faster than ever.`
      },
      {
        title: `Seamless Integration with Online Ordering`,
        desc: `Let's face it, even Joey Tribbiani from Friends would choose to order pizza online rather than walk to a restaurant. That is why an online ordering system is essential. POSApt's Pizza POS comes with an integrated online ordering system, so you can easily sell your pizza online. You can also integrate third-party delivery platforms like DoorDash and deliver pizzas all over Australia.`
      },
      {
        title: `Simplify Multi-Location Management`,
        desc: `Expand your pizza business without dealing with operational complexities. Whether you have pizzerias in different cities, our system seamlessly connects all your locations. Keep track of inventory, sales, and customer data across all stores. And as your business grows, our system scales with you, maintaining organisation and efficiency.`
      },
    ]
  }
  const lastSectionData = {
    firstTitle: "Why Choose POSApt's",
    lastTitle: "Pizza Pos System",
    imgUrl: "pizza-shp.webp",
    content: [
      {
        title: `Accurate Sales Reporting`,
        desc: `Get detailed insights into your business's financial performance with comprehensive reports of all your sales, revenue and top-selling pizzas. Monitor sales trends, track revenue, and identify peak selling periods. Make informed financial decisions such as refining pricing plans and running marketing campaigns with accurate sales reporting and analytics.`
      },
      {
        title: `Inbuilt CRM Tools`,
        desc: `Build deeper connections with your customers and keep them coming back for more. With inbuilt CRM tools such as loyalty points, gift cards, and promotional discounts, you can foster better relationships with your customers. The system also collects valuable customer data to help you personalise marketing campaigns. Moreover, you can engage with your audience through targeted email promotions.`
      },
      {
        title: `24/7 Customer Support at No Cost`,
        desc: `No matter how big or small your pizza shop is, issues can arise at any time. But if not fixed quickly, even small issues can have devastating effects on the business. That is why we offer 24/7 support. Whether you need assistance with features, technical support, or advice, you can reach us with just a call or an email. We are committed to ensuring your journey to success remains on track, that’s why we offer support service free of charge.`
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
        "@id": "https://posapt.au/pizza-pos/#webpage",
        "url": "https://posapt.au/pizza-pos/",
        "name": "Pizza POS | Point of Sale System for Pizza Restaurants",
        "description": "A Pizza POS system that integrates with leading online ordering systems and delivery systems. POSApt is your go-to POS solution.",
        "isPartOf": {
          "@id": "https://posapt.au/#website"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://posapt.au/pizza-pos/#breadcrumb",
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
            "item": "https://posapt.au/pizza-pos/",
            "name": "Pizza POS System"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Pizza POS System",
        "description": " Enhance the efficiency and success of your pizza shop with dedicated Pizza POS software. From easy order management to making customers happy, it’s time to redefine how you manage your pizzeria.",
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
          "name": "Pizza POS System",
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
        <title>Pizza POS | Point of Sale System for Pizza Restaurants</title>
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
        <Script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
        />
        <meta
          name="title"
          content="Pizza POS | Point of Sale System for Pizza Restaurants"
        />
        <meta
          name="description"
          content="A Pizza POS system that integrates with leading online ordering systems and delivery systems. POSApt is your go-to POS solution. Book Now!"
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
          content="Pizza POS | Point of Sale System for Pizza Restaurants"
        />
        <meta
          property="og:description"
          content="A Pizza POS system that integrates with leading online ordering systems and delivery systems. POSApt is your go-to POS solution. Book Now!"
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
          content="Pizza POS | Point of Sale System for Pizza Restaurants"
        />
        <meta
          name="twitter:description"
          content="A Pizza POS system that integrates with leading online ordering systems and delivery systems. POSApt is your go-to POS solution. Book Now!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/pizza-pos" />
      </Head>
      <Layout>
        <PosSysHeroSection
          tagline="Slice, Serve, Succeed"
          title="Point of Sale System for Pizza Shops in Australia"
          desc="Do you sell Pizza? Enhance the efficiency and success of your pizza shop with dedicated Pizza POS software. From easy order management to making customers happy, it’s time to redefine how you manage your pizzeria."
          imgUrl="/assets/dist/image/posSys/retail/hero/pizza.webp"
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

export default PizzaPos