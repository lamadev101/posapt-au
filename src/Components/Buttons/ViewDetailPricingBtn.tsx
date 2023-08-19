import Link from "next/link"

const ViewDetailPricingBtn = () => {
  return (
    <Link href="/pricing" className="btn btn-block btn-primary text-uppercase">
      <span>View Details</span>
    </Link>
  )
}

export default ViewDetailPricingBtn