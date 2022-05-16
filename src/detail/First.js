import React from 'react'
import Navbar from '../Navbar'
import TextGone from '../effects/TextGone'
import {motion} from 'framer-motion'

function First() {

  return (
    <div className='home'
      style={{backgroundImage: "url(images/furniture1.jpg)"}}
    >
      <Navbar
        start={true}
        color={{nav:'#232323'}}
      />
      <div className="text">
          <h1>
            <TextGone text="Modern Interior:For Your Home"  />
          </h1>
          <motion.div className="btn-home"
            initial={{opacity:1}}
            animate={{opacity:0}}
          >
              <h3>See More</h3>
              <img src="images/arow.png" alt="" />
          </motion.div>
      </div>
    </div>
  )
}

export default First