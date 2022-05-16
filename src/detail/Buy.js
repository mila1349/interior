import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import Text from '../effects/Text'

function Buy() {
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
  return (
    <div className='second buy'>
        <motion.div className="second-img" style={{backgroundImage: "url(images/king.jpg)"}}
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
                    <Text text="High Camfort:High Class" start={done}/>
                </h1>
            </motion.div>
        </motion.div>

        <motion.div className="item"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{duration:2}}
            data-scroll data-scroll-speed="-2"
        >
            <div className="desc">
                <span><h2>Nebu Chair</h2></span>
                <span>
                    <h3>2021</h3>
                    <h3>by Barney Dalby</h3>
                </span>
            </div>
            <img src="images/stuff2.jpg" alt="" 
            />
        </motion.div>
    </div>
  )
}

export default Buy