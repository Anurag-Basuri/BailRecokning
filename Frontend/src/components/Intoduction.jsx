// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Intoduction() {
  return (
    <div className="bg-blue-300 h-screen pt-24 p-10">
      <div className="grid grid-cols-5 gap-4 h-full">
        {/* Left Section - 60% */}
        <div className="col-span-3 bg-white p-4 flex flex-col justify-around">
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
        </div>

        {/* Right Section - 40% */}
        <div className="col-span-2 bg-white"></div>

        {/* Bottom Left Section - 60% */}
        <div className="col-span-3 bg-white"></div>

        {/* Bottom Right Section - 40% */}
        <div className="col-span-2 bg-white p-4 flex flex-col justify-around">
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
          <div className="h-10 bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}
