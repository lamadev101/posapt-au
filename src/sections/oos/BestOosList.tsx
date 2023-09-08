import Link from "next/link";

interface oosList {
  title: string;
  desc: string;
  imgSrc: string;
  link: string;
}

interface oosListProps {
  title: string;
  desc: string;
  oosList: oosList[];
}

const BestOosList: React.FC<oosListProps> = ({ title, desc, oosList }) => {
  return (
    <section
      className="ourservices topservices bg-overlay-black-90  pt-50 pb-50 position-relative "
      style={{
        background: "url(assets/dist/image/image3.png)",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        zIndex: 1
      }}
    >
      <div className="container">
        <div className="services_card">
          <div className="row text-center">
            <div className="heading_s1">
              <h2 className=" fw-bold text-capitalize text-white">
                {title}
              </h2>
              <p className="text-white fs-5 w-80">
                {desc}
              </p>
            </div>
          </div>
          <div className="row flex-nowrap flex-md-wrap  mobile_flex">
            {
              oosList.map((item, index) => (
                <div key={index} className="col-md-3 pb-3">
                    <Link  href={`/online-ordering-system/${item.link}`}>
                    <div className="card card-oos h-100  bg-light shadow rounded-3 bg-transparent border ">
                      <div className="card-body ">
                        <div className=" position-relative ">
                          <div className="oos_img1">
                            <img
                              src={`assets/dist/image/${item.imgSrc}.webp`}
                              alt={item.title}
                              title={item.title}
                              className="mb-3 img-fluid w-100 "
                            />
                          </div>
                          <h4 className="fw-bold text-white">{item.title}</h4>
                          <p className="fs-5 text-white">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                </Link>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestOosList