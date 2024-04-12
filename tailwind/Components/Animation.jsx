import React from 'react'

const Animation = () => {
  return (
    <div className=" flex flex-col justify-center items-center  space-y-1 m-5">
      <button className=" bg-green-300 p-4 rounded-lg transition duration-1000 hover:translate-x-3">
        Animation
        {/* Translate is to move in x or y direction. can not be done without transisition class. duration is time taken by the animation
        delay is the time taken before the animation kicks in.
        
        animate spin is used for loader, plus is used for notifications, ping is used for skeltons, bounce is used for alerts*/}
      </button>{' '}
      <button className=" bg-green-300 p-4 rounded-lg transition ease-out delay-1000 hover:translate-y-3">
        Animation
      </button>{' '}
      <button className=" bg-green-300 p-4 rounded-lg animate-pulse">
        Animation
      </button>{' '}
      <button className=" bg-green-300 p-4 rounded-lg animate-ping">
        Animation
      </button>{' '}
      <button className=" bg-green-300 p-4 rounded-lg animate-spin">
        Animation
      </button>{' '}
      <button className=" bg-green-300 p-4 rounded-lg animate-bounce">
        Animation
      </button>{' '}
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeqI423K-tQA0A32WTQijke4hpENB86L8UKfWGkKtjCVUnJ6B8"
        alt="profile-picture"
        className=" scale-50 hover:scale-100 rotate-180 hover:rotate-0  skew-x-6 skew-y-3"
        // scale means to increase or decrease the size of the image
        // rotate means to increase or decrease the rotation
        // origin refers to place from where the rotation is to being
        // skew means how much to tilt an image
      />
    </div>
  )
}

export default Animation
