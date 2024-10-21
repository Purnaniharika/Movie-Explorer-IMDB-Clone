import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[80vh] flex items-center bg-cover bg-center relative' style={{backgroundImage: `url(https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg)` }} >

       <div className='absolute bottom-0 text-white text-xl w-full p-2 text-center bg-gray-900/60'>Avengers</div>
    </div>
  )
}

export default Banner