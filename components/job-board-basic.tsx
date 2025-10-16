import { MapPin, Calendar, Clock, DollarSign, Users } from "lucide-react";

export function JobBoardBasic() {
  const opportunities = [
    {
      id: 1,
      title: "Wedding Videographer - Luxury Venue",
      category: "Event Videography",
      priority: "high",
      location: "London, UK",
      date: "March 15, 2024",
      duration: "8 hours",
      pay: "£800-1200",
      description:
        "Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required.",
      requirements: [
        "5+ years experience",
        "Own equipment",
        "Portfolio required",
      ],
      teamSize: "2-3 people",
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
      description:
        "Edit corporate brand film with motion graphics and color grading. Fast turnaround needed.",
      requirements: [
        "Adobe Premiere Pro",
        "After Effects",
        "Color grading experience",
      ],
      teamSize: "1 person",
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
      description:
        "Product photography for tech startup launch. Studio setup with professional lighting and high-res delivery required.",
      requirements: [
        "Professional studio lighting",
        "High-resolution camera",
        "Product styling experience",
      ],
      teamSize: "1-2 people",
    },
  ];

  const getPriorityClasses = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500 text-white";
      case "medium":
        return "bg-yellow-400 text-black";
      case "low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-brand animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Example <span className="text-[#70BFFF]">Opportunities</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exciting freelance opportunities. Apply to join our team to
            see real job postings and start applying!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((job) => (
            <div
              key={job.id}
              className="bg-[#E8F4FD] rounded-xl shadow-sm border border-[#70BFFF]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex space-x-2">
                    <span className="bg-[#BE55FF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {job.category}
                    </span>
                    <span
                      className={`${getPriorityClasses(
                        job.priority
                      )} text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {job.priority} priority
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-gray-700 text-sm mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#70BFFF]" />{" "}
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[#70BFFF]" />{" "}
                    {job.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-[#70BFFF]" />{" "}
                    {job.duration}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-[#70BFFF]" />{" "}
                    {job.pay}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <h4 className="font-semibold text-gray-800 mb-2">
                  Requirements:
                </h4>
                <ul className="list-disc list-inside text-gray-700 text-sm mb-6">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>

                <div className="flex items-center text-gray-700 text-sm mb-6">
                  <Users className="h-4 w-4 mr-2 text-[#70BFFF]" /> Team size:{" "}
                  {job.teamSize}
                </div>

                <div className="text-right">
                  <a
                    href="/join-team"
                    className="inline-block bg-[#70BFFF] text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-[#70BFFF]/90 transition-colors duration-300 shadow-sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-[#70BFFF]/10 to-[#BE55FF]/10 rounded-xl p-10 border border-[#70BFFF]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Creative Team?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            The opportunities above are examples. Apply now to join our creative
            team and access real job opportunities!
          </p>
          <a
            href="/join-team"
            className="inline-block bg-gradient-to-r from-[#BE55FF] to-[#70BFFF] text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            Join the Youu Media Creative Team
          </a>
        </div>
      </div>
    </section>
  );
}
