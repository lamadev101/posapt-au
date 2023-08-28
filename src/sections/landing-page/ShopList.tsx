interface shop {
  name: string;
  imgUrl: string;
  link: string;
}

interface shopListProps {
  title: string;
  subTitle: string;
  shopList: shop[];
}


const ShopList: React.FC<shopListProps> = ({ title, subTitle, shopList }) => {
  return (
    <section className="bg-light pt-50  pb-50 mt-5 ">
      <div className="container">
        <div className="row text-center">
          <div className="heading_s1">
            <h2 className=" fw-bold text-capitalize text-dark">{title}</h2>
            <p className="fs-2 text-center">{subTitle}</p>
          </div>
        </div>
        <div className="recentstores">
          <div className="row align-items-center justify-content-center">
            {
              shopList.map((item, index) => (
                <div key={index} className="col-lg-4  col-sm-4">
                  <a href=""></a>
                  <div className=" p-15  text-center">
                    <a href="">
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                      />
                    </a>
                    <div className="text-center newhome_btn store_btn">
                      <a href=""></a>
                      <a className="btn btn-white btn-red fs-6" href="#">
                        {item.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopList