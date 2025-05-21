import NavBar from "./NavBar"

const TransportCard = ({plan, time, location}) => {
    const details = {
        Time: time,
        To: location,
    }
    return (
         <div className="rounded-xl h-full w-[400px] bg-cream border">
            <div className="p-4 flex flex-col items-stretch"> {/* Padding */}
                <h3 className="text-lg font-semibold text-green-800 mt-2 mb-4">{plan}</h3> {/* Semibold title, slightly large text bottom margin */}
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

const TransportationPage = () => {
    const testCardDetails = [
        {
            plan: 'Carpool with Co-workers',
            time: 'Wednesday, 5:30 PM',
            location: 'Publix'
        },
        {
            plan: 'Family Pick-Up',
            time: 'Thursday, 4:00 PM',
            location: "Graziano's"
        },
        {
            plan: 'Bus 1',
            time: 'Monday, 12:00 PM',
            location: "Sedano's"
        },
    ]
    return (
        <>
        <NavBar/>
        <div className="bg-cream flex flex-col items-center min-h-screen md:h-screen md:flex-row">

            <div className="mt-12 w-full md:w-1/3 min-h-[300px] md:min-h-screen bg-indigo-900 relative overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center opacity-80"
                    src='https://images.unsplash.com/photo-1566625147574-b1cf1ff6cf7d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="Decorative food image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                <div className="absolute top-26 left-8 right-8 text-white">
                    <h2 className="w-full text-left font-bold text-4xl mb-8">Schedule and Track Transportation to Grocery Stores</h2>
                    <p className="font-thin">Plan trips, check your friend's and family's availability for outings, and receive notifications for your upcomming shopping trips.</p>
                </div>
            </div>

            <div className="mx-15">
                <h1 className="text-3xl text-orange font-bold my-4 mb-6 pb-2 border-b-3 border-green-800">Your Scheduled Trips</h1>
                <ul className="space-y-4">
                    {
                        testCardDetails.map((plan, index) => (
                            <li key={index}><TransportCard {...plan} /></li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
        </>
    )
}

export default TransportationPage