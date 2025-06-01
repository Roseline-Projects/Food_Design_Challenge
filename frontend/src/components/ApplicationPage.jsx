import { LuSparkles } from "react-icons/lu";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router";
import { stepCardInfo } from "../constants/TextConstants";
import Chatbot from "./Chatbot";

// Page Header
const Header = () => {
  return (
    <div className="pt-6 mt-10 md:mt-0 sm:pt-10 bg-orange-300 mb-0">
      <div className="relative bg-orange-300 pb-8">
        <h1 className="text-center relative z-10 pt-6 lg:pb-16 lg:text-left lg:pl-18 text-white px-4 md:px-12 text-3xl sm:text-4xl md:text-7xl font-bold">
          Let's Get Started
        </h1>
        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fillOpacity="1" d="M0,288L120,282.7C240,277,480,267,720,266.7C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
    </div>
  );
};

// During Your Application Section
const DuringSection = () => {
  return (
    <section className="bg-white shadow-sm p-4 sm:p-8 md:p-12 my-8 md:my-14 rounded-2xl mx-4 sm:mx-0">
      <h3 className="text-2xl sm:text-4xl text-dark-green font-bold text-center mb-6 sm:mb-10">
        During Your Application
      </h3>
      <div className="rounded-2xl px-4 sm:px-10 py-8 sm:py-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm">
        <div className="size-[54px] rounded-full mb-4 md:mb-0">
          <IconContext.Provider value={{ color: "#ED8530", size: "3rem" }}>
            <LuSparkles />
          </IconContext.Provider>
        </div>
        <div className="px-2 sm:px-6">
          <h3 className="text-2xl sm:text-3xl text-dark-green font-semibold mb-4 text-center md:text-left">
            Your Personal Assistant
          </h3>
          <p className="text-lg sm:text-xl font-light">
            For any questions you may have, like whether you qualify for a
            certain exception or what IDs and documents you may use, our AI Agent
            will be available to help you 24/7!
            <br />
            <br />
            <b>Access it using the icon in the bottom right corner.</b>
          </p>
        </div>
      </div>
    </section>
  );
};

// Displays the numbered cards at the After App section
const StepCard = ({ header, para, number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 items-center p-1 md:gap-10">
      <div className="text-center md:text-right">
        <h4 className="text-6xl sm:text-8xl text-orange md:mx-6">{number}</h4>
      </div>
      <div className="col-span-3 px-2 mt-2 md:mt-0 text-center md:text-left">
        <h5 className="text-xl sm:text-2xl text-dark-green mb-2 sm:mb-3">
          {header}
        </h5>
        <p className="font-light text-lg sm:text-xl">{para}</p>
      </div>
    </div>
  );
};

// After Application Section
const AfterSection = () => {
  return (
    <section className="bg-white shadow-sm p-4 sm:p-8 md:p-12 my-8 md:my-14 rounded-2xl mx-4 sm:mx-0">
      <h3 className="text-2xl sm:text-4xl text-dark-green font-bold text-center mb-6 sm:mb-10">
        After You Submit
      </h3>
      <div>
        <ul className="space-y-8 sm:space-y-10">
          {Object.entries(stepCardInfo).map((step, index) => (
            <li key={index}>
              <StepCard {...step[1]} />
            </li>
          ))}
        </ul>
      </div>
      <Link
        to="/stores"
        className="block w-fit mx-auto mt-8 mb-2 px-6 sm:px-8 py-3 rounded-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center space-x-2 transform hover:scale-105"
      >
        Find Stores
      </Link>
    </section>
  );
};

// Main
const SnapInfoPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 sm:py-12 space-y-8 sm:space-y-16 min-h-screen">
      <Header />
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <section className="bg-white rounded-2xl shadow-sm p-4 sm:p-10">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#2D6A4F]">
              How does it work?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl hover:shadow-md transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-3 sm:p-4 rounded-full mb-2">
                  <img
                    src="/icons/apply.png"
                    alt="Apply"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl sm:text-3xl font-semibold text-[#2D6A4F]">
                  1. Apply
                </h3>
                <p className="text-base sm:text-xl text-gray-700">
                  You'll be interviewed by local officials to determine eligibility within 1-2 weeks.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl hover:shadow-md transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-3 sm:p-4 rounded-full mb-2">
                  <img
                    src="/icons/creditcard.png"
                    alt="Get benefits"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl sm:text-3xl font-semibold text-[#2D6A4F]">
                  2. Get benefits
                </h3>
                <p className="text-base sm:text-xl text-gray-700">
                  If approved, you'll get an EBT card to use your benefits for groceries.
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl hover:shadow-md transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="p-3 sm:p-4 rounded-full mb-2">
                  <img
                    src="/icons/groceries.png"
                    alt="Buy groceries"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-xl sm:text-3xl font-semibold text-[#2D6A4F]">
                  3. Buy groceries
                </h3>
                <p className="text-base sm:text-xl text-gray-700">
                  Use your SNAP card at supermarkets, stores, {" "}
                  <a
                    href="https://www.fns.usda.gov/ebt/where-can-i-use-ebt"
                    className="text-green-700 underline hover:text-green-800 transition-colors"
                  >
                    farmers' markets.
                  </a>
                  {" "}
                  You can locate them using our <Link className="underline text-green-700 hover:text-green-800 transition-colors" to='/stores'>store locator tool</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm p-4 sm:p-10 mt-8 sm:mt-12">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#2D6A4F]">
              What will I need?
            </h2>
            <div className="w-full sm:w-3/4 mx-auto">
              <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-6 sm:mb-10">
                <div className="p-4 sm:p-6 rounded-xl space-y-3 sm:space-y-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                  <div className="bg-white p-3 sm:p-4 rounded-full shadow-sm">
                    <img
                      src="/icons/ID.png"
                      alt="ID"
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="text-sm sm:text-xl font-medium text-gray-700">
                    A copy of your ID
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-xl space-y-3 sm:space-y-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                  <div className="bg-white p-3 sm:p-4 rounded-full shadow-sm">
                    <img
                      src="/icons/income.png"
                      alt="Income"
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="text-sm sm:text-xl font-medium text-gray-700">
                    Proof of any income
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-xl space-y-3 sm:space-y-4 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                  <div className="bg-white p-3 sm:p-4 rounded-full shadow-sm">
                    <img
                      src="/icons/status.png"
                      alt="Immigration"
                      className="w-16 h-16"
                    />
                  </div>
                  <p className="text-sm sm:text-xl font-medium text-gray-700">
                    Proof of immigration status
                    <br />
                    <span className="text-xs sm:text-sm text-gray-500">
                      For non-citizens
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center space-x-2 transform hover:scale-105">
                <span>Apply Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
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
          <DuringSection />
          <AfterSection />
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default SnapInfoPage;
