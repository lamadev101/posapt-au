import BasicOos from "@/Components/PricingTable/BasicOos"
import BasicPos from "@/Components/PricingTable/BasicPos"
import PopularOos from "@/Components/PricingTable/PopularOos"
import PopularPos from "@/Components/PricingTable/PopularPos"
import PosWithEcom from "@/Components/PricingTable/PosWithEcom"

const PricingSection = () => {
  return (
    <section className="pricing-inner py-5 mt-5">
      <div className="container">
        <div className="row">
          <h2 className="pb-3 mb-1 mb-lg-3 text-white fw-bold text-center">
            See Our Pricing Table
          </h2>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Pro Tier */}
          <BasicPos />
          {/* Pro Tier */}
          <PopularPos />
          {/* Pro Tier */}
          <PosWithEcom />
          {/* Free Tier */}
          <BasicOos />
          {/* Plus Tier */}
          <PopularOos />
        </div>
      </div>
    </section>
  )
}

export default PricingSection