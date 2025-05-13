import { useState } from 'react'

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left container - Site info */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
          Cheap Food and Groceries for Everyone
        </h1>
        <h2 className="text-xl md:text-2xl text-indigo-600 mb-6">
          Minimize food costs, maximize shopping trip value
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl">
          Information Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni doloremque enim voluptas deserunt nemo debitis, nam quaerat. Sequi nostrum facere sit maxime aliquid delectus, earum magnam distinctio natus amet.
        </p>
        <div className="mt-auto h-64 w-full flex items-center justify-center bg-gray-200 rounded-lg">
          {/* 3D Model container */}
          <p className="text-gray-500">3D Model Placeholder</p>
        </div>
      </div>

      {/* Right container - Options menu */}
      <div className="w-full md:w-1/2 bg-indigo-900 p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Choose your budget-friendly option
          </h3>
          <ul className="space-y-4">
            <li>
              <a className="block w-full py-4 px-6 bg-white hover:bg-indigo-50 text-indigo-800 font-medium rounded-lg shadow-md transition-colors text-center cursor-pointer">
                Source Ingredients
              </a>
            </li>
            <li>
              <a className="block w-full py-4 px-6 bg-white hover:bg-indigo-50 text-indigo-800 font-medium rounded-lg shadow-md transition-colors text-center cursor-pointer">
                Search Recipes
              </a>
            </li>
            <li>
              <a className="block w-full py-4 px-6 bg-white hover:bg-indigo-50 text-indigo-800 font-medium rounded-lg shadow-md transition-colors text-center cursor-pointer">
                Order Ready-Made Food
              </a>
            </li>
          </ul>
          <p className="text-indigo-200 mt-8 text-center text-sm">
            Save money and time with our smart food budgeting tools
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
