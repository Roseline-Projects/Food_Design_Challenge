import Card from "./Card"
import { optionPageTextConstants } from "../constants/TextConstants"
import { testCards } from "../constants/TextConstants"
import { useParams } from "react-router"

const OptionPage = () => { //cards is a list of cards, pageType contains the page type information
    let pageType = useParams().optionType
    let cards = testCards //for debugging and styling for now
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Main content area - 2/3 width */}
            {console.log(pageType)}
            <div className="w-full md:w-2/3 px-4 md:px-12 lg:px-20 py-10 flex flex-col justify-center">
                {/* Information Staging Area */}
                <div className="text-center mb-8 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-800">
                        {pageType != null ? optionPageTextConstants[pageType]["title"] : null}
                    </h1>
                    <h3 className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {pageType != null ? optionPageTextConstants[pageType]["text"]: null}
                    </h3>
                </div>
                
                {/* Page Cards */}
                <div className="w-full">
                    <ul className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center">
                        {cards.map((card, index) => (
                            <li 
                                className="flex-1 min-w-[280px] max-w-[400px] max-h-[500px] mx-auto md:mx-0" 
                                key={index}
                            >
                                <Card {...card} />
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Additional options/navigation */}
                <div className="mt-12 text-center">
                    <button className="px-6 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-lg transition-colors shadow-md">
                        See more options
                    </button>
                </div>
            </div>
            
            {/* Decorative banner - 1/3 width */}
            <div className="w-full md:w-1/3 min-h-[300px] md:min-h-screen bg-indigo-900 relative overflow-hidden">
                <img 
                    className="w-full h-full object-cover object-center opacity-80" 
                    src={pageType != null ? optionPageTextConstants[pageType]["image"] : null}
                    alt="Decorative food image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ready to save?</h3>
                    <p className="text-indigo-100">
                        Find the best deals and options for your budget
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OptionPage