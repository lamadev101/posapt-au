
interface ReasonToChooseContentItem {
  imgUrl: string;
  title: string;
  desc: string;
  list: string[];
}

interface ReasonToChooseDataProps {
  title: string;
  content: ReasonToChooseContentItem[];
}

const ReasonToChoose:React.FC<ReasonToChooseDataProps> = ({title, content}) => {
  return (
    <section className="pt-50">
      <div className="container">
        <div className="whychoose">
          <div className="row text-center mb-3">
            <div className="heading_s1">
              <h2 className=" fw-bold text-capitalize text-dark">
                5 Reasons to Choose <br />
                POSApt Hospitality POS Software
              </h2>
            </div>
          </div>
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="chooseimg">
                <img src="assets/dist/image/d6.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="choose_para ser_inner">
                <h4 className="mt-4 mb-3">1. Simple &amp; Intuitive </h4>
                <p>
                  POSApt offers an easy-to-use interface that requires minimal
                  training but doesn’t lack anything in the features department. The
                  interface is designed to simplify transactions and minimize
                  errors, allowing staff to focus on providing excellent customer
                  service.
                </p>
                <div className="subpara mt-3">
                  <ul>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                    <li className="fw-bold">
                      <a>Manage Multiple Stores</a>
                    </li>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                  </ul>
                  {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="choose_para ser_inner">
                <h4 className="mt-4 mb-3">2. Tailored To Hospitality’s Needs </h4>
                <p>
                  POSApt is custom-built with Hospitality businesses in mind. You
                  can easily customize menus, and item options, update prices, take
                  or manage orders, and even print orders directly to a dedicated
                  kitchen printer. And the best part; everything happens in
                  real-time.
                </p>
                <div className="subpara mt-3">
                  <ul>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                    <li className="fw-bold">
                      <a>Manage Multiple Stores</a>
                    </li>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                  </ul>
                  {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-last">
              <div className="chooseimg">
                <img src="assets/dist/image/d2.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="chooseimg">
                <img src="assets/dist/image/d6.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="choose_para ser_inner">
                <h4 className="mt-4 mb-3">
                  3. Integrated with Hospitality-Specific Systems
                </h4>
                <p>
                  POSApt is designed to integrate seamlessly with essential systems
                  such as Xero and MYOB accounting software, inventory management,
                  online ordering system, and customer relationship management (CRM)
                  tools.
                </p>
                <div className="subpara mt-3">
                  <ul>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                    <li className="fw-bold">
                      <a>Manage Multiple Stores</a>
                    </li>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                  </ul>
                  {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="choose_para ser_inner">
                <h4 className="mt-4 mb-3">4. Real-Time Reporting</h4>
                <p>
                  POSApt provides real-time reporting on sales, inventory, and other
                  key metrics, allowing you to make informed business decisions on
                  the go. This feature is particularly useful for hospitality
                  businesses that need to make quick decisions based on real-time
                  data.
                </p>
                <div className="subpara mt-3">
                  <ul>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                    <li className="fw-bold">
                      <a>Manage Multiple Stores</a>
                    </li>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                  </ul>
                  {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-last">
              <div className="chooseimg">
                <img src="assets/dist/image/d4.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="chooseimg">
                <img src="assets/dist/image/d5.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="choose_para ser_inner">
                <h4 className="mt-4 mb-3">5. Franchise Business Support</h4>
                <p>
                  No matter the number of outlets your hospitality business has,
                  POSApt has the power to support and manage all franchised
                  businesses without the need for a separate software application
                  for each of your outlets.
                </p>
                <div className="subpara mt-3">
                  <ul>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                    <li className="fw-bold">
                      <a>Manage Multiple Stores</a>
                    </li>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                  </ul>
                  {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReasonToChoose