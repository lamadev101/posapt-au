import Link from "next/link";


interface faqList {
  question: string;
  answer: string;
}
interface faqDataProps {
  faqData: faqList[];
}


const FAQ: React.FC<faqDataProps> = ({ faqData }) => {

  return (
    <section className=" py-5  faqsec mt-5 bg-light ">
      <div className="container">
        <div className="row py-2 py-md-4 py-lg-5">
          {/* left section */}
          <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
            <div className="card cardbg py-4 border-0 shadow h-100">
              <div className="card-body">
                <h2 className="pb-3 mb-1 mb-lg-2 fs-47">
                  Talk with You. Book For Free Consultation Now!
                </h2>
                <div className="subpara mt-3">
                  <ul>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                    <li className="fw-bold">
                      <a>Manage Multiple Stores</a>
                    </li>
                    <li className="fw-bold">
                      <a>Speed Up Sales </a>
                    </li>
                    <li className="fw-bold">
                      <a>Manage Multiple Stores</a>
                    </li>
                    <li className="fw-bold">
                      <a>Keep Track &amp; Prevent Stock Spoilage</a>
                    </li>
                    <li className="fw-bold">
                      <a>Analyse &amp; Improve Business Profits</a>
                    </li>
                  </ul>
                </div>
                <div className="text-center newhome_btn newbtn1">
                  <Link className="btn btn-white btn-red fs-6" href="/enquiry">
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="col-md-7 offset-xl-1">
            <div className="heading_s1 mb-3">
              <h2 className=" fw-bold text-capitalize text-dark text-center">
                Frequently Asked Questions?
              </h2>
            </div>
            <div className="accordion bg-white p-2" id="faq">

              {faqData?.map((item, index) => (
                <div key={index} className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                  <h2 className="accordion-header" id={`q${index}-heading`}>
                    <button
                      className="accordion-button shadow-none rounded-3 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#q${index}`}
                      aria-expanded="false"
                      aria-controls={`q${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`q${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`q${index}-heading`}
                    data-bs-parent="#faq"
                  >
                    <div className="accordion-body fs-sm pt-0">
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="card card-hover bg-theme-green mt-2 py-2 rounded-3 border-0">
              <div className="card-body  d-flex d-mobile-block align-items-center justify-content-center text-center justify-content-md-between">
                <div>
                  <p className="fs-4 mb-0 text-white">Connect with us</p>
                </div>
                <div className="social-links ">
                  <a
                    href="https://www.facebook.com/posapt"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/posapt22"
                    className="instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a target="_blank"
                    href="https://www.linkedin.com/company/posapt-au"
                    className="linkedin"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ