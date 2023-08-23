interface listItem {
  title: string;
  desc: string;
}

interface whyChooseDataProps {
  title: string;
  content: listItem[];
}


const WhyChoose: React.FC<whyChooseDataProps> = ({ title, content }) => {
  return (
    <section className=" pb-50 pt-50">
      <div className="container">
        <div className="row text-center">
          <div className="heading_s1">
            <h2 className=" fw-bold text-capitalize text-dark">
              {title}
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {
            content.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow border-0 rounded p-4">
                  <div className="card-body">
                    <div className="feature-info-icon d-flex mb-3">
                      <i className="far fa-check-square" />
                      <h4 className="fw-bold text-theme ms-4 mb-0 ">
                        {item.title}
                      </h4>
                    </div>
                    <div className="feature-info-content">
                      <p className="mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>

  )
}

export default WhyChoose