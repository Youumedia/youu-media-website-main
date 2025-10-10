import { MapPin, Calendar, Clock, PoundSterling, Users } from "lucide-react"

const availableJobs = [
  {
    id: 1,
    title: "Wedding Videographer - Luxury Venue",
    category: "Event Videography",
    priority: "high",
    location: "London, UK",
    date: "March 15, 2024",
    duration: "8 hours",
    pay: "£800-1200",
    description: "Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required.",
    requirements: [
      "5+ years experience",
      "Own equipment", 
      "Portfolio required"
    ],
    teamSize: "2-3 people"
  },
  {
    id: 2,
    title: "Corporate Brand Video Editor",
    category: "Video Editing",
    priority: "medium",
    location: "Remote",
    date: "March 20, 2024",
    duration: "3-5 days",
    pay: "£1500-2000",
    description: "Edit corporate brand film with motion graphics and color grading. Fast turnaround needed.",
    requirements: [
      "Adobe Premiere Pro",
      "After Effects",
      "Color grading experience"
    ],
    teamSize: "1 person"
  },
  {
    id: 3,
    title: "Product Photography - Tech Launch",
    category: "Photography",
    priority: "low",
    location: "London, UK",
    date: "March 25, 2024",
    duration: "4 hours",
    pay: "£600-900",
    description: "Product photography for tech startup launch. Studio setup with professional lighting and high-res delivery required.",
    requirements: [
      "Professional photography experience",
      "Studio lighting knowledge",
      "High-res delivery capability"
    ],
    teamSize: "1-2 people"
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500 text-white"
    case "medium":
      return "bg-yellow-500 text-black"
    case "low":
      return "bg-green-500 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export function AvailableOpportunities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Available <span className="text-[#70BFFF]">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This is how our job opportunities will be sent out to our team. Apply directly or express interest for future opportunities.
          </p>
        </div>

        {/* Job cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {availableJobs.map((job) => (
            <div key={job.id} className="bg-[#E8F4FD] rounded-lg p-6 border border-[#D1E7DD] hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-black">{job.title}</h3>
                <div className="flex gap-2">
                  <span className="bg-[#BE55FF] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {job.category}
                  </span>
                  <span className={`${getPriorityColor(job.priority)} px-3 py-1 rounded-full text-sm font-medium`}>
                    {job.priority} priority
                  </span>
                </div>
              </div>

              {/* Job details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{job.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{job.duration}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <PoundSterling className="h-4 w-4 mr-2" />
                  <span className="text-sm">{job.pay}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{job.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-700">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">Team size: {job.teamSize}</span>
                </div>
                <button className="bg-[#70BFFF] hover:bg-[#5A9FCC] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
