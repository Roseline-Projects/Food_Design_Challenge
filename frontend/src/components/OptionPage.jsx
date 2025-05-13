import Card from "./Card"
import { optionPageTextConstants } from "../constants/TextConstants"

const OptionPage = (pageType, cards) => { //cards is a list of cards, pageType contains the page type information from the TextConstants
    return (
        <div>
            <div>
                {/* Information Staging Area */}
                {/* Cards rendered here */}
                <div>
                    <h1>{optionPageTextConstants[pageType][title]}</h1>
                    <h3>{optionPageTextConstants[pageType][text]}</h3>
                </div>
                <div>
                    {/* Page Cards */}
                    <ul>
                        {
                            cards.map(card => (
                                <li>{card}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div>
                {/* Decorative Banner */}
                <img src={optionPageTextConstants[pageType][image]}/>
            </div>
        </div>
    )
}

export default OptionPage