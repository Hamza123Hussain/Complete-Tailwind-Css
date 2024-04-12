import React from 'react'

const FiltersShadows = () => {
  return (
    <>
      <button
        className=" shadow-lg shadow-blue-500/50 " // / 50 means the opacity taken by the shadow
        style={{ width: '200px', height: '200px' }}
      >
        I will have shadow
      </button>

      <div className=" flex gap-3  justify-center items-center m-5">
        <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTeqI423K-tQA0A32WTQijke4hpENB86L8UKfWGkKtjCVUnJ6B8"
            alt="profile-picture"
            className=" contain-none hover:contrast-125 blur-lg hover:blur-0 brightness-50 hover:brightness-110 saturate-50 hover:saturate-150 grayscale hover:grayscale-0"
            //  the blur can be done none, sm, md , lg. brightness can be 0 -200 grayscale is yay or no and other fileter
          />
        </div>
      </div>
    </>
  )
}

export default FiltersShadows
