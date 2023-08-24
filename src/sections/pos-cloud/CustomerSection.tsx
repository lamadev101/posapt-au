interface customerSectionProps {
  title: string;
  desc: string;
  reverse?: boolean;
  list: string[];
}

const CustomerSection:React.FC<customerSectionProps> = ({title, desc, reverse, list}) => {
  return (
    <section className="pt-50 pb-50 customer_section">
      <div className="container">
        <div className={`row align-items-center ${reverse && "flex-row-reverse"}`}>
          <div className="col-md-6 ">
            <div className="customer_img">
              <img
                src="assets/dist/image/image3.png"
                className="img-fluid rounded-3 w-100"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="heading_s1">
              <h2 className=" fw-bold text-capitalize text-dark">
                {title}
              </h2>
              <p className="fs-5">
                {desc}
              </p>
              <div className="subpara mt-3">
                <ul>
                  {list.map((item, index)=> (
                    <li key={index} className="fw-bold">
                    <a>{item}</a>
                  </li>
                  ))}
                  
                </ul>
                {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CustomerSection