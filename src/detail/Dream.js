import React from 'react'
import Text from '../effects/Text'

function Dream() {
  return (
    <div className='dream'>
        <div className="bg">
            <img src="images/smoke1.png" alt="" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"/>
            <img src="images/smoke2.png" alt="" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"/>
        </div>
        <div className="main">
            <div className="text">
                <h4>
                  <Text text="Live:Your Dream"/>
                </h4>
            </div>
            <img src="images/dream.png" alt="" className='dream'/>
            <div className='crown' data-scroll data-scroll-speed="-2">
              <img src="images/crown.png" alt=""  />
            </div>
            
            <img src="images/lamp.png" alt="" className='lamp' data-scroll data-scroll-speed="2"/>
        </div>
    </div>
  )
}

export default Dream