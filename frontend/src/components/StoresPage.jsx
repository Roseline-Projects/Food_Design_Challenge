import { useState, useRef, useEffect } from "react"
import snapStoreData from "../constants/stores"
import NavBar from "./NavBar"

const Card = ({storeName, address, city, zipCode, type}) => {
    const details = {
        Address: address,
        City: city,
        Zip: zipCode,
        Type: type
    }
    return (
    <div className="rounded-xl h-full bg-cream border">
            <div className="h-1/2 overflow-hidden">
                <img className="object-cover size-full rounded-t-xl max-h-[200px]" src='https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt={storeName}/>
            </div>
            <div className="p-4 flex flex-col items-stretch"> {/* Padding */}
                <h3 className="text-lg font-semibold text-green-800 mt-2 mb-4">{storeName}</h3> {/* Semibold title, slightly large text bottom margin */}
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

function Dropdown({ options, onSelect, selectedValue, setSelectedValue }) {
        const [isOpen, setIsOpen] = useState(false);
        //const [selectedValue, setSelectedValue] = useState(null);
        const dropdownRef = useRef(null);

        const handleToggle = () => {
            setIsOpen(!isOpen);
        };

        const handleOptionClick = (option) => {
            setSelectedValue(option);
            onSelect(option);
            console.log(option)
            setIsOpen(false);
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);

        return (
            <div className="relative bg-white rounded-2xl border px-4 py-2 my-2" ref={dropdownRef}>
                <button onClick={handleToggle}>
                    {selectedValue || 'Select an option'}
                </button>
                {isOpen && (
                    <ul className="absolute bg-cream px-4 rounded-2xl">
                        {options.map((option) => (
                            <li className="text-lg cursor-pointer" key={option} onClick={() => handleOptionClick(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

const StoresPage = () => {
    const cityList = [
        "Hialeah", "Miami", "Coral Gables", "Cutler Bay", "Kendall", "Homestead", "Miami Beach", "Doral", "Miami Gardens", "North Miami", "South Miami", "Aventura", "Miami Lakes", "North Miami Beach", "El Portal"
    ]
    const [city, setCity] = useState('')
    const [stores, setStores] = useState({})
    const [selectedValue, setSelectedValue] = useState(null);
    const testStores = [
        {
            storeName: "Graziano's",
            address: '3922 SW 92nd Ave',
            city: 'Miami',
            zipCode: '33165',
            type: 'Other'
        },
        {
            storeName: "Presidente Supermarket 3",
            address: '1895 SW 8th St',
            city: 'Miami',
            zipCode: '33135',
            type: 'Supermarket'
        },
        {
            storeName: "CVS Pharmacy",
            address: '6780 SW 40th St',
            city: 'Miami',
            zipCode: '33155',
            type: 'Other'
        }
    ]

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(city)
    // }

    const onCitySelect = () => {
        //on select, filter through the cities list for this city
        //render cards, 3 only
        console.log(selectedValue)
    }

    return (
        <>
        <NavBar/>
        <div className="flex flex-col md:flex-row max-h-screen">
            <div className="w-2/3">
                <div className="mt-20 flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-4xl font-bold text-orange text-center">Search For SNAP Eligible Stores in Miami-Dade</h1>
                    <label className="text-lg font-semibold">Enter your city:
                        <Dropdown options={cityList} onSelect={onCitySelect} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
                    </label>
                </div>
                <ul className="my-8 flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center">
                    {
                        testStores.map((store, index) => (
                            <li
                                className="min-w-[280px] max-w-[400px] max-h-[500px] mx-auto md:mx-0"
                            ><Card {...store}/></li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-full md:w-1/3 min-h-[300px] md:min-h-screen relative overflow-hidden">
                            <img 
                                className="w-full h-full object-cover object-center opacity-80"
                                src='https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                alt="Decorative food image"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">Ready to save?</h3>
                                <p className="text-indigo-100">
                                    Find the best deals and options for your budget
                                </p>
                            </div>
                        </div>
            
        </div>
        </>
    )
}

export default StoresPage