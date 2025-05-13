
const Card = ({name, details, image}) => {
    //string name
    //object details
    //string image
    return (
        <div className="border">
            <div>
                <img src={image} alt={name}/>
            </div>
            <div>
                <h3>{name}</h3>
                <ul>
                    {
                        Object.entries(details).map((item, index) => {
                            <li key={index}>{item[0]} : {item[1]}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card