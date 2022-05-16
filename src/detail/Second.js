import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import TextSlideUp from '../effects/TextSlideUp'
import Text from '../effects/Text'

function Second() {
    const [done, setDone] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const hover = {
        width: '100%',
        height: '100vh',
        left:0
    }

    function handleClick(){
        if(isHover===true){
            setIsHover(false)
        }else{
            setIsHover(true)
        }
    }

    useEffect(()=>{
        console.log(done)
    },[done])

  return (
    <div className='second'>
        <motion.div className="second-img" style={{backgroundImage: "url(images/princess.jpg)"}}
            animate={isHover?hover:null}
            transition={{ 
              type: "spring", 
              stiffness: 50
            }}
        >
            <motion.div className="overlay-slide"
               initial={{x:"0"}}
               whileInView={{x:"-120vw"}}
               viewport={{once:true, margin:"-50%"}}
               transition={{ease: "easeInOut", duration:1}}
               onAnimationComplete={()=>setDone(true)}
            ></motion.div>
            <div className="go" onClick={()=>handleClick()}>
                <img src={`images/${isHover?'x':'arow'}.png`} alt=""/>
            </div>

            <motion.div className="second-title"
                animate={isHover?{opacity:0}:{opacity:1}}
                transition={{
                    duration:1
                }}
            >
                <h1 data-scroll data-scroll-speed="2">
                    <Text text="Royal:Family" start={done}/>
                </h1>
            </motion.div>

        </motion.div>
        <div className="second-text" data-scroll data-scroll-speed="-2">
            <motion.h3
                animate={isHover?{opacity:0}:{opacity:1}}
                transition={{
                    duration:1
                }}
                className='slide-up'
            >
                <TextSlideUp>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero, felis, diam placerat mattis eget vel curabitur sed.,  Massa porta purus eu, tortor turpis neque vitae adipiscing orci. Faucibus quam enim sociis lectus dictum enim
                </TextSlideUp>
            </motion.h3>
        </div>
    </div>
  )
}

export default Second