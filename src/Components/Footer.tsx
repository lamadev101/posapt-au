/** @format */

import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Useful Links</p>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/products"}>Products</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/business"}>Business</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/partner-program"}>Partners</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/pricing"}>Pricing</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/about"}>About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/terms-of-service"}>Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/privacy-policy"}>Privacy policy</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/help"}>Help</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/blogs"}>
                    Blogs
                  </Link>
                </li>

              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Our Services</p>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/online-ordering-system"}>Online Ordering System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/retail-pos-system"}>Retail POS System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/hospitality-pos-system"}>Hospitality POS System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/pos-system-for-cafe"}>Cafe POS System</Link>
                </li>

                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/coffee-shop-pos-system"}>Coffee POS System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/tablet-pos-system"}>Tablet POS System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/pos-system-for-bar"}>Bar POS System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/enterprise-pos-system"}>Enterprise POS System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/custom-pos-system"}>Custom POS System</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/pizza-pos"}>Pizza Pos</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <Link href={"/quick-service-restaurant-pos"}>QSR Pos</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
            <p className="fw-bold text-uppercase fs-6 text-white">Locations</p>
              <ul className="">
                <li>
                  <Link href="/pos-system-perth">Perth</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
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
                 {/* <li>
                  <Link href="/retail-pos-system/jewellery-store">Jewellery Store</Link>
                </li>
                <li>
                  <Link href="/retail-pos-system/gift-and-toy-shop">Gift and Toy Shop</Link>
                </li>
                <li>
                  <Link href="/retail-pos-system/clothing-store">Clothing Store</Link>
                </li>
                <li>
                  <Link href="/retail-pos-system/bike-and-bicycle-shop">Bike and Bicycle Shop</Link>
                </li>
                <li>
                  <Link href="/retail-pos-system/salon-and-spa">Salon and Spa</Link>
                </li> */}
              </ul>
            </div>

            
            <div className="col-lg-3 col-md-6 footer-info footer-links">
              <p className="fw-bold text-uppercase fs-6 text-white">Our Commitment To You</p>
              <p>
                We believe a robust and reliable POS shouldn’t cost you half
                your monthly revenue. We’re here to offer a tailormade POS
                system that’s affordable and encourages your success.
              </p>
              

              <p className="fw-bold text-uppercase fs-6 text-white mt-4">Contact Us</p>
              <p>
                Building 4, Suite 30/195 Wellington Rd, Clayton, VIC 3168 <br />
                <br /> <strong>Phone: </strong>{" "}
                <a style={{ color: "white" }} href="tel:03 8802 4468">
                  +03 8802 4468
                </a>
                <br /> <strong>Email: </strong>{" "}
                <a style={{ color: "white" }} href="mailto:info@posapt.au">
                  info@posapt.au
                </a>
              </p>
              <div className="social-links mt-3">
                {" "}
                <a
                  href="https://twitter.com/posapt_au"
                  target={"_blank"}
                  className="twitter"
                >
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a
                  href="https://www.facebook.com/posapt"
                  target={"_blank"}
                  className="facebook"
                >
                  <i className="fab fa-facebook" />
                </a>{" "}
                <a
                  target={"_blank"}
                  href="https://www.instagram.com/posapt22"
                  className="instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCEbnQMG4QHXB5rk2TzROApA"
                  className="linkedin"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  target={"_blank"}
                  href="https://www.linkedin.com/company/posapt-au"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
          <a href="https://volgai.com.au" target={"_blank"}>
            VolgAI
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
