"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [referenceNumber, setReferenceNumber] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: formData.name,
          clientEmail: formData.email,
          clientPhone: formData.phone,
          projectName: formData.company ? `${formData.company} - ${formData.service}` : formData.service,
          projectType: formData.service,
          projectDescription: formData.message,
          budgetRange: formData.budget,
          expectedCompletionDate: formData.date,
          requirements: [], // Can be expanded later
          specialRequests: formData.message,
          teamSize: 1 // Default, can be expanded later
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        setReferenceNumber(result.project.referenceNumber)
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          date: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200 relative overflow-hidden shadow-xl h-fit">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-2xl"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-xl"></div>
      </div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Get Your Custom Quote</CardTitle>
        <p className="text-gray-700 text-lg">Tell us about your project and we'll get back to you within 24 hours.</p>
      </CardHeader>

      <CardContent className="relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-900 font-semibold">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                required
                className="bg-white border-gray-300 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-900 font-semibold">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-white border-gray-300 text-gray-900"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-900 font-semibold">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+447958189989"
                className="bg-white border-gray-300 text-gray-900"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-900 font-semibold">Company/Organization</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Your company name"
                className="bg-white border-gray-300 text-gray-900"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service" className="text-gray-900 font-semibold">Service Needed *</Label>
              <Select onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="videography">Videography</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="cinematography">Cinematography</SelectItem>
                  <SelectItem value="video-editing">Video Editing</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="multiple-services">Multiple Services</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-gray-900 font-semibold">Budget Range</Label>
              <Select onValueChange={(value) => handleChange("budget", value)}>
                <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-1k">Under £1,000</SelectItem>
                  <SelectItem value="1k-3k">£1,000 - £3,000</SelectItem>
                  <SelectItem value="3k-5k">£3,000 - £5,000</SelectItem>
                  <SelectItem value="5k-10k">£5,000 - £10,000</SelectItem>
                  <SelectItem value="over-10k">Over £10,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-gray-900 font-semibold">Preferred Project Date</Label>
            <div className="relative">
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="bg-white border-gray-300 text-gray-900"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-900 font-semibold">Project Details *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your project, vision, and any specific requirements..."
              rows={5}
              required
              className="bg-white border-gray-300 text-gray-900"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="w-full group bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white py-4 text-lg font-semibold rounded-xl shadow-xl disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Creating Project...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Project Inquiry
              </>
            )}
          </Button>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Send className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900">Project Created Successfully!</h3>
                  <p className="text-green-700 text-sm mt-1">
                    Your project has been created with reference number: 
                    <span className="font-mono font-bold ml-2 bg-green-100 px-2 py-1 rounded">
                      {referenceNumber}
                    </span>
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    Save this reference number to track your project status. You can check your project progress at any time using this number.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Send className="h-4 w-4 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-900">Submission Failed</h3>
                  <p className="text-red-700 text-sm mt-1">
                    There was an error creating your project. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
