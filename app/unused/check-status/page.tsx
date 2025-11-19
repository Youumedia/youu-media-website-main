"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  FileText,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
} from "lucide-react";

type ProjectStatus =
  | "quote_requested"
  | "quote_sent"
  | "contract_signed"
  | "planning"
  | "pre_production"
  | "production"
  | "post_production"
  | "review"
  | "delivered"
  | "completed";

type ProjectStage = {
  id: ProjectStatus;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
};

const projectStages: ProjectStage[] = [
  {
    id: "quote_requested",
    name: "Quote Requested",
    description: "We've received your project inquiry",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: "quote_sent",
    name: "Quote Sent",
    description: "Your personalized quote has been sent",
    icon: CheckCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: "contract_signed",
    name: "Contract Signed",
    description: "Project contract has been signed",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: "planning",
    name: "Planning Phase",
    description: "We're planning your project details",
    icon: Calendar,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: "pre_production",
    name: "Pre-Production",
    description: "Setting up equipment and final preparations",
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: "production",
    name: "Production",
    description: "Filming/photography is in progress",
    icon: Eye,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    id: "post_production",
    name: "Post-Production",
    description: "Editing and post-processing your content",
    icon: Clock,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    id: "review",
    name: "Review Phase",
    description: "Content is ready for your review",
    icon: CheckCircle,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
  },
  {
    id: "delivered",
    name: "Delivered",
    description: "Final content has been delivered",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: "completed",
    name: "Project Completed",
    description: "Project is fully completed",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
];

// Mock project data - in real implementation, this would come from Supabase
const mockProjects = [
  {
    referenceNumber: "YM2024001",
    clientName: "Sarah Johnson",
    projectName: "Wedding Videography - Spring Garden Wedding",
    currentStatus: "post_production" as ProjectStatus,
    startDate: "2024-01-15",
    expectedCompletion: "2024-02-15",
    lastUpdated: "2024-01-28",
    projectType: "Wedding Videography",
    location: "London, UK",
  },
  {
    referenceNumber: "YM2024002",
    clientName: "TechStart Ltd",
    projectName: "Corporate Brand Video",
    currentStatus: "production" as ProjectStatus,
    startDate: "2024-01-20",
    expectedCompletion: "2024-02-10",
    lastUpdated: "2024-01-29",
    projectType: "Corporate Video",
    location: "Manchester, UK",
  },
  {
    referenceNumber: "YM2024003",
    clientName: "Emma & James",
    projectName: "Engagement Photo Session",
    currentStatus: "completed" as ProjectStatus,
    startDate: "2024-01-10",
    expectedCompletion: "2024-01-25",
    lastUpdated: "2024-01-26",
    projectType: "Photography",
    location: "Brighton, UK",
  },
];

export default function CheckStatusPage() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [project, setProject] = useState<any>(null);
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!referenceNumber.trim()) {
      setError("Please enter a reference number");
      return;
    }

    setIsSearching(true);
    setError("");
    setProject(null);

    try {
      const response = await fetch(`/api/projects/${referenceNumber.trim()}`);
      const data = await response.json();

      if (response.ok) {
        setProject(data);
      } else {
        setError(
          data.error ||
            "Project not found. Please check your reference number and try again."
        );
      }
    } catch (error) {
      console.error("Search error:", error);
      setError("Unable to search for project. Please try again later.");
    } finally {
      setIsSearching(false);
    }
  };

  const getCurrentStageIndex = (status: ProjectStatus) => {
    return projectStages.findIndex((stage) => stage.id === status);
  };

  const getStageIcon = (
    stageId: ProjectStatus,
    isCompleted: boolean,
    isCurrent: boolean
  ) => {
    const stage = projectStages.find((s) => s.id === stageId);
    if (!stage) return null;

    const IconComponent = stage.icon;
    let iconColor = "text-gray-400";

    if (isCompleted) {
      iconColor = "text-green-600";
    } else if (isCurrent) {
      iconColor = "text-[#70BFFF]";
    }

    return <IconComponent className={`h-5 w-5 ${iconColor}`} />;
  };

  return (
    <main className="min-h-screen relative bg-white overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>

      <Navigation />

      {/* Subtle Moving Purple Grid Background */}
      <div className="fixed inset-0 pointer-events-none moving-grid"></div>

      {/* Main content */}
      <div className="relative z-10">
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Check Project{" "}
                <span className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] bg-clip-text text-transparent">
                  Status
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enter your project reference number to track the progress of
                your project with Youu Media.
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl mb-8">
              <CardContent className="p-8">
                <div className="max-w-md mx-auto">
                  <Label
                    htmlFor="reference"
                    className="text-lg font-semibold text-gray-900 mb-2 block"
                  >
                    Project Reference Number
                  </Label>
                  <div className="flex gap-3">
                    <Input
                      id="reference"
                      type="text"
                      placeholder="e.g., YM2024001"
                      value={referenceNumber}
                      onChange={(e) => setReferenceNumber(e.target.value)}
                      className="flex-1 text-lg"
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <Button
                      onClick={handleSearch}
                      disabled={isSearching}
                      className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] hover:opacity-90 text-white px-6"
                    >
                      {isSearching ? (
                        <Clock className="h-5 w-5 animate-spin" />
                      ) : (
                        <Search className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                  {error && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-2">
                      <XCircle className="h-4 w-4" />
                      {error}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {project && (
              <div className="space-y-8">
                {/* Project Overview */}
                <Card className="bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-200 border-2 border-transparent hover:border-gradient-to-r hover:from-[#BE55FF] hover:to-[#70BFFF] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#BE55FF] to-[#70BFFF] rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#70BFFF] to-[#BE55FF] rounded-full blur-lg"></div>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                          {project.projectName}
                        </CardTitle>
                        <p className="text-gray-700 mb-4">
                          Client: {project.clientName}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white px-3 py-1">
                            {project.referenceNumber}
                          </Badge>
                          <Badge className="bg-gray-200 text-gray-800 px-3 py-1">
                            {project.projectType}
                          </Badge>
                          <Badge className="bg-gray-200 text-gray-800 px-3 py-1">
                            {project.location}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#70BFFF]" />
                        <span>
                          <strong>Started:</strong>{" "}
                          {project.startDate
                            ? new Date(project.startDate).toLocaleDateString()
                            : "Not started yet"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#70BFFF]" />
                        <span>
                          <strong>Expected:</strong>{" "}
                          {project.expectedCompletion
                            ? new Date(
                                project.expectedCompletion
                              ).toLocaleDateString()
                            : "TBD"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#70BFFF]" />
                        <span>
                          <strong>Last Updated:</strong>{" "}
                          {new Date(project.lastUpdated).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Project Timeline */}
                <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Project Timeline
                    </CardTitle>
                    <p className="text-gray-600">
                      Track your project's progress through each stage
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projectStages.map((stage, index) => {
                        const currentStageIndex = getCurrentStageIndex(
                          project.currentStatus
                        );
                        const isCompleted = index < currentStageIndex;
                        const isCurrent = index === currentStageIndex;
                        const isPending = index > currentStageIndex;

                        return (
                          <div
                            key={stage.id}
                            className="flex items-start gap-4 p-4 rounded-lg bg-gray-50/50"
                          >
                            <div className="flex-shrink-0">
                              {getStageIcon(stage.id, isCompleted, isCurrent)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h3
                                  className={`font-semibold ${
                                    isCompleted
                                      ? "text-green-600"
                                      : isCurrent
                                      ? "text-[#70BFFF]"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {stage.name}
                                </h3>
                                {isCompleted && (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                )}
                                {isCurrent && (
                                  <div className="w-2 h-2 bg-[#70BFFF] rounded-full animate-pulse" />
                                )}
                              </div>
                              <p
                                className={`text-sm ${
                                  isPending ? "text-gray-400" : "text-gray-700"
                                }`}
                              >
                                {stage.description}
                              </p>
                            </div>
                            {isCompleted && (
                              <Badge className="bg-green-100 text-green-800 border-green-200">
                                Completed
                              </Badge>
                            )}
                            {isCurrent && (
                              <Badge className="bg-[#70BFFF]/10 text-[#70BFFF] border-[#70BFFF]/20">
                                In Progress
                              </Badge>
                            )}
                            {isPending && (
                              <Badge className="bg-gray-100 text-gray-500 border-gray-200">
                                Pending
                              </Badge>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="bg-gradient-to-r from-[#70BFFF]/10 to-[#BE55FF]/10 border border-[#70BFFF]/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Need Help?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      If you have any questions about your project status or
                      need to make changes, please don't hesitate to contact us.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a
                          href="mailto:contact@youumedia.com"
                          className="text-[#70BFFF] hover:text-[#BE55FF] transition-colors"
                        >
                          contact@youumedia.com
                        </a>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <a
                          href="tel:+447958189989"
                          className="text-[#70BFFF] hover:text-[#BE55FF] transition-colors"
                        >
                          +447958189989
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Purple Grid Background Styles */}
      <style jsx>{`
        /* Subtle moving purple grid */
        .moving-grid {
          background-image: linear-gradient(
              rgba(147, 51, 234, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(147, 51, 234, 0.12) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        @media (max-width: 768px) {
          .moving-grid {
            background-size: 30px 30px;
          }
          @keyframes grid-move {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 30px 30px;
            }
          }
        }
      `}</style>
    </main>
  );
}
