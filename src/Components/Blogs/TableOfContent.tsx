import Link from 'next/link'

const TableOfContent = ({tags}:any) => {
  return (
    <div className="table_of_content mt-5 mb-3 bg-light p-4 shadow">
      <div className="intro d-none d-md-block">
        <p className="text-start newsletter fs-6 fw-bold">Table of Content</p>
        <hr />
        <ul className="serlist" style={{marginLeft:"0px"}}>
          {tags.map((tag:any, index:number)=>(
            <li key={index}>
              <a href={`#blogtitle${index}`} >{tag.h2}</a>
              <div style={{marginLeft:"10px"}}>
                {tag?.h3?.map((h3:string, index:number)=>(
                  <div key={index} style={{color:"#696969", fontWeight: "400"}}>{h3}</div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="whybook_withus bgsidebar mtb30">
        <p className="fs-6 fw-bold">Get a Business Solution : <span></span></p>
        <div className="line"></div>
        <ul>
          <li>
            <div><i className="fa fa-check-circle" aria-hidden="true"></i>Point of Sale System</div>
            <p>Automate your business process with an advanced cloud-based POS system</p>
          </li>
          <li>
            <div><i className="fa fa-check-circle" aria-hidden="true"></i>Online Ordering System</div>
            <p>Generate more revenue by selling online with an Online Ordering System.</p>
          </li>
          <li>
            <div><i className="fa fa-check-circle" aria-hidden="true"></i>Free Consultation</div>
            <p>Send us an enquiry anytime, we are here to help!.</p>
          </li>

        </ul>
        <div className="subpara mt-4">
          <Link className="btn btn-white btn-red fw-bold w-100" href="/enquiry">Book Now</Link>
        </div>
      </div>
    </div>
  )
}

export default TableOfContent