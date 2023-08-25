interface faqList{
  question: string;
  answer: string;
}


const FAQ:React.FC<faqList []> = (faqData) => {
  console.log("faqData",faqData)

  
  return (
    <section className=" py-5  faqsec mt-5 bg-light ">
      <div className="container">
        <div className="row py-2 py-md-4 py-lg-5">
          <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
            <div className="card cardbg py-4 border-0 shadow h-100">
              <div className="card-body">
                <h2 className="pb-3 mb-1 mb-lg-2 fs-37">
                  We are Happy to Talk with You. Book For Free Consultation Now!
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
                      <a>Analyze &amp; Improve Business Profits</a>
                    </li>
                  </ul>
                  {/* <a class="btn btn-white btn-red fw-bold" href="#">Request a Demo</a> */}
                </div>
                <div className="text-center newhome_btn newbtn1">
                  <a href=""></a>
                  <a className="btn btn-white btn-red fs-6" href="#">
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 offset-xl-1">
            <div className="heading_s1 mb-3">
              <h2 className=" fw-bold text-capitalize text-dark text-center">
                Frequently Asked Questions?
              </h2>
              {/* <p class="fs-2 text-center">Customers can order from anywhrere anytime</p> */}
            </div>
            <div className="accordion bg-white p-2" id="faq">
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q1-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q1"
                    aria-expanded="false"
                    aria-controls="q1"
                  >
                    Is any of my personal information stored in the App?
                  </button>
                </h2>
                <div
                  id="q1"
                  className="accordion-collapse collapse"
                  aria-labelledby="q1-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                      Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
                      cursus adipiscing gravida et consequat lobortis arcu velit.
                      Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
                      molestie lorem scelerisque pellentesque. Nisi, enim, arcu
                      purus gravida adipiscing euismod montes, duis egestas.
                      Vehicula eu etiam quam tristique tincidunt suspendisse ut
                      consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in eu
                      tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
                      suspendisse lacus aliquam auctor vulputate. Quis egestas
                      aliquam nunc purus lacus, elit leo elit facilisi. Dignissim
                      amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q2-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q2"
                    aria-expanded="false"
                    aria-controls="q2"
                  >
                    What formats can I download my transaction history in?
                  </button>
                </h2>
                <div
                  id="q2"
                  className="accordion-collapse collapse"
                  aria-labelledby="q2-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                      Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
                      cursus adipiscing gravida et consequat lobortis arcu velit.
                      Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
                      molestie lorem scelerisque pellentesque. Nisi, enim, arcu
                      purus gravida adipiscing euismod montes, duis egestas.
                      Vehicula eu etiam quam tristique tincidunt suspendisse ut
                      consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in eu
                      tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
                      suspendisse lacus aliquam auctor vulputate. Quis egestas
                      aliquam nunc purus lacus, elit leo elit facilisi. Dignissim
                      amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q3-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q3"
                    aria-expanded="false"
                    aria-controls="q3"
                  >
                    Can I schedule future transfers?
                  </button>
                </h2>
                <div
                  id="q3"
                  className="accordion-collapse collapse"
                  aria-labelledby="q3-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                      Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
                      cursus adipiscing gravida et consequat lobortis arcu velit.
                      Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
                      molestie lorem scelerisque pellentesque. Nisi, enim, arcu
                      purus gravida adipiscing euismod montes, duis egestas.
                      Vehicula eu etiam quam tristique tincidunt suspendisse ut
                      consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in eu
                      tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
                      suspendisse lacus aliquam auctor vulputate. Quis egestas
                      aliquam nunc purus lacus, elit leo elit facilisi. Dignissim
                      amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q4-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q4"
                    aria-expanded="false"
                    aria-controls="q4"
                  >
                    When can I use Banking App services?
                  </button>
                </h2>
                <div
                  id="q4"
                  className="accordion-collapse collapse"
                  aria-labelledby="q4-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                      Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
                      cursus adipiscing gravida et consequat lobortis arcu velit.
                      Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
                      molestie lorem scelerisque pellentesque. Nisi, enim, arcu
                      purus gravida adipiscing euismod montes, duis egestas.
                      Vehicula eu etiam quam tristique tincidunt suspendisse ut
                      consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in eu
                      tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
                      suspendisse lacus aliquam auctor vulputate. Quis egestas
                      aliquam nunc purus lacus, elit leo elit facilisi. Dignissim
                      amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                <h2 className="accordion-header" id="q5-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q5"
                    aria-expanded="false"
                    aria-controls="q5"
                  >
                    Can I create my own password that is easy for me to remember?
                  </button>
                </h2>
                <div
                  id="q5"
                  className="accordion-collapse collapse"
                  aria-labelledby="q5-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                      Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
                      cursus adipiscing gravida et consequat lobortis arcu velit.
                      Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
                      molestie lorem scelerisque pellentesque. Nisi, enim, arcu
                      purus gravida adipiscing euismod montes, duis egestas.
                      Vehicula eu etiam quam tristique tincidunt suspendisse ut
                      consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in eu
                      tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
                      suspendisse lacus aliquam auctor vulputate. Quis egestas
                      aliquam nunc purus lacus, elit leo elit facilisi. Dignissim
                      amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 rounded-3 shadow-sm">
                <h2 className="accordion-header" id="q6-heading">
                  <button
                    className="accordion-button shadow-none rounded-3 collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q6"
                    aria-expanded="false"
                    aria-controls="q6"
                  >
                    What happens if I forget or lose my password?
                  </button>
                </h2>
                <div
                  id="q6"
                  className="accordion-collapse collapse"
                  aria-labelledby="q6-heading"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body fs-sm pt-0">
                    <p>
                      Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                      Viverra aliquam arcu, viverra et, cursus. Aliquet pretium
                      cursus adipiscing gravida et consequat lobortis arcu velit.
                      Nibh pharetra fermentum duis accumsan lectus non. Massa cursus
                      molestie lorem scelerisque pellentesque. Nisi, enim, arcu
                      purus gravida adipiscing euismod montes, duis egestas.
                      Vehicula eu etiam quam tristique tincidunt suspendisse ut
                      consequat.
                    </p>
                    <p className="mb-0">
                      Ornare senectus fusce dignissim ut. Integer consequat in eu
                      tortor, faucibus et lacinia posuere. Turpis sit viverra lorem
                      suspendisse lacus aliquam auctor vulputate. Quis egestas
                      aliquam nunc purus lacus, elit leo elit facilisi. Dignissim
                      amet adipiscing massa integer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-hover bg-theme-green mt-2 py-2 rounded-3 border-0">
              <div className="card-body  d-flex d-mobile-block align-items-center justify-content-center text-center justify-content-md-between">
                <div>
                  <p className="fs-4 mb-0 text-white">Connect with us</p>
                </div>
                <div className="social-links ">
                  {" "}
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook" />
                  </a>{" "}
                  <a href="#" className="instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" className="linkedin">
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