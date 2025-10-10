import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FreelancerApplicationForm } from "@/components/freelancer-application-form"

export default function JoinTeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FreelancerApplicationForm />
      </div>
      <Footer />
    </main>
  )
}
