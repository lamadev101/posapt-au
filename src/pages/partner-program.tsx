import Layout from '@/Components/Layout'
import MailAndCall from '@/Components/MailAndCall'
import Head from 'next/head'
import Link from 'next/link';

const Partners = () => {

  return (
    <>
      <Head>
        <title>POS Referral & Reseller Program | POSApt</title>
        <meta
          name="title"
          content="POS Referral & Reseller Program | POSApt"
        />
        <meta
          name="description"
          content="As a valued partner, you'll not only keep your clients satisfied but also earn generous referral bonuses and a share of the revenue."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://posapt.au/partner-program" />
      </Head>
      <Layout>
        <section className=" pt-1 pt-md-5 pb-50">
          <div className="container  text-center">
            <div className="row align-items-center justify-content-center gy-5">
              <div className="col-md-5">
                <div className="row">
                  <div className="heading_s1">
                    <span className="sub_heading font_style1">
                      <small>Welcome to POSApt's </small>
                    </span>
                    <h1 className=" fw-bold text-capitalize">
                      POS Referral &amp; Reseller Program
                    </h1>
                  </div>
                </div>
                <div className="subpara mt-3">
                  <p className="text-center">
                    <span style={{ fontWeight: 400 }}>
                      Join us as a partner and unlock a world of opportunities to grow
                      your business. At POSApt, we believe in connecting businesses
                      with innovative solutions that streamline operations and drive
                      sales. Our partners (YOU) play a pivotal role in this mission.{" "}
                    </span>
                  </p>

                  <div className="text-center">
                    <Link
                      className="btn btn-white btn-red fw-bold"
                      href="/enquiry"
                    >
                      Become a Partner
                    </Link>
                  </div>
                </div>
                <section className="mb-4 mt-4">
                  <div className="row ab1 bg-light">
                    <h3 style={{ fontSize: "2rem" }} className="pt-md-4 pb-lg-2 text-center col-md-6 col-6 border-end text-theme">
                      <span className="text-dark d-block">Up to</span>
                      $2,500 <span className="d-block text-dark">Per Referral <br /> (no limits)</span>
                    </h3>
                    <h3 style={{ fontSize: "2rem" }} className="pt-md-4 pb-lg-2 text-center col-md-6 col-6 text-theme">
                      <span className="d-block text-dark">Per Month</span>
                      20%
                      <span className="d-block text-dark">Commission <br /> For 2 Years</span>
                    </h3>
                  </div>
                </section>
              </div>
              <div className="col-md-6 ">
                <div className="serv_left">
                  <img
                    src="assets/dist/image/refer.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-50 pt-50 bg-light mb-4">
          <div className="keyfeatures text-center">
            <div className="container">
              <div className="row">
                <div className="heading_s1 hs2 w-80">
                  <h2 className=" fw-bold text-capitalize">
                    Become A Partner and{" "}
                    <span className="d-block text-theme">Start Earning Today</span>
                  </h2>
                  <p className="text-center">
                    As a valued partner, you'll not only keep your clients satisfied
                    but also earn generous referral bonuses and a share of the
                    revenue. It's as easy as signing up in just 30 seconds. Start
                    referring someone today and witness the impact of POSApt Partners
                    in helping businesses secure their technological future.
                  </p>
                </div>
              </div>
              <div className="row g-4 partners">
                <div className="col-md-3">
                  <div className="card card-oos ">
                    <div className="card-body ">
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img">
                          <img
                            src="assets/dist/image/global-connection.png"
                            alt=" "
                            className="mb-3 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h3 className="fs-6 ">Empower Businesses Globally</h3>
                        <p className="text-center mt-3">
                          As a partner, you have the power to ignite businesses
                          worldwide by connecting your network and clients with the
                          transformative capabilities of POSApt. Our POS system is not
                          only capable of catering to Canadian Businesses but also to
                          Australians and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-oos ">
                    <div className="card-body ">
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img">
                          <img
                            src="assets/dist/image/leader.png"
                            alt=" "
                            className="mb-3 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h3 className="fs-6 ">Become a POS Expert</h3>
                        <p className="text-center mt-3">
                          Access our comprehensive toolkit, training resources, and
                          research materials to become a renowned expert in the
                          hospitality and retail industries. You’ll not only be able
                          to know the ins and outs of our system but any Point of Sale
                          system in town.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-oos ">
                    <div className="card-body ">
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img">
                          <img
                            src="assets/dist/image/revenue.png"
                            alt=" "
                            className="mb-3 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h3 className="fs-6 ">Expand Your Revenue</h3>
                        <p className="text-center mt-3">
                          Tap into new avenues of revenue growth with our lucrative
                          referral bonuses upto $2,500 per referral, along with
                          revenue-sharing options for resellers. The more clients you
                          bring to POSApt, the more you earn. It’s that simple!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card card-oos ">
                    <div className="card-body ">
                      <div className=" position-relative ">
                        {/* img */}
                        <div className="oos_img">
                          <img
                            src="assets/dist/image/handshake.png"
                            alt=" "
                            className="mb-3 img-fluid "
                          />
                        </div>
                        {/* heading */}
                        <h3 className="fs-6 ">Your Trusted POS Partner</h3>
                        <p className="text-center mt-3">
                          POSApt empowers businesses with the tools, technology, and
                          unwavering support they need to run their operations
                          efficiently. Partnering with us means becoming an integral
                          part of this trusted network. Partner with us today!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="row bg-light p-2 p-md-5">
              <div className="col-md-6 order-2 order-md-1">
                <div className="new-list ">
                  <div className="heading_s1 hs2 w-80 text-start">
                    <h2 className=" fw-bold text-capitalize mb-5">
                      Ready to <span className=" text-theme">Join?</span>
                    </h2>
                    <p>
                      Signing up as a POSApt partner is quick and effortless. As
                      Australia’s best POS provider, we've earned the trust of over
                      countless businesses in Australia and now we’re expanding our
                      services to Canada as well. Whether you're a referrer or a
                      reseller, our POS Referral Program has the perfect fit for you.
                    </p>
                  </div>
                  <div className="newitems mt-4">
                    <span className="text-white fw-bold">1</span>
                    <h3 className="text-theme fw-bold">For Referrers</h3>
                    <p>
                      Spread the word about POSApt and our amazing products and earn upto $2,500 for every new customer you refer to us.
                    </p>
                  </div>
                  <div className="newitems">
                    <span className="text-white fw-bold">2</span>
                    <h3 className="text-theme fw-bold">For Resellers</h3>
                    <p>
                      Enhance your product offering by selling POSApt and earn a
                      revenue share along with a lifetime commission.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 m-auto order-1 order-md-2 ">
                <div className="orderimg mt-3 mt-lg-0">
                  <img
                    src="assets/dist/image/partner (1).png"
                    className="img-fluid h-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="orderpos">
              <img
                src="assets/dist/image/becomepartner.png"
                className="img-fluid border"
                alt=""
              />
              <div className="heading_s1 text-center">
                <span className="sub_heading font_style1">
                  <small>Apply Now to become a</small>
                </span>
                <h2 className=" fw-bold text-capitalize">POSApt Partner</h2>
              </div>
              <div className="subpara mt-3">
                <p className="text-center">
                  <span style={{ fontWeight: 400 }}>
                    Your friends, family, relatives and clients deserve the best, and
                    with POSApt, they'll receive an all-in-one POS system and an
                    online ordering system that caters to every aspect of their
                    hospitality and retail business.
                  </span>
                </p>
                <div className="text-center">
                  <Link
                    className="btn btn-white btn-red fw-bold"
                    href="/enqury"
                  >
                    Become a POSApt Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* faq */}
        <section
          className=" py-5 mb-lg-2"
          style={{
            background:
              "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)"
          }}
        >
          <div className="container">
            <div className="row py-2 py-md-4 py-lg-5">
              <MailAndCall />
              <div className="col-md-7 offset-xl-1">
                <div className="accordion" id="faq">
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q1-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q1"
                        aria-expanded="false"
                        aria-controls="q1"
                      >
                        What is the POSApt POS Referral Program?
                      </button>
                    </h3>
                    <div
                      id="q1"
                      className="accordion-collapse collapse"
                      aria-labelledby="q1-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p className="mb-0">
                          The POSApt POS Referral Program is a program that
                          incentivizes partners to refer new customers to POSApt's
                          point-of-sale (POS) solution. By participating in the
                          program, partners have the opportunity to earn rewards for
                          successful referrals.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q2-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q2"
                        aria-expanded="false"
                        aria-controls="q2"
                      >
                        How much do I earn from 1 referral?
                      </button>
                    </h3>
                    <div
                      id="q2"
                      className="accordion-collapse collapse"
                      aria-labelledby="q2-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p className="mb-0">
                          The specific amount you can earn from one referral through
                          the POSApt POS Referral Program may vary depending upon the
                          type of client you bring to us. To obtain accurate
                          information about the referral rewards, it is best to
                          consult with us directly or refer to the program's
                          documentation, where the referral bonus amount is outlined.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q3-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q3"
                        aria-expanded="false"
                        aria-controls="q3"
                      >
                        How often can I refer?
                      </button>
                    </h3>
                    <div
                      id="q3"
                      className="accordion-collapse collapse"
                      aria-labelledby="q3-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p className="mb-0">
                          Actually, you can refer new customers to us as often as you
                          want. Yes, we won’t say no to new customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 rounded-3 shadow-sm mb-3">
                    <h3 className="accordion-header" id="q3-heading">
                      <button
                        className="accordion-button shadow-none rounded-3 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#q3"
                        aria-expanded="false"
                        aria-controls="q3"
                      >
                        What are the terms and conditions of the POS Referral Program?
                      </button>
                    </h3>
                    <div
                      id="q3"
                      className="accordion-collapse collapse"
                      aria-labelledby="q3-heading"
                      data-bs-parent="#faq"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        <p className="mb-0">
                          The specific terms and conditions of the POSApt POS Referral
                          Program is outlined in the official program documentation.
                          These terms and conditions include eligibility criteria,
                          details about the referral process, payment information,
                          program duration, and any other requirements or restrictions
                          that apply. We recommend you to thoroughly review the
                          program's terms and conditions before applying for the
                          program or proceeding towards referring a new customer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Partners