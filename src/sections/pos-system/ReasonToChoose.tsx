
interface ReasonToChooseContentItem {
  imgUrl: string;
  title: string;
  desc: string;
  list: string[];
}

interface ReasonToChooseDataProps {
  firstTitle: string;
  lastTitle: string;
  content: ReasonToChooseContentItem[];
}

const ReasonToChoose: React.FC<ReasonToChooseDataProps> = ({ firstTitle, lastTitle, content }) => {
  return (
    <section className="pt-50">
      <div className="container">
        <div className="whychoose">
          <div className="row text-center mb-3">
            <div className="heading_s1">
              <h2 className=" fw-bold text-capitalize text-dark">
                {firstTitle}<br />
                {lastTitle}
              </h2>
            </div>
          </div>

          {content.map((item, index) => (
            <div
              key={index}
              className={`align-items-center row ${index % 2 !== 0 && "flex-row-reverse"}`}
            >
                <div className="col-md-6">
                  <div className="chooseimg">
                    <img
                      src={`/assets/dist/image/possystem/hospitality/${item.imgUrl}`}
                      className="img-fluid"
                      alt={item.title}
                      title={item.title}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose_para ser_inner">
                    <h4 className="mt-4 mb-3">{index + 1}. {item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="subpara mt-3">
                      <ul>
                        {item.list.map((listItem, listIndex) => (
                          <li key={listIndex} className="fw-bold">
                            <a>{listItem}</a>
                          </li>
                        ))}
                      </ul>
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

export default ReasonToChoose