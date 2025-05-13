import Card from "./Card"
import { optionPageTextConstants } from "../constants/TextConstants"

const OptionPage = ({pageType, cards}) => { //cards is a list of cards, pageType contains the page type information from the TextConstants
    return (
        <div className="flex justify-items-center items-center min-h-screen"> {/* display flex items center justify center */}
            <div className="px-20 w-2/3"> {/*Center mid page, some padding, 66%*/}
                {/* Information Staging Area */}
                {/* Cards rendered here */}
                <div className="text-center my-6 space-y-4 max-h-1/3"> {/* Text center margin vertical */}
                    <h1 className="text-4xl font-bold">{optionPageTextConstants[pageType]["title"]}</h1> {/* Bold font XL text*/}
                    <h3 className="text-l font-light">{optionPageTextConstants[pageType]["text"]}</h3> {/* Semibold font large text*/}
                </div>
                <div>
                    {/* Page Cards */}
                    <ul className="h-2/3 flex flex-wrap grow justify-items-center gap-10"> {/* No decor display inline */}
                        {
                            cards.map((card, index) => (
                                <li className="flex-1" key={index}><Card {...card} /></li>
                            ))
                        }
                    </ul> {/* on list items, margins horizontal*/}
                </div>
            </div>
            <div className="w-1/3 min-h-screen overflow-hidden"> {/* 33%, highlight color background */}
                {/* Decorative Banner */}
                <img className="size-full object-cover" src={optionPageTextConstants[pageType]["image"]}/> {/* Fill container, nothing much for now */}
            </div>
        </div>
    )
}

export default OptionPage