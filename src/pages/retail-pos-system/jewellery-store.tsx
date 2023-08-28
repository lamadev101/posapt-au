import Layout from "@/Components/Layout"
import { ContactFormSection, RetailSignUpSection } from "@/sections"
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection"
import { FirstSection, LastSection } from "@/sections/retail-pos"
import Head from "next/head"
import Script from "next/script"

const JewelleryStore = () => {

    const firstSectionData = {
        firstTitle: "Why POSApt's",
        lastTitle: "Jewellery Store POS?",
        pageDesc: [
            "Running a jewellery store comes with its intricacies, whether you specialise in timeless pieces or offer custom creations. Managing multiple collections and balancing both physical and online sales requires a dependable system. That's where our Jewellery Store POS System from POSApt shines. It's crafted to simplify your operations, even during busy hours, ensuring a gem-worthy experience in the ever-evolving world of jewellery.",
            "We understand that it takes more than a basic POS system to smoothly run a jewellery store. Whether you want to connect an accounting software like Xero or any third-party software, it's all possible with POSApt.",
            "Redefine how you do sales with advanced POS software built for you. Try today!"
        ],
        imgUrl: "jewlry.webp",
        content: [
            {
                title: `Simplify Multi-Store Sales`,
                desc: `Expand your jewellery empire with ease. POSApt supports franchised businesses, so you can oversee all your stores and their performance from a single platform. Your employees can manage individual stores on their own, so you can focus on growing your business.`
            },
            {
                title: `Raise the Shine of Your Jewellery Business`,
                desc: `Organising your jewellery store can be a hectic adventure if you don’t have the right set of tools. With our Jewellery store POS, you can effortlessly manage your inventory, sales and marketing, all in one place. Make sure you always have enough items of the top-selling products and never have to turn a customer away.
                `
            },
            {
                title: `Sturdy and Trustworthy Hardware`,
                desc: `In a bustling jewellery store, your checkout experience must be as precise as the cut of a diamond. Our POS solution features robust hardware – user-friendly touchscreens, swift barcode scanners, and dependable receipt printers. Ensure that your store operates smoothly, regardless of the rush.
                `
            },
            {
                title: `Safe and Swift Transactions`,
                desc: `Enhance your customers' shopping delight with swift transactions. Not everyone wants to pay in the same way. One customer might want to use their credit card while the other might want to pay via cash. No worries, our system allows you to accept multiple payment options – credit cards, gift cards, and cash. `
            },
        ]
    }
    const lastSectionData = {
        firstTitle: "Why Choose POSApt's",
        lastTitle: "Jewellery POS System",
        imgUrl: "jewlry1.webp",
        content: [
            {
                title: `24/7 Customer Support at $0`,
                desc: `Challenges can arise at any moment, even in a jewellery store. Our support team is always ready to guide your success. Whether you’re unsure how to use a feature or have an issue with the hardware, our experts are always on standby to help you out. And we don’t charge you any extra fees for the support we provide. 
                `
            },
            {
                title: `Easy Migration & Integration`,
                desc: `Migrating to a new POS system doesn't mean discarding your existing equipment. POSApt simplifies using our software alongside your current systems. No need to invest extra in hardware you already possess. Our system seamlessly integrates with third-party solutions like Xero, Quickbooks, and DoorDash, ensuring your brilliance reaches new heights.`
            },
            {
                title: `Versatile & Adaptable`,
                desc: `Our system is as versatile as the jewellery you offer, fitting different facets of your business. Access it through computers, laptops, tablets, or smartphones. This adaptability empowers you to serve clients from any location, illuminating their experiences and radiating excellence wherever you operate.
                `
            },
            {
                title: `Free Trial for 30 Days`,
                desc: `Experience what a carefully designed POS system can do for your jewellery store. It’s not often easy to find a POS provider willing to give you a no-commitment trial for 30 days at no cost at all. Explore the features tailored to enhance your jewellery store and determine its compatibility with your business requirements.`
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
                "@id": "https://posapt.au/retail-pos-system/jewellery-store/#webpage",
                "url": "https://posapt.au/retail-pos-system/jewellery-store/",
                "name": "Jewellery Store POS System & Software | POSApt",
                "description": "POSApt’s all-in-one Jewellery Store POS system for Australian Businesses. Simplify your store operations and make more sales.",
                "isPartOf": {
                    "@id": "https://posapt.au/#website"
                }
            },

            {
                "@type": "BreadcrumbList",
                "@id": "https://posapt.au/retail-pos-system/jewellery-store/#breadcrumb",
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
                        "item": "https://posapt.au/retail-pos-system/jewellery-store/",
                        "name": "Jewellery Store POS System"
                    }
                ]
            },
            {
                "@type": "Service",
                "serviceType": "Jewellery Store POS System",
                "description": "The jewellery business in Australia is as prestigious as ever. Every purchase needs to make the buyer feel valued and respected. One thing that would absolutely convey this feeling is an advanced Jewellery POS System.",
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
                    "name": "Jewellery Store POS System",
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
                <title>Jewellery Store POS System & Software</title>
                <Script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
                />
                <Script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
                />
                <meta
                    name="title"
                    content="Jewellery Store POS System & Software"
                />
                <meta
                    name="description"
                    content="POSApt’s all-in-one Jewellery Store POS system for Australian Businesses. Simplify your store operations and make more sales. Enquire Now!"
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
                    content="Jewellery Store POS System & Software"
                />
                <meta
                    property="og:description"
                    content="POSApt’s all-in-one Jewellery Store POS system for Australian Businesses. Simplify your store operations and make more sales. Enquire Now!"
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
                    content="Jewellery Store POS System & Software"
                />
                <meta
                    name="twitter:description"
                    content="POSApt’s all-in-one Jewellery Store POS system for Australian Businesses. Simplify your store operations and make more sales. Enquire Now!"
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/retail-pos-system/jewellery-store" />
            </Head>
            <Layout>
                <PosSysHeroSection
                    tagline="Sparkling Stones to Sparkling Sales"
                    title="Jewellery POS System for Australian Businesses"
                    desc="The jewellery business in Australia is as prestigious as ever. Every purchase needs to make the buyer feel valued and respected. One thing that would absolutely convey this feeling is an advanced Jewellery POS System. Try for free for 30 Days."
                    imgUrl="/assets/dist/image/posSys/retail/hero/jewellery-shop.webp"
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
                    price="99"
                />
            </Layout>
        </>
    )
}

export default JewelleryStore