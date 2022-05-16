import React from 'react'
import {motion} from 'framer-motion'

function Show() {
  return (
    <div className='show'>
        <img src="images/furniture1.jpg" alt="" className='left'/>
        
        <div className='center' data-scroll data-scroll-speed="2" style={{transform:'translateX(-50%)'}}>
          <img src="images/show1.jpg" alt=""  />
        </div>
        <img src="images/princess.jpg" alt="" className='right' />
    </div>
  )
}

export default Show