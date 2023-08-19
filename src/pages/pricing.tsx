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
        <>
          <ScrollToTop />
          <div
            className="breadcrumbs-custom box-transform-wrap context-dark bg-image gradient-overlay"
            style={{ backgroundImage: "url(images/bg-typography.jpg)" }}
          >
            <div className="container">
              <h1 className="breadcrumbs-custom-title text-white">
                POSApt Current Pricing
              </h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>

          <section className="lis-bg-light pt-50 pb-50">
            <div className="container-fluid">
              <div className="row text-center">
                <div className="heading_s1">
                  <span className="sub_heading font_style1">Choose Your Plan</span>
                  <h2 className=" fw-bold text-capitalize">
                    Select a plan that suits your business needs
                  </h2>
                </div>
              </div>
              <div className="menu_inner subscribe_plan">
                <div className="pricing mb-3">
                  <div className="row row-cols-1 row-cols-xxl-5 row-cols-md-5 g-4">
                    <div className="col">
                      <div className="price-box">
                        <div className=" text-center">
                          <div className="price-label basic">
                            Basic Online Ordering System
                          </div>
                          <div className="price">$ 59</div>
                          <div className="price-info">Per Month, Inc. GST</div>
                        </div>
                        <div className="info">
                          <ul>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Customer Booking{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Live Reporting{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Integeration With Leading Accounting Software{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Holiday/Credit Card Surcharge Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              24/7 Customer Support{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Short Term Cash Flow Assistance #{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Order Management{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Online Ordering System{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Payment Integration Of Your Choice{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Loyalty, Giftcards &amp; Email Marketing{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free WordPress Website{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free E-Commerce Website (Only For Retail Businesses){" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Local SEO{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Social Media Management ( Facebook &amp; Instagram)
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              No Of SKU's - <strong>Less Than 1,000</strong>
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Merchant Fee ( Only For Online Orders) -
                              <strong>3.50%</strong>
                            </li>
                          </ul>
                          <div className="subpara text-center">
                            <Link
                              className="btn btn-raised shadow my-button homecart pricebtn "
                              href="/register?type=online"
                            >
                              Start My Free Trial!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="price-box">
                        <div className=" text-center">
                          <div className="price-label value">
                            Popular Online Ordering System
                          </div>
                          <div className="price">$ 119</div>
                          <div className="price-info">Per Month, Inc. GST</div>
                        </div>
                        <div className="info">
                          <ul>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Customer Booking{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Live Reporting{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Integeration With Leading Accounting Software{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Holiday/Credit Card Surcharge Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              24/7 Customer Support{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Short Term Cash Flow Assistance #{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Order Management{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Online Ordering System{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Payment Integration Of Your Choice{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Loyalty, Giftcards &amp; Email Marketing{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free WordPress Website{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free E-Commerce Website (Only For Retail Businesses){" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Local SEO{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Social Media Management ( Facebook &amp; Instagram)
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              No Of SKU's - <strong>Less Than 1,000</strong>
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Merchant Fee ( Only For Online Orders) -
                              <strong>2.50%</strong>
                            </li>
                          </ul>
                          <div className="subpara text-center">
                            <Link
                              className="btn btn-raised shadow my-button homecart pricebtn "
                              href="register?type=online"
                            >
                              Start My Free Trial!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="price-box">
                        <div className=" text-center">
                          <div className="price-label premium ">Basic POS System <br /> (1 Device)</div>
                          <div className="price">$ 66</div>
                          <div className="price-info">Per Month, Inc. GST</div>
                        </div>
                        <div className="info">
                          <ul>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Cloud Based POS
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Customer Booking{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Live Reporting{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Integeration With Leading Accounting Software{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Holiday/Credit Card Surcharge Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              24/7 Customer Support{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Short Term Cash Flow Assistance #{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Order Management{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Loyalty, Giftcards &amp; Email Marketing{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              No Of SKU's - <strong>Less Than 1,000</strong>
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              N/A
                            </li>
                          </ul>
                          <div className="subpara text-center">
                            <Link
                              className="btn btn-raised shadow my-button homecart pricebtn "
                              href="/register?type=pos"
                            >
                              Start My Free Trial!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="price-box">
                        <div className=" text-center">
                          <div className="price-label premium1 bg-danger text-white">
                            Popular POS System <br />(1 Device)
                          </div>
                          <div className="price">$ 185</div>
                          <div className="price-info">Per Month, Inc. GST</div>
                        </div>
                        <div className="info">
                          <ul>
                            <li>
                              {" "}
                              <i className="fas fa-check" /> Cloud Based POS{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Customer Booking{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Live Reporting{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Integeration With Leading Accounting Software{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Holiday/Credit Card Surcharge Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              24/7 Customer Support{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Short Term Cash Flow Assistance #{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Order Management{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Online Ordering System{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              QR Code Ordering{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Payment Integration Of Your Choice{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Loyalty, Giftcards &amp; Email Marketing{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free WordPress Website{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Local SEO{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Social Media Management ( Facebook &amp; Instagram)
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              No Of SKU's - <strong>Less Than 1,000</strong>
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Merchant Fee ( Only For Online Orders) -
                              <strong>2.50%</strong>
                            </li>
                          </ul>
                          <div className="subpara text-center">
                            <Link
                              className="btn btn-raised shadow my-button homecart pricebtn "
                              href="/register?type=pos"
                            >
                              Start My Free Trial!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="price-box">
                        <div className=" text-center">
                          <div className="price-label premium">
                            POS System with <br /> E-commerce <br />(1 Device)
                          </div>
                          <div className="price">$ 299</div>
                          <div className="price-info">Per Month, Inc. GST</div>
                        </div>
                        <div className="info">
                          <ul>
                            <li>
                              {" "}
                              <i className="fas fa-check" /> Cloud Based POS{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Customer Booking{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Live Reporting{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Integeration With Leading Accounting Software{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Holiday/Credit Card Surcharge Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              24/7 Customer Support{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Set Up{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Short Term Cash Flow Assistance #{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Order Management{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Online Ordering System{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              QR Code Ordering{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Payment Integration Of Your Choice{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Loyalty, Giftcards &amp; Email Marketing{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free WordPress Website{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free E-Commerce Website (Only For Retail Businesses){" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Local SEO{" "}
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Free Social Media Management ( Facebook &amp; Instagram)
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              No Of SKU's - <strong>Less Than 1,000</strong>
                            </li>
                            <li>
                              {" "}
                              <i className="fas fa-check" />
                              Merchant Fee ( Only For Online Orders) -
                              <strong>2.50%</strong>
                            </li>
                          </ul>
                          <div className="subpara text-center">
                            <Link
                              className="btn btn-raised shadow my-button homecart pricebtn "
                              href="/register?type=pos"
                            >
                              Start My Free Trial!
                            </Link>
                          </div>
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
  );
};

export default pricing;
