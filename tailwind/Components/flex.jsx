import React from 'react'

const Flex = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <h1 style={{ width: '400px' }}>1</h1>
        <h1 style={{ width: '400px' }}>2</h1>
        <h1 className=" basis-1/5 ">3</h1>
        <h1 className=" basis-1/5">4</h1>
        <h1 className=" basis-1/5">5</h1>
      </div>
    </div>
  )
}

export default Flex
