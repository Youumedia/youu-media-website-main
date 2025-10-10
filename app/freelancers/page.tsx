import { Navigation } from "@/components/navigation"
import { FreelancerHero } from "@/components/freelancer-hero"
import { JobBoardBasic } from "@/components/job-board-basic"
import { FreelancerBenefits } from "@/components/freelancer-benefits"
import { JoinProcess } from "@/components/join-process"
import { Footer } from "@/components/footer"

export default function FreelancersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FreelancerHero />
      <JobBoardBasic />
      <FreelancerBenefits />
      <JoinProcess />
      <Footer />
    </main>
  )
}
