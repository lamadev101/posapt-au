import Layout from "@/Components/Layout"
import { CustomerSection, FAQ, HeroSection, PosBanner, WhyChoose } from "@/sections"

const ecommerce = () => {

  const customerSectionData1 = {
    title: "E-Commerce Simplified. Engage With More Customers",
    paraDesc: [
      "POSApt E - Commerce system is an ideal solution for small businesses with an inventory of over 500 products.It is suitable for any retail business such as fashion, liquor, flower or grocery stores.You can start selling as quickly as you receive our system as we’ll set everything up for you.",

      "Tailor your store to your unique requirements and leverage our niche- specific tools for seamless operations.We also include custom website design services that cater to your preferences.Our system empowers your business with a diverse range of products, fostering customer reviews and interactions."
    ],
    imgUrl: "",
  }
  const whyChooseData = {
    title: "Why Choose POSApt's E-Commerce System?",
    content: [
      {
        title: "Better Inventory Management",
        desc: "Our simple, precise and real-time inventory system keeps your business running smoothly. With accurate and up-to-date information about your inventory, make informed decisions to increase profitability and provide a better customer experience.",
      },
      {
        title: "Direct Integration to POS",
        desc: "Our E-Commerce System integrates seamlessly with our POS solution giving you access to all incoming orders from a single robust system. Eliminate the need to switch between multiple applications for order and sales tracking.",
      },
      {
        title: "Safe & Secure Payment Methods",
        desc: "Offer multiple payment options including Cash, Credit Cards, and Debit Cards to your online customers. This allows your customers to choose the most convenient payment method for them, increasing your sales and their happiness.",
      },
      {
        title: "Custom Website Included",
        desc: "We will design and build a custom website for you that is visually appealing, and fully functional. It will also allow your customers to purchase goods and services, all at no additional cost to you.",
      },
      {
        title: "E-Gift Cards & Loyalty Program",
        desc: "Keep your customers interested, happy and tied to you with the help of POSApt-enabled E-gift cards, vouchers and loyalty points. Improve customer retention and increase engagements with your online store.",
      },
      {
        title: "Inbuilt Marketing Tools",
        desc: "In this competitive market where every retail store has their own ecommerce page on Google, how you promote yours makes all the difference. That’s why we’ve included features like email marketing and promotional discounts right on our system itself.",
      },
    ]
  }
  const customerSectionData2 = {
    title: "More Sales. Less Overhead. 24*7 Support.",
    paraDesc: [
      "24/7 online support is available for any clients. Reach us any time of the day and we'll get you connected with an Expert to get your issue resolved as soon as possible."
    ],
    list: [
      "Faster Issue Resolving",
      "Fewer Sales Hiccups",
      "Soaring Profits"
    ]
  }
  const faqData = [
    {
      question: "How to Use POSApt E-commerce?",
      answer: "POSApt E-commerce is intuitive and super easy to use. Once you've signed up, you can easily navigate through our platform. You can add products, set prices, and manage your inventory effortlessly. We offer a range of customisation options to tailor your store's appearance and functionality. You can also find feature-specific tutorials when you first navigate through the system. We also offer free hands-on training at the start of your subscription so you know all the ins and outs of our e-commerce platform.",
    },
    {
      question: "What is the best E-commerce platform for small businesses?",
      answer: "POSApt E-commerce is the ideal choice for small and medium-sized retail businesses in Australia. What most other e-commerce platforms lack is the seamless integration between their online store and their physical store. To combat this, we have developed our own POS system which seamlessly integrates with our e-commerce platform. The platform also offers a suite of tools designed to enhance your online presence, streamline operations, and boost sales.",
    },
    {
      question: "How to Set Up a POSApt E-commerce Store?",
      answer: "You can simply sign up for one of our paid plans and one of our team members will guide you through the whole process. Once the store is ready, you can add your products, organise them into categories, set up your pricing, and configure shipping options. Should you need any assistance, our support personnel are available to help you every step of the way.",
    },
    {
      question: "How Much Does an E-commerce Website Cost?",
      answer: "Our e-commerce solution costs $199 per month for retail businesses in Australia. However, depending on your specific requirements, the size of the business, and the scale of the product required, the cost can change. View our complete pricing plan or Contact us to get a personalised quote based on your business needs.",
    },
    {
      question: "How Can I Contact You If I Need Any Support?",
      answer: "We have a team of support personnel available to assist you or answer your queries 7 days a week. There are several ways to reach us. You can visit our Contact Page on our website or reach us directly through email or phone. We're here to ensure that your experience with our E-Commerce is smooth and successful.",
    }
  ]

  return (
    <>
      <Layout>
        <HeroSection
          title="Your Business's E-Commerce Website is Just a Click Away"
          desc="Turn clicks into sales and visitors into returning customers with POSApt."
          imgUrl=""
        />
        <CustomerSection
          {...customerSectionData1}
        />
        <PosBanner />
        <WhyChoose
          {...whyChooseData}
        />
        <CustomerSection
          {...customerSectionData2}
        />
        <FAQ 
          {...faqData}
        />
      </Layout>
    </>
  )
}

export default ecommerce