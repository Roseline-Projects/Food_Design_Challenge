import { useState } from "react"
import { setupPageTextConstants } from "../constants/TextConstants"
import { useLocation, useNavigate } from "react-router"
const SetupPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const destinationPage = location.state?.destination

    const [formData, setFormData] = useState(
        {
            name: "",
            city: "",
            budget: 0,
            dietaryNeeds: {
                glutenFree: false,
                dairyFree: false,
                vegan: false,
                vegetarian: false,
                nutFree: false,
            },
        }
    )

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                dietaryNeeds: { ...prev.dietaryNeeds, [name]: checked },
            }))
        } else if (name === "budget") {
            setFormData((prev) => ({ ...prev, [name]: parseInt(value) }))
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("Form Submitted:", formData)
        // navigate(`option/${destinationPage}`, "route", {state: formData})
        console.log("destination page: " + destinationPage)
        const absoluteDestination = !destinationPage.startsWith("/") ? `/option/${destinationPage}` : `${destinationPage}`;
        navigate(absoluteDestination, { state: formData });
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen md:h-screen md:flex-row"> {/* flex */}
            {/* Left side description */}
            {/* <div className="w-1/3 h-full flex flex-col items-center justify-center p-8 bg-green-800"> 
                <h2 className="w-full text-left font-bold text-3xl text-white mb-8">Let's Get Started</h2>
                <p className="font-thin text-white">Some description Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consectetur accusantium sequi ducimus eum quo quae illo doloribus voluptatem! Iste reiciendis vero voluptatibus explicabo quaerat similique maxime provident fuga voluptas!</p>
            </div> */}

            <div className="w-full md:w-1/3 min-h-[300px] md:min-h-screen bg-indigo-900 relative overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center opacity-80"
                    src='https://images.unsplash.com/photo-1531880567437-5bfef553f822?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="Decorative food image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                <div className="absolute top-20 left-8 right-8 text-white">
                    <h2 className="w-full text-left font-bold text-4xl mb-8">{setupPageTextConstants['title']}</h2>
                    <p className="font-thin">{setupPageTextConstants['description']}</p>
                </div>
            </div>

            {/* Right side questions */}
            <div className="w-2/3 flex justify-center p-8"> {/* 66% space flex items center justify center some padding */}
                <div className="">
                    <div className="border rounded-2xl p-10">
                        <form onSubmit={handleSubmit} className="space-y-4"> {/* Form */}
                            <h4 className="block font-semibold text-lg mb-4">User Information</h4>
                            <label>First Name</label>
                            <input type="text" name="name" placeholder="Jane" onChange={handleChange} className="w-full p-2 border rounded-md bg-cream" />
                            <label>City</label>
                            <input type="text" name="city" placeholder="Miami" onChange={handleChange} className="w-full p-2 border rounded-md bg-cream" />
                            <label>Budget (USD)</label>
                            <input type="number" name="budget" placeholder="40" onChange={handleChange} className="w-full p-2 border rounded-md bg-cream" />

                            <div className="flex flex-col space-y-2">
                                <h4 className="font-semibold text-lg">Dietary Needs</h4>
                                <label>
                                    <input type="checkbox" name="nutFree" onChange={handleChange} /> Nut-Free
                                </label>
                                <label>
                                    <input type="checkbox" name="glutenFree" onChange={handleChange} /> Gluten-Free
                                </label>
                                <label>
                                    <input type="checkbox" name="dairyFree" onChange={handleChange} /> Dairy-Free
                                </label>
                                <label>
                                    <input type="checkbox" name="vegan" onChange={handleChange} /> Vegan
                                </label>
                                <label>
                                    <input type="checkbox" name="vegetarian" onChange={handleChange} /> Vegetarian
                                </label>
                            </div>

                            <button className="bg-medium-green px-4 py-2 rounded-xl font-bold mt-4 cursor-pointer" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetupPage