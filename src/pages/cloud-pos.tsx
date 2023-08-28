import Layout from "@/Components/Layout"
import { CustomerSection, HeroSection } from "@/sections"
import {  ListofFeature, SupportSystem } from "@/sections/pos-cloud"

const CloudPos = () => {

  const customerSectionData1 = {
    title: "Simple POSapt System Maxmise Efficincy",
    paraDesc: ["POSapt streamline your operations and improve customer experience. Business can make payment faster so no more long queues. That makes your staffs happier too. With real-time reporting, businesses make data-driven decisions, increase revenue, and ultimately achieve success."],
    imgUrl: "",
    list: [
      "Speed Up Sales",
      "Manage Multiple Stores",
      "Speed Up Sales"
    ]
  }

  const customerSectionData2 = {
    title: "We Support Small Businesses Anywhere Anytime",
    paraDesc: ["24/7 online support is available for any clients. Reach us any time of the day and we'll get you connected with an Expert to get your issue resolved as soon as possible."],
    imgUrl: "",
    list: [
      "Speed Up Sales",
      "Manage Multiple Stores",
      "Speed Up Sales"
    ]
  }

  return (
    <>
      <Layout>
        <HeroSection
          title="Cloud Based Point Of Sale System POSapt."
          desc="For Both Hospitalities and Retail Business"
          imgUrl="/assets/dist/image/posSys/retail/hero/pizza.webp"
        />
        <CustomerSection 
          {...customerSectionData1}
        />
        <ListofFeature />
        <SupportSystem />
        <CustomerSection 
          {...customerSectionData2}
        />
      </Layout>
    </>
  )
}

export default CloudPos