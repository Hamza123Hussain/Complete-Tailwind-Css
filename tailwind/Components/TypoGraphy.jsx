import React from 'react'

const TypoGraphy = () => {
  return (
    <>
      <h1 className=" text-sm underline decoration-slate-100">small </h1>{' '}
      {/*We can customize the sizes of the text in tailwind config file*/}
      <h1 className=" text-xl underline ">big</h1>
      <h1 className=" text-2xl"> bigger</h1>
      <h1 className="text-3xl leading-10">biggest</h1>
      <h1 className="text-9xl underline  decoration-wavy underline-offset-8 ">
        {
          //   'The underline offest means the distance bwteen the underline and the text '
        }
        {/**Decoration class controls all the underline, orderlines propeties on a text, the thickness, color and the style of line**/}
        giant
      </h1>
      <p className=" truncate capitalize">
        {' '}
        {/**The truncate class makes the overflow hidden */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae id
        magni repellat ex impedit, cumque nemo ad delectus odit maxime minus
        facere, autem, beatae sequi quo ipsa blanditiis quisquam.
      </p>
      <p className=" text-clip uppercase" style={{ width: '350px' }}>
        {' '}
        {/**The truncate class makes the overflow hidden */}
        All he could think about was how it would all end. There was still a bit
        of uncertainty in the equation, but the basics were there for anyone to
        see. No matter how much he tried to see the positive, it wasn't anywhere
        to be seen. The end was coming and it wasn't going to be pretty.
      </p>
      <p className=" text-wrap text-hamza">
        {' '}
        {/**Text wrap wraps the data if its overflowing, into another line */}
        All he could think about was how it would all end. There was still a bit
        of uncertainty in the equation, but the basics were there for anyone to
        see. No matter how much he tried to see the positive, it wasn't anywhere
        to be seen. The end was coming and it wasn't going to be pretty.
      </p>
      <p className=" whitespace-normal text-hamza">
        {' '}
        {/**whitespace normal  wraps the data if its overflowing, into another line */}
        All he could think about was how it would all end. There was still a bit
        of uncertainty in the equation, but the basics were there for anyone to
        see. No matter how much he tried to see the positive, it wasn't anywhere
        to be seen. The end was coming and it wasn't going to be pretty.
      </p>
      <p className=" break-words text-hamza">
        {' '}
        {/**break words wraps the data and breaks a word if it not coming completely in a line */}
        All he could think about was how it would all end. There was still a
        bittttttttttt bittttttttttt bittttttttttt bittttttttttt of uncertainty
        in the equation, but the basics were there for anyone to see. No matter
        how much he tried to see the positive, it wasn't anywhere to be seen.
        The end was coming and it wasn't going to be pretty.
      </p>
    </>
  )
}

export default TypoGraphy
