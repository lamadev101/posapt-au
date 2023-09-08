interface features {
  title: string;
  desc: string;
}

interface featuresListProps {
  title: string;
  featureList: features[];
}


const FeatureList: React.FC<featuresListProps> = ({ title, featureList }) => {
  return (
    <section className=" pb-50 whypos bg-light">
      <div className="container">
        <div className="row text-center">
          <div className="heading_s1 mt-4">
            <h2 
              className=" fw-bold text-capitalize text-dark"
              dangerouslySetInnerHTML={{__html: title}}
            />
          </div>
        </div>
        <div className="row g-4 flex-nowrap flex-md-wrap  mobile_flex">
          {
            featureList.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow border-0 rounded pt-4 pb-2 ">
                  <div className="card-body">
                    <div className="feature-info-icon d-flex mb-3 align-items-center">
                      <i className="far fa-check-square" />
                      <h3 className="fw-bold text-theme ms-2 mb-0 fs-20">
                        {item.title}
                      </h3>
                    </div>
                    <div className="feature-info-content">
                      <p className="mb-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {/* mobile view */}
      </div>
    </section>
  )
}

export default FeatureList