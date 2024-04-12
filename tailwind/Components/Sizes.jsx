import React from 'react'

const Sizes = () => {
  return (
    <>
      <div className=" flex space-x-1">
        {' '}
        {/* margin-left: 0.25rem; 4px for space-x-1 for margin top for space-y- */}
        <h1 className=" bg-hamza w-1/6">I have 1/6 width</h1>{' '}
        {/**IN flex we can do fractional width and height.. the max columns are 6 */}
        <h1 className="  bg-teal-200 w-2/6"> I HAVE 2/6 WIDTH </h1>
        <h1 className=" bg-teal-100 w-3/6"> I HAVE 3/6 WIDTH</h1>
      </div>
      <h1 className=" p-6"> Padding is done on me</h1>{' '}
      {/*padding 1 : 0.25rem; 4px. same for margin too  */}
      <h1 className=" size-10 bg-purple-800">
        {/**size 1 is 4px heigth and 4 px width */} I have size class which
        gives me equal height and width
      </h1>
      <h1 className=" bg-purple-500 size-fit">I have fit content</h1>
    </>
  )
}

export default Sizes
