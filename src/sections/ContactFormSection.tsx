import ContactForm from "@/Components/ContactForm"

interface ContactFormSectionProps {
  businessTitle: string;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({ businessTitle }) => {

  return (
    <section className="serv_bg ptb-120 position-relative  pt-50">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7 col-lg-5 col-md-12 order-2 order-md-1 ">
            <div className=" mt-5 mt-lg-0 mt-xl-0">
              <div className="section-intro main">
                <h2 className="title text-theme ">
                  Customer Satisfaction is Our Utmost Priority
                </h2>
              </div>
              <hr />
              <div className=" testimonial-tab-content text-white-80">
                <div className="">
                  <blockquote className="">
                    We're here to elevate today's {businessTitle} to tomorrow's standards. Are you ready to explore tech and software solutions that will transform how you do business? It doesn't have to be intimidating to try POSApt; just fill up this form and explore what one change can do for your business.
                  </blockquote>
                </div>
              </div>

              <div className="row ab1 bg-light py-3 mt-4 d-none d-md-flex">
                <h3 className="pb-md-2 pb-lg-4 text-center col-md-6 col-6 border-end text-theme">
                  50+ <span className="d-block text-dark">Satisfied Clients</span>
                </h3>
                <h3 className="pb-md-2 pb-lg-4 text-center col-md-6 col-6 text-theme">
                  100%{" "}
                  <span className="d-block text-dark">Customer Satisfaction</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row ab1 bg-light py-3 mt-4  d-md-none">
            <h3 className="pb-md-2 pb-lg-4 text-center col-md-6 col-6 border-end text-theme">
              50+ <span className="d-block text-dark">Satisfied Clients</span>
            </h3>
            <h3 className="pb-md-2 pb-lg-4 text-center col-md-6 col-6 text-theme">
              100%{" "}
              <span className="d-block text-dark">Customer Satisfaction</span>
            </h3>
          </div>
          <div className="col-xl-5 col-lg-7 col-md-12 newform order-1 order-md-2  ">
            <div className=" p-3 p-md-5 bg-white shadow rounded-custom ">
              <p className="fw-medium  d-md-block fs-5 fw-bold text-theme">
                Schedule your Free Demo{" "}
                <span className="d-block">
                  <small className="text-muted fw-normal">
                    We'll reach out to you within 24 hours.
                  </small>
                </span>
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection