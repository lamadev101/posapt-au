import Layout from '@/Components/Layout'
import SignUpSection from '@/sections/SignUpSection'
import PosSysHeroSection from '@/sections/hero/PosSysHeroSection'
import Head from 'next/head'
import React from 'react'

const ClothingStore = () => {
  const clothStoreData = [
    {
      title: `Level Up Your Fashion Business`,
      describe: `Imagine a world where keeping track of your clothes in the store is as easy as draping fabric smoothly. With our Clothing POS software, you can manage your clothes like an expert stylist. Easily find each piece of clothing and get notified when things are running low with easy inventory management. Every item you sell, you make money and our system makes sure you don't miss anything.`
    },
    {
      title: `Managing Multiple Stores Made Easy`,
      describe: `Grow your fashion business without dealing with complicated changes to your system. Whether you have stores in different cities or even different countries, our system connects all your stores. You can see what you have, what you've sold, and who your customers are at every store. And as you expand, our system grows with you, making things organized and smooth.`
    },
    {
      title: `Strong and Reliable Hardware`,
      describe: `In a busy clothing/apparel store, your checkout system needs to handle a lot. Our solution includes strong hardware – easy-to-use touchscreens, quick barcode scanners, and reliable receipt printers. Just like good fabric makes good clothes, our hardware keeps your store running smoothly, no matter how busy it gets.`
    },
    {
      title: `Easy and Fast Payments`,
      describe: `Don't make your customers wait in line too long – make their shopping experience great with fast payments. Our system lets customers pay in lots of ways, like credit cards, gift cards, and cash. Checking out will be as easy as picking the perfect outfit, and your customers will love how quick and smooth it is.`
    },
  ]
  const clothStoreData1 = [
    {
      title: `Round-the-Clock Customer Support at $0`,
      describe: `Problems can happen anytime, even in a fashion store. Our support team is always ready to help you succeed, 24/7. Whether you have questions about features, need technical help, or want advice, our experts are just a call away. We promise to make sure your journey to success is always on track. And unlike other POS providers, we don’t even charge you for this support service.`
    },
    {
      title: `Try Our POSApt for 30 Days at $0`,
      describe: `Try out POSApt for absolutely free with our 30-day trial. We believe in the positive change our system can bring. Explore all the features designed to make your clothing shop better. During this risk-free time, you can explore what our system can do and decide if it fits your business needs. No commitments are required!`
    },
    {
      title: `Upgrade Without Losing What You Have`,
      describe: `Upgrading to a new POS system doesn't mean you have to give up your old equipment. POSApt makes it easy to use our software with your current systems. You won't need to spend extra money on hardware that you already own. Our system also integrates with other 3rd party software solutions like Xero,  DoorDash and UberEats.`
    },
    {
      title: `Elegance in Versatility, Chic in Adaptability`,
      describe: `Our system works on multiple devices, just like fashion fits different lifestyles. Use it on a computer, laptop, tablet, or smartphone. This flexibility lets you access important info and do transactions from anywhere. It's designed to make your customers happy and work well in any location.`
    },
  ]

  return (
    <>
      <Head>

      </Head>
      <Layout>
        <PosSysHeroSection
          tagline="Swag Up Your Fashion Store with our"
          title="Sell More with Clothing & Apparel Store POS System"
          desc="Elevate the elegance of your clothing store with POSApt. From trend-conscious inventory management to the seamless coordination of multi-location setups, we're poised to redefine the landscape of fashion business management."
          imgUrl="/assets/dist/image/store/restaurant_pos.webp"
        />
        
        <section className="mt-5">
          <div className="container">
            <div className="row bg-light p-2 p-md-5">
              <div className="col-md-6">
                <div className="new-list ">
                  <div className="heading_s1 hs2  text-start">
                    <h2 className="fw-bold text-capitalize mb-3">Cloud-Based Clothing Store<span className="text-theme">POS</span></h2>
                    <p>Whether you have a clothing retail, a boutique or an apparel store, running a clothing business can be complicated. It gets even more complicated if you have many stores or a mix of online and physical sales.</p>
                    <p>What you really need is a reliable system that can easily handle all your business tasks, even during busy times. That's where our Clothing Store POS System from POSApt comes in. It's designed to make things simple, even when lots of people are shopping. It helps bring order to the ever-changing fashion world.</p>
                    <p>Embark on a new era of fashion retail. From a seamless operational tapestry to elevated customer encounters, we stand prepared to arm your fashion enterprise with unparalleled empowerment. Take the stage – catalyze your journey with our 30-day trial and embrace the future of fashion retail management today.</p>
                  </div>

                </div>
              </div>
              <div className="col-md-6 m-auto ">
                {/* <div className="orderimg primg mt-3 mt-lg-0"> */}
                <img src="/assets/dist/image/location/4.webp" className="img-fluid h-100 w-100" alt="POS System for Melbourne" title="POS System for Melbourne" />
                {/* </div> */}

              </div>
              <hr />
              <div className="col-md-12">
                <div className="subpara mt-3 productcard">
                  <div className="row">
                    {clothStoreData.map((item, index) => (
                      <div className="col-md-6" key={index}>
                        <h3 className="text-theme">
                          <img src="/assets/dist/image/icon1.png" className="img-fluid" alt={item.title} title={item.title} /> {item.title}</h3>
                        <p>{item.describe}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SignUpSection />

        <section className="mt-5">
          <div className="container">
            <div className="row bg-light p-2 p-md-5">
              <div className="col-md-6 m-auto ">
                {/* <div className="orderimg primg mt-3 mt-lg-0"> */}
                <img src="/assets/dist/image/location/5.webp" className="img-fluid h-100 w-100" alt="POS System for Melbourne" title="POS System for Melbourne" />
                {/* </div> */}

              </div>
              <div className="col-md-6">
                <div className="new-list ">
                  <div className="heading_s1 hs2  text-start">
                    <h2 className=" fw-bold text-capitalize mb-3">Why Choose POSApt's<br /> <span className="text-theme">Jewellery Pos System</span></h2>

                    {clothStoreData1.map((item, index) => (
                      <div className="ordercard mt-2" key={index}>
                        <h3 className="fw-bold text-capitalize text-theme">{item.title}</h3>
                        <p className="pt-1">
                          {item.describe}
                        </p>
                      </div>
                    ))}
                    {/* <!-- <a className="btn btn-white btn-red fw-bold py-3 px-2" href="#">Request a Demo</a> --> */}
                    <p className="bg-warning mt-4 p-2 fw-bold">Don’t have a website?
                      <span>
                        No Problem. We'll build you a Custom Website for absolutely FREE. <a href="#" className="text-decoration-underline"> Get A Website Now!</a>
                      </span>
                    </p>
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

export default ClothingStore