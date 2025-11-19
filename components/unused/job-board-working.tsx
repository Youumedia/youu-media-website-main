'use client'

export function JobBoardWorking() {
  const handleApplyClick = () => {
    console.log('Button clicked - navigating to /join-team')
    window.location.href = '/join-team'
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Available Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exciting freelance opportunities. Apply to join our team to see real job postings and start applying!
          </p>
        </div>

        {/* Simple job cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Job Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Wedding Videographer - Luxury Venue</h3>
            <p className="text-gray-600 mb-4">Seeking experienced wedding videographer for high-end ceremony and reception. Multi-camera setup required.</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">London, UK</span>
              <span className="text-sm text-gray-500">March 15, 2024</span>
            </div>
            <button 
              onClick={handleApplyClick}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Corporate Brand Video Editor</h3>
            <p className="text-gray-600 mb-4">Edit corporate brand film with motion graphics and color grading. Fast turnaround needed for client presentation.</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">Remote</span>
              <span className="text-sm text-gray-500">March 20, 2024</span>
            </div>
            <button 
              onClick={handleApplyClick}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Product Photography - Tech Launch</h3>
            <p className="text-gray-600 mb-4">Product photography for tech startup launch. Studio setup with professional lighting and high-res delivery required.</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">London, UK</span>
              <span className="text-sm text-gray-500">March 25, 2024</span>
            </div>
            <button 
              onClick={handleApplyClick}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Ready to Join Our Creative Team?
          </h3>
          <p className="text-gray-600 mb-4">
            The opportunities above are examples. Apply now to join our creative team and access real job opportunities!
          </p>
          <button 
            onClick={handleApplyClick}
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Join the Youu Media Creative Team
          </button>
        </div>
      </div>
    </section>
  )
}
