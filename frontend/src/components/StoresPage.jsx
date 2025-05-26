import { useState, useRef, useEffect } from "react";
import snapStoreData from "../constants/stores";
import NavBar from "./NavBar";

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
  
  return (
    <div className="rounded-xl h-full bg-cream border">
      <div className="h-1/2 overflow-hidden">
        <img
          className="object-cover size-full rounded-t-xl max-h-[200px]"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={storeName}
        />
      </div>
      <div className="p-4 flex flex-col items-stretch">
        <h3 className="text-lg font-semibold text-green-800 mt-2 mb-4">
          {storeName}
        </h3>
        <ul className="space-y-2">
          {Object.entries(details).map((item, index) => (
            <li className="" key={index}>
              <b>{item[0]}</b>: {item[1]}
            </li>
          ))}
        </ul>
      </div>
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
      className="relative bg-white rounded-2xl border px-4 py-2 my-2"
      ref={dropdownRef}
    >
      <button onClick={handleToggle}>
        {selectedValue || "Select an option"}
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-cream px-4 py-2 rounded-2xl shadow-md w-full left-0">
          {options.map((option) => (
            <li
              className="text-lg cursor-pointer py-1 hover:text-orange"
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
      <div className="flex flex-col md:flex-row max-h-screen">
        {/* Main content area (2/3 width on medium+ screens) */}
        <div className="w-full md:w-2/3">
          <div className="mt-20 flex flex-col items-center justify-center">
            <h1 className="mb-4 text-4xl font-bold text-orange text-center">
              Search For SNAP Eligible Stores in Miami-Dade
            </h1>
            
            {/* Search options section */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* City search option */}
              <div>
                <label className="text-lg font-semibold">Find by city:
                  <Dropdown
                    options={cityList}
                    onSelect={onCitySelect}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  />
                </label>
              </div>
              
              {/* Location search option */}
              <div className="text-center">
                <p className="text-lg font-semibold mb-2">Or</p>
                <button 
                  onClick={findNearbyStores}
                  disabled={isLoading}
                  className="bg-orange hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
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
              <h2 className="text-2xl font-semibold text-center mt-6">
                {filteredStores.length > 0
                  ? searchType === 'city' 
                    ? `Found ${filteredStores.length} stores in ${selectedValue}`
                    : "Nearest SNAP stores to your location"
                  : searchType === 'city'
                    ? `No stores found in ${selectedValue}`
                    : "No nearby stores found"}
              </h2>
              <ul className="my-8 flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 justify-center">
                {/* Display up to 6 stores */}
                {filteredStores.slice(0, 6).map((store) => (
                  <li
                    key={store.recordId}
                    className="min-w-[280px] max-w-[400px] max-h-[500px] mx-auto md:mx-0"
                  >
                    <Card {...store} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        {/* Decorative sidebar (1/3 width on medium+ screens) */}
        <div className="w-full md:w-1/3 min-h-[300px] md:min-h-screen relative overflow-hidden">
          <img
            className="w-full h-full object-cover object-center opacity-80"
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  );
};

export default StoresPage;
