interface features {
  title: string;
  desc: string;
  imgSrc: string;
}

interface businessFeatureProps {
  title: string;
  desc: string;
  featureList: features[];
}

const BusinessFeatureList: React.FC<businessFeatureProps> = ({ title, desc, featureList }) => {
  return (
    <section className=" pt-50 pb-50">
      <div className="container">
        <div className="row text-center">
          <div className="heading_s1">
            <h2 className=" fw-bold text-capitalize text-dark">{title}</h2>
            <p className="fs-5 text-center">{desc}</p>
          </div>
        </div>
        <div className="row g-4 flex-nowrap flex-md-wrap  mobile_flex">

          {featureList.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card card-oos border-0 bg-light shadow rounded-3 ">
                <div className="card-body ">
                  <div className=" position-relative ">
                    <div className="oos_img1">
                      <img
                        src={`assets/dist/image/${item.imgSrc}.webp`}
                        alt={item.title}
                        title={item.title}
                        className="mb-3 img-fluid "
                      />
                    </div>
                    <h3 className="fw-bold text-theme fs-20  ">{item.title}</h3>
                    <p className="fs-5">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessFeatureList