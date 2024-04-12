import React from 'react'

export const Grids = () => {
  return (
    <>
      <div className=" grid grid-cols-2 sm:grid-cols-3  gap-3">
        {' '}
        {/**grid cols allows us to set number of elements in a column */}
        <h1 className=" card w-fit col-span-2">I AM PART OF GRID</h1>{' '}
        {/**The col span allows us to extend data to a number of columns */}
        <h1 className=" card w-fit">I AM PART OF GRID</h1>
        <h1 className=" card w-fit">I AM PART OF GRID</h1>
        <h1 className=" card w-fit">I AM PART OF GRID</h1>
        <h1 className=" card w-fit">I AM PART OF GRID</h1>
        <h1 className=" card w-fit  col-start-1 col-end-3">
          {' '}
          {/**The col start and end allwows us to adjust the columns in which a element is placed */}
          I AM PART OF GRID
        </h1>
      </div>
      <hr className=" border-4 border-purple-600" />
      <div className="grid grid-rows-2  grid-flow-col gap-4">
        {/**Grid flow col or row places row or columns according to the given number of rows or cols */}
        {/**Placing Elements in a number of rows */}
        <div className="bg-gray-200 w-fit p-4  row-span-2 ">Row 1</div>{' '}
        {/**The Row span allows us to extend the elment's vertically or increase their row space */}
        <div className="bg-gray-200 w-fit p-4">Row 1</div>
        <div className="bg-gray-200 w-fit p-4">Row 2</div>
        <div className="bg-gray-200 w-fit p-4">Row 3</div>
        <div className="bg-gray-200 w-fit p-4">Row 4</div>
        <div className="bg-gray-200 w-fit p-4">Row 5</div>
        <div className="bg-gray-200 w-fit p-4">Row 6</div>
        <div className="bg-gray-200 w-fit p-4 row-start-1 row-end-2">Row 7</div>
      </div>
    </>
  )
}
