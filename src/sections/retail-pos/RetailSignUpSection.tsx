import { useDispatch } from "react-redux";

const RetailSignUpSection = () => {
  const dispatch = useDispatch();

  return (
    <section
      className="section bg_background p-100  mb-5"
      style={{ backgroundImage: "url(/assets/dist/image/posSys/retail/hero/ecommerce.webp)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div className="heading_s1 heading_light">
              <span className="sub_heading font_style1">
                Start Getting More Orders
              </span>
              <h2 className="text-white">
                Just Sign Up &amp; Take Your Business Online.
              </h2>
            </div>
            <p className="text-white">
              POSApt’s Online Ordering System turns your website visitors into returning clients. It's easy-to-use, powerful and customer-centric to get you the best results from your online business.
            </p>
            <div className="subpara">
              <a
                onClick={() => {
                  dispatch({
                    type: "OPEN_TRIAL_MODAL",
                  });
                }}
                className="btn btn-white fw-bold text-dark" href="#">
                Start My Free Trial!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetailSignUpSection