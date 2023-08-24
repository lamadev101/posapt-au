import Layout from "@/Components/Layout"
import ContactFormSection from "@/sections/ContactFormSection"
import PosSysHeroSection from "@/sections/hero/PosSysHeroSection"
import { FirstSection, LastSection } from "@/sections/retail-pos"
import SignUpSection from "@/sections/SignUpSection"
import Head from "next/head"
import Script from "next/script"

const SalonSpa = () => {
    const firstSectionData = {
        firstTitle: "Solving Australian POS Needs",
        lastTitle: "fro Bike & Bicycle Shops",
        pageDesc: [
            "One industry where people wouldn’t expect to see a POS system in action is the personal care  industry, particularly in Salons. It’s precisely because people don’t expect that these places should invest in one. Doing the unexpected turns heads towards your business and brings potential customers to want to give your services a try. Not to mention the fact that it helps in brand awareness for no extra cost.",

            "A POS system can have multiple benefits for your business. It allows you to record all transactions in a very elegant fashion and view them in neat reports. Customers do not always offer to pay in the same way. That is why, a POS system that has the capability to accept multiple methods of payment makes your life easier.",

            "POS System make integration with 3rd party softwares look easy. POSApt allows you to integrate with accounting software like Xero to streamline your finances. Being a cloud based solution, you can easily access all the POS features from any where at any time.",

            "Our POS System caters to:",
        ],
        imgUrl: "salon.webp",
        content: [
            {
                title: "Hair Salon",
                desc: "Your hair salon deserves to run as smoothly as the hair styles you come up with. Manage appointments, track customer preferences, and streamline your hairstyling services with our Hair Salon POS Software.",
            },
            {
                title: "Beauty & Nail Salon",
                desc: "Offer a wide range of beauty treatments while our POS system handles appointments and sales management. You’ll never have to worry about keeping records of sales and transactions because our Beauty Salon POS automatically does so.",
            },
            {
                title: "Spa Centres",
                desc: "Your spa already gives a soothing experience to your customers. But once the spa session completes, is your point of sale also reflecting the same soothing experience? To give your customers a complete SPA experience throughout their journey with you, try our POS system.",
            },
            {
                title: "Barber Shops",
                desc: "Every other business in every industry is technologically advancing, so why shouldn’t barber shops too. Modernise your barber shop operations with our POS system’s appointment scheduling, inventory management, and more.",
            },
        ]
    }
    const lastSectionData = {
        firstTitle: "Why Choose Our",
        lastTitle: "POS Solution?",
        imgUrl: "salon1.webp",
        content: [
            {
                title: "Elegant Experience",
                desc: "Aesthetics matter, and our POS system understands that. Our intuitive interface not only enhances your business operations but also adds a touch of elegance to your customer interactions. From appointment booking to checkout, every step is seamless and sophisticated.",
            },
            {
                title: "Multi-Payment Methods",
                desc: "In the modern world, convenience is key. With POSApt, your customers can choose from a variety of payment methods - be it credit cards, mobile wallets, or cash. Catering to diverse preferences, we ensure that no transaction is ever a hassle.",
            },
            {
                title: "Online Selling Opportunity",
                desc: "In the era of digital transformation, don't just limit your business to brick-and-mortar. Our system seamlessly integrates an online selling platform. Reach a wider audience and boost your revenue by selling products and services online, opening doors to new possibilities. Sell salon products, through online with POSApt Ecommerce platform.",
            },
            {
                title: "Personalised Support for Customers",
                desc: "Your customers deserve the best, and that includes personalised support. Our POS system enables you to track customer preferences, appointment histories, and more. Moreover, you can track these behaviours to give them better service. Create tailor-made experiences that keep your clients coming back for more.",
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
                "@id": "https://posapt.au/retail-pos-system/salon-and-spa/#webpage",
                "url": "https://posapt.au/retail-pos-system/salon-and-spa/",
                "name": "Salon POS | Salon, SPA & Barber Shop POS System",
                "description": "Transform your salon, SPA or barber shop with Australia’s fastest growing all in one POS solution.",
                "isPartOf": {
                    "@id": "https://posapt.au/#website"
                }
            },

            {
                "@type": "BreadcrumbList",
                "@id": "https://posapt.au/retail-pos-system/salon-and-spa/#breadcrumb",
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
                        "item": "https://posapt.au/retail-pos-system/salon-and-spa/",
                        "name": "Salon POS System"
                    }
                ]
            },
            {
                "@type": "Service",
                "serviceType": "Salon POS System",
                "description": "Be ready to transform your salon operations with an advanced cloud based point of sale system. From inventory control to payment processing, manage your shop with one solution. ",
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
                    "name": "Salon POS System",
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
                <title>Salon POS | Salon, SPA & Barber Shop POS System</title>
                <Script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
                />
                <Script type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webpage) }}
                />
                <meta
                    name="title"
                    content="Salon POS | Salon, SPA & Barber Shop POS System"
                />
                <meta
                    name="description"
                    content="Transform your salon, SPA or barber shop with Australia’s fastest growing all in one POS solution. Enquire now to book a free demo!"
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
                    content="Salon POS | Salon, SPA & Barber Shop POS System"
                />
                <meta
                    property="og:description"
                    content="Transform your salon, SPA or barber shop with Australia’s fastest growing all in one POS solution. Enquire now to book a free demo!"
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
                    content="Salon POS | Salon, SPA & Barber Shop POS System"
                />
                <meta
                    name="twitter:description"
                    content="Transform your salon, SPA or barber shop with Australia’s fastest growing all in one POS solution. Enquire now to book a free demo!"
                />
                <meta
                    name="twitter:image"
                    content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
                />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="POSApt" />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content="Less than a minute" />
                <link rel="canonical" href="https://posapt.au/retail-pos-system/salon-and-spa" />
            </Head>
            <Layout>
                <PosSysHeroSection
                    tagline="Time to Shine with"
                    title="Australia's Fastest Growing Salon & Spa POS Solution"
                    desc="Be ready to transform your salon operations with an advanced cloud based point of sale system. From inventory control to payment processing, manage your shop with one solution"
                    imgUrl="/assets/dist/image/posSys/retail/hero/barber.webp"
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

export default SalonSpa