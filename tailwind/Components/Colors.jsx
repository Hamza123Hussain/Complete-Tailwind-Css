import React from 'react'

const Colors = () => {
  return (
    <>
      <div className=" bg-hamza justify-center items-center flex">
        {
          'The hamza is a custom class made in tailwind config. It is made inside the extend of the themes object '
        }
        <h1>custom color</h1>
      </div>

      <div className=" bg-green-50 justify-center items-center flex">
        {' '}
        {/**The bg-color gives us the color we want and by giving it a value it gives us a particular shade */}
        <h1> Darker GREEN</h1>
      </div>
      <div className=" bg-green-100 justify-center items-center flex">
        <h1> Darker GREEN</h1>
      </div>
      <div className=" bg-green-200 justify-center items-center flex ">
        <h1> Darker GREEN</h1>
      </div>
      <div className=" bg-green-300 justify-center items-center flex">
        <h1>Darker GREEN</h1>
      </div>
      <div className=" bg-green-400 justify-center items-center flex">
        <h1> Darker GREEN</h1>
      </div>
      <div className=" bg-green-500 justify-center items-center flex">
        <h1> Darker GREEN</h1>
      </div>
      <div className=" bg-green-600 justify-center items-center flex">
        <h1> Darker GREEN</h1>
      </div>
      <div className=" bg-green-700 justify-center items-center flex">
        <h1> Darker GREEN</h1>
      </div>
      <div className=" bg-custom-100 justify-center items-center flex">
        {' '}
        {/**The range can be set in the tailwind config too */}
        <h1> This is custom colour class with a custom color at a range</h1>
      </div>
      <div className=" bg-custom-200 justify-center items-center flex">
        <h1> This is custom colour class with a custom color at a range</h1>
      </div>
    </>
  )
}

export default Colors
