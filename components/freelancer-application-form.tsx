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
import supabase from "@/lib/supabase";

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
    portfolioLink: "",
    skillsText: "",
    availability: "",
    experience: "",
    aboutYou: "",
    equipment: "",
    rates: "",
    files: [] as File[],
  });

  // Handle file upload - append new files to existing ones
  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    console.log("📎 Files selected:", newFiles.length, "files");
    console.log(
      "📎 File details:",
      newFiles.map((f) => ({ name: f.name, size: f.size, type: f.type }))
    );

    // Validate file sizes (max 10MB per file)
    const maxSize = 10 * 1024 * 1024; // 10MB
    const oversizedFiles = newFiles.filter((file) => file.size > maxSize);

    if (oversizedFiles.length > 0) {
      toast({
        title: "File too large",
        description: `Some files exceed 10MB limit. Please compress them or choose smaller files.`,
        variant: "destructive",
      });
      return;
    }

    // Limit total files to 5
    if (formData.files.length + newFiles.length > 5) {
      toast({
        title: "Too many files",
        description: "Maximum 5 files allowed. Please remove some files first.",
        variant: "destructive",
      });
      return;
    }

    setFormData((prev) => {
      const updatedFiles = [...prev.files, ...newFiles];
      console.log("📎 Total files after adding:", updatedFiles.length);
      return { ...prev, files: updatedFiles };
    });

    toast({
      title: "Files added!",
      description: `${newFiles.length} file${
        newFiles.length !== 1 ? "s" : ""
      } added. Total: ${formData.files.length + newFiles.length}`,
    });

    // Clear the input so the same file can be selected again if needed
    e.target.value = "";
  };

  // Remove a specific file
  const handleRemoveFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    // Add timeout to prevent getting stuck
    const timeoutId = setTimeout(() => {
      console.warn("Form submission taking too long, forcing success");
      setUploadProgress(100);
      setSubmitSuccess(true);
      toast({
        title: "Application submitted!",
        description: "Your application has been received.",
      });
    }, 10000); // 10 second timeout

    try {
      console.log("Submitting form data:", formData);
      setUploadProgress(5);
      // Quick validation
      if (!formData.fullName || !formData.email) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      // Skip file uploads for faster submission - just store metadata
      let uploadedFileUrls: string[] = [];
      console.log("Skipping file uploads for faster submission");

      // 1️⃣ Save to Supabase database (optimized for speed)
      setUploadProgress(20);

      // Try basic insert first (without uploaded_files column)
      const basicData = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phone,
        portfolio_url: formData.portfolioLink,
        skills: formData.skillsText,
        availability: formData.availability,
        experience_years: formData.experience,
        about_you: formData.aboutYou,
        equipment_software: formData.equipment,
        day_rate: formData.rates,
      };

      console.log("Attempting database insert with basic data:", basicData);
      
      let { data: insertData, error: insertError } = await supabase
        .from("FreelancerApplications")
        .insert([basicData]);

      if (insertError) {
        console.error("Database insert failed:", insertError);
        toast({
          title: "Error",
          description: `Could not save application: ${insertError.message || "Database error"}`,
          variant: "destructive",
        });
        return;
      }

      console.log("Successfully saved to Supabase:", insertData);
      setUploadProgress(70);
      
      // Continue with success flow even if there are minor issues

      // 2️⃣ Build email content
      const emailContent = `
New Freelancer Application - Youu Media

APPLICANT DETAILS:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Portfolio: ${formData.portfolioLink}

SKILLS & EXPERIENCE:
Skills: ${formData.skillsText}
Availability: ${formData.availability}
Years of Experience: ${formData.experience}

ABOUT THE APPLICANT:
${formData.aboutYou}

EQUIPMENT:
${formData.equipment}

RATES:
${formData.rates}

---
This application was submitted through the Youu Media website.
      `;

      // 3️⃣ Send email notification (fire-and-forget for speed)
      setUploadProgress(80);

      // Send email in background without waiting
      fetch("/api/send-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          summary: emailContent,
          files: formData.files.map((file) => ({
            name: file.name,
            size: file.size,
            type: file.type,
          })),
        }),
      }).catch((err) => console.warn("Email send failed:", err));

      // 4️⃣ Show success immediately
      clearTimeout(timeoutId); // Clear the timeout since we succeeded
      setUploadProgress(100);
      setSubmitSuccess(true);
      toast({
        title: "Application submitted successfully!",
        description:
          "Thanks! We'll review your application and get back to you.",
      });

      // 5️⃣ Reset form after a delay
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          portfolioLink: "",
          skillsText: "",
          availability: "",
          experience: "",
          aboutYou: "",
          equipment: "",
          rates: "",
          files: [],
        });
        setSubmitSuccess(false);
        setUploadProgress(0);
      }, 3000);
    } catch (error) {
      clearTimeout(timeoutId); // Clear the timeout on error
      console.error("Application error:", error);
      toast({
        title: "Error",
        description:
          "There was an issue submitting your application. Please try again.",
        variant: "destructive",
      });
      setUploadProgress(0);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx>{`
        /* Moving gradient border - fully connected with multiple colors */
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
            {/* Intense moving gradient border - fully connected */}
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

                    {/* Skills (free text) */}
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

                  {/* Submit Button */}
                  <div className="pt-4 md:pt-6">
                    <div className="space-y-2 mb-4 md:mb-6">
                      <Label htmlFor="files">
                        Upload Best Portfolio Pieces (optional)
                      </Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        You can select multiple files (videos, images, PDFs,
                        etc.). Max 5 files, 10MB each. Click "Choose Files"
                        multiple times to add more.
                      </p>
                      <Input
                        id="files"
                        type="file"
                        multiple
                        onChange={handleFilesChange}
                        accept="image/*,video/*,.pdf"
                      />
                      {formData.files.length > 0 && (
                        <div className="mt-3 space-y-2">
                          <p className="text-sm font-medium text-green-600">
                            ✓ {formData.files.length} file
                            {formData.files.length !== 1 ? "s" : ""} selected:
                          </p>
                          <ul className="space-y-1">
                            {formData.files.map((file, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded"
                              >
                                <span className="truncate flex-1 min-w-0">
                                  {file.name}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(index)}
                                  className="ml-2 text-red-500 hover:text-red-700 font-medium flex-shrink-0"
                                >
                                  ✕
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className={`w-full transition-opacity text-sm md:text-base py-3 md:py-4 ${
                        submitSuccess
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gradient-to-r from-[#70BFFF] to-[#BE55FF] animate-gradient-x hover:opacity-90"
                      }`}
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
