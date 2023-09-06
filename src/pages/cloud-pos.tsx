import Layout from "@/Components/Layout"
import { CustomerSection, HeroSection } from "@/sections"
import { ListofFeature, SupportSystem } from "@/sections/pos-cloud"

const CloudPos = () => {

  const customerSectionData1 = {
    title: "Simple POSapt System Maxmise Efficincy",
    paraDesc: ["POSapt streamline your operations and improve customer experience. Business can make payment faster so no more long queues. That makes your staffs happier too. With real-time reporting, businesses make data-driven decisions, increase revenue, and ultimately achieve success."],
    imgUrl: "",
    list: [
      "Speed Up Sales",
      "Manage Multiple Stores",
      "Speed Up Sales"
    ]
  }

  const customerSectionData2 = {
    title: "We Support Small Businesses Anywhere Anytime",
    paraDesc: ["24/7 online support is available for any clients. Reach us any time of the day and we'll get you connected with an Expert to get your issue resolved as soon as possible."],
    imgUrl: "",
    list: [
      "Speed Up Sales",
      "Manage Multiple Stores",
      "Speed Up Sales"
    ]
  }

  return (
    <>
      <Layout>
        {/* about us */}
        <section className=" pt-1 pt-md-5 pb-50 bg-home">
          <div className="container  text-center">
            <div className="row ">
              <div className="col-md-7 d-flex align-items-center justify-content-center ">
                <div className="heading_s1">
                  <h1 className=" fs-61 text-white">
                    Cloud <br /> Point of Sale System <br /> for Australian Businesses
                  </h1>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="">
                  <img
                    src="assets/dist/image/cloudpos.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="subpara ">
                  <p className="text-center fs-47 text-white">
                    <span style={{ fontWeight: 400 }}>
                      A cloud-based POS solution for hospitality and retail store
                      owners to manage in-store and online sales.
                    </span>
                  </p>
                  <div className="text-center newhome_btn">
                    <a className="btn btn-white btn-red fs-6" href="#">
                      Sign Up for Free Trial !
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
                      Enjoy POS Outstanding Features All Inclusive!
                    </h2>
                  </div>
                  <ul className="newposlist text-dark fw-bold pt-3 fs-5">
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
                      Order Tracking
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
                      POS Mobile App
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
                      Inventory Notification
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
                      Set Up &amp; User Training
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
                      Products Upload Service
                    </li>
                  </ul>
                  <p className="fs-5 mt-2 mt-md-3">
                    Take your business to the next level with cloud-based technology
                    integrated with a robust POS system. Give your customers what they
                    want with simplified QR code tableside ordering, delivery,
                    takeaway, and contactless payments. Make data-driven decisions,
                    increase revenue, and achieve success with real-time reporting.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-end">
                <div className="homeimg_right">
                  <img
                    src="assets/dist/image/8.png"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" pt-50 pb-50">
          <div className="container">
            <div className="row text-center">
              <div className="heading_s1">
                <h2 className=" fw-bold text-capitalize text-dark">
                  POSApt As Your Cloud Business Solution
                </h2>
                <p className="fs-5 text-center">
                  Explore what a Cloud POS can do for your business.{" "}
                </p>
              </div>
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
                          src="assets/dist/image/cloud1.png"
                          alt=" "
                          className="mb-3 img-fluid "
                        />
                      </div>
                      {/* heading */}
                      <h3 className="fw-bold text-theme fs-20  ">
                        Accessibility Enabled by Cloud
                      </h3>
                      <p className="fs-5">
                        Data from all your transactions, inventory, sales and
                        accounting will be stored in the Cloud. Easily access it from
                        anywhere, anytime.{" "}
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
                          src="assets/dist/image/cloud4.png"
                          alt=" "
                          className="mb-3 img-fluid "
                        />
                      </div>
                      {/* heading */}
                      <h3 className="fw-bold text-theme fs-20 ">
                        Efficient Sales Management
                      </h3>
                      <p className="fs-5">
                        Our intuitive design allows you to manage sales without
                        fumbling the process of transactions, accepting payments or
                        printing receipts.
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
                          src="assets/dist/image/cloud3.png"
                          alt=" "
                          className="mb-3 img-fluid "
                        />
                      </div>
                      {/* heading */}
                      <h3 className="fw-bold text-theme fs-20 ">Mobile/Tablet App</h3>
                      <p className="fs-5">
                        Check and manage all orders, reports and transactions remotely
                        through your Android phone or tablet. Don't worry, we'll set
                        it up on your device.
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
                          src="assets/dist/image/cloud2.png"
                          alt=" "
                          className="mb-3 img-fluid "
                        />
                      </div>
                      {/* heading */}
                      <h3 className="fw-bold text-theme fs-20 ">
                        3rd Party Software Integration
                      </h3>
                      <p className="fs-5">
                        Tools such as Xero are integral for most businesses in the
                        market today. So, we made it easy to integrate Xero and
                        e-commerce systems with our Cloud POS.
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
                          src="assets/dist/image/cloud5.png"
                          alt=" "
                          className="mb-3 img-fluid "
                        />
                      </div>
                      {/* heading */}
                      <h3 className="fw-bold text-theme fs-20 ">
                        Safe &amp; Secure Data Storage
                      </h3>
                      <p className="fs-5">
                        Since our system is always connected to the internet, all data
                        is constantly being saved in cloud storage. So, there's no
                        risk of data loss.
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
                          src="assets/dist/image/cloud6.png"
                          alt=" "
                          className="mb-3 img-fluid "
                        />
                      </div>
                      {/* heading */}
                      <h3 className="fw-bold text-theme fs-20 ">
                        Advanced Inventory Tracking
                      </h3>
                      <p className="fs-5">
                        Monitor stock levels right through our cloud POS’s web or
                        mobile app. Set up automatic alerts for inventory whenever
                        your stock needs refilling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" pb-50 ">
          <div className="container">
            {/* <div class="row text-center">
              <div class="heading_s1">

                  <h2 class=" fw-bold text-capitalize text-dark">Why Choose POSApt’s <br> Cloud POS?</h2>

              </div>
          </div> */}
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 shadow border-0 rounded p-4">
                  <div className="card-body">
                    <div className="feature-info-icon d-flex mb-3">
                      <i className="far fa-check-square" />
                      <h4 className="fw-bold text-theme ms-2 mb-0 fs-20 ">
                        Better Inventory Management
                      </h4>
                    </div>
                    <div className="feature-info-content">
                      <p className="mb-0">
                        Our simple, precise and real-time inventory system keeps your
                        business running smoothly. Make informed decisions to increase
                        profitability and provide a better customer experience.
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
                      <h4 className="fw-bold text-theme ms-2 mb-0 fs-20  ">
                        Safe &amp; Secure Payment Methods
                      </h4>
                    </div>
                    <div className="feature-info-content">
                      <p className="mb-0">
                        Our system offers multiple payment options including Credit
                        Cards, Gift Cards and Loyalty Points. This allows your
                        customers to choose their most convenient payment method for
                        them.
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
                      <h4 className="fw-bold text-theme ms-2 mb-0 fs-20  ">
                        Custom Website Inclusive
                      </h4>
                    </div>
                    <div className="feature-info-content">
                      <p className="mb-0">
                        We will design and build a custom website for you that is
                        visually appealing, and fully functional. It will also allow
                        your customers to purchase goods and services, all at no
                        additional cost to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" newstore pt-5 pb-5">
          <div className="container">
            <div className="heading_s1">
              <h2 className=" fw-bold text-capitalize text-dark text-center mb-4">
                We Support Small <br /> Businesses Anywhere Anytime
              </h2>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 shadow rounded">
                  <img
                    src="/assets/dist/image/Best POS System Software.webp"
                    className="card-img-top "
                    alt="Hardware To Support Your Sales"
                    title="Hardware To Support Your Sales"
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-theme fw-bold fs-20">
                      Hardware Set up Support
                    </h3>
                    <p className="card-text">
                      It is essential that your Point of Sale solution synchronises
                      well with all the hardware components that complement it. So, as
                      part of the POSApt setup, we provide you with all the hardware
                      necessary for a smooth and efficient sales action. Our hardware
                      package includes:
                    </p>
                    <ul className="row serlist">
                      <li className="fw-bold col-md-5">
                        <a>
                          <small>Tablet</small>
                        </a>
                      </li>
                      <li className="fw-bold col-md-7">
                        <a>
                          <small>Tablet Stand</small>
                        </a>
                      </li>
                      <li className="fw-bold col-md-5">
                        <a>
                          <small>Cash Drawer</small>
                        </a>
                      </li>
                      <li className="fw-bold  col-md-7">
                        <a>
                          <small>Kitchen Printer</small>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 rounded shadow">
                  <img
                    src="assets/dist/image/merchant.png"
                    className="card-img-top "
                    alt="Hands-On Merchant Management Service"
                    title=" Hands-On Merchant Management Service"
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-theme fw-bold fs-20">
                      Merchant Management
                    </h3>
                    <p className="card-text fs-5">
                      POSApt provides you with a hands-on Merchant Management Service
                      that extends from the installation phase to day-to-day
                      maintenance. This Merchant service allows you to accept multiple
                      payment methods including credit cards from your customers via
                      EFTPOS machines. We're offering Merchant facilities at a very
                      competitive price.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 rounded shadow">
                  <img
                    src="/assets/dist/image/loan.png"
                    className="card-img-top "
                    alt="Short Term Cash Flow Boost"
                    title="Short Term Cash Flow Boost"
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-theme fw-bold fs-20">
                      Cash Flow Management
                    </h3>
                    <p className="card-text">
                      We want to power your business’s success. We’ve partnered with
                      LucaPay to offer you cash-flow support directly from our POS
                      system. You can get your invoices paid during tough financial
                      situations with just 1 click to mitigate your business’s
                      short-term cash flow issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="container-fluid">
      <img src="https://images.ctfassets.net/2d5q1td6cyxq/5YjIscSBApfmtZxBer3R2A/9a41fcd0716db506e91237eca6a00dea/PD03417_-_M_USEN_Ecommerce_software_frames.png?w=4000&h=1821&fm=avif&q=85&fit=scale" class="img-fluid" alt="">
  </div> */}
        <section className="pt-50 customer_section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize text-dark">
                    24/7 Customer Support
                  </h2>
                  <p className="fs-5">
                    We're always available for you. Contact us via email or phone at
                    any time of the day and we'll get you connected with an Expert to
                    get your issue resolved in no time.
                  </p>
                  <div className="subpara mt-3">
                    <ul>
                      <li className="fw-bold">Low Downtime</li>
                      <li className="fw-bold">Exceptional Customer Support</li>
                      <li className="fw-bold">$0 Charge for Customer Support</li>
                    </ul>
                    {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-end ">
                <div className="customer_img">
                  <img
                    src="assets/dist/image/img2.png"
                    className="img-fluid rounded-3 w-80"
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
                      We are happy <br /> to talk with you. Book a Free Consultation!
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
                        What is a Cloud POS?
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
                          A Cloud POS system is just like a regular POS system but
                          stores data on cloud storage and all sales transitions and
                          operations occur over the internet. This enables a business
                          owner to access their point-of-sale system from any device
                          with an internet connection.{" "}
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
                        How Does a Cloud-Based POS System Work?
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
                          Every time a sale is made, the details of the transaction
                          are instantly processed and stored in the cloud. Depending
                          upon the order and your business needs, the order is
                          processed accordingly. Using this live data on the cloud
                          storage, you also get a real-time overview of your key
                          metrics right in the dashboard. POSApt’s cloud-based POS
                          works on multiple platforms like web browsers, dedicated
                          mobile apps, or even a tablet.
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
                        What are the Main Features of Cloud POS Software?
                      </button>
                    </h2>
                    <div
                      id="q3"
                      className="accordion-collapse collapse"
                      aria-labelledby="q3-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>Here are the main features of our Cloud POS software:</p>
                        <ul>
                          <li>
                            <strong> Sales Management:</strong> Processing
                            transactions, payments and printing receipts.
                          </li>
                          <li>
                            <strong>Inventory Tracking:</strong> Monitoring stock
                            levels and sending alerts when any stock item is running
                            low.
                          </li>
                          <li>
                            <strong>Multi-Location Support:</strong> Managing multiple
                            stores or branches from a centralised application.
                          </li>
                          <li>
                            <strong>3rd Party Software Integration:</strong>{" "}
                            Integrating with other business tools such as Xero and
                            e-commerce systems.
                          </li>
                        </ul>
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
                        What are the Advantages of a Cloud POS System?
                      </button>
                    </h2>
                    <div
                      id="q4"
                      className="accordion-collapse collapse"
                      aria-labelledby="q4-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p>The advantages of POSApt's Cloud POS system include:</p>
                        <ul>
                          <li>
                            <span className="fw-bold d-block">
                              a. Accessible from anywhere around the globe
                            </span>{" "}
                            Since all the data is stored in cloud storage, business
                            owners can access it anytime, anywhere, facilitating
                            remote management.
                          </li>
                          <li>
                            <span className="fw-bold d-block">
                              b. Scalable as your business grows
                            </span>{" "}
                            Unlike a traditional POS system that is constricted by the
                            capacity of its local storage, cloud POS systems allow you
                            to easily scale your system.
                          </li>
                          <li>
                            <span className="fw-bold d-block">
                              c. Security &amp; Backup
                            </span>
                            Since the data is securely stored in the cloud. Moreover,
                            you have the power to back up and recover whenever your
                            physical store’s data gets corrupted or erased.
                          </li>
                          <li>
                            <span className="fw-bold d-block">d. Cost Effective</span>
                            Cloud-based POS systems also demand fewer hardware
                            components to be installed on-site which reduces your
                            on-site hardware and maintenance costs.
                          </li>
                        </ul>
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
                        What Integration Options Does POSApt's Cloud POS Provide?
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
                          We understand that you may already be reliant on other tools
                          and software that are crucial for your business’s
                          functionality. That is why we offer 3rd party integration of
                          accounting software, payment gateways and e-commerce or
                          online ordering platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm">
                    <h2 className="accordion-header" id="q6-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q6"
                        aria-expanded="false"
                        aria-controls="q6"
                      >
                        How Much Does POSApt's Cloud-Based POS System Cost?
                      </button>
                    </h2>
                    <div
                      id="q6"
                      className="accordion-collapse collapse"
                      aria-labelledby="q6-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p className="mb-0">
                          Our cloud POS starts from $66/month. However, we have
                          multiple{" "}
                          <a href="pricing.html" className="text-primary">
                            pricing plans
                          </a>{" "}
                          for different-sized businesses.
                        </p>
                      </div>
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
        </section>
      </Layout>
    </>
  )
}

export default CloudPos