import Card from "./Card"
import { optionPageTextConstants } from "../constants/TextConstants"

const OptionPage = ({pageType, cards}) => { //cards is a list of cards, pageType contains the page type information from the TextConstants
    return (
        <div className="flex justify-items-center items-center h-screen"> {/* display flex items center justify center */}
            <div className="p-8 w-2/3"> {/*Center mid page, some padding, 66%*/}
                {/* Information Staging Area */}
                {/* Cards rendered here */}
                <div className="text-center my-6 space-y-4"> {/* Text center margin vertical */}
                    <h1 className="text-4xl font-bold">{optionPageTextConstants[pageType]["title"]}</h1> {/* Bold font XL text*/}
                    <h3 className="text-l font-light">{optionPageTextConstants[pageType]["text"]}</h3> {/* Semibold font large text*/}
                </div>
                <div>
                    {/* Page Cards */}
                    <ul className="flex justify-items-center space-x-10"> {/* No decor display inline */}
                        {
                            cards.map((card, index) => (
                                <li key={index}><Card {...card} /></li>
                            ))
                        }
                    </ul> {/* on list items, margins horizontal*/}
                </div>
            </div>
            <div className="max-w-1/3 h-full"> {/* 33%, highlight color background */}
                {/* Decorative Banner */}
                <img className="object-cover size-full" src={optionPageTextConstants[pageType]["image"]}/> {/* Fill container, nothing much for now */}
            </div>
        </div>
    )
}

export default OptionPage