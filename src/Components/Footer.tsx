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
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/terms-of-service">Terms of service</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/help">Help</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Our Services</p>
              <ul>
                <li>
                  {" "}
                  <Link href="/online-ordering-system">Online Ordering System</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/ecommerce">E-Commerce System</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/retail-pos-system">Retail POS System</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/hospitality-pos-system">Hospitality POS System</Link>
                </li>
                <li>
                  {" "}
                  <Link href="">Enterprise POS System</Link>
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
            </div>
            <div className="col-lg-3 col-md-6 footer-info footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Follow us</p>
              <div className="social-links mt-3">
                {" "}
                <a href="https://twitter.com/posapt_au" target="_blank" className="twitter">
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
                  className="youtube"
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
                <Link href="/pos-system-perth">Perth</Link>
              </li>
              <li>
                <Link href="/pos-system-sydney">Sydney</Link>
              </li>
              <li>
                <Link href="/pos-system-melbourne">Melbourne</Link>
              </li>
              <li>
                <Link href="/pos-system-adelaide">Adelaide</Link>
              </li>
              <li>
                <Link href="/pos-system-brisbane">Brisbane</Link>
              </li>
              <li>
                <Link href="/pos-system-canberra">Canberra</Link>
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
