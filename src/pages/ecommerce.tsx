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
        <>
          {/* about us */}
          <section className=" pt-1 pt-md-5 pb-50 bg-home">
            <div className="container  text-center">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-7  ">
                  <div className="heading_s1">
                    <h1 className="text-capitalize fs-61 text-white">
                      Your Business's <br /> E-Commerce Website <br /> is Just a Click
                      Away
                    </h1>
                  </div>
                </div>
                <div className="col-md-5 ">
                  <div className="">
                    <img
                      src="assets/dist/image/ecommerceban.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="subpara ">
                    <p className="text-center fs-47 text-white">
                      <span style={{ fontWeight: 400 }}>
                        Turn clicks into sales and visitors into returning customers
                        with POSApt.
                      </span>
                    </p>
                    <div className="text-center newhome_btn">
                      <a className="btn btn-white btn-red fs-6" href="#">
                        Sign Up for Free Demo !
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-50">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="">
                    <div className="heading_s1">
                      <h2 className=" fw-bold text-capitalize text-dark">
                        Don't Worry, We Set Up Everything For You
                      </h2>
                    </div>
                    <ul className="newposlist text-dark fw-bold pt-4 fs-5">
                      <li>
                        <svg
                          className="me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#00205b"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 27.855 27.855"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                            <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </g>
                        </svg>
                        Free Consultation
                      </li>
                      <li>
                        <svg
                          className="me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#00205b"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 27.855 27.855"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                            <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </g>
                        </svg>
                        Custom Website and Maintenance
                      </li>
                      <li>
                        <svg
                          className="me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#00205b"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 27.855 27.855"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                            <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </g>
                        </svg>
                        Products Upload Included
                      </li>
                      <li>
                        <svg
                          className="me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#00205b"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 27.855 27.855"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                            <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </g>
                        </svg>
                        Set Up, User Training Included
                      </li>
                      <li>
                        <svg
                          className="me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#00205b"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 27.855 27.855"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                            <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </g>
                        </svg>
                        Customer Can Leave Review
                      </li>
                      <li>
                        <svg
                          className="me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#00205b"
                          height="24px"
                          width="24px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 27.855 27.855"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M27.604,6.751L14.176,20.18c-0.338,0.336-0.885,0.336-1.223,0l-0.27-0.27l0,0l-0.293-0.293l-1.268-1.268l-0.018-0.027   L5.297,12.47c-0.336-0.336-0.336-0.885,0-1.221l1.83-1.828c0.338-0.339,0.883-0.339,1.221,0l5.223,5.262L24.551,3.7   c0.338-0.337,0.885-0.337,1.221,0l1.832,1.832C27.939,5.867,27.939,6.415,27.604,6.751z" />
                            <path d="M21.795,22.613c0,0.973-0.793,1.766-1.768,1.766H3.535c-0.975,0-1.768-0.793-1.768-1.766V5.241   c0-0.973,0.793-1.766,1.768-1.766h16.492c0.975,0,1.768,0.793,1.768,1.766l0,0l1.256-1.162c0.203-1.43-1.242-2.369-3.024-2.369   H3.535C1.582,1.71,0,3.29,0,5.241v17.372c0,1.951,1.582,3.533,3.535,3.533h16.492c1.953,0,3.535-1.582,3.535-3.533V12.257   l-1.768,1.924L21.795,22.613L21.795,22.613z" />
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </g>
                        </svg>
                        Custom Mobile App Option
                      </li>
                    </ul>
                    <p className="fs-5 mt-2 mt-md-5">
                      POSApt E-Commerce effortlessly merges with our POS, offering
                      user-friendly integration. Whether you prefer a standalone online
                      store or a combined in-store and online setup, our system handles
                      both seamlessly. This synchronization streamlines inventory,
                      orders, and product information, enhancing efficiency and saving
                      time. We also provide a customized mobile app option for each
                      business.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="homeimg_right">
                    <img
                      src="assets/dist/image/3.png"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-50 pb-50 customer_section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 ">
                  <div className="customer_img">
                    <img
                      src="assets/dist/image/ecomimg.png"
                      className="img-fluid rounded-3"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark">
                      E-commerce Simplified. Engage with More <br /> Customers
                    </h2>
                    <p className="fs-5">
                      POSApt E-Commerce system proves versatile for various retail
                      niches including fashion, liquor, flowers, and groceries. With the
                      ability for diverse product offerings and customer reviews, your
                      business gains a seamless selling platform. Upon receiving our
                      system, instant selling is possible as we handle the setup.{" "}
                    </p>
                    <p>
                      Tailoring your online store to your preferences becomes
                      effortless, bolstered by specialized tools for niche operations.
                      Complementing this, our package encompasses personalized website
                      design services curated to match your distinct aesthetic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="ctabanner pt-5 pb-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="row text-start">
                    <div className="heading_s1">
                      <h2 className=" fw-bold text-capitalize text-white">
                        An E-commerce Platform for{" "}
                        <span className="d-block">Small Businesses in Australia</span>
                      </h2>
                      <p className="fs-20 text-start text-white">
                        Bussiness owners find all management solutions within POSApt.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="localbusiness">
                    <img
                      src="assets/dist/image/business.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <hr className="bg-white" />
              <div className="business_details">
                <div className="row">
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Engage more Customers</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        No matter where your customers are, enable your business to sell
                        and serve anywhere, anytime.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Make Smarter Desicions</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        Get real-time insights on your business with a robust data
                        reporting system. Understand what sells the most and what
                        doesn’t.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="business-box pe-4">
                      <h3 className="text-white fs-2">Improve Business Efficiency</h3>
                      <p className="mt-2 mt-md-4 text-white fs-5">
                        Experience streamlined workflows and automated tasks through the
                        integrated POS system, optimising your business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-white" />
              <div className="heading_s1">
                <h2 className=" fw-bold text-capitalize text-white text-start mb-4">
                  Sell Anything. Anytime.
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                    <div className="card-body ">
                      {/* badge */}
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img1">
                          <img
                            src="assets/dist/image/ecom1.png"
                            alt=" "
                            className="mb-3 w-100 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h4 className="fw-bold text-theme ">
                          Retail Stores <br />
                          E-Commerce System
                        </h4>
                        <p className="fs-5">
                          Establish credibility and provide similar experiences
                          customers expect in person.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                    <div className="card-body ">
                      {/* badge */}
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img1">
                          <img
                            src="assets/dist/image/ecom2.png"
                            alt=" "
                            className="mb-3 w-100 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h4 className="fw-bold text-theme ">
                          {" "}
                          Grocery Stores <br /> E-Commerce System
                        </h4>
                        <p className="fs-5">
                          Provide excellent customer experiences with flexible consumer
                          behaviour and interaction.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                    <div className="card-body ">
                      {/* badge */}
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img1">
                          <img
                            src="assets/dist/image/ecom3.png"
                            alt=" "
                            className="mb-3 w-100 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h4 className="fw-bold text-theme ">
                          Fashion Stores <br /> E-Commerce System
                        </h4>
                        <p className="fs-5">
                          Expand and run your business smoothly with our simple precise
                          commerce system.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" pb-50 pt-50">
            <div className="container">
              <div className="row text-center">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize text-dark">
                    Why Choose POSApt’s <br /> E-Commerce System?
                  </h2>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-4">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-2 mb-0 fs-20 ">
                          Better Inventory Management
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          Our simple, precise and real-time inventory system keeps your
                          business running smoothly. With accurate and up-to-date
                          information about your inventory, make informed decisions to
                          increase profitability and provide a better customer
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-4">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-2 mb-0 fs-20 ">
                          Direct Integration to POS
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          Our E-Commerce System integrates seamlessly with our POS
                          solution giving you access to all incoming orders from a
                          single robust system. Eliminate the need to switch between
                          multiple applications for order and sales tracking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-4">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-2 mb-0  fs-20">
                          Safe &amp; Secure Payment Methods
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          Offer multiple payment options including Cash, Credit Cards,
                          and Debit Cards to your online customers. This allows your
                          customers to choose the most convenient payment method for
                          them, increasing your sales and their happiness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-4">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-2 mb-0  fs-20">
                          Custom Website Included
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          We will design and build a custom website for you that is
                          visually appealing, and fully functional. It will also allow
                          your customers to purchase goods and services, all at no
                          additional cost. Sell online what your business is known for.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-4">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-2 mb-0  fs-20">
                          E-Gift Card &amp; Loyalty Program
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          Keep your customers interested, happy and tied to you with the
                          help of our E-gift cards, vouchers and loyalty points. Improve
                          customer retention and increase engagement with your online
                          store.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow border-0 rounded p-4">
                    <div className="card-body">
                      <div className="feature-info-icon d-flex mb-3">
                        <i className="far fa-check-square" />
                        <h3 className="fw-bold text-theme ms-2 mb-0  fs-20">
                          Inbuilt Marketing Tools
                        </h3>
                      </div>
                      <div className="feature-info-content">
                        <p className="mb-0">
                          In this competitive market where every retail store has its
                          own e-commerce page on Google, how you promote yours makes all
                          the difference. That’s why we’ve included features like email
                          marketing and discounts right on our system itself.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-50 customer_section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="heading_s1">
                    <h2 className=" fw-bold text-capitalize text-dark">
                      More Sales. Less Overhead. <br /> 24*7 Support.
                    </h2>
                    <p className="fs-5">
                      Our 24/7 online support is available for any client. Reach us any
                      time of the day and we'll get you connected with an Expert to get
                      your issue resolved as soon as possible.
                    </p>
                    <div className="subpara mt-3">
                      <ul>
                        <li className="fw-bold">Faster Issue Resolving</li>
                        <li className="fw-bold">Fewer Sales Hiccups</li>
                        <li className="fw-bold">Soaring Profits</li>
                      </ul>
                      {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="customer_img">
                    <img
                      src="assets/dist/image/4.png"
                      className="img-fluid rounded-3 w-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* new restro */}
          {/* faq */}
          <section className=" py-5  faqsec mt-5 bg-light ">
            <div className="container">
              <div className="row py-2 py-md-4 py-lg-5">
                <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                  <div className="card cardbg py-4 border-0 shadow h-100">
                    <div className="card-body">
                      <h3 className="pb-3 mb-1 mb-lg-2 fs-47 ">
                        Talk with us. Book a Free Consultation!{" "}
                      </h3>
                      <div className="subpara mt-3">
                        <ul>
                          <li className="d-flex">Speed Up Sales</li>
                          <li className="d-flex">Manage Multiple Stores</li>
                          <li className="d-flex">Real-Time Sales Reporting</li>
                          <li className="d-flex">
                            Keep Track &amp; Prevent Stock Spoilage
                          </li>
                          <li className="d-flex">
                            Analyse &amp; Improve Business Profits
                          </li>
                        </ul>
                        {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                      </div>
                      <div className="text-center newhome_btn newbtn1">
                        <a href=""></a>
                        <a className="btn btn-white btn-red fs-6" href="#">
                          Book a Consultation
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 offset-xl-1">
                  <div className="heading_s1 mb-3">
                    <h2 className=" fw-bold text-capitalize text-dark text-center">
                      Frequently Asked Questions?
                    </h2>
                    {/* <p class="fs-2 text-center">Customers can order from anywhrere anytime</p> */}
                  </div>
                  <div className="accordion bg-white p-2" id="faq">
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q1-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q1"
                          aria-expanded="false"
                          aria-controls="q1"
                        >
                          How to Use POSApt E-commerce?
                        </button>
                      </h2>
                      <div
                        id="q1"
                        className="accordion-collapse collapse"
                        aria-labelledby="q1-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p className="mb-0">
                            POSApt E-commerce is intuitive and super easy to use. Once
                            you've signed up, you can easily navigate through our
                            platform. You can add products, set prices, and manage your
                            inventory effortlessly. We offer a range of customisation
                            options to tailor your store's appearance and functionality.
                            You can also find feature-specific tutorials when you first
                            navigate through the system. We also offer free hands-on
                            training at the start of your subscription so you know all
                            the ins and outs of our e-commerce platform.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q2-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q2"
                          aria-expanded="false"
                          aria-controls="q2"
                        >
                          What is the best E-commerce platform for small businesses?
                        </button>
                      </h2>
                      <div
                        id="q2"
                        className="accordion-collapse collapse"
                        aria-labelledby="q2-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p className="mb-0">
                            POSApt E-commerce is the ideal choice for small and
                            medium-sized retail businesses in Australia. What most other
                            e-commerce platforms lack is the seamless integration
                            between their online store and their physical store. To
                            combat this, we have developed our own POS system which
                            seamlessly integrates with our e-commerce platform. The
                            platform also offers a suite of tools designed to enhance
                            your online presence, streamline operations, and boost
                            sales.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q3-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q3"
                          aria-expanded="false"
                          aria-controls="q3"
                        >
                          How to Set Up a POSApt E-commerce Store?
                        </button>
                      </h2>
                      <div
                        id="q3"
                        className="accordion-collapse collapse"
                        aria-labelledby="q3-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p className="mb-0">
                            You can simply sign up for one of our paid plans and one of
                            our team members will guide you through the whole process.
                            Once the store is ready, you can add your products, organise
                            them into categories, set up your pricing, and configure
                            shipping options. Should you need any assistance, our
                            support personnel are available to help you every step of
                            the way.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q4-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q4"
                          aria-expanded="false"
                          aria-controls="q4"
                        >
                          How Much Does an E-commerce Website Cost?
                        </button>
                      </h2>
                      <div
                        id="q4"
                        className="accordion-collapse collapse"
                        aria-labelledby="q4-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p className="mb-0">
                            Our e-commerce solution costs $199 per month for retail
                            businesses in Australia. However, depending on your specific
                            requirements, the size of the business, and the scale of the
                            product required, the cost can change. View our complete
                            <a href="pricing.html" className="text-primary">
                              pricing plan
                            </a>{" "}
                            or Contact us to get a personalised quote based on your
                            business needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                      <h2 className="accordion-header" id="q5-heading">
                        <button
                          className="accordion-button shadow-none rounded-3 collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#q5"
                          aria-expanded="false"
                          aria-controls="q5"
                        >
                          How Can I Contact You If I Need Any Support?
                        </button>
                      </h2>
                      <div
                        id="q5"
                        className="accordion-collapse collapse"
                        aria-labelledby="q5-heading"
                        data-bs-parent="#faq"
                      >
                        <div className="accordion-body fs-sm pt-0">
                          <p className="mb-0">
                            We have a team of support personnel available to assist you
                            or answer your queries 7 days a week. There are several ways
                            to reach us. You can visit our Contact Page on our website
                            or reach us directly through email or phone. We're here to
                            ensure that your experience with our E-Commerce is smooth
                            and successful.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card card-hover bg-theme-green mt-2 py-2 rounded-3 border-0">
                      <div className="card-body  d-flex d-mobile-block align-items-center justify-content-center text-center justify-content-md-between">
                        <div>
                          <p className="fs-4 mb-0 text-white">Connect with us</p>
                        </div>
                        <div className="social-links ">
                          {" "}
                          <a href="#" className="facebook">
                            <i className="fab fa-facebook" />
                          </a>{" "}
                          <a href="#" className="instagram">
                            <i className="fab fa-instagram" />
                          </a>
                          <a href="#" className="linkedin">
                            <i className="fab fa-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </Layout>
    </>
  )
}

export default ecommerce