"use client"

import { useState } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, PoundSterling, Clock, Users } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Wedding Videographer - Luxury Venue",
    type: "Event Videography",
    location: "London, UK",
    date: "March 15, 2024",
    duration: "8 hours",
    budget: "£800-1200",
    urgency: "high",
    description:
      "Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required.",
    requirements: ["5+ years experience", "Own equipment", "Portfolio required"],
    teamSize: "2-3 people",
  },
  {
    id: 2,
    title: "Corporate Brand Video Editor",
    type: "Video Editing",
    location: "Remote",
    date: "March 20, 2024",
    duration: "3-5 days",
    budget: "£1500-2000",
    urgency: "medium",
    description: "Edit corporate brand film with motion graphics and color grading. Fast turnaround needed.",
    requirements: ["Adobe Premiere Pro", "After Effects", "Color grading experience"],
    teamSize: "1 person",
  },
  {
    id: 3,
    title: "Product Photography - Tech Launch",
    type: "Photography",
    location: "London, UK",
    date: "March 25, 2024",
    duration: "4 hours",
    budget: "£600-900",
    urgency: "low",
    description: "Product photography for tech startup launch. Studio setup with professional lighting.",
    requirements: ["Product photography portfolio", "Studio lighting experience", "High-res delivery"],
    teamSize: "1-2 people",
  },
  {
    id: 4,
    title: "Conference Coverage Team",
    type: "Event Videography",
    location: "London, UK",
    date: "April 2-4, 2024",
    duration: "3 days",
    budget: "£2500-3500",
    urgency: "high",
    description: "Multi-day conference coverage including keynotes, interviews, and networking events.",
    requirements: ["Event experience", "Multi-camera coordination", "Live streaming capability"],
    teamSize: "4-5 people",
  },
]

const urgencyColors = {
  high: "bg-red-100 text-red-800 border-red-200",
  medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  low: "bg-green-100 text-green-800 border-green-200",
}

export function JobBoard() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  return (
    <section id="available-jobs" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Available <span className="text-primary">Opportunities</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            This is how our job opportunities will be sent out to our team. Apply directly or express interest for future
            opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {job.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-xs ${urgencyColors[job.urgency as keyof typeof urgencyColors]}`}
                      >
                        {job.urgency} priority
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{job.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PoundSterling className="h-4 w-4" />
                    <span>{job.budget}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{job.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Team size: {job.teamSize}</span>
                  </div>

                  <Link href="/signup" className={buttonVariants({ size: "sm" })}>
                    Apply Now
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see a perfect match? We're always looking for talented freelancers.
          </p>
          <Link href="/join-team" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Join Our Talent Pool
          </Link>
        </div>
      </div>
    </section>
  )
}
