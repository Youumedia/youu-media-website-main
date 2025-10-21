"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Briefcase, Mail, Send, CheckCircle } from "lucide-react";

const availabilityOptions = [
  "Full-time",
  "Part-time",
  "Project-based",
  "Weekends only",
  "Flexible",
];

export function FreelancerApplicationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolioLink: "", // Website URL
    portfolioFiles: "", // File attachments
    skillsText: "",
    availability: "",
    experience: "",
    aboutYou: "",
    equipment: "",
    rates: "",
  });

  // Handle form submit - Using API route
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("🚀 FORM SUBMIT CLICKED");
    console.log("Form data:", formData);
    console.log("Is submitting:", isSubmitting);

    if (isSubmitting) {
      console.log("Already submitting, ignoring");
      return;
    }

    // Basic validation
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(10);

    try {
      console.log("Step 1: Validating form data");
      setUploadProgress(20);

      console.log("Step 2: Preparing data for API");
      const applicationData = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone?.trim() || "",
        portfolio_url: formData.portfolioLink?.trim() || "",
        day_rate: formData.rates?.trim() || "",
        skills_text: formData.skillsText?.trim() || "",
        availability: formData.availability?.trim() || "",
        about_you: formData.aboutYou?.trim() || "",
        equipment_software: formData.equipment?.trim() || "",
        // Note: portfolioFiles (file attachments) are handled separately
      };

      console.log("Application data:", applicationData);
      setUploadProgress(50);

      console.log("Step 3: Submitting to API");
      const response = await fetch("/api/freelancer-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      const result = await response.json();
      console.log("API response:", result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }

      console.log("✅ API SUCCESS!");
      setUploadProgress(80);

      // Show success
      setUploadProgress(100);
      setSubmitSuccess(true);

      toast({
        title: "Application Sent!",
        description: "Thank you for your application. We'll be in touch soon!",
      });

      console.log("✅ FORM COMPLETED SUCCESSFULLY");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          portfolioLink: "",
          portfolioFiles: "",
          skillsText: "",
          availability: "",
          experience: "",
          aboutYou: "",
          equipment: "",
          rates: "",
        });
        setSubmitSuccess(false);
        setUploadProgress(0);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error("❌ SUBMISSION ERROR:", error);
      toast({
        title: "Submission Error",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradient-flow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        .moving-gradient-border {
          background: linear-gradient(
            90deg,
            #a855f7 0%,
            #60a5fa 10%,
            #a855f7 20%,
            #60a5fa 30%,
            #a855f7 40%,
            #60a5fa 50%,
            #a855f7 60%,
            #60a5fa 70%,
            #a855f7 80%,
            #60a5fa 90%,
            #a855f7 100%
          );
          background-size: 200% 100%;
          animation: gradient-flow 3s linear infinite;
        }
        .border-glow {
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))
            drop-shadow(0 0 40px rgba(96, 165, 250, 0.6))
            drop-shadow(0 0 60px rgba(168, 85, 247, 0.4));
        }
      `}</style>
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] animate-gradient-x opacity-20 blur-3xl"></div>
              <div className="relative">
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <Image
                    src="/images/youu-logo-updated.png"
                    alt="Youu Media"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
                  Join the Youu Media Creative Team
                </h1>
                <p className="text-lg md:text-xl text-black max-w-2xl mx-auto px-4">
                  Are you a talented creative professional? We're always looking
                  for skilled freelancers to join our network and work on
                  exciting projects.
                </p>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="relative p-[9px] rounded-lg overflow-hidden border-glow">
            <div className="absolute inset-0 rounded-lg moving-gradient-border"></div>
            <Card className="border-0 shadow-lg relative bg-white">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Freelancer Application
                </CardTitle>
                <CardDescription>
                  Tell us about yourself and your creative expertise. We'll
                  review your application and get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Personal Information */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              fullName: e.target.value,
                            }))
                          }
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          placeholder="+44 7XXX XXXXXX"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">
                          Portfolio/Website Link
                        </Label>
                        <Input
                          id="portfolio"
                          type="url"
                          value={formData.portfolioLink}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              portfolioLink: e.target.value,
                            }))
                          }
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Professional Information
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="skillsText">Skills & Expertise *</Label>
                      <Input
                        id="skillsText"
                        value={formData.skillsText}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            skillsText: e.target.value,
                          }))
                        }
                        placeholder="Describe your skills (e.g., videographer, photographer, editor, etc.)"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability *</Label>
                        <Select
                          value={formData.availability}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              availability: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your availability" />
                          </SelectTrigger>
                          <SelectContent>
                            {availabilityOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">
                          Years of Experience *
                        </Label>
                        <Input
                          id="experience"
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              experience: e.target.value,
                            }))
                          }
                          placeholder="e.g., 3 years"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="aboutYou">About You *</Label>
                      <Textarea
                        id="aboutYou"
                        value={formData.aboutYou}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            aboutYou: e.target.value,
                          }))
                        }
                        placeholder="Tell us about your background, experience, and what makes you unique as a creative professional..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="equipment">Equipment & Software</Label>
                      <Textarea
                        id="equipment"
                        value={formData.equipment}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            equipment: e.target.value,
                          }))
                        }
                        placeholder="List your cameras, editing software, and other professional equipment..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="rates">Day Rates (£)</Label>
                      <Input
                        id="rates"
                        value={formData.rates}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            rates: e.target.value,
                          }))
                        }
                        placeholder="e.g., £300-500 per day"
                      />
                    </div>
                  </div>

                  {/* Portfolio File Attachment */}
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Portfolio Files
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="portfolioFile">
                        Upload Portfolio Files
                      </Label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <div className="flex flex-col items-center space-y-2">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <div className="text-sm text-gray-600">
                            <p className="font-medium">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-xs">
                              PDF, DOC, DOCX, JPG, PNG, MP4, MOV (Max 10MB each)
                            </p>
                          </div>
                        </div>
                        <input
                          type="file"
                          id="portfolioFile"
                          multiple
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          onChange={(e) => {
                            const files = Array.from(e.target.files || []);
                            if (files.length > 0) {
                              // For now, we'll just store the file names
                              // In a real implementation, you'd upload to Supabase Storage
                              const fileNames = files
                                .map((file) => file.name)
                                .join(", ");
                              setFormData((prev) => ({
                                ...prev,
                                portfolioFiles: fileNames, // Use separate field for files
                              }));
                            }
                          }}
                        />
                      </div>
                      {formData.portfolioFiles && (
                        <div className="text-sm text-green-600 bg-green-50 p-2 rounded">
                          <p className="font-medium">Files selected:</p>
                          <p>{formData.portfolioFiles}</p>
                        </div>
                      )}
                      <p className="text-xs text-gray-500">
                        Upload your best work samples, showreels, or portfolio
                        documents. Files are stored separately from the website
                        URL above.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 md:pt-6">
                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className={`w-full transition-opacity text-sm md:text-base py-3 md:py-4 touch-manipulation ${
                        submitSuccess
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] animate-gradient-x hover:opacity-90"
                      }`}
                      style={{
                        WebkitTapHighlightColor: "transparent",
                        touchAction: "manipulation",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          {uploadProgress > 0
                            ? `Submitting... ${uploadProgress}%`
                            : "Submitting..."}
                        </>
                      ) : submitSuccess ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Application Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Application
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      By submitting this application, you agree to be contacted
                      by Youu Media regarding freelance opportunities.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <div className="mt-12 text-center">
            <Card className="border-blue-400/50 border-2 bg-white">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  What Happens Next?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  After submitting your application, our team will review your
                  information and portfolio. If you're a good fit, we'll reach
                  out within 5-7 business days to discuss potential
                  opportunities and next steps in joining our creative network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
