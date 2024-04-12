import React from 'react'

const Border = () => {
  return (
    <div className=" flex  divide-x-2 divide-red-500 mb-5 gap-3 ">
      {' '}
      {/**divde x provides a horizontal border between the elements */}
      <h1 className=" hover:ring-2 hover:ring-offset-purple-100  ring-offset-8 ring-green-500">
        Hamza
      </h1>
      <h1 className=" ring-2 ring-purple-400">Hamza</h1>{' '}
      {/**Utilities for creating outline rings with box-shadows. */}
      <h1 className=" outline outline-4 outline-orange-300 outline-offset-4">
        {' '}
        {/** outline offset is  the gap between the element and the outline same for ring */}
        Hamza
      </h1>
      <h1>Hamza</h1>
      <h1>Hamza</h1>
    </div>
  )
}

export default Border
