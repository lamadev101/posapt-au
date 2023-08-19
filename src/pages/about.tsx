/** @format */

import React from "react";
import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import { useDispatch } from "react-redux";
import Head from 'next/head';

const About = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>About Us | POSApt</title>
        <meta
          name="title"
          content="About Us | POSApt"
        />
        <meta
          name="description"
          content="Get to know more about point of sale (POS) systems with POSApt."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://posapt.au/about" />
      </Head>
      <Layout>
        <>
          <ScrollToTop />
          <div
            className="breadcrumbs-custom box-transform-wrap context-dark bg-image gradient-overlay"
          >
            <div className="container">
              <h1 className="breadcrumbs-custom-title text-white">About Us</h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>
          <section className="pt-50 pb-50">
            <div className="container text-center">
              <div className="row text-center">
                <div className="heading_s1">
                  <h3 className="sub_heading font_style1">Who We Are</h3>
                  <h2 className=" fw-bold text-capitalize">
                    A little backstory of how we started.
                  </h2>
                </div>
              </div>
              <div className="aboutpara">
                <p>
                  POSApt is driven by one single purpose: to enable hospitality
                  &amp; retail businesses to reach their full potential through
                  innovative yet simpler cloud-based software solutions
                </p>
                <p>
                  Our story began in 2021 when COVID-19’s after-effects were still
                  visible and everyone was maintaining social distance. There was
                  no way customers would feel safe engaging with hospitality and
                  retail businesses in their conventional methods. So, hospitality
                  and retail businesses needed to change something, and that
                  something was, going digital!
                </p>
                <p>
                  Not just selling online but making use of technology and
                  software to make offline experiences simpler, safer and better.
                  The value proposition of Point of Sale systems started to grow
                  and in the midst of it all was our founder, frustrated as a
                  restaurant owner who couldn’t find a dependable POS system. His
                  search for a reliable, easy-to-use and affordable POS system in
                  the Australian marketplace was futile.
                </p>
                <p>
                  So, he started POSApt, a software company dedicated to
                  Australian Hospitality and Retail businesses that are in search
                  of the best Point of Sale and Online Ordering Systems.
                </p>
                <p>
                  We started operating in 2021 but our POS and Online Ordering
                  Systems have been able to help many Australian businesses
                  streamline their operation, maximise profits, and take their
                  businesses to the next level.
                </p>
              </div>
            </div>
          </section>
          <div
            className="section bg_background p-100 mt-5"
            style={{ backgroundImage: "url(assets/dist/image/newImages/bg2.webp)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="heading_s1 heading_light">
                    <span className="sub_heading font_style1">
                      Grow your restaurant business
                    </span>
                    <h2 className="text-white">
                      Add your restaurant now! It's FREE!
                    </h2>
                  </div>
                  <p className="text-white">
                    POSApt’s Online Ordering System turns your website visitors
                    into regular food clients. It's easy-to-use, powerful and
                    customer-centric to get you the best results from your online
                    restaurant.
                  </p>
                  <a
                    className="btn btn-white fw-bold text-dark"
                    onClick={() => {
                      dispatch({
                        type: "OPEN_ENQUIRY_MODAL",
                      });
                    }}
                  >
                    Get Started Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  );
};

export default About;
