"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
import supabase from "@/lib/supabase";

export function FreelancerApplicationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    about: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("🚀 SUBMIT BUTTON CLICKED");
    console.log("Form data:", formData);
    
    if (isSubmitting) {
      console.log("Already submitting, ignoring");
      return;
    }
    
    setIsSubmitting(true);
    setProgress(10);
    
    toast({
      title: "Starting submission...",
      description: "Processing your application",
    });
    
    try {
      console.log("Step 1: Validation");
      if (!formData.fullName || !formData.email) {
        toast({
          title: "Error",
          description: "Please fill in name and email",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      setProgress(30);
      console.log("Step 2: Testing Supabase");
      
      // Test Supabase connection
      console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
      console.log("Supabase Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Present" : "Missing");
      
      setProgress(50);
      console.log("Step 3: Database insert");
      
      const { data, error } = await supabase
        .from("FreelancerApplications")
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            phone_number: formData.phone || "",
            skills: formData.skills || "",
            about_you: formData.about || "",
          },
        ]);
      
      console.log("Database result:", { data, error });
      
      if (error) {
        console.error("Database error:", error);
        toast({
          title: "Database Error",
          description: error.message,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      setProgress(80);
      console.log("Step 4: Success");
      
      setProgress(100);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      toast({
        title: "SUCCESS!",
        description: "Application saved to database!",
      });
      
      console.log("✅ FORM SUBMITTED SUCCESSFULLY");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          skills: "",
          about: "",
        });
        setSubmitSuccess(false);
        setProgress(0);
      }, 3000);
      
    } catch (error) {
      console.error("Critical error:", error);
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
      setIsSubmitting(false);
      setProgress(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Freelancer Application Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                placeholder="Your skills"
              />
            </div>
            
            <div>
              <Label htmlFor="about">About You</Label>
              <Textarea
                id="about"
                value={formData.about}
                onChange={(e) => handleInputChange("about", e.target.value)}
                placeholder="Tell us about yourself"
                rows={3}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting... {progress}%
                </>
              ) : submitSuccess ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Application Sent!
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
