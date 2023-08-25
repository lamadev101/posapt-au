import Link from "next/link"

const StoreList = () => {

  const storeList = [
    {
      title: "Jewellery",
      link: "jewellery-store"
    },
    {
      title: "Clothing",
      link: "clothing-store"
    },
    {
      title: "Gift and Toy",
      link: "gift-and-toy-shop"
    },
    {
      title: "Bike",
      link: "bike-and-bicycle-shop"
    },
    {
      title: "Salon and Spa",
      link: "salon-and-spa"
    },
    // {
    //   title: "",
    //   link: ""
    // },
    // {
    //   title: "",
    //   link: ""
    // },
  ]
  return (
    <>
      {/* store */}
      <section className="pt-50">
        <div className="container">
          <div className="p-5 bg-light rounded-3">
            <div className="row text-center">
              <div className="heading_s1">
                <h2 className=" fw-bold text-capitalize text-dark">
                  Our Retail Store
                </h2>
              </div>
            </div>
            <div className="swiper" id="retail">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="row">
                    {storeList.map((item, index) => (
                      <Link 
                        href={`/retail-pos-system/${item.link}`} 
                        key={index}
                        className="retail_block col-lg-3 col-md-6 col-6"
                      >
                        <div className="retail_block-inner">
                          <div className="retail_block-upper">
                            <div className="retail_block-icon-box">
                              <span className="retail_block-icon fas fa-store" />
                            </div>
                            <h4 className="retail_block-heading">
                              <a href="">{item.title}</a>
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StoreList