import { Card, CardContent } from "@/components/ui/card"

export function ContactConsultation() {
  return (
    <Card className="bg-gradient-to-br from-rose-200 via-pink-100 to-fuchsia-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden shadow-xl">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl"></div>
      </div>
      
      <CardContent className="p-8 relative z-10">
        <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Free Consultation</h3>
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          Not sure which service is right for you? Schedule a free 30-minute consultation to discuss your project and
          get expert recommendations.
        </p>
        <p className="font-bold bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">No obligation • Expert advice • Custom solutions</p>
      </CardContent>
    </Card>
  )
}
