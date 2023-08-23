/** @format */

import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import Head from 'next/head';
import Link from "next/link";

const pricing = () => {
  const { price } = useSelector((state: RootState) => state.StateManager);
  return (
    <>
      <Head>
        <title>Pricing | POSApt </title>
        <meta
          name="title"
          content="Pricing | POSApt"
        />
        <meta
          name="description"
          content="Get the best Point of Sale (POS) systems in Australia with the most competitive pricing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://posapt.au/pricing" />
      </Head>
      <Layout>
        <ScrollToTop />
        <section className="pt-50 newsec1">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="heading_s1">
                  <h1 className=" fw-bold text-capitalize text-dark ">
                    All POSApt Plan Included
                  </h1>
                </div>
                <p className="fs-5">
                  We understand business owners' stress managing day to day
                  operations.{" "}
                </p>
                <div className="subpara mt-3">
                  <ul className="row">
                    <li className="col-md-6 d-flex"> Customer Booking</li>
                    <li className="col-md-6 d-flex">Live Reporting</li>
                    <li className="col-md-6 d-flex">
                      Integeration With Leading Accounting Software
                    </li>
                    <li className="col-md-6 d-flex">
                      Holiday/Credit Card Surcharge Set Up
                    </li>
                    <li className="col-md-6 d-flex">24/7 Customer Support</li>
                    <li className="col-md-6 d-flex">Free Set Up</li>
                    <li className="col-md-6 d-flex">
                      Short Term Cash Flow Assistance
                    </li>
                    <li className="col-md-6 d-flex">Order Management</li>
                    <li className="col-md-6 d-flex">
                      Loyalty, Giftcards &amp; Email Marketing
                    </li>
                  </ul>
                  {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                </div>
              </div>
              <div className="col-md-5">
                <div className="customer_img1 h-100">
                  <img
                    src="assets/dist/image/image3.png"
                    className="img-fluid rounded-3 w-100 h-100"
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-inner py-5 mt-5">
          <div className="container">
            <ul
              className="nav nav-pills mb-3 d-flex align-items-center justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-hospitality-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hospitality"
                  type="button"
                  role="tab"
                  aria-controls="pills-hospitality"
                  aria-selected="true"
                >
                  Hospitality Pricing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-retail-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-retail"
                  type="button"
                  role="tab"
                  aria-controls="pills-retail"
                  aria-selected="false"
                >
                  Retail Pricing
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-hospitality"
                role="tabpanel"
                aria-labelledby="pills-hospitality-tab"
              >
                <div className="container">
                  <div className="row heading_s1">
                    <h2 className="pb-2 text-white fw-bold text-center">
                      Find the Best POS Plan for Your Hospitality Business
                    </h2>
                    <p className="fs-5 text-white text-center">
                      The most suitable plan for you depends on the style of your
                      business and the volume of products your business handles. Feel
                      free to reach out to our friendly customer service team for
                      assistance.
                    </p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    <div className="col-lg-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-start text-theme">
                            Hospitality POS
                          </h5>
                          <p>
                            Ideal for businesses looking to streamline operations and
                            provide faster service. No more long queues at the
                            cashier.
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="card-price text-center text-yellow fw-bold">
                                $66
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <span className="period d-block text-yellow fw-bold">
                                /1 Device
                              </span>
                              <span className="period text-yellow fw-bold">
                                /month/Inc.GST
                              </span>
                            </div>
                          </div>
                          <ul className="fa-ul text-start mt-3">
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Cloud-based POS
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Mobile App for Reporting
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-start text-theme">
                            POS &amp; Online Ordering
                          </h5>
                          <p>
                            A software bundle including our POS and all online
                            ordering. Perfect for small businesses.
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="card-price text-center text-yellow fw-bold">
                                $185
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <span className="period d-block text-yellow fw-bold">
                                /1 Device
                              </span>
                              <span className="period text-yellow fw-bold">
                                /month/Inc.GST
                              </span>
                            </div>
                          </div>
                          <ul className="fa-ul text-start mt-3">
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Cloud-based POS
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Mobile App for Reporting
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Online Ordering System{" "}
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              QR Code Ordering
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Payment Integration Of Your Choice
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              WordPress Website
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Merchant Fee ( Only For Online Orders) 2.50%
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-start text-theme">
                            Online Ordering Only
                          </h5>
                          <p>
                            Perfect for growing hospitality business looking to expand
                            more business. Online Ordering Only.
                          </p>
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <h6 className="card-price text-center text-yellow fw-bold">
                                $119
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <span className="period text-yellow fw-bold">
                                /month/Inc.GST
                              </span>
                            </div>
                          </div>
                          <ul className="fa-ul text-start mt-3">
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Online Ordering System
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Payment Integration Of Your Choice
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Loyalty, Giftcards &amp; Email Marketing{" "}
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Free WordPress Website
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Merchant Fee ( Only For Online Orders) 2.50%
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-retail"
                role="tabpanel"
                aria-labelledby="pills-retail-tab"
              >
                <div className="container">
                  <div className="row heading_s1">
                    <h2 className="pb-2 text-white fw-bold text-center">
                      Find the Best POS Plan for Your Retail Business
                    </h2>
                    <p className="fs-5 text-white text-center">
                      The most suitable plan for you depends on the style of your
                      business and the volume of products your business handles. Feel
                      free to reach out to our friendly customer service team for
                      assistance.
                    </p>
                  </div>
                  <div className="row g-4 justify-content-center">
                    <div className="col-lg-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-start text-theme">
                            Retail POS
                          </h5>
                          <p>
                            Ideal for small retail businesses looking to streamline
                            operations and provide faster service.
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="card-price text-center text-yellow fw-bold">
                                $ 99
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <span className="period d-block text-yellow fw-bold">
                                /1 Device
                              </span>
                              <span className="period text-yellow fw-bold">
                                /month/Inc.GST
                              </span>
                            </div>
                          </div>
                          <ul className="fa-ul text-start mt-3">
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Cloud-based POS
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Mobile App for Reporting
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-start text-theme">
                            E-Commerce Only
                          </h5>
                          <p>
                            Ideal for retail stores aiming to amplify their business
                            presence, focusing exclusively on an E-Commerce system.
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="card-price text-center text-yellow fw-bold">
                                $ 199
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <span className="period d-block text-yellow fw-bold">
                                /1 Device
                              </span>
                              <span className="period text-yellow fw-bold">
                                /month/Inc.GST
                              </span>
                            </div>
                          </div>
                          <ul className="fa-ul text-start mt-3">
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              E-Commerce Website
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Payment Integration Of Your Choice
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Loyalty, Giftcards &amp; Email Marketing
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Mobile App for Reports
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Merchant Fee ( Only For Online Orders) -2.50%
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-start text-theme">
                            POS &amp; E-Commerce
                          </h5>
                          <p>
                            A bundle including our POS and E-Commerce features.
                            Perfect for retail business looking to streamline their
                            operations.
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="card-price text-center text-yellow fw-bold">
                                $ 298
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <span className="period d-block text-yellow fw-bold">
                                /1 Device
                              </span>
                              <span className="period text-yellow fw-bold">
                                /month/Inc.GST
                              </span>
                            </div>
                          </div>
                          <ul className="fa-ul text-start mt-3">
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Cloud Based POS
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Mobile App for Reports
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              E-Commerce Website
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Payment Integration Of Your Choice
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Merchant Fee ( Only For Online Orders) -2.50%
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card h-100">
                        <div className="card-body">
                          <h5 className="card-title text-capitalize text-start text-theme">
                            POS, E-Commerce &amp; Mobile App
                          </h5>
                          <p>
                            A bundle including our POS, E-Commerce and Mobile App
                            features. Perfect for retail business seeking larger
                            market.
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <h6 className="card-price text-center text-yellow fw-bold">
                                $ 398
                              </h6>
                            </div>
                            <div className="col-md-6">
                              <span className="period d-block text-yellow fw-bold">
                                /1 Device
                              </span>
                              <span className="period text-yellow fw-bold">
                                /month/Inc.GST
                              </span>
                            </div>
                          </div>
                          <ul className="fa-ul text-start mt-3">
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Cloud Based POS
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Mobile App for Reports
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Mobile E-Commerce App
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              E-Commerce Website
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Payment Integration Of Your Choice
                            </li>
                            <li>
                              <span className="fa-li">
                                <i className="fas fa-check" />
                              </span>
                              Merchant Fee ( Only For Online Orders) -2.50%
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default pricing;
