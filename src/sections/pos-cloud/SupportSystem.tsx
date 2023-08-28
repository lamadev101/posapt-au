
const SupportSystem = () => {
  return (
    <section className=" newstore pt-5 pb-5">
      <div className="container">
        <div className="heading_s1">
          <h2 className=" fw-bold text-capitalize text-dark text-center mb-4">
            We Support Small <br /> Businesses Anywhere Anytime
          </h2>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow rounded">
              <img
                src="/assets/dist/image/Best POS System Software.webp"
                className="card-img-top "
                alt="Hardware To Support Your Sales"
                title="Hardware To Support Your Sales"
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-theme fw-bold">
                  Hardware Set up Support
                </h4>
                <p className="card-text">
                  All hardware you need to start POS are available to purchase from
                  POSapt. We provide hardware setup assistance for the new customer
                  package. Our hardware package includes:
                </p>
                <ul className="row serlist">
                  <li className="fw-bold col-md-5">
                    <a>
                      <small>Tablet</small>
                    </a>
                  </li>
                  <li className="fw-bold col-md-7">
                    <a>
                      <small>Tablet Stand</small>
                    </a>
                  </li>
                  <li className="fw-bold col-md-5">
                    <a>
                      <small>Cash Drawer</small>
                    </a>
                  </li>
                  <li className="fw-bold  col-md-7">
                    <a>
                      <small>Kitchen Printer</small>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 rounded shadow">
              <img
                src="assets/dist/image/merchant.png"
                className="card-img-top "
                alt="Hands-On Merchant Management Service"
                title=" Hands-On Merchant Management Service"
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-theme fw-bold">
                  Merchant Management
                </h4>
                <p className="card-text fs-5">
                  POSapt provides you with a hands-on Merchant Management Service
                  that extends from the installation phase to day-to-day
                  maintenance. This Merchant service allows you to accept multiple
                  payment methods including credit cards from your customers via
                  EFTPOS machines. We're offering Merchant facilities at a very
                  competitive price.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 rounded shadow">
              <img
                src="/assets/dist/image/loan.png"
                className="card-img-top "
                alt="Short Term Cash Flow Boost"
                title="Short Term Cash Flow Boost"
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-theme fw-bold">
                  Cash Flow Management
                </h4>
                <p className="card-text">
                  We want to power your business’s success. You can get an instant
                  loan from our POS system with just 1 click to mitigate your
                  business’s short-term cash flow issues. We’ve partnered with one
                  of the pioneering lenders in the business to fetch every support
                  that your business needs to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSystem