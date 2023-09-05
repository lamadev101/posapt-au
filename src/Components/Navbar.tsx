/** @format */

import Link from "next/link";
import { FC } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import EnquiryForm from "./EnquiryForm";

export interface hideTrialModal {
  type: "CLOSE_TRIAL_MODAL";
}

const Navbar: FC = () => {
  const dispatch = useDispatch();
  const { isEnquiryModalOpen, isTrialModalOpen } = useSelector(
    (state: RootState) => state.StateManager
  );

  return (
    <>
      {" "}
      <header className="sticky-top">
        <Modal
          show={isTrialModalOpen}
          onHide={() => {
            dispatch<hideTrialModal>({
              type: "CLOSE_TRIAL_MODAL",
            });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "20px" }}>
              {" "}
              Please Select Below to Request Free Trial!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-12">
                <Link href={"/register?type=pos"}>
                  <div className="border-gray p-15 mb-4 bg-white text-center trialimg">
                    <img
                      src="/assets/dist/image/pos.webp"
                      className="img-fluid"
                      alt="POSApt Logo"
                      title="POSApt Logo"
                    />
                    <div className="alt-font text-extra-dark-gray fw-bold d-block">
                      Point of Sale
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-12">
                <Link href={"/register?type=online"}>
                  <div className="border-gray p-15 mb-4 bg-white text-center trialimg">
                    <img
                      src="/assets/dist/image/order.webp"
                      className="img-fluid"
                      alt="Online Ordering System"
                      title="Online Ordering System"
                    />
                    <div className="alt-font text-extra-dark-gray fw-bold d-block">
                      Online Ordering System
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={isEnquiryModalOpen}
          onHide={() => {
            dispatch({
              type: "CLOSE_ENQUIRY_MODAL",
            });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "20px" }}>
              Enquire Now
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EnquiryForm />
          </Modal.Body>
        </Modal>
        <nav className="navbar navbar-expand-md navbar-default  bg-light">
          <div className="container">
            <Link href={"/"} className="navbar-brand">
              <img src="/assets/dist/image/poslogo.png" alt="POSAPT LOGO" title="POSAPT LOGO" />
            </Link>
            <div className="navbar-toolbar d-none d-md-flex align-items-center order-lg-3">
              {/* <a href="https://deliverypickup.online/login" target="_blank" class="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin "><i class="fas fa-user me-2"></i>Login</a> */}
              <a
                href="https://app.posapt.au"
                target={"_blank"}
                className="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin"
              >
                <i className="fas fa-user me-2" />
                Login
              </a>
              <a
                className="btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin"
                onClick={() => {
                  dispatch({
                    type: "OPEN_TRIAL_MODAL",
                  });
                }}
              >
                Free Trial
              </a>
              <Link
                href={"/enquiry"}
                className="btn btn-raised  shadow my-button w-xs  me-2 homecart homelogin"
              >
                Enquire Now
              </Link>
            </div>
            <div className="btn-group mobilebtn d-md-none fixed-bottom bg-white p-2 mobfoot">
              <div className="navbar-toolbar d-flex align-items-center order-lg-3 justify-content-center m-auto">
                <a
                  href="https://app.posapt.au"
                  target={"_blank"}
                  className="btn btn-raised shadow my-button w-xs  me-2 homecart homelogin"
                >
                  <i className="fas fa-user me-2" />
                  Login
                </a>
                <a
                  className="btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin"
                  onClick={() => {
                    dispatch({
                      type: "OPEN_TRIAL_MODAL",
                    });
                  }}
                >
                  Free Trial
                </a>
                <Link
                  href={"/enquiry"}
                  className="btn btn-raised  shadow my-button w-xs  me-2 homecart homelogin"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navbar-default"
            >
              <span className="fas fa-bars" />
            </button>
            <div className="offcanvas offcanvas-start p-4 p-lg-0" id="navbar-default">
              <div className="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
                <a href="./index.html">
                  <img src="assets/dist/image/poslogo.png" alt="" width="100px" />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <ul className="navbar-nav ms-md-auto mb-2 mb-md-0">
                <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Business type
                  </a>
                  <div className=" dropdown-menu pb-0 animated fadeIn">
                    <div className="row p-2 p-lg-3">
                      <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">
                          <a href="retailpos.html" className="text-theme">
                            Retail
                          </a>
                        </h6>
                        <a className="dropdown-item" href="fashionstore.html">
                          Fashion
                        </a>
                        <a className="dropdown-item" href="">
                          Gift Shop
                        </a>
                        <a className="dropdown-item" href="">
                          bike
                        </a>
                        <a className="dropdown-item" href="">
                          shoe
                        </a>
                        <a className="dropdown-item" href="">
                          flower
                        </a>
                        <a className="dropdown-item" href="">
                          grocery
                        </a>
                        <a className="dropdown-item" href="">
                          jewellry
                        </a>
                      </div>
                      <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">
                          <a href="hospitalitypos.html" className="text-theme">
                            Hospitality
                          </a>
                        </h6>
                        <a className="dropdown-item" href="restaurantpage.html">
                          restaurant
                        </a>
                        <a className="dropdown-item" href="bakerydesign.html">
                          Bakery
                        </a>
                        <a className="dropdown-item" href="">
                          cafe
                        </a>
                        <a className="dropdown-item" href="">
                          coffee shop
                        </a>
                        <a className="dropdown-item" href="">
                          bar
                        </a>
                        <a className="dropdown-item" href="">
                          pizza shop
                        </a>
                        <a className="dropdown-item" href="">
                          QSR
                        </a>
                      </div>
                      <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">By Service</h6>
                        <a className="dropdown-item" href="">
                          Custom POS
                        </a>
                        <a className="dropdown-item" href="">
                          {" "}
                          Tablet POS
                        </a>
                        <a className="dropdown-item" href="">
                          {" "}
                          QR Ordering
                        </a>
                        <a className="dropdown-item" href="">
                          {" "}
                          Table Booking
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown w-100 navdrop">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Products
                  </a>
                  <div className=" dropdown-menu pb-0 animated fadeIn m-lg-0">
                    <ul>
                      <li>
                        <a className="dropdown-item" href="ecommercepos.html">
                          E-commerce
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="cloudpos.html">
                          Point of Sale
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="dropdown-item" href="oos.html">
                          Online Ordering
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="cloudpos.html">Cloud POS</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="oos.html">OOS</a>
                  </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="becomepartner.html">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pricing.html">
                    Pricing
                  </a>
                </li>
                {/* <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact</a>
                  </li> */}
              </ul>
              {/* <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
              </form> */}
            </div>

          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
