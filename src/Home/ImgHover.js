import React, {useRef, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


function ImgHover({setIsHover, isHover, index, dataImg, top, setTop, pulse, setPulse}) {
    const ref = useRef(null)
    const [defaultPos, setDefaultPos] = useState({})
    const hoverPos = {width:'100vw', height:'100vh', left:0, top:0, zIndex:19}

    useEffect(()=>{
        setDefaultPos({
            transform:'translate(0%,0%)',
            width:ref.current.getBoundingClientRect().width + 'px',
            height:ref.current.getBoundingClientRect().height + 'px',
            left:ref.current.getBoundingClientRect().x + 'px',
            top:ref.current.getBoundingClientRect().y + 'px',
        })
    },[])
    
    function hover(x){
      setIsHover(x)
      setTop(x)
    }

    function getPulse(){
      if(pulse.pulse1===false){
        setPulse({...pulse, pulse1:true})
      }

      if(pulse.pulse1&&!pulse.pulse2){
        setPulse({...pulse, pulse2:true})
      }
    }



  return (  
    <div className='img-hover'  ref={ref}>

        <Link to="/detail">
        <div className="hover" onMouseEnter={()=>hover(index)} onMouseLeave={()=>setIsHover(0)}></div>
        </Link>

        <motion.div className="img"
          style={pulse.pulse1?{transform:'translate(0,0)'}:dataImg.style} 
          initial={dataImg.initial}
          animate={!pulse.pulse1?dataImg.style:isHover===index?hoverPos:{...defaultPos, zIndex:top===index?19:5}}
          transition={{ 
            duration:1,
            type: "spring", 
            stiffness: 50
          }}
          onAnimationComplete={()=>getPulse()}
        ></motion.div>
    </div>
  )
}

export default ImgHover