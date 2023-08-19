import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";


function Features() {
  const dispatch = useDispatch();
  return (
    <>
      <section className="pb-5 pt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-12">
              <div className="row text-center">
                <div className="heading_s1">
                  {/* <span class="sub_heading font_style1">Point of Sale</span> */}
                  <h3 className="fw-bold text-capitalize">
                    Explore POSApt's Awesome Features
                  </h3>
                </div>
              </div>
              <div className="subpara mt-3 productcard-plus">
                <div className="row">
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Centralized Ordering"
                        title="Centralized Ordering"
                      />{" "}
                      Centralized Ordering
                    </h4>
                    <p>
                      All your orders from third-party delivery companies
                      such as Uber, Doordash, Menulog, etc are congregated
                      into one central dashboard to make life easier.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Real-Time Sales Report"
                        title="Real-Time Sales Report"
                      />{" "}
                      Real-Time Sales Report
                    </h4>
                    <p>
                      Thanks to cloud-based data management, all your
                      transactions and sales are recorded in
                      real-time so you get the real idea of everything
                      that’s going on in your business.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Integration with Leading Accounting Software"
                        title="Integration with Leading Accounting Software"
                      />{" "}
                      Integration with Leading Accounting Software
                    </h4>
                    <p>
                      Our Point of Sale system comes integrated with the world’s most
                      popular account software including Xero, MYOB, and
                      Quickbooks.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Secure Payment Options"
                        title="Secure Payment Options"
                      />
                      Secure Payment Options
                    </h4>
                    <p>
                      Alongside EFTPOS integration, our POS systems also
                      allow your customers to pay via PayPal or Google Pay,
                      allowing more payment options without any security
                      risk.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Easy Data Migration"
                        title="Easy Data Migration"
                      />
                      Easy Data Migration
                    </h4>
                    <p>
                      No matter which POS you’re currently using, all data can be easily migrated to POSApt. Our technical support team will make sure that your data isn’t lost.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Simplify the Employee Onboarding Process"
                        title="Simplify the Employee Onboarding Process"
                      />
                      Employee Management
                    </h4>
                    <p>
                      Manage new and existing employees, schedule auto
                      salary payments and make selling easy by introducing
                      new hires to the POS software for bakery stores.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Affordability"
                        title="Affordability"
                      />{" "}
                      Affordability
                    </h4>
                    <p>
                      What makes POSApt an easy choice is its affordability
                      and the fact that “We don’t take any commission on
                      your success”.{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="Gift Cards, Vouchers &amp; Loyalty Points"
                        title="Gift Cards, Vouchers &amp; Loyalty Points"
                      />
                      Gift Cards, Vouchers &amp; Loyalty Points
                    </h4>
                    <p>
                      Keep your customers interested, happy and tied to you
                      with the help of POSApt-enabled gift cards, vouchers
                      and loyalty points.
                    </p>
                  </div>

                  <div className="col-md-4">
                    <h4 className="text-theme">
                      <img
                        src="/assets/dist/image/newImages/icon1.webp"
                        className="img-fluid"
                        alt="30 Days Free Trial"
                        title="30 Days Free Trial"
                      />
                      30 Days Free Trial
                    </h4>
                    <p>
                      Get a 30-day free trial on your first signup and explore the best of POSApt. No risk. Cancel anytime.
                    </p>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* end pos */}

    </>

  );
}

export default Features;
