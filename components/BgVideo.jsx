import React from 'react'

const BgVideo = () => {
  return (
    <div className="relative h-full">
          <video autoPlay muted loop className="w-full  h-full object-cover" style={{ filter: 'brightness(50%)' }}>
            <source src="assets/images/ganga.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
        </div>
  )
}

export default BgVideo