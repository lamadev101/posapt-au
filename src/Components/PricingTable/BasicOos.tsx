import ViewDetailPricingBtn from '../Buttons/ViewDetailPricingBtn'

const BasicOos = () => {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0 h-100">
        <div className="card-body">
          <p className="card-title text-capitalize text-center text-theme">
            Basic Online Ordering System
          </p>
          <h6 className="card-price text-center">
            $59<span className="period">/month/Inc.GST</span>
          </h6>
          <hr />
          <ul className="fa-ul">
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
              Accounting Software & Payment Integration
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
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times" />
              </span>
              QR code ordering
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times" />
              </span>
              Cloud-based POS
            </li>
          </ul>
          <ViewDetailPricingBtn />
        </div>
      </div>
    </div>
  )
}

export default BasicOos