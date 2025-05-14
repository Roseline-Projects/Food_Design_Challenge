// LandingPage.jsx
import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import '../index.css' // Import the CSS file

function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-cream font-nunito">
      {/* Left container - Site info */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4 font-nunito">
          Cheap Food and Groceries for Everyone
        </h1>
        <h2 className="text-xl md:text-2xl text-medium-green mb-6 font-nunito">
          Minimize food costs, maximize shopping trip value
        </h2>
        <p className="text-dark-green mb-8 max-w-xl font-nunito">
          Information Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          magni doloremque enim voluptas deserunt nemo debitis, nam quaerat. Sequi
          nostrum facere sit maxime aliquid delectus, earum magnam distinctio natus amet.
        </p>
        <div className="mt-auto h-96 w-full flex items-center justify-center bg-light-yellow rounded-lg">
          {/* 3D Model container */}
          <p className="text-dark-green font-nunito">3D Model Placeholder</p>
        </div>
      </div>

      {/* Right container - Options menu */}
      <div className="w-full md:w-1/2 bg-dark-green p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h3 className="text-2xl font-bold text-cream mb-8 text-center font-nunito">
            Choose your budget-friendly option
          </h3>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => navigate("/setup", {state : {destination: "ingredients"}})}
                className="block w-full py-4 px-6 bg-cream hover:bg-light-yellow text-dark-green font-medium rounded-lg shadow-md transition-colors text-center cursor-pointer font-nunito"
              >
                Source Ingredients
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/setup", {state : {destination: "recipes"}})}
                className="block w-full py-4 px-6 bg-orange hover:bg-orange/90 text-cream font-medium rounded-lg shadow-md transition-colors text-center cursor-pointer font-nunito"
              >
                Search Recipes
              </button>
            </li>
            <li>
              <button
                to="option/delivery"
                onClick={() => navigate("/setup", {state : {destination: "delivery"}})}
                className="block w-full py-4 px-6 bg-medium-green hover:bg-medium-green/90 text-cream font-medium rounded-lg shadow-md transition-colors text-center cursor-pointer font-nunito"
              >
                Order Ready-Made Food
              </button>
            </li>
          </ul>
          <p className="text-light-yellow mt-8 text-center text-sm font-nunito">
            Save money and time with our smart food budgeting tools
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
