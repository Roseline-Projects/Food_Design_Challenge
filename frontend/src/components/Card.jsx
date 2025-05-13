
const Card = ({name, details, image}) => {
    //string name
    //object details
    //string image
    return (
        <div className="rounded-xl size-full">
            <div className="h-1/2 overflow-hidden">
                <img className="object-cover size-full" src={image} alt={name}/>
            </div>
            <div className="h-1/2 p-4 flex flex-col items-stretch"> {/* Padding */}
                <h3 className="text-lg font-semibold mt-2 mb-4">{name}</h3> {/* Semibold title, slightly large text bottom margin */}
                <ul className="space-y-2">
                    {
                        Object.entries(details).map((item, index) => (
                            <li className="" key={index}><b>{item[0]}</b>: {item[1]}</li>
                        ))
                    }
                </ul> {/* List items - semibold title w/ regular text, space y for ul, */}
            </div>
        </div>
    )
}

export default Card