/** @format */

import React, { FC } from "react";
import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Transition } from "react-transition-group";
import Head from 'next/head';

interface ProductsProps { }

const Products: FC<ProductsProps> = ({ }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Our Products | POSApt</title>
        <meta
          name="title"
          content="Our Products | POSApt"
        />
        <meta
          name="description"
          content="Get all the products of POSApt including point-of-sales (POS) and online ordering system at the best price across Australia."
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
          content="Our Products | POSApt"
        />
        <meta
          property="og:description"
          content="Get all the products of POSApt including point-of-sales (POS) and online ordering system at the best price across Australia."
        />
        <meta property="og:url" content="https://posapt.au/products" />
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
          content="Our Products | POSApt"
        />
        <meta
          name="twitter:description"
          content="Get all the products of POSApt including point-of-sales (POS) and online ordering system at the best price across Australia."
        />
        <meta
          name="twitter:image"
          content="https://posapt.au/assets/dist/image/Homepage/The-Best-POS-System-to-Revolutionize-your-Business.webp"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="POSApt" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a minute" />
        <link rel="canonical" href="https://posapt.au/products" />
      </Head>
      <Transition in={true} timeout={300} classNames="page" unmountOnExit>
        <Layout>
          <>
            <ScrollToTop />
            <div
              className="breadcrumbs-custom box-transform-wrap context-dark bg-image gradient-overlay"
            >
              <div className="container">
                <h1 className="fw-bold text-capitalize text-white">
                  {/* breadcrumbs-custom-title text-white */}
                  Our Products
                </h1>
                <div className="breadcrumbs-custom-decor" />
              </div>
            </div>
         
        <section className="mt-5">
            <div className="container">
                <div className="row bg-light p-2 p-md-5">
                    <div className="col-md-6">
                        <div className="new-list ">
                            <div className="heading_s1 hs2  text-start">
                            <Link href={"/"}>
                               <h2 className=" fw-bold text-capitalize mb-3">
                                 1. POSApt 
                                  </h2>
                              </Link>
                                <p className="">
                                    POSApt is an advanced POS system to enable hospitality and retail businesses not just to sell their products and services but also to make offline selling experiences simpler, safer and better. Whether your customers are at your storefront or online,
                                    POSApt allows you to sell and keep track of everything in one place, your tablet.
                                </p>
                                <a className="btn btn-white btn-red fw-bold py-3 px-2" onClick={() => {
                            dispatch({
                              type: "OPEN_ENQUIRY_MODAL",
                            });
                          }}>Request a Demo</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 m-auto ">
                        <div className="orderimg primg mt-3 mt-lg-0">
                            <img src="/assets/dist/image/newImages/a6.webp" className="img-fluid h-100 w-100" 
                            alt="advanced POS system"
                            title="advanced POS system"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section className="pt-4 mb-5">
            <div className="container">
                <div className="row bg-light p-2 p-md-5">
                    <div className="col-md-6 m-auto order-2 order-md-1 ">
                        <div className="orderimg primg mt-3 mt-lg-0">
                            <img src="/assets/dist/image/newImages/order1.webp" className="img-fluid h-100 w-100" alt="Online Ordering System" title="Online Ordering System"/>
                        </div>

                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="new-list ">
                            <div className="heading_s1 hs2  text-start">
                               
                                <Link href={"/online-ordering-system"}>  
                                <h2 className="fw-bold text-capitalize mb-3">
                                2. Online Ordering System 
                                </h2>
                                </Link>
                                  
                                <p className="pt-4">
                                    Online Ordering System turns your website into a money-making resource. POSApt Online Ordering System is an online ordering system that allows your customers to purchase your products and services through your website.
                                </p>
                                <a className="btn btn-white btn-red fw-bold py-3 px-2"
                                onClick={() => {
                                  dispatch({
                                    type: "OPEN_ENQUIRY_MODAL",
                                  });
                                }}>Request a Demo</a>
                            </div>

                        </div>
                        <h5 className="bg-warning mt-4 p-2">Don’t have a website?
                            <span>
                              No Problem. We’ll build you a Custom Website for absolutely FREE.
                            </span>
                        </h5>
                    </div>
                </div>

            </div>
        </section>
          </>
        </Layout>
      </Transition>
    </>
  );
};

export default Products;
