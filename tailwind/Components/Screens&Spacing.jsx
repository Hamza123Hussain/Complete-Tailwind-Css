import React from 'react'

const ScreensSpacing = () => {
  return (
    <>
      <h3 className=" card mb-5 text-blue-400 sm:text-red-300 lg:text-pink-950 md:text-gray-950">
        I will change colors as screen gets smaller
      </h3>
      <h3 className=" text-blue-400 sm:text-red-500 lg:text-pink-100 md:text-gray-500">
        I will change colors as screen gets smaller
      </h3>

      <h3 className=" text-blue-400 sm:text-red-200 lg:text-pink-400 md:text-gray-700">
        I will change colors as screen gets smaller
      </h3>

      <h3 className=" text-blue-400 sm:text-red-900 lg:text-pink-200 md:text-gray-400">
        I will change colors as screen gets smaller
      </h3>
    </>
  )
}

export default ScreensSpacing
