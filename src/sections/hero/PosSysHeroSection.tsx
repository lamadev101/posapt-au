import { useDispatch } from "react-redux";


interface PosSysHeroSectionProps {
  tagline?: string;
  title: string;
  desc: string;
  imgUrl: string;
}


const PosSysHeroSection: React.FC<PosSysHeroSectionProps> = ({ tagline, title, desc, imgUrl }) => {
  const dispatch = useDispatch()

  return (
    <section className="onlineordertop bg-overlay  d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <div className="heading_s1">
              <span className="sub_heading font_style1 text-white text-center">
                <small>{tagline}</small>
              </span>
              <h1 className=" fw-bold text-capitalize  text-center color-yellow">{title}</h1>
            </div>
            <div className="subpara mt-3">

              <p className="text-center  text-white">{desc}</p>

              <div className="text-center">
                <a className="btn btn-white btn-red fw-bold"
                  onClick={() => {
                    dispatch({
                      type: "OPEN_TRIAL_MODAL",
                    });
                  }}>Sign Up for a 30-Day Free Trial</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="order_top_img mt-5 mt-md-0">
              <img 
                src={imgUrl} 
                alt={title}
                title={title}
                className="welcome-animation d-block ml-auto" 
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PosSysHeroSection