import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Text from '../effects/Text'
import CountUp from 'react-countup';

function Texture() {
  const [done, setDone] = useState(false)
  const [pulse2, setPulse2] = useState(false)

  return (
    <div className='texture'>
        <div className="text">
            <h4>
              <Text text="Unique:Wallcoverings" start={done}/>
            </h4>
        </div>
        <motion.div className="overlay"
          initial={{opacity:0.3}}
          whileInView={{opacity:1}}
          viewport={{margin:"-40%", once:true}}
          transition={{duration:1.5}}
          onAnimationComplete={()=>setDone(true)}
        ></motion.div>
        <img src="images/wall.png" alt=""/>
        <motion.div className="circle" data-scroll data-scroll-speed="2"
          initial={{opacity:0}}
          animate={done&&{opacity:1}}
        >
            <span>
            <h5>
              {done&& <CountUp end={127} duration={2} onEnd={()=>setPulse2(true)}/> }
            </h5>
                {/* <h5>127</h5> */}
                <motion.h2
                  initial={{opacity:0}}
                  animate={pulse2&&{opacity:1}}
                >x</motion.h2>
                <motion.h3
                  initial={{opacity:0}}
                  animate={pulse2&&{opacity:1}}
                >Sold</motion.h3>
            </span>
            
        </motion.div>
    </div>
  )
}

export default Texture