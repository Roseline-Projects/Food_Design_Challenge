import { Link } from "react-router";
import { FcShop, FcApproval, FcPaid, FcHome, FcAbout, FcSurvey } from "react-icons/fc";
import { IconContext } from "react-icons/lib";
import { landingTextConstants } from "../constants/TextConstants";
import { animate, motion, useInView, useMotionValue, useTransform, useAnimate } from "motion/react"
import { useEffect, useRef } from "react";
//bg-[url(https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]

const tempHandleScroll = () => {
  const section = document.getElementById("info-section");
  section.scrollIntoView({ behavior: "smooth" });
};

// Mobile-friendly hero section
const HeroSection2 = () => {
  return (
    <div className="min-h-[50vh] md:min-h-[280px] bg-[url('assets/spread_white.jpg')] pt-16 bg-cover bg-right bg-no-repeat relative ">
      {/* Grey tint overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-60 pointer-events-none"></div>
      
      <div className="px-4 py-24 md:px-0 md:grid md:items-center md:max-w-2/3 md:mx-30 md:py-25 relative z-20">
        <div className="py-8 md:py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4">
            Get Aid with SNAP
          </h1>
          <h2 className="text-xl md:text-3xl font-light text-white mb-4 md:mb-8">
            Expand Your Food Budget
          </h2>
          <Link
            onClick={tempHandleScroll}
            to=""
            className="inline-block text-lg md:text-xl font-bold px-6 md:px-8 py-2 md:py-3 mt-2 md:mt-4 bg-dark-green rounded-xl text-white transition hover:bg-green-200"
          >
            I'm Interested
          </Link>
        </div>
      </div>
    </div>
  );
};


const Section = ({
  header,
  para,
  para2,
  linkText,
  linkTo,
  backgroundColor,
  icon,
  icon2,
}) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{amount: 0.4, once: true}}
      className={`${backgroundColor} p-4 md:p-12 inset-shadow-sm`}
    >
      <div className="w-full md:w-2/3 mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 w-fit">{header}</h3>
        <div className="mb-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="mb-2 md:mb-0">
              <IconContext.Provider value={{ className: "w-24 h-24" }}>
                {icon}
              </IconContext.Provider>
            </div>
            <div className="p-2 md:p-6">
              <p className="text-lg md:text-xl text-black mb-2 font-light">
                {para}
              </p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="mt-2">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="mb-2 md:mb-0">
              <IconContext.Provider value={{ className: "w-24 h-24" }}>
                {icon2}
              </IconContext.Provider>
            </div>
            <div className="p-2 md:p-6">
              <p className="text-lg md:text-xl text-black mb-2 font-light">
                {para2}
              </p>
              <Link
                to={linkTo}
                className="block w-fit mx-auto md:mx-0 font-bold text-xl md:text-2xl px-4 md:px-6 py-2 bg-orange text-white shadow-md rounded-xl my-4"
              >
                {linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EstimateStatSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {amount: "all", once: true})
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))
  const controls = animate(count, 274, {duration: 4, onUpdate: latest => console.log(latest)})
  controls.pause()
  //very strange solution... probably a more acceptable way to do this

  useEffect(() => {
    if(isInView == true) {
      controls.play()
      return () => controls.stop()
    }
    console.log(isInView)
  }, [isInView])

  return (
    <div className="text-center space-y-4 p-2">
      <h3 className="text-3xl md:text-4xl mb-4 font-bold">The Gain</h3>
      <div className="w-full md:w-2/3 mx-auto space-y-12 md:grid md:grid-cols-2 md:space-y-0">
        <div className="mb-8 md:mb-0">
          <div className="w-fit mx-auto">
            <IconContext.Provider value={{ className: "w-24 h-24" }}>
              <FcHome />
            </IconContext.Provider>
          </div>
            <h4
              ref={ref}
              className="text-5xl md:text-7xl font-extrabold my-3 md:my-6 text-orange"
            >
              <span>$</span>
              <motion.span>{rounded}</motion.span>
              <span>/mo</span>
            </h4>            
          <h3 className="text-base md:text-lg font-light px-4">Average In Benefits For Miami Households</h3>
        </div>
        <div>
          <div className="w-fit mx-auto">
            <IconContext.Provider value={{ className: "w-24 h-24" }}>
              <FcPaid />
            </IconContext.Provider>
          </div>
          <h4 className="text-5xl md:text-7xl font-extrabold my-3 md:my-6 text-orange">
            $6.12/day
          </h4>
          <h3 className="text-base md:text-lg font-light px-4">
            In Benefits Per Person on Average
          </h3>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const storesCard = {
    ...landingTextConstants["nearbyStores"],
    linkTo: "/stores",
    backgroundColor: "bg-green-100",
    icon: <FcShop />,
    icon2: <FcAbout />,
  };

  const applyCard = {
    ...landingTextConstants["apply"],
    linkTo: "/application",
    backgroundColor: "bg-orange-100",
    icon: <FcSurvey />,
    icon2: <FcApproval />,
  };

  return (
    <div className="min-h-screen font-nunito text-dark-green">
      <HeroSection2 />
      <div>
        <div>
          <p className="text-lg md:text-xl bg-orange-100 p-4 md:p-18 font-medium inset-shadow-sm">
            13.7% of people living in Miami, Florida are food insecure, and the
            SNAP program has a 50% enrollment rate there. This leaves over{" "}
            <b className="font-semibold">100,000 people</b> food insecure and
            without assistance since they're not able to leverage these benefits.
          </p>
        </div>
        <div id="info-section" className="space-y-6 md:space-y-10">
          <Section {...storesCard} />
          <EstimateStatSection />
          <Section {...applyCard} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
