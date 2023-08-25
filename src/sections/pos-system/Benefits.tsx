
interface Benefit {
  imgUrl: string;
  title: string;
  desc: string;
}

interface BenefitsDataProps {
  title: string;
  imgUrl: string;
  content: Benefit[];
}

const Benefits: React.FC<BenefitsDataProps> = ({ title, imgUrl, content }) => {
  return (
    <section className="pb-50 pt-50 ">
      <div className="container">
        <div className="row">
          <div className="col-md-7  ">
            <div className="ctabanner p-2 p-md-5 rounded-3">
              <div className="heading_s1">
                <h2 className=" fw-bold text-capitalize text-white mb-3 mb-md-5">
                  {title}
                </h2>
              </div>

              {content.map((item, index) => (
                <div key={index}>
                  <div className="why_img d-flex">
                    {/* <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="d-none d-md-flex"
                    /> */}
                    <div className="media-body">
                      <h6 className="mb-2">
                        <i className="fas fa-check-square me-3"></i>
                        {item.title}
                      </h6>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                  {index !== content.length - 1 && <hr className="bg-white" />}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={imgUrl}
              alt={title}
              title={title}
              className="h-100"
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Benefits