
const MailAndCall = () => {
  return (
    <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
      <h2 className="pb-3 mb-1 mb-lg-3">
        Any questions? <br className="d-none d-md-inline" />
        Check out the FAQs
      </h2>
      <p className="fs-lg pb-3 mb-2 mb-lg-3">
        Still have unanswered questions and need to get in touch?
      </p>
      <div className="row row-cols-1 row-cols-sm-2 g-3 g-sm-4">
        <div className="col">
          <div className="card card-hover">
            <div className="card-body pb-3">
              <i className="fas fa-phone-volume d-block fs-2 text-danger mb-2 py-1" />
              <p className="fs-sm mb-2">Give us a call</p>
              <a
                href="tel:03 8802 4468"
                className="btn btn-link stretched-link px-0 text-danger"
              >
                Call Now
                <i className="fas fa-arrow-right fs-xl ms-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card card-hover">
            <div className="card-body pb-3">
              <i className="far fa-comment-dots d-block fs-2 text-success mb-2 py-1" />
              <p className="fs-sm mb-2">Any questions?</p>
              <a
                href="mailto:info@posapt.au"
                className="btn btn-link text-success stretched-link px-0"
              >
                Chat with us
                <i className="fas fa-arrow-right fs-xl ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailAndCall