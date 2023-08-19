/** @format */

import React, { FC } from "react";
import Link from "next/link";
import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import Head from 'next/head';

interface BusinessProps { }
const Business: FC<BusinessProps> = ({ }) => {
  return (
    <>
      <Head>
        <title>Businesses We Help | POSApt</title>
        <meta
          name="title"
          content="Businesses We Help | POSApt"
        />
        <meta
          name="description"
          content="Revolutionize your business with the best Point-of-Sale (POS) system provider in Australia!"
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
          content="Businesses We Help | POSApt"
        />
        <meta
          property="og:description"
          content="Revolutionize your business with the best Point-of-Sale (POS) system provider in Australia!"
        />
        <meta property="og:url" content="https://posapt.au/business" />
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
          content="Businesses We Help | POSApt"
        />
        <meta
          name="twitter:description"
          content="Revolutionize your business with the best Point-of-Sale (POS) system provider in Australia!"
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/business" />
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
                Revolutionize Your Business
              </h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>
          <section className="pt-50">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <div className="serv_left">
                    <img
                      src="/assets/dist/image/newImages/homeorder.webp"
                      className="img-fluid"
                      alt="Revolutionize your business with the best Point-of-Sale (POS) system"
                      title="Revolutionize your business with the best Point-of-Sale (POS) system"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row text-start">
                    <div className="heading_s1">
                      {/* <span class="sub_heading font_style1">Point of Sale</span> */}
                      <h2 className=" fw-bold text-capitalize">Hospitality</h2>
                    </div>
                  </div>
                  <div className="subpara mt-3">
                    <p>
                      Time to take your hospitality business to the next level
                      with advanced digital means.{" "}
                    </p>
                    <ul>
                      <li className="fw-bold">
                        <Link
                          href="/restaurant-pos-system"
                          className="fw-bold text-dark"
                        >
                          Point-of-Sale (POS) for Restaurants{" "}
                        </Link>
                      </li>
                    </ul>

                    <p>
                      When it comes to tasks that are too tedious, too
                      time-consuming and too mathematical, entrusting all to a
                      human being can only yield so much. These are the times when
                      computer software shine. And, for a hospitality business,
                      that computer software is POS and Online Ordering System.
                    </p>
                    <p>
                      A POS and Online Ordering System allows a hospitality
                      business to:{" "}
                    </p>
                    <ul>
                      <li className="fw-bold">
                        <a>Speed Up Sales </a>
                      </li>
                      <li className="fw-bold">
                        <a>
                          Manage Multiple Stores (offline and online) stores,{" "}
                        </a>
                      </li>
                      <li className="fw-bold">
                        <a>Keep Track &amp; Prevent Stock Spoilage</a>
                      </li>
                      <li className="fw-bold">
                        <a>Analyze &amp; Improve Business Profits</a>
                      </li>
                    </ul>
                    {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center pt-50">
                <div className="col-md-6">
                  <div className="row text-start">
                    <div className="heading_s1">
                      {/* <span class="sub_heading font_style1">Point of Sale</span> */}
                      <h2 className="fw-bold text-capitalize">Retail</h2>
                    </div>
                  </div>
                  <div className="subpara mt-3">
                    <p>
                      If you’re looking to grow your retail business, the first
                      thing you should consider is a robust Point Of Sale system
                      that enables you to sell faster and manage your inventory
                      more efficiently. The next step would be to set up an online
                      ordering system and start selling to your online audience
                      directly from your website.
                    </p>
                    <p>
                      Our Point of Sale and Online Ordering System are perfect for
                      the following retail businesses:
                    </p>
                    <ul>
                      <li className="text-dark">
                        <Link
                          href={"/bakery-pos-system"}
                          className="fw-bold text-dark"
                        >
                          Bakeries
                        </Link>
                      </li>
                      <li className="text-dark">
                        <Link
                          href="/flower-pos-system"
                          className="fw-bold text-dark"
                        >
                          Flower Shop{" "}
                        </Link>
                      </li>
                      <li className="text-dark">
                        <Link
                          href={"/grocery-pos-system"}
                          className="fw-bold text-dark"
                        >
                          Grocery Stores{" "}
                        </Link>
                      </li>
                      <li className="text-dark">
                        <Link
                          href={"/beverages-pos-system"}
                          className="fw-bold text-dark"
                        >
                          Beverages
                        </Link>
                      </li>
                    </ul>
                    {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="serv_left">
                    <img
                      src="/assets/dist/image/newImages/retail.webp"
                      className="img-fluid"
                      alt="Revolutionize your business with the best Point-of-Sale (POS) system"
                      title="Revolutionize your business with the best Point-of-Sale (POS) system"
                    />
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

export default Business;
