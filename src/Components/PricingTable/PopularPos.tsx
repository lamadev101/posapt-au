import ViewDetailPricingBtn from '../Buttons/ViewDetailPricingBtn'

const PopularPos = () => {
  return (
    <div className="col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <p className="card-title text-capitalize text-center text-theme">
                  Popular POS System <br />(1 Device)
                </p>
                <h6 className="card-price text-center">
                  $185<span className="period">/month/Inc.GST</span>
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check" />
                    </span>
                    Cloud-based POS
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check" />
                    </span>
                    Customer Booking & Live Reporting
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check" />
                    </span>
                    Short-term cash flow assistance
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check" />
                    </span>
                    Loyalty, Giftcards & Email Marketing
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check" />
                    </span>
                    Online ordering system
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times" />
                    </span>
                    Free Retail E-commerce Website
                  </li>

                </ul>
                <ViewDetailPricingBtn/>
              </div>
            </div>
          </div>
  )
}

export default PopularPos