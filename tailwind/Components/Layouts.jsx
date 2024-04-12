import React from 'react'

const Layouts = () => {
  return (
    <>
      <div className=" container mx-auto bg-red-100 columns-lg px-2">
        {' '}
        {/** Contaainer A component for fixing an element's width to the current breakpoint. */}
        {/* The cols will show your data in cols given the breakpint and then would show data in rows. Mostly used for cards */}
        <img
          src="https://pbs.twimg.com/media/GISeGbKXgAApqb5.jpg:large"
          alt=""
          className=" float-right" // moves image to right
        />
        <img
          src="https://pbs.twimg.com/media/GISeGbKXgAApqb5.jpg:large"
          alt=""
          className=" float-left" // moves image to left
        />
        <p className=" clear-both">
          {' '}
          {/**shifts data to image with  more heigth */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          doloribus omnis sint. Deserunt consequatur laudantium, fuga eos cumque
          nemo esse sit? Ipsam quaerat eveniet nam vitae similique pariatur
          officia quis?
        </p>
        <p className=" clear-right">
          {' '}
          {/**shifts data to left */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          soluta atque! Nemo blanditiis aliquid consectetur. Ratione nemo dolore
          fuga modi dicta, consectetur totam ut maiores iusto ducimus enim
          veritatis minus.
        </p>
        <p className=" clear-left">
          {/**shifts data to right */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quos
          dolorum rem asperiores ad in illo officia non unde corrupti enim quis,
          fugiat cum debitis voluptate modi magnam magni qui.
        </p>
      </div>
      {/* 
      <!-- Overflow hidden: Content that overflows its container will be hidden --> */}
      <div className="border border-gray-400 p-4 w-40 h-40 overflow-hidden">
        <p className="text-gray-600">This content is visible.</p>
        <p className="text-gray-600">
          This content is hidden if it overflows the container.
        </p>
        {/* <!-- This paragraph will be clipped and not visible --> */}
        <p className="text-gray-600">
          This content is hidden if it overflows the container. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* <!-- Overflow visible: Content that overflows its container will be visible --> */}
      <div className="border border-gray-400 p-4 w-40 h-40 overflow-visible mt-4">
        <p className="text-gray-600">This content is visible.</p>
        {/* <!-- This paragraph will overflow the container but remain visible --> */}
        <p className="text-gray-600 w-full">
          This content will overflow the container but remain visible. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div
        className="overflow-scroll border border-gray-400 p-4"
        style={{ height: '200px' }}
      >
        <p className="text-gray-600">
          This content is scrollable if it overflows its container.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget est
          in libero consequat commodo.
        </p>
      </div>
    </>
  )
}

export default Layouts
