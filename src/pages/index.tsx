/** @format */

import Layout from "@/Components/Layout";
import { Inter } from "next/font/google";
import Head from "next/head";
import MailAndCall from "@/Components/MailAndCall";
import { PosAptStreamline, ShopList, UserFriendly } from "@/sections/landing-page";
import { FAQ, HeroSection } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

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

  // Body Content
  const shopListData1 = {
    title: "Find The Best Solution For Your Business",
    subTitle: "We Serve Local Businesses",
    shopList: [
      {
        name: "Cafe, Coffe Shop",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Flower Shop",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Restaurant",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Clothing, Retail Store",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Liquor Shop, Winery",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Bakery",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
    ]
  }
  const shopListData2 = {
    title: "Online Ordering System",
    subTitle: "Customers can order from anywhrere anytime",
    shopList: [
      {
        name: "Cafe, Coffe Shop",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Flower Shop",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Restaurant",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Clothing, Retail Store",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Liquor Shop, Winery",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
      {
        name: "Bakery",
        imgUrl: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/cover-for-street-food-in-sydney.jpg",
        link: "",
      },
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
        <HeroSection
          title="All In One POS System Simplifies Your Business"
          desc="Manage both In Shop and Online Sales within Single System."
          imgUrl=""
          twoBtn
        />
        <PosAptStreamline/>
        <ShopList
          {...shopListData1}
        />
        <UserFriendly/>
        <ShopList
          {...shopListData2}
        />
        {/* <FAQ/> */}
        <noscript>
          <img height="1" width="1" style={{ display: "none", visibility: "hidden" }}
            src="https://www.facebook.com/tr?id=10022972934381273&ev=PageView&noscript=1"
          />
        </noscript>
      </Layout>
    </>
  );
}
