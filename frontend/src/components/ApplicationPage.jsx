import { LuSparkles } from "react-icons/lu";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router"
import { stepCardInfo } from "../constants/TextConstants";

//<svg className="block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#0099ff" fill-opacity="1" d="M0,320L48,314.7C96,309,192,299,288,288C384,277,480,267,576,272C672,277,768,299,864,288C960,277,1056,235,1152,224C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

//Page Header
const Header = () => {
  return(
    <div className="pt-10 bg-orange-300">
      <div className="relative bg-orange-300 pb-6 lg:pb-0">
        <h1 className="lg:absolute top-1 left-0 pl-18 text-white md:px-12 text-4xl md:text-7xl font-bold">Let's Get Started</h1>
        <svg className="hidden lg:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fillOpacity="1" d="M0,288L80,282.7C160,277,320,267,480,240C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        {/* <svg className="block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,245.3C384,235,480,213,576,213.3C672,213,768,235,864,256C960,277,1056,299,1152,282.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      </div>
    </div>
  )
}

//=====================================================================================================================================
//During Your Application Section
const DuringSection = () => {
  return(
    <section className="bg-white shadow-sm p-12 my-14 rounded-2xl">
      <h3 className="text-2xl sm:text-4xl text-dark-green font-bold text-center mb-10">During Your Application</h3>
      <div className="rounded-2xl px-10 py-16 md:flex items-center gap-10 shadow-sm">
        <div className="size-[54px] rounded-full mb-10 md:mb-0">
          <IconContext.Provider value={{color: '#ED8530', size:'5rem'}}>
            <LuSparkles />
          </IconContext.Provider>
        </div>
        <div className="px-6 ">
          <h3 className="text-3xl text-dark-green font-semibold mb-4">Your Personal Assisstant</h3>
          <p className="text-xl font-light">
            For any questions you may have, like whether you qualify for a certain exception or what IDs and documents you may use, our AI Agent will be available to help you 24/7!
            <br/>
            <br/>
            <b>Access it using the icon in the bottom left corner.</b>
            </p>
        </div>
      </div>
    </section>
  )
}

//=====================================================================================================================================
//Displays the numbered cards at the After App section
const StepCard = ({header, para, number}) => {
  return (
    <div className="grid md:grid-cols-4 items-center p-1 md:gap-10">
      <div>
        <h4 className="text-8xl text-right text-orange md:mx-6">{number}</h4>
      </div>
      <div className="col-span-3 px-2">
        <h5 className="text-2xl text-dark-green mb-3">{header}</h5>
        <p className="font-light text-xl">{para}</p>
      </div>
    </div>
  )
}

//=====================================================================================================================================
//After Application Section
const AfterSection = () => {
  return(
    <section className="bg-white shadow-sm p-12 my-14 rounded-2xl">
      <h3 className="text-2xl sm:text-4xl text-dark-green font-bold text-center mb-10">After You Submit</h3>
      <div>
        <ul className="space-y-10">
          {
            Object.entries(stepCardInfo).map((step, index) => (
              <li key={index}>
                <StepCard {...step[1]} />
              </li>
            ))
          }
        </ul>
      </div>
      <Link to='/stores' className="block w-fit mx-auto mt-8 mb-2 px-8 py-3 rounded-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center space-x-2 transform hover:scale-105">
        Find Stores
      </Link>
    </section>
  )
}

//=====================================================================================================================================
//=====================================================================================================================================
//Main

const SnapInfoPage = () => {
    return (
      <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-12 space-y-16 min-h-screen">
        <Header />


        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">


            <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#2D6A4F]">
                How does it work?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="space-y-4 p-6 rounded-xl hover:shadow-md transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="p-4 rounded-full mb-2">
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
                <div className="space-y-4 p-6 rounded-xl hover:shadow-md transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="p-4 rounded-full mb-2">
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
                <div className="space-y-4 p-6 rounded-xl hover:shadow-md transition-colors duration-300 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="p-4 rounded-full mb-2">
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#2D6A4F]">
                What will I need?
              </h2>
              <div className="w-3/4 mx-auto">
                <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
                  <div className="p-6 rounded-xl space-y-4 flex flex-col items-center text-center hover:shadow-md  transition-all duration-300">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <img
                        src="/icons/ID.png"
                        alt="ID"
                        className="w-10 h-10 sm:w-16 sm:h-16"
                      />
                    </div>
                    <p className="text-base sm:text-xl font-medium text-gray-700">
                      A copy of your ID
                    </p>
                  </div>
                  <div className="p-6 rounded-xl space-y-4 flex flex-col items-center text-center hover:shadow-md  transition-all duration-300">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <img
                        src="/icons/income.png"
                        alt="Income"
                        className="w-10 h-10 sm:w-16 sm:h-16"
                      />
                    </div>
                    <p className="text-base sm:text-xl font-medium text-gray-700">
                      Proof of any income
                    </p>
                  </div>
                  <div className="p-6 rounded-xl space-y-4 flex flex-col items-center text-center hover:shadow-md  transition-all duration-300">
                    <div className="bg-white p-4 rounded-full shadow-sm">
                      <img
                        src="/icons/status.png"
                        alt="Immigration"
                        className="w-10 h-10 sm:w-16 sm:h-16"
                      />
                    </div>
                    <p className="text-base sm:text-xl font-medium text-gray-700">
                      Proof of immigration status
                      <br />
                      <span className="text-sm text-gray-500">For non-citizens</span>
                    </p>
                  </div>
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

            <DuringSection />
            <AfterSection />

          </div>
        </div>
      </div>
    );
  };
  
  export default SnapInfoPage;
  