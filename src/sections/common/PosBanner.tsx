
const PosBanner = () => {
  return (
    <section className="bg-light pt-50 pb-50">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <img
              className="img-fluid img-grayscale w-100 mt-lg-n5"
              src="/assets/dist/image/15.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5 pt-6">
            <div className="dotted-overlay p-5">
              <div className="z-index-1 position-relative">
                <div className="heading_s1">
                  <h2 className=" fw-bold text-capitalize text-theme">
                    Don't Worry, <br /> We Set Up Everything For You
                  </h2>
                  <p className="fs-5">
                    POSapt is the user friendly POS system integrated Online
                    Ordering website. Business can manage both in shop and online
                    sales within single system. This synchronization simplifies
                    inventory management, order processing, and ensures consistent
                    product information across all channels. Manage business smarter
                    and save time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="bg-theme2 p-5 shadow border-radius mt-4 mt-lg-n6 position-relative">
              <h3 className="fw-bold text-white">
                Software To Streamline Your Business
              </h3>
              <p className="text-white">
                A game-changer for businesses looking to streamline their operations
                and improve customer experience.
              </p>
              <div className="subpara mt-3">
                <ul className="text-white">
                  <li className="text-white"> Free Consultation</li>
                  <li className="text-white"> Custom Website and</li>
                  <li className="text-white"> Maintenance Included</li>
                  <li className="text-white"> products Upload Included</li>
                  <li className="text-white"> User Training Included</li>
                  <li className="text-white"> Friendly Customer Services</li>
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

export default PosBanner