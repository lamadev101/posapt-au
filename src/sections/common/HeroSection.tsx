

interface HeroSectionProps {
  title: string;
  desc: string;
  imgUrl: string;
  twoBtn?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, desc, imgUrl, twoBtn }) => {
  return (
    <section className=" pt-1 pt-md-5 pb-50 bg-home">
      <div className="container  text-center">
        <div className="row ">
          <div className="col-md-6 ">
            <div className="heading_s1">
              <h1 className="text-capitalize fs-61 text-white">
                {/* apt
                <br /> Hospitality POS System{" "} */}
                {title}
              </h1>
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="">
              <img
                src={imgUrl}
                className="img-fluid"
                alt={title}
                title={title}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="subpara ">
              <p className="text-center fs-47 text-white">
                <span style={{ fontWeight: 400 }}>{desc}</span>
              </p>
              <div className="text-center newhome_btn">
                {
                  twoBtn ?
                    <>
                      <a className="btn btn-white btn-red fs-6 mb-2" href="#">
                        Sign Up for Free
                      </a>
                      <a className="btn btn-white btn-red fs-6 mb-2 ms-2" href="#">
                        Watch Video
                      </a>
                    </> :
                    <a className="btn btn-white btn-red fs-6" href="#">
                      Sign Up for Free Trial !
                    </a>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection