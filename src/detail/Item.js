import React, {useState} from 'react'
import {motion} from 'framer-motion'
import Text from '../effects/Text'
import TextSlideUp from '../effects/TextSlideUp' 

function Item() {
  const [pulse1, setPulse1] = useState(false)
  const text = 'Odio aliquet fames tellus ultricies leo cras varius. Faucibus quam enim lectus dictum enim'

  return (
    <div className='item-single'>
        <img src="images/frame.png" alt="" className='frame'/>

        <div className="top">
          <div className='wrap'>
            <h1>
              <Text text="Aliquet fames:tellus ultricies "/>
            </h1>
            <h3 className='slide-up' >
              <TextSlideUp >
                quam enim sociis lectus dictum enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </TextSlideUp>
            </h3>
          </div>
          
        </div>
        <div className="bottom">
        <div className='wrap'>
            <h1>
              <Text text="Faucibus:quam enim "/>
            </h1>
            <h3 className='slide-up'>
              <TextSlideUp >
                quam enim sociis lectus dictum enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </TextSlideUp>
            </h3>
          </div>
        </div>

        <div className="circle">
          <motion.div className="logo" style={{backgroundImage: "url(images/lamp3.png)"}}
            initial={{scale:0}}
            whileInView={{scale:[1, 1.2, 1]}}
            viewport={{margin:"-40%", once:true}}
            transition={{duration:0.8}}
            onViewportEnter={()=>setPulse1(true)}
          ></motion.div>
          <motion.div className="text"
            initial={{opacity:0}}
            animate={pulse1&&{opacity:1}}
            transition={{
              delay:1
            }}
          >
            <h3>
              {
                text.split("").map((char,i)=>(
                  //kelonggaan text = 5
                  <span style={{transform:`rotate(${i*3.9}deg)`}}>{char}</span>
                ))
              }
            </h3>
          </motion.div>
        </div>
    </div>
  )
}

export default Item