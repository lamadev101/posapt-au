

interface firstSectionList {
  title: string;
  desc: string;
}

interface firstSectionProps {
  firstTitle: string;
  lastTitle: string;
  imgUrl: string;
  pageDesc: string[];
  content: firstSectionList[];
}


const FirstSection: React.FC<firstSectionProps> = ({ firstTitle, pageDesc, lastTitle, imgUrl, content }) => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row bg-light p-2 p-md-5">
          <div className="col-md-6">
            <div className="new-list ">
              <div className="heading_s1 hs2  text-start">
                <h2 className="fw-bold text-capitalize mb-3">{firstTitle}<br /> <span className="text-theme">{lastTitle}</span></h2>
                {pageDesc.map((para, index)=>(
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 m-auto ">
            {/* <div className="orderimg primg mt-3 mt-lg-0"> */}
            <img
              src={`/assets/dist/image/posSys/retail/${imgUrl}`}
              alt={firstTitle+" "+lastTitle}
              title={firstTitle+" "+lastTitle}
              className="img-fluid h-100 w-100"
            />
            {/* </div> */}

          </div>
          <hr />
          <div className="col-md-12">
            <div className="subpara mt-3 productcard">
              <div className="row">
                {content.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <h3 className="text-theme">
                      {/* <img src="/assets/dist/image/icon1.png" className="img-fluid" alt={item.title} title={item.title} />  */}
                      {item.title}
                    </h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection