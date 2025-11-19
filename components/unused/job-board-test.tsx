'use client'

export function JobBoardTest() {
  const handleApplyClick = () => {
    console.log('Apply button clicked!')
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
            Test version - Apply Now buttons should link to /join-team
          </p>
        </div>

        {/* Simple test card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Wedding Videographer - Luxury Venue</h3>
            <p className="text-gray-600 mb-4">Test job description</p>
            
            <button 
              onClick={handleApplyClick}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Test button outside card */}
        <div className="text-center mt-8">
          <button 
            onClick={() => window.location.href = '/join-team'}
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
          >
            Direct Test Button → /join-team
          </button>
        </div>
      </div>
    </section>
  )
}
