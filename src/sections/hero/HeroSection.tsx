import { useDispatch } from "react-redux";


interface HeroSectionProps {
  tagline?: string;
  title: string;
  desc: string;
  imgUrl?: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({ tagline, title, desc, imgUrl }) => {
  const dispatch = useDispatch();

  return (
    <section className=" pt-1 pt-md-5 pb-4">
      <div className="container  text-center">
        <div className="row align-items-center justify-content-center gy-5">
          <div className="col-md-5">
            <div className="row">
              <div className="heading_s1">
                <span className="sub_heading font_style1">
                  <small>{tagline}</small>
                </span>
                <h1 className=" fw-bold text-capitalize">
                  {title}
                </h1>
              </div>
            </div>
            <div className="subpara mt-3">
              <p className="text-center">
                <span style={{ fontWeight: 400 }}>{desc}</span>
              </p>
              <div className="text-center">
                <a
                  onClick={() => {
                    dispatch({
                      type: "OPEN_TRIAL_MODAL",
                    });
                  }}
                  className="btn btn-white btn-red fw-bold"
                  href="#"
                >
                  Sign Up for a 30-Day Free Trial
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="serv_left">
              <img
                src={imgUrl}
                title={title}
                alt={title}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection