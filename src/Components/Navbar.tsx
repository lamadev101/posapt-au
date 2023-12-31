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
              {" "}
              Enquire Now{" "}
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
            <div
              className="offcanvas offcanvas-start p-4 p-lg-0"
              id="navbar-default"
            >
              <div className="d-flex justify-content-between align-items-center mb-2 d-block d-lg-none">
                <Link href={"/"} className="navbar-brand">
                  <img src="/assets/dist/image/poslogo.png" alt="POSApt Logo" title="POSApt Logo" />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <ul className="navbar-nav ms-md-auto mb-2 mb-md-0">

                <li className="nav-item">
                  <Link className="nav-link active" href={"/online-ordering-system"}>
                    OOS
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" href={"/products"}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href={"/business"}>
                    Business
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" href={"/about"}>
                    About
                  </Link>
                </li> */}
                <li className="nav-item">
                <Link className="nav-link" href={"/partner-program"}>
                  Partners
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" href={"/pricing"}>
                    Pricing
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link className="nav-link" href="/help">
                    Help
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
