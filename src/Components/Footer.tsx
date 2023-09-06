/** @format */

import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer id="footer">
      <div className="footer-top border-bottom-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Useful Links</p>
              <ul>
                <li>
                  {" "}
                  <a href="about.html">About us</a>
                </li>
                <li>
                  {" "}
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  {" "}
                  <a href="termsofservice.html">Terms of service</a>
                </li>
                <li>
                  {" "}
                  <a href="pricing.html">Privacy policy</a>
                </li>
                <li>
                  {" "}
                  <a href="help.html">Help</a>
                </li>
                <li>
                  {" "}
                  <a href="blogs.html">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Our Services</p>
              <ul>
                <li>
                  {" "}
                  <a href="oos.html">Online Ordering System</a>
                </li>
                <li>
                  {" "}
                  <a href="ecommercepos.html">E-Commerce System</a>
                </li>
                <li>
                  {" "}
                  <a href="retailpos.html">Retail POS System</a>
                </li>
                <li>
                  {" "}
                  <a href="hospitalitypos.html">Hospitality POS System</a>
                </li>
                <li>
                  {" "}
                  <a href="">Enterprise POS System</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-info footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Contact Us</p>
              <p>
                Building 4, Suite 30/195 Wellington Rd, Clayton, VIC 3168 <br />
                <br /> <strong>Phone: </strong>{" "}
                <a href="tel:03 8802 4468" style={{ color: "white" }}>
                  +03 8802 4468
                </a>
                <br /> <strong>Email: </strong>{" "}
                <a href="mailto:info@posapt.au" style={{ color: "white" }}>
                  info@posapt.au
                </a>
              </p>
              <div className="social-links mt-3">
                {" "}
                <a
                  href="https://twitter.com/posapt_au"
                  target="_blank"
                  className="twitter"
                >
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a
                  href="https://www.facebook.com/posapt"
                  target="_blank"
                  className="facebook"
                >
                  <i className="fab fa-facebook" />
                </a>{" "}
                <a
                  target="_blank"
                  href="https://www.instagram.com/posapt22"
                  className="instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCEbnQMG4QHXB5rk2TzROApA"
                  className="linkedin"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/posapt-au"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="nav-active-theme text-center ">
            <ul className="d-flex flex-wrap gap-4 text-white mb-0 align-items-center justify-content-center">
              <li>
                <a href="">Perth</a>
              </li>
              <li>
                <a href="/pos-system-sydney">Sydney</a>
              </li>
              <li>
                <a href="">Melbourne</a>
              </li>
              <li>
                <a href="">Adelaide</a>
              </li>
              <li>
                <a href="">Brisbane</a>
              </li>
              <li>
                <a href="">Canberra</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
        <div className="copyright">
          {" "}
          © Copyright{" "}
          <strong>
            <span>VolgAI</span>
          </strong>
          . All Rights Reserved{" "}
        </div>
        <div className="credits">
          {" "}
          Designed by{" "}
          <a href="https://volgai.com.au" target="_blank">
            VolgAI
          </a>{" "}
        </div>
      </div>
    </footer>

  );
};

export default Footer;
