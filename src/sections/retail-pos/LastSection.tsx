import Link from "next/link";

interface lastSectionList {
  title: string;
  desc: string;
}

interface lastSectionProps {
  firstTitle: string;
  lastTitle: string;
  imgUrl: string;
  content: lastSectionList[];
}

const LastSection: React.FC<lastSectionProps> = ({ firstTitle, lastTitle, imgUrl, content }) => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row bg-light p-2 p-md-5">
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
          <div className="col-md-6">
            <div className="new-list ">
              <div className="heading_s1 hs2  text-start">
                <h2 className=" fw-bold text-capitalize mb-3">{firstTitle}<br /> <span className="text-theme">{lastTitle}</span></h2>

                {content.map((item, index) => (
                  <div className="ordercard mt-2" key={index}>
                    <h3 className="fw-bold text-capitalize text-theme">{item.title}</h3>
                    <p className="pt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
                {/* <!-- <a className="btn btn-white btn-red fw-bold py-3 px-2" href="#">Request a Demo</a> --> */}
                <p className="bg-warning mt-4 p-2 fw-bold">Don’t have a website?
                  <span>
                    No Problem. We'll build you a Custom Website for absolutely FREE. <Link href="/enquiry" className="text-decoration-underline"> Get A Website Now!</Link>
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default LastSection