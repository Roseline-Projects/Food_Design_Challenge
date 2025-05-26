import { useState } from "react"
import NavBar from "./NavBar"

const ApplicationPage = () => {
    const[formData, setFormData] = useState({})
    const[eli, setIsEli] = useState(null)
    const formItems = [
        "Are you a resident of Florida?",
        "Are you a U.S. citizen or qualified noncitizen?",
        "Do you have a social security number (SSN)?",
        "Do you have proof of identity? In Florida this is a driver's license, Florida ID card, US Passport, Military ID, or Student ID.",
        "Are you between the ages 16 - 59 and work? You are exempt from the work requirement if you are unable to, are caring for a child or incapacitated person, or are a student.",
        "Is your gross income less than or equal to 200% of the federal poverty level of $37,650?",
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        if(Object.keys(formData).length == 6) {
            setIsEli(true)
        } else {
            setIsEli(false)
        }
    }

    return (
        <>
        <div className="bg-cream flex flex-col justify-center items-center min-h-screen md:h-screen md:flex-row">
            <div className="mt-12 w-full md:w-1/3 min-h-[300px] md:min-h-screen bg-indigo-900 relative overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center opacity-80"
                    src='https://images.unsplash.com/photo-1531880567437-5bfef553f822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="Decorative food image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                <div className="absolute top-26 left-8 right-8 text-white">
                    <h2 className="w-full text-left font-bold text-4xl mb-8">Check Your Eligibility</h2>
                    <p className="font-thin">Having trouble determining if you're eligible for benefits? We've provided a checklist with explanations of each question to help with that. You must meet all the listed requirements unless you fall under an exception. Check if you qualify by filling out the form and clicking "Check Eligibility".</p>
                </div>
            </div>

            <div className="w-2/3 flex justify-center p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h4 className="block font-bold text-lg mb-4">Guided Eligibility Checklist</h4>
                    <ul>
                        {
                            formItems.map((item, index) => (
                                <li key={index}>
                                    <label className="text-lg">
                                        <input 
                                            className="font-black mr-2"
                                            type='checkbox'
                                            name={item}
                                            checked={formData[item] || false}
                                            onChange={handleChange}
                                        />
                                        {item}
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="bg-medium-green px-4 py-2 rounded-xl font-bold mt-4 cursor-pointer" type="submit">Check Eligibility</button>

                    {
                        eli != null && 
                        <div>
                            {
                                eli == true ? (
                                    <div>
                                        <p>You are able to receive benefits! Fill out a SNAP application using the link provided:</p>
                                            <a
                                                className="underline text-medium-green"
                                                href="https://www.myflfamilies.com/services/public-assistance/supplemental-nutrition-assistance-program-snap"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Florida SNAP Application
                                            </a>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Based on the information you entered, you are not able to receive benefits at this time.</p>
                                            <a
                                                    className="underline text-medium-green"
                                                    href="https://www.feedingflorida.org/feeding-florida/florida-food-banks"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Explore Other Food Options
                                                </a>
                                    </div>
                                )
                            }
                        </div>
                    }
                </form>
            </div>
            
        </div>
        </>
    )
}

export default ApplicationPage