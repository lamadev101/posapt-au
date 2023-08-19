import React from "react";
import Link from "next/link";

function OurHardwareSystem() {
  return (
    <>    <section
     className="midcard subpara pt-0 mt-0 mt-md-4 pb-5  mb-5 bg-theme1"
    //  style={{
    //    backgroundBlendMode: "multiply",
    //    backgroundColor: "#013432",
    //    backgroundImage: "url(assets/dist/image/newImages/bg1.webp)",
    //    backgroundSize: "cover",
    //    backgroundRepeat: "no-repeat",
    //  }}
   >
   <div className="container">
     <div className="heading_s1 w-80">               
      <h3 className="fw-bold text-capitalize text-center mb-4">Our POS Hardware System</h3>
    </div>
       <div className="row g-4">
         <div className="col-md-4">
           <div className="card h-100">
             <img
               src="assets/dist/image/newImages/merchant.webp"
               className="card-img-top"
               alt="Hands-On Merchant Management Service"
               title=" Hands-On Merchant Management Service"
             />
             <div className="card-body d-flex flex-column">
               <h4 className="card-title">
                 Merchant Management
               </h4>
               <p className="card-text">
                 POSApt provides you with a hands-on Merchant Management
                 Service that extends from the installation phase to
                 day-to-day maintenance. This Merchant service allows you
                 to accept multiple payment methods including credit
                 cards from your customers via EFTPOS machines. We're
                 offering Merchant facilities at a very competitive price.
               </p>
             </div>


           </div>
         </div>
         <div className="col-md-4">
           <div className="card h-100">
             <img
               src="/assets/dist/image/newImages/Product_image.webp"
               className="card-img-top"
               alt="Hardware To Support Your Sales"
               title="Hardware To Support Your Sales"
             />
             <div className="card-body d-flex flex-column">
               <h4 className="card-title">
                 Hardware Support
               </h4>
               <p className="card-text">
                 It is essential that your Point of Sale solution synchronizes well
                 with all the hardware components complimenting it. So,
                 as part of the POSApt setup, we provide you with all the
                 hardware necessary for a smooth and efficient sales
                 action. Our hardware package includes:
               </p>
               <ul className="row">
                 <li className="fw-bold col-md-5">
                   <a>
                     <small>Tablet</small>
                   </a>
                 </li>
                 <li className="fw-bold col-md-7">
                   <a>
                     <small>Tablet Stand</small>
                   </a>
                 </li>
                 <li className="fw-bold col-md-5">
                   <a>
                     <small>Cash Drawer</small>
                   </a>
                 </li>
                 <li className="fw-bold  col-md-7">
                   <a>
                     <small>Kitchen Printer</small>
                   </a>
                 </li>
               </ul>
               <p className="card-text">
                 
                 <small>
                   
                   *Note: Hardware needs to purchased separately.
                 </small>
               </p>
               <Link
                 href={"/shop-now"}
                 className="btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin  mt-auto align-self-start"
               >
                 Shop Now
               </Link>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <div className="card h-100">
             <img
               src="/assets/dist/image/newImages/loan.webp"
               className="card-img-top"
               alt="Short Term Cash Flow Boost"
               title="Short Term Cash Flow Boost"
             />
             <div className="card-body d-flex flex-column">
               <h4 className="card-title">Cash Flow Management</h4>
               <p className="card-text">
                 We want to power your business’s success. You can get an
                 instant loan from our POS system with just 1 click to
                 mitigate your business’s short-term cash flow issues.
                 We’ve partnered with one of the pioneering lenders in
                 the business to fetch every support that your business
                 needs to thrive.
               </p>
               <Link
                 href={"/lucapay"}
                 className="btn btn-raised bg-danger shadow my-button w-xs  me-2 homecart homelogin  mt-auto align-self-start"
               >
                 Apply Now
               </Link>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   </>
 
  );
}

export default OurHardwareSystem;
