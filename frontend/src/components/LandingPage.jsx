import { Link } from "react-router"
import { FcShop } from "react-icons/fc";
import { IconContext } from "react-icons/lib";
import { FcApproval } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcSurvey } from "react-icons/fc";
import { landingTextConstants } from "../constants/TextConstants";
//bg-[url(https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
const tempHandleScroll = () => {
  const section = document.getElementById('info-section')
  section.scrollIntoView({behavior: "smooth"})
}

//Original - scrapped
const Hero = () => { {/* Completely overhaul format , no gray */}
  return (
    <div className={`bg-gray-200 relative z-20 bg-no-repeat bg-right bg-[url('assets/heroimg_resize.jpg')]`}>
      <div className="absolute inset-0 -z-10 bg-gray-900 opacity-60"></div>
      <div className="grid max-w-2/3 mx-auto py-28">
        <div className="">
          <h1 className="text-6xl font-bold text-orange mb-4">Expand Your Food Budget <br/> with SNAP</h1>
          <h2 className="text-3xl font-light text-orange mb-8">Aspire, Apply, Arrive</h2>
          <Link 
            onClick={tempHandleScroll} 
            to=''
            className="inline-block text-xl font-bold px-8 py-3 mt-4 bg-dark-green rounded-xl text-white transition hover:bg-green-200">I'm Interested</Link>
        </div>
      </div>
    </div>
  )
}

//Concept 2
const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[url('assets/closeup.jpg')] bg-cover bg-no-repeat">
      <div className="grid max-w-2/3 mx-auto py-28">
        <h1 className="text-6xl font-bold text-orange text-shadow-lg text-center mb-4 mt-28">Expand Your Food Budget</h1>
      </div>
    </div>
  )
}

//Concept 3 - food spread
const HeroSection2 = () => {
  return (
    <div className="min-h-screen bg-[url('assets/spread_white.jpg')] bg-contain bg-right bg-no-repeat">
      <div className="grid items-center max-w-2/3 mx-30 py-38">
        <div className="py-16">
          <h1 className="text-6xl font-bold text-orange mb-4">Get Aid with SNAP</h1>
          <h2 className="text-3xl font-light text-orange mb-8">Expand Your Food Budget</h2>
          <Link 
            onClick={tempHandleScroll} 
            to=''
            className="inline-block text-xl font-bold px-8 py-3 mt-4 bg-dark-green rounded-xl text-white transition hover:bg-green-200">I'm Interested</Link>
        </div>
      </div>
    </div>
  )
}

//concept 4 - bento boxes
const HeroSection3 = () => {
  return (
    <div className="max-h-screen grid grid-cols-2 bg-orange-50">
      <div className="">
        <div className="grid items-center mx-28 py-48">
          <div className="py-16">
            <h1 className="text-6xl font-bold text-orange mb-4">Get Aid with SNAP</h1>
            <h2 className="text-3xl font-light text-orange mb-8">Expand Your Food Budget</h2>
            <Link 
              onClick={tempHandleScroll} 
              to=''
              className="inline-block text-xl font-bold px-8 py-3 mt-4 bg-dark-green rounded-xl text-white transition hover:bg-green-200">I'm Interested</Link>
          </div>
        </div>
      </div>
      <div className="max-h-screen grid grid-cols-2 grid-rows-4 gap-10">
        <div className="row-span-2 row-start-2 w-full">
          <img className="object-cover w-full max-h-full mx-auto rounded-2xl border-1 border-black shadow-2xl" src='https://images.unsplash.com/photo-1505253668822-42074d58a7c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>
        <div className="row-start-4">
          <img className="object-cover w-full max-h-full mx-auto rounded-2xl border-1 border-black shadow-2xl" src='https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>
        <div className="row-start-1 col-start-2 row-span-2 self-end">
          <img className="object-cover w-full max-h-full mx-auto rounded-2xl border-1 border-black shadow-2xl" src='https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
        <div className="row-start-3 col-start-2 row-span-2">
          <img className="object-cover w-full max-h-full mx-auto rounded-2xl border-1 border-black shadow-2xl" src='https://images.unsplash.com/photo-1712334985979-94946a4e2a6a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
      </div>
    </div>
  )
}


const Section = ({header, para, para2, linkText, linkTo, backgroundColor, icon, icon2}) => {
  return (
    <div className={`${backgroundColor} p-12 inset-shadow-sm`}>
      <div className="w-2/3 mx-auto">
      <h3 className="text-3xl font-bold mb-4 w-fit">{header}</h3> {/* XL text bold left aligned */}
      <div className="mb-4">
        <div className="flex items-center gap-2"> {/* flex row */}
          <div> {/* max width */}
            <IconContext.Provider value={{size: "8rem"}}>
              {icon}
            </IconContext.Provider>
          </div>
          <div className="p-6">
            <p className='text-xl text-black mb-2 font-light'>{para}</p> {/* slightly larger text? max width 2/3 */}
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="mt-2">
        <div className="flex items-center gap-2"> {/* flex row */}
        <div> {/* max width */}
          <IconContext.Provider value={{size: "8rem"}}>
            {icon2}
          </IconContext.Provider>
        </div>
        <div className="p-6">
          <p className='text-xl text-black mb-2 font-light'>{para2}</p> {/* slightly larger text? max width 2/3 */}
          <Link to={linkTo} className="block w-fit font-bold text-2xl px-6 py-2 bg-orange text-white shadow-md rounded-xl my-4">{linkText}</Link> {/* large buttons bold font borders and shadows wider than tall */}
        </div>
      </div>
      </div>
      </div>

    </div>
  )
}

const EstimateStatSection = () => {
  return (
    <div className="text-center space-y-4 p-2"> {/* light background color? spans end to end*/}
      {/* <h3 className="text-4xl font-light">Families in Miami Receive</h3>
      <h4 className="text-7xl font-extrabold my-6 text-orange">$468</h4>
      <h3 className="text-4xl font-light">In Benefits On Average</h3> */}
      <h3 className="text-4xl mb-4 font-bold">The Gain</h3>
      <div className="w-2/3 mx-auto space-y-12 md:grid grid-cols-2">
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

const storesCard = {
  ...landingTextConstants['nearbyStores'],
  linkTo: '/stores',
  backgroundColor: 'bg-green-100',
  icon: <FcShop />,
  icon2: <FcAbout />
}

const applyCard = {
  ...landingTextConstants['apply'],
  linkTo: '/application',
  backgroundColor: 'bg-orange-100',
  icon: <FcSurvey />,
  icon2: <FcApproval />
}

  //13.7% of people living in Miami, Florida are food insecure, and the SNAP program has a 50% enrollment rate there. This leaves over 100,000 people food insecure and without assistance since they're not able to leverage these benefits.
  //Our solution is centered around helping SNAP-eligible Miamians in poverty to access and use these benefits most effectively to alleviate financial burden. We aim to onboard and assist!
  return (
    <div className="min-h-screen font-nunito text-dark-green">
      <HeroSection2 />
      <div className="">
        <div>
          <p className="text-xl p-18 font-light inset-shadow-sm">13.7% of people living in Miami, Florida are food insecure, and the SNAP program has a 50% enrollment rate there. This leaves over <b className="font-semibold">100,000 people</b> food insecure and without assistance since they're not able to leverage these benefits.</p>
        </div>
        <div id="info-section" className="space-y-10">
          <Section {...storesCard}/>
          <EstimateStatSection />
          <Section {...applyCard}/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
