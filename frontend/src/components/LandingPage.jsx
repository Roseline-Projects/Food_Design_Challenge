import { Link } from "react-router"
import { FcShop } from "react-icons/fc";
import { IconContext } from "react-icons/lib";
import { FcApproval } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

const Section = ({header, para, linkText, linkTo, backgroundColor, icon}) => {
  return (
    <div className={`${backgroundColor} p-12 inset-shadow-sm`}>
      <div className="w-2/3 mx-auto">
      <h3 className="text-3xl font-bold mb-4 w-fit">{header}</h3> {/* XL text bold left aligned */}
      <div className="flex items-center gap-2"> {/* flex row */}
        <div> {/* max width */}
          <IconContext.Provider value={{size: "8rem"}}>
            {/* <FcShop />   */}
            {icon}
          </IconContext.Provider>
          {/* <img src='' alt=''/> */}
        </div>
        <div className="p-6">
          <p className='text-xl text-black mb-2 font-light'>{para}</p> {/* slightly larger text? max width 2/3 */}
          <Link to={linkTo} className="block w-fit font-bold text-2xl px-6 py-2 bg-orange text-white shadow-md rounded-xl my-4">{linkText}</Link> {/* large buttons bold font borders and shadows wider than tall */}
        </div>
      </div>
      </div>

    </div>
  )
}

const EstimateStatSection = () => {
  return (
    <div className="text-center space-y-4 p-8"> {/* light background color? spans end to end*/}
      {/* <h3 className="text-4xl font-light">Families in Miami Receive</h3>
      <h4 className="text-7xl font-extrabold my-6 text-orange">$468</h4>
      <h3 className="text-4xl font-light">In Benefits On Average</h3> */}
      <h3 className="text-3xl mb-16 font-bold">The Profit</h3>
      <div className="w-2/3 mx-auto grid grid-cols-2">
        <div>
          <div className="w-fit mx-auto">
            <IconContext.Provider value={{size: '6rem'}}>
              <FcHome />
            </IconContext.Provider>
          </div>
          <h4 className="text-7xl font-extrabold my-6 text-orange">$274/mo</h4>
          <h3 className="text-lg font-light">Average In Benefits For Miami Households</h3>
        </div>
        <div>
          <div className="w-fit mx-auto">
            <IconContext.Provider value={{size: '6rem'}}>
              <FcPaid />
            </IconContext.Provider>
          </div>
          <h4 className="text-7xl font-extrabold my-6 text-orange">$6.12/day</h4>
          <h3 className="text-lg font-light">In Benefits Per Person on Average</h3>
        </div>
      </div>
    </div>
  )
}

const LandingPage = () => {
  const textConstants = {
    nearbyStores: {
      header: 'Find Nearby Stores',
      para: "If you're getting benefits but you don't know where to use them, you can locate SNAP-eligible near you with our locator tool.",
      linkText: 'Explore'
    },
    apply: {
      header: 'Apply for SNAP Benefits',
      para: 'Ready to get that bag? Apply for SNAP Today.',
      linkText: 'Apply Now'
    }
  }

const storesCard = {
  ...textConstants['nearbyStores'],
  linkTo: '/stores',
  backgroundColor: 'bg-green-50',
  icon: <FcShop />
}

const applyCard = {
  ...textConstants['apply'],
  linkTo: '/',
  backgroundColor: 'bg-orange-50',
  icon: <FcApproval />
}

  return (
    <div className="min-h-screen font-nunito text-dark-green mt-6">
      {/* Title Section */}
      <div className="h-1/2 text-center p-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-dark-green">SNAP Benefits Aid Tool</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-dark-green mt-2">
          Make Your Benefits Work For You
        </h2>
      </div>

      {/* Two-Column Info Section */}
      <div className="">
        {/* <div className="max-w-[650px] shadow-2xl">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div> */}
        <div className="space-y-10">
          <Section {...storesCard}/>
          <EstimateStatSection />
          <Section {...applyCard}/>

            {/* Problem Box */}
            {/* <div className="bg-cream rounded-lg shadow-md p-6 max-w-md text-center">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">The Problem</h3>
            <p className="text-sm md:text-base">
                13.7% of people living in Miami, Florida are food insecure, and the SNAP program has a 50% enrollment rate there. This leaves over 100k people food insecure and without assistance since they're not able to leverage these benefits.
            </p>
            </div> */}

            {/* Mission Box */}
            {/* <div className="bg-cream rounded-lg shadow-md p-6 max-w-md text-center">
            <h3 className="text-lg md:text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-sm md:text-base">
                Our solution is centered around helping SNAP-eligible Miamians in poverty to access and use these benefits most effectively to alleviate financial burden. We aim to onboard and assist!
            </p>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
