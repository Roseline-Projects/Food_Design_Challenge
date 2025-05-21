const LandingPage = () => {
  return (
    <div className="min-h-screen font-nunito text-dark-green bg-green-50 mt-6">
      {/* Title Section */}
      <div className="h-1/2 bg-orange text-center p-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">SNAP Benefits Aid Tool</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mt-2">
          Make Your Benefits Work For You
        </h2>
      </div>

      {/* Two-Column Info Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 p-12">
        <div className="max-w-[650px] shadow-2xl">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="space-y-4">
            {/* Problem Box */}
            <div className="bg-cream rounded-lg shadow-md p-6 max-w-md text-center">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">The Problem</h3>
            <p className="text-sm md:text-base">
                13.7% of people living in Miami, Florida are food insecure, and the SNAP program has a 50% enrollment rate there. This leaves over 100k people food insecure and without assistance since they're not able to leverage these benefits.
            </p>
            </div>

            {/* Mission Box */}
            <div className="bg-cream rounded-lg shadow-md p-6 max-w-md text-center">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-sm md:text-base">
                Our solution is centered around helping SNAP-eligible Miamians in poverty to access and use these benefits most effectively to alleviate financial burden. We aim to onboard and assist!
            </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
