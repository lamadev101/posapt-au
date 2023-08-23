

interface PosHeroSectionProps {
  title: string;
  desc: string;
  imgUrl: string;
}

const PosHeroSection:React.FC<PosHeroSectionProps> = ({title, desc, imgUrl}) => {
  return (
    <section className=" pt-1 pt-md-5 pb-50 bg-home">
      <div className="container  text-center">
        <div className="row ">
          <div className="col-md-6 ">
            <div className="heading_s1">
              <h1 className="text-capitalize fs-61 text-white">
                {/* POSapt
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
                <a className="btn btn-white btn-red fs-6" href="#">
                  Sign Up for Free Trial !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PosHeroSection