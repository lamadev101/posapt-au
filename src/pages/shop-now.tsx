/** @format */

import { Alert, Checkbox } from "antd";
import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import ScrollToTop from "../Helpers/ScrollToTop";
import Head from 'next/head';

const ShopNow = () => {
  const [hardwarePricing, setHardwarePricing] = useState([
    {
      name: "Samsung Galaxy TAB S7 FE 12.4 64GB",
      image: "assets/dist/image/tablet.webp",
      qty: 1,
      wifiPrice: 799,
      "5GPrice": 990,
      is5GChecked: true,
      isWifiChecked: true,

      showCheckbox: true,
    },
    {
      name: "Epson TM-M30II with Wifi Dongle",
      image: "assets/dist/image/epson.webp",
      qty: 1,
      wifiPrice: 790,
      "5GPrice": 790,
      is5GChecked: true,
      isWifiChecked: true,
      showCheckbox: true,
    },
    {
      name: "Cygnett OpticShield (Screen Protector)",
      image: "assets/dist/image/screen.webp",
      qty: 1,
      wifiPrice: 50,
      "5GPrice": 50,
      is5GChecked: true,
      isWifiChecked: true,
      showCheckbox: true,
    },
    {
      name: "VPOS Universal Tablet Mount",
      image: "assets/dist/image/stand.webp",
      qty: 1,
      wifiPrice: 160,
      "5GPrice": 160,
      is5GChecked: true,
      isWifiChecked: true,
      showCheckbox: true,
    },
    {
      name: "Cash Register",
      image: "assets/dist/image/cashregister.webp",
      qty: 1,
      wifiPrice: 150,
      "5GPrice": 150,
      is5GChecked: true,
      isWifiChecked: true,
      showCheckbox: true,
    },
    {
      name: "set up",
      image: "assets/dist/image/setup.webp",
      qty: 1,
      wifiPrice: 360,
      "5GPrice": 360,
      is5GChecked: true,
      isWifiChecked: true,
      showCheckbox: false,
    },
    {
      name: "Tablet Management",
      image: "assets/dist/image/tmt.webp",
      qty: 1,
      wifiPrice: 260,
      "5GPrice": 260,
      is5GChecked: true,
      isWifiChecked: true,
      showCheckbox: false,
    },
  ]);
  const [totalCostWifi, setTotalCostWifi] = useState<number>();
  const [totalCost5G, setTotalCost5G] = useState<number>();
  const [totalWithInterestWifi, setTotalWithInterestWifi] = useState<number>();
  const [totalWithInterest5G, setTotalWithInterest5G] = useState<number>();

  useEffect(() => {
    let sum = 0;
    hardwarePricing.forEach((item) => {
      if (item.isWifiChecked) {
        sum = sum + item.wifiPrice;
      } else {
        sum = sum + 0;
      }
    });
    sum = sum + 0.1 * sum;
    let stringSum = parseInt(sum.toString()).toString().slice(0, -2) + "99";
    setTotalCostWifi(Number(stringSum));

    let sumWithInterestWifi = Number(stringSum) + 0.11 * Number(stringSum);
    let stringInterestWithWifi =
      parseInt(sumWithInterestWifi.toString()).toString().slice(0, -2) + "99";
    setTotalWithInterestWifi(Number(stringInterestWithWifi));

    let sum5G = 0;
    hardwarePricing.forEach((item) => {
      if (item.is5GChecked) {
        sum5G = sum5G + item["5GPrice"];
      }
    });
    sum5G = sum5G + 0.1 * sum5G;
    let stringSum5G = parseInt(sum5G.toString()).toString().slice(0, -2) + "99";
    setTotalCost5G(Number(stringSum5G));

    let sumWithInterest5G = Number(stringSum5G) + 0.11 * Number(stringSum5G);
    let stringInterestWith5G =
      parseInt(sumWithInterest5G.toString()).toString().slice(0, -2) + "99";
    setTotalWithInterest5G(Number(stringInterestWith5G));
  }, [hardwarePricing]);

  return (
    <>
      <Head>
        <title>Shop Point of Sale (POS) Hardware | POSApt</title>
        <meta
          name="title"
          content="Shop Point of Sale (POS) Hardware | POSApt"
        />
        <meta
          name="description"
          content="Select the POS hardware that you want to purchase and check how much will it cost. Give us a call for enquiry!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://posapt.au/shop-now" />
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
                Hardware Pricing
              </h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>
          {/* start pos */}
          <section className="position-relative pt-50 pb-50">
            <div className="shopnow">
              <div className="container">
                <Alert
                  className="mt-2"
                  style={{ fontStyle: "italic" }}
                  type="warning"
                  message="As you check and uncheck the boxes, the total price of your selection will be automatically updated and displayed at the bottom of the table. This way, you can see the total cost of your selection before you make a purchase decision."
                  banner
                />
                <div className="table-responsive">
                  <table className="table table-cart table-mobile table-striped border-0 align-middle text-center">
                    <thead>
                      <tr className="">
                        <th>Description</th>
                        <th>Qty.</th>
                        <th>Wifi</th>
                        <th>5G</th>
                        {/* <th>Total</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {hardwarePricing.map((item, index) => (
                        <tr key={index}>
                          <td className="product-col">
                            <div className="product">
                              <div className="t-img">
                                <a href="">
                                  <img src={item.image} alt={item.name} title={item.name}/>
                                </a>
                              </div>
                              <h3 className="product-title">
                                <a href="#">{item.name}</a>
                              </h3>
                              {/* End .product-title */}
                            </div>
                            {/* End .product */}
                          </td>
                          <td className="price-col">1</td>
                          <td className="price-col">
                            {item.showCheckbox && (
                              <Checkbox
                                onChange={(e) => {
                                  setHardwarePricing((prev) =>
                                    prev.map((hardware) => {
                                      if (hardware.name == item.name) {
                                        return {
                                          ...hardware,
                                          isWifiChecked: e.target.checked,
                                        };
                                      } else {
                                        return {
                                          ...hardware,
                                        };
                                      }
                                    })
                                  );
                                }}
                                className="pricing-checkbox"
                                checked={item.isWifiChecked}
                              />
                            )}
                          </td>
                          <td className="price-col">
                            {item.showCheckbox && (
                              <Checkbox
                                onChange={(e) => {
                                  setHardwarePricing((prev) =>
                                    prev.map((hardware) => {
                                      if (hardware.name == item.name) {
                                        return {
                                          ...hardware,
                                          is5GChecked: e.target.checked,
                                        };
                                      } else {
                                        return {
                                          ...hardware,
                                        };
                                      }
                                    })
                                  );
                                }}
                                className="pricing-checkbox"
                                checked={item.is5GChecked}
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="product-col">
                          <div className="product">
                            <div className="t-img">
                              <a href=""></a>
                            </div>
                            <p className="product-title">
                              <a href="#">{"Total Inc GST"}</a>
                            </p>
                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className="price-col"></td>
                        <td className="product-title">
                          <h4>$ {totalCostWifi}</h4>
                        </td>

                        <td className="price-col">
                          <h4>$ {totalCost5G}</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <div className="product">
                            <div className="t-img">
                              <a href=""></a>
                            </div>
                            <p className="product-title">
                              <a href="#">
                                {"Monthly Lease option ( 12 monthly payments)"}
                              </a>
                            </p>
                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className="price-col"></td>
                        <td className="product-title">
                          <h4>$ {Math.round(totalWithInterestWifi! / 12)}</h4>
                        </td>

                        <td className="price-col">
                          <h4>$ {Math.round(totalWithInterest5G! / 12)}</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* end pos */}
          <hr />
          {/* start pos */}
          <section className="position-relative">
            <div className="shopnow">
              <div className="container">
                <div className="table-responsive">
                  <table className="table table-cart table-mobile table-striped border-0 align-middle text-center">
                    <thead>
                      <tr className="">
                        <th>Description</th>
                        <th>Qty.</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <div className="product">
                            <div className="t-img">
                              <a href="">
                                <img src="assets/dist/image/tablet.webp" alt="Shop Point of Sale (POS) Hardware" title="Shop Point of Sale (POS) Hardware " />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="#">
                                Samsung Galaxy Tab A8 Android Tablet 10.5” 64 GB{" "}
                              </a>
                            </h3>
                          </div>
                        </td>
                        <td className="price-col">1</td>
                        <td
                          className="total-col align-middle bg-light text-center fw-bold"
                          rowSpan={2}
                        >
                          $499 <br />
                          Inc. GST.
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <div className="product">
                            <div className="t-img">
                              <a href="">
                                <img src="assets/dist/image/rugged.webp" alt="Shop Point of Sale (POS) Hardware" title="Shop Point of Sale (POS) Hardware"  />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="#">Rugged Case</a>
                            </h3>
                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className="price-col">1</td>
                      </tr>
                      <tr className="border-top">
                        <td className="product-col">
                          <div className="product">
                            <div className="t-img">
                              <a href="">
                                <img src="assets/dist/image/epson.webp" alt="Shop Point of Sale (POS) Hardware" title="Shop Point of Sale (POS) Hardware " />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="#">Epson TM-M30II with Wifi Dongle</a>
                            </h3>
                            {/* End .product-title */}
                          </div>
                          {/* End .product */}
                        </td>
                        <td className="price-col">1</td>
                        <td className="total-col align-middle bg-light text-center fw-bold">
                          $790 <br />
                          Inc. GST.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* end pos */}
        </>
      </Layout>
    </>
  );
};

export default ShopNow;
