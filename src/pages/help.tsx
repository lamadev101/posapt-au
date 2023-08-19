/** @format */

import React from "react";
import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import Head from 'next/head';

const Help = () => {
  return (
    <>
      <Head>
        <title> Help | POSApt</title>
        <meta
          name="title"
          content=" Help | POSApt"
        />
        <meta
          name="description"
          content="Find answers to the most frequently asked questions about Point Of Sale (POS) And Online Ordering System"
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
          content=" Help | POSApt"
        />
        <meta
          property="og:description"
          content="Find answers to the most frequently asked questions about Point Of Sale (POS) And Online Ordering System"
        />
        <meta property="og:url" content="https://posapt.au/help" />
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
          content="Point-of-Sale (POS) Systems in Australia"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content=" Help | POSApt"
        />
        <meta
          name="twitter:description"
          content="Find answers to the most frequently asked questions about Point Of Sale (POS) And Online Ordering System"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/help" />
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
                Frequently Asked Questions
              </h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>
          <section className="lis-bg-light pt-50 pb-50">
            <div className="container bg-white rounded shadow">
              <div className="helpwrap">
                <div className="row text-center">
                  <div className="heading_s1">
                    <span className="sub_heading font_style1">
                      Find answers to the most frequently asked questions about
                    </span>
                    <h2 className=" fw-bold text-capitalize">
                      Point of Sale (POS) and Online Ordering System:
                    </h2>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="search w-75 d-flex align-items-center">
                    {" "}
                    <span className="fas fa-search text-dark" />{" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your query"
                    />{" "}
                  </div>
                </div>
                <div
                  className="accordion accordion-flush border-top border-start border-end"
                  id="myAccordion"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pos-helpOne">
                      {" "}
                      <button
                        className="accordion-button collapsed border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        {" "}
                        What is a POS system?
                      </button>{" "}
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse border-0 show"
                      aria-labelledby="pos-helpOne"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body p-0">
                        <p>
                          Point of sale, or POS, refers to the place where a
                          retail transaction such as buying or selling of goods
                          takes place. While point-of-sale systems used to be your
                          traditional cash register, they can now be found in a
                          variety of forms, thanks to digital technologies.
                        </p>
                        <p>
                          A POS system typically records an item’s price, tracks
                          sales, accepts payments and generates a receipt. POSApt
                          can do these aforementioned tasks flawlessly and even
                          help out with important business operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pos-helpOne">
                      {" "}
                      <button
                        className="accordion-button collapsed border-0 show"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        {" "}
                        How does a POS System work?
                      </button>{" "}
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse border-0 show"
                      aria-labelledby="pos-helpOne"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body p-0">
                        <p>
                          A POS system is a constellation of software and hardware
                          combined together to process customer-facing
                          transactions efficiently and streamline business
                          processes connected with your sales. The software is
                          what registers, processes and stores transaction details
                          while the hardware is what you interact with the
                          software, read items and cards, print out receipts, etc.
                          A POS system in the past referred to the cash register
                          at the counter of a store. But with today’s fully
                          digital POS systems, you can control all the functions
                          of a POS on your smartphone or tablet.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pos-helpOne">
                      {" "}
                      <button
                        className="accordion-button collapsed border-0 show"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        {" "}
                        What are the key features of POSApt?{" "}
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse border-0 show"
                      aria-labelledby="pos-helpOne"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body p-0">
                        <p>
                          We strive to not just be better than the competition but
                          be different as well. Our POS system has the following
                          key features:
                        </p>
                        <ul className="list-unstyled m-0 poslist">
                          <li className="text-dark fw-bold">
                            Centralized Ordering
                          </li>
                          <p className="">
                            All your orders from third-party delivery companies
                            such as Uber, Doordash, Menulog, etc are congregated
                            into one central dashboard to make life easier.
                          </p>
                          {/* <li class="text-dark fw-bold">Simple & Better Inventory Management</li> */}
                          <li className="text-dark fw-bold">
                            Integration with Leading Accounting Software
                          </li>
                          <p>
                            Our POS system comes integrated with the world’s most
                            popular account software including Xero, MYOB, and
                            Quickbooks.
                          </p>
                          <li className="text-dark fw-bold">
                            Secure Payment Options
                          </li>
                          <p>
                            Alongside EFTPOS integration, our POS system also
                            allows your customers to pay via PayPal or Google Pay,
                            allowing more payment options without any security
                            risk.
                          </p>
                          <li className="text-dark fw-bold">Affordability</li>
                          <p>
                            What makes POSApt an easy choice is its affordability
                            and the fact that “We don’t take any commission on
                            your success”.
                          </p>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pos-helpOne">
                      {" "}
                      <button
                        className="accordion-button collapsed border-0 show"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        Are there any hidden fees I should be aware of?{" "}
                      </button>{" "}
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse border-0 show"
                      aria-labelledby="pos-helpOne"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body p-0">
                        <p>
                          Nope. We don’t take any commission, extra charges,
                          authorization fees, startup fees, compliance fees or
                          business card fees. You won’t have to pay anything more
                          than the tiny monthly subscription fee that you agree to
                          at the end of your 30 Days Free Trial.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pos-helpOne">
                      {" "}
                      <button
                        className="accordion-button collapsed border-0 show"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        How do I start using POSApt?{" "}
                      </button>{" "}
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse border-0 show"
                      aria-labelledby="pos-helpOne"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body p-0">
                        <p>
                          Download the POSApt app, sign up and start using it
                          immediately. We are offering a 1-month FREE TRIAL with
                          No-Card Required.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="pos-helpOne">
                      {" "}
                      <button
                        className="accordion-button collapsed border-0 show"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        How much does the POS system from POSApt cost?
                      </button>{" "}
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse border-0 show"
                      aria-labelledby="pos-helpOne"
                      data-bs-parent="#myAccordion"
                    >
                      <div className="accordion-body p-0">
                        <p>
                          POSApt is free to use for the first 30 days and charges
                          a small monthly subscription fee. Our Promise: POSApt
                          will always cost you less than any competitive POS
                          system in the Australian Market. We take no commissions
                          or extra charges.
                        </p>
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

export default Help;
