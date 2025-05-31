import { useState, useRef, useEffect } from "react";
import snapStoreData from "../constants/stores";
import { FaChevronDown } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"

/**
 * Calculates the distance between two geographic coordinates using the Haversine formula.
 * This accounts for the Earth's curvature when calculating distances.
 * 
 * @param {number} lat1 - Latitude of the first point in decimal degrees
 * @param {number} lon1 - Longitude of the first point in decimal degrees
 * @param {number} lat2 - Latitude of the second point in decimal degrees
 * @param {number} lon2 - Longitude of the second point in decimal degrees
 * @returns {number} - Distance between the points in kilometers
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; // Distance in km
  return distance;
};

/**
 * Card component to display information about a SNAP-eligible store.
 * Renders store details including name, address, city, zip code, type,
 * and distance (if available from location-based search).
 * 
 * @param {Object} props - Component props
 * @param {string} props.storeName - Name of the store
 * @param {string} props.storeStreetAddress - Street address of the store
 * @param {string} props.city - City where the store is located
 * @param {string} props.zipCode - ZIP code of the store
 * @param {string} props.storeType - Type of store (e.g., Supermarket, Other)
 * @param {number} [props.distance] - Distance to the store in miles (optional)
 * @returns {JSX.Element} - Rendered card component
 */

const Card = ({
  storeName,
  storeStreetAddress,
  city,
  zipCode,
  storeType,
  distance
}) => {
  const details = {
    Address: storeStreetAddress,
    City: city,
    Zip: zipCode,
    Type: storeType,
    ...(distance !== undefined && { Distance: `${distance.toFixed(1)} miles` })
  };
  //#fdba74
  
  function titleCase(str) {
    const stringWithoutNumbers = str.replace(/\d/g, '');
    return stringWithoutNumbers.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
  return (
    <div className="relative -z-10 bg-orange-50 bg-[url('assets/shopping2.svg')] bg-contain bg-no-repeat bg-right rounded-xl border-1 border-orange-200 shadow-md">
        <div className="relative p-6 lg:p-8">
          <h3 className="flex items-center gap-2 text-2xl font-semibold mb-3 w-fit">
            {titleCase(storeName)}
            <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">Eligible</span>
          </h3>
          {console.log(details)}
          <p className="mb-1 text-lg">{storeStreetAddress}, {city} {zipCode}</p>
          <p className="font-light mb-2 text-xl">{storeType}</p>
          <p className="text-green-900">{details["Distance"]}</p>
        </div>
        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fdba74" fill-opacity="1" d="M0,320L80,309.3C160,299,320,277,480,272C640,267,800,277,960,272C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        {/* <button className="absolute bottom-3 right-3 px-3 py-2 ring ring-orange-400 rounded-xl bg-white font-semibold cursor-pointer">Transport</button> */}
    </div>
  );
};

/**
 * Custom dropdown component with click-outside detection.
 * Allows users to select from a list of options and notifies parent component
 * when a selection is made.
 * 
 * @param {Object} props - Component props
 * @param {string[]} props.options - Array of options to display in the dropdown
 * @param {Function} props.onSelect - Callback function when an option is selected
 * @param {string|null} props.selectedValue - Currently selected value
 * @param {Function} props.setSelectedValue - Function to update the selected value
 * @returns {JSX.Element} - Rendered dropdown component
 */
function Dropdown({ options, onSelect, selectedValue, setSelectedValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  /**
   * Toggles the dropdown open/closed state
   */
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Handles click on a dropdown option
   * 
   * @param {string} option - The selected option
   */
  const handleOptionClick = (option) => {
    setSelectedValue(option);
    onSelect(option);
    setIsOpen(false);
  };

  /**
   * Closes the dropdown when clicking outside of it
   * 
   * @param {Event} event - The click event
   */
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Add and remove event listener for click-outside detection
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative px-4 py-2 my-2"
      ref={dropdownRef}
    >
      <button 
        className={`${isOpen ? 'ring' : ""} flex items-center w-fit px-6 py-3 bg-green-50 rounded-md shadow-md cursor-pointer`} 
        onClick={handleToggle}
      >
        {selectedValue || "Select an option"} 
        <span className="flex items-center justify-center ml-4"> {isOpen ? <FaChevronUp /> : <FaChevronDown/> } </span>
      </button>
      {isOpen && (
        <ul className={`${isOpen ? "opacity-100 h-fit-content max-h-[600px]" : "opacity-0 h-0"} absolute z-10 no-scrollbar min-w-full flex flex-col items-center p-2 mt-1 bg-white rounded-xl shadow-md max-h-screen overflow-y-scroll`}>
          {options.map((option) => (
            <li
              className="p-2 w-full rounded-md cursor-pointer hover:bg-green-50"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Main component for the SNAP store finder page.
 * Allows users to search for SNAP-eligible stores by city or by their current location.
 * Displays results as cards with store information.
 * 
 * @returns {JSX.Element} - Rendered StoresPage component
 */
const StoresPage = () => {
  // List of cities in Miami-Dade County for the dropdown
  const cityList = [
    "Hialeah",
    "Miami",
    "Coral Gables",
    "Cutler Bay",
    "Kendall",
    "Homestead",
    "Miami Beach",
    "Doral",
    "Miami Gardens",
    "North Miami",
    "South Miami",
    "Aventura",
    "Miami Lakes",
    "North Miami Beach",
    "El Portal"
  ];
  
  // State variables
  const [selectedValue, setSelectedValue] = useState(null);
  const [filteredStores, setFilteredStores] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [searchType, setSearchType] = useState(null); // 'city' or 'location'

  /**
   * Handles city selection from the dropdown.
   * Filters stores based on the selected city and updates the UI.
   * 
   * @param {string} city - The selected city
   */
  const onCitySelect = (city) => {
    setSearchType('city');
    const filtered = snapStoreData.filter((store) => store.city === city);
    setFilteredStores(filtered);
    setShowResults(true);
  };

  /**
   * Finds stores near the user's current location.
   * Uses browser geolocation API to get coordinates, then calculates
   * distance to each store and sorts by proximity.
   */
  const findNearbyStores = () => {
    setIsLoading(true);
    setLocationError(null);
    setSearchType('location');
    
    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setIsLoading(false);
      return;
    }
    
    // Request user's current position
    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // Calculate distance for each store
        const storesWithDistance = snapStoreData.map(store => {
          const storeLat = parseFloat(store.latitude);
          const storeLon = parseFloat(store.longitude);
          const distance = calculateDistance(latitude, longitude, storeLat, storeLon);
          // Convert km to miles
          return { ...store, distance: distance * 0.621371 };
        });
        
        // Sort by distance (closest first)
        const sortedStores = storesWithDistance.sort((a, b) => a.distance - b.distance);
        
        setFilteredStores(sortedStores);
        setShowResults(true);
        setIsLoading(false);
      },
      // Error callback
      (error) => {
        setLocationError(`Error getting location: ${error.message}`);
        setIsLoading(false);
      },
      // Options
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  return (
    <>
      <div className="max-w-11/12 mx-auto">
        {/* Main content area (2/3 width on medium+ screens) */}
        <div className="w-full">
          <div className="mt-20">
            <h1 className="mb-4 pt-2 text-5xl font-bold text-dark-green">
              Search For SNAP-Eligible Stores in Miami-Dade
            </h1>
            
            {/* Search options section */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* City search option */}
              <div className="flex items-center">
                <span className="text-lg font-semibold">Find by city:
                </span>
                <div className="w-fit">
                    <Dropdown
                      options={cityList}
                      onSelect={onCitySelect}
                      selectedValue={selectedValue}
                      setSelectedValue={setSelectedValue}
                    />
                </div>
              </div>
              
              {/* Location search option */}
              <div className="">
                <span className="text-lg font-semibold mb-2 mr-6">Or</span>
                <button 
                  onClick={findNearbyStores}
                  disabled={isLoading}
                  className="bg-green-800 hover:bg-green-600 pointer-cursor text-white font-bold py-3 px-4 rounded-full transition-colors"
                >
                  {isLoading ? "Finding stores..." : "Find Stores Near Me"}
                </button>
                {locationError && (
                  <p className="text-red-500 mt-2">{locationError}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Results section - only shown after search */}
          {showResults && (
            <>
              <h2 className="text-2xl font-semibold mt-6">
                {filteredStores.length > 0
                  ? searchType === 'city' 
                    ? `Found ${filteredStores.length} stores in ${selectedValue}`
                    : "Nearest SNAP stores to your location"
                  : searchType === 'city'
                    ? `No stores found in ${selectedValue}`
                    : "No nearby stores found"}
              </h2>
              <ul className="my-8 grid md:grid-cols-2 items-center justify-center gap-6 md:gap-8">
                {/* Display up to 6 stores */}
                {filteredStores.slice(0, 6).map((store) => (
                  <li
                    key={store.recordId}
                    className="min-w-[280px] w-full mx-auto md:mx-0"
                  >
                    <Card {...store} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StoresPage;
