import React from 'react'
import FirstSide from '../components/VideoInventory/FirstSide'
import SecondSlide from '../components/VideoInventory/SecondSlide'

const VideoInventory = () => {
  return (
    <>
    <div>
        <FirstSide />
    </div>
    <div className=''>
        <SecondSlide/>
    </div>
    </>
  )
}

export default VideoInventory