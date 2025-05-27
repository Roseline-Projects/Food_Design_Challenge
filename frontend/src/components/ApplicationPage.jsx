const SnapInfoPage = () => {
    return (
      <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 space-y-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#2D6A4F]">
              How does it work?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4 p-6 rounded-xl hover:bg-green-50 transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-green-100 p-4 rounded-full mb-2">
                  <img
                    src="/icons/apply.png"
                    alt="Apply"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D6A4F]">
                  1. Apply
                </h3>
                <p className="text-lg sm:text-xl text-gray-700">
                  Your local office will call you within 1–2 weeks for an
                  eligibility interview.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-xl hover:bg-green-50 transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-green-100 p-4 rounded-full mb-2">
                  <img
                    src="/icons/creditcard.png"
                    alt="Get benefits"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D6A4F]">
                  2. Get benefits
                </h3>
                <p className="text-lg sm:text-xl text-gray-700">
                  If approved, you'll get a SNAP card for groceries — usually
                  within 10 days.
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-xl hover:bg-green-50 transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="bg-green-100 p-4 rounded-full mb-2">
                  <img
                    src="/icons/groceries.png"
                    alt="Buy groceries"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#2D6A4F]">
                  3. Buy groceries
                </h3>
                <p className="text-lg sm:text-xl text-gray-700">
                  Use your SNAP card at most grocery stores and{" "}
                  <a
                    href="https://www.fns.usda.gov/ebt/where-can-i-use-ebt"
                    className="text-green-700 underline hover:text-green-800 transition-colors"
                  >
                    farmers' markets
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
  
          <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[#2D6A4F]">
              What will I need?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-green-50 p-6 rounded-xl space-y-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <img
                    src="/icons/ID.png"
                    alt="ID"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-700">
                  A copy of your ID
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl space-y-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <img
                    src="/icons/income.png"
                    alt="Income"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-700">
                  Proof of any income
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl space-y-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <img
                    src="/icons/status.png"
                    alt="Immigration"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-700">
                  Proof of immigration status
                  <br />
                  <span className="text-sm text-gray-500">For non-citizens</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="px-8 py-3 rounded-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center space-x-2 transform hover:scale-105">
                <span>Apply Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default SnapInfoPage;
  